#!/usr/bin/env -S npx -y tsx --no-cache
import * as core from "@actions/core";
import { SummaryTableCell, SummaryTableRow } from "@actions/core/lib/summary";
import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";

import { context } from "@actions/github";
import { Octokit, RestEndpointMethodTypes } from "@octokit/action";

const CACHE_DIR = "./.url-cache"
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

const ESCAPE_CODES = {
  END: "\x1b[0m",
  FOREGROUND: {
    black: "\u001b[30m",
    red: "\u001b[31m",
    green: "\u001b[32m",
    yellow: "\u001b[33m",
    blue: "\u001b[34m",
    magenta: "\u001b[35m",
    cyan: "\u001b[36m",
    white: "\u001b[37m",
  } as const,
  BACKGROUND: {
    black: "\u001b[40m",
    red: "\u001b[41m",
    green: "\u001b[42m",
    yellow: "\u001b[43m",
    blue: "\u001b[44m",
    magenta: "\u001b[45m",
    cyan: "\u001b[46m",
    white: "\u001b[47m",
  } as const,
  ACTIONS: {
    cursorUp: (n: number) => `\u001b[${n}A`,
    cursorDown: (n: number) => `\u001b[${n}B`,
    cursorForward: (n: number) => `\u001b[${n}C`,
    cursorBackward: (n: number) => `\u001b[${n}D`,
    clearScreen: "\u001b[2J",
  } as const,
  EFFECTS: {
    bold: "\u001b[1m",
    underline: "\u001b[4m",
    blink: "\u001b[5m",
  } as const,
} as const

const ESCAPE_CODE_VALUES = {
  ...ESCAPE_CODES.FOREGROUND,
  ...ESCAPE_CODES.BACKGROUND,
  ...ESCAPE_CODES.ACTIONS,
  ...ESCAPE_CODES.EFFECTS,
} as const

type EscapeCode = (typeof ESCAPE_CODE_VALUES)[keyof typeof ESCAPE_CODE_VALUES]

function readFilesWithExtensions(dir: string, extensions: string[]): string[] {
  let results: string[] = []
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(readFilesWithExtensions(filePath, extensions))
    } else if (extensions.includes(path.extname(file).substring(1))) {
      results.push(filePath)
    }
  })
  return results
}

function extractUrls(str: string): string[] {
  const urlRegex = /(https?:\/\/[^\s\)\]\}>\"\,]+)/g
  return str.match(urlRegex) || []
}

function hashUrl(url: string): string {
  return crypto.createHash("sha256").update(url).digest("hex")
}

async function checkUrlStatus(url: string) {
  return await fetch(url, { method: "HEAD" })
    .then((response) => {
      return {
        success: response.status >= 200 && response.status < 300,
        url,
        status: response.status,
      }
    })
    .catch((error) => {
      return {
        success: false,
        url,
        status: -1,
      }
    })
}

function getCachedUrlStatus(url: string): UrlCheckType | null {
  const fileHash = hashUrl(url)
  const cacheFilePath = path.join(CACHE_DIR, fileHash)
  if (fs.existsSync(cacheFilePath)) {
    const cacheData = fs.readFileSync(cacheFilePath, "utf8")
    try {
      const cacheContent = JSON.parse(cacheData)
      const age = Date.now() - cacheContent.timestamp
      if (age < CACHE_DURATION) {
        return cacheContent.result
      }
    } catch (error) {
      console.error(`Error reading cache file for URL: ${url} from ${cacheFilePath}\n${cacheData}`)
      throw error
    }
  }
  return null
}

function cacheUrlStatus(url: string, result: UrlCheckType) {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR)
  }
  const cacheFilePath = path.join(CACHE_DIR, hashUrl(url))
  const cacheContent = {
    timestamp: Date.now(),
    result,
  }
  fs.writeFileSync(cacheFilePath, JSON.stringify(cacheContent, null, "\t"), "utf8")
}

type UrlCheckType = {
  file: string
  url: string
  status?: number | "IGNORED"
  success?: boolean
}

const checkUrlsInDirectory = async (
  directoryPath: string,
  fileExtensions: string[],
  ignoreUrls: string[],
): Promise<Set<UrlCheckType>> => {
  const files = readFilesWithExtensions(directoryPath, fileExtensions)
  const urlSet = new Set<UrlCheckType>()
  const checkedUrls = new Set<string>()

  for await (const file of files) {
    console.log(
      applyStyles("=".repeat(80), [ESCAPE_CODES.FOREGROUND.black, ESCAPE_CODES.BACKGROUND.white]),
    )
    logWithStyle(
      ESCAPE_CODES.FOREGROUND.black,
      `${formatString(`FILE:\t`, ESCAPE_CODES.BACKGROUND.white)} ${file}\n`,
    )
    const content = fs.readFileSync(file, "utf8")
    const urls = extractUrls(content)
    for await (const url of urls) {
      if (ignoreUrls.includes(url)) {
        logWithStyle(
          ESCAPE_CODES.FOREGROUND.black,
          `${formatString("IGNORED:\t", ESCAPE_CODES.BACKGROUND.yellow)} ${url}`,
        )
        urlSet.add({
          file,
          url,
          status: "IGNORED",
        })
      } else if (!checkedUrls.has(url)) {
        const cachedResult = getCachedUrlStatus(url)
        if (cachedResult && cachedResult.success) {
          console.debug(
            applyStyles(`RESTORED FROM CACHE:\t`, [
              ESCAPE_CODES.BACKGROUND.magenta,
              ESCAPE_CODES.FOREGROUND.black,
            ]),
          )
          urlSet.add(cachedResult)
          checkedUrls.add(url)
        } else {
          const urlResult = await addToUrlCheckSet(url, urlSet, file)
          cacheUrlStatus(url, urlResult)
          checkedUrls.add(url)
        }
      }

      if (checkedUrls.has(url) && !ignoreUrls.includes(url)) {
        console.debug(
          applyStyles(`URL:\t`, [ESCAPE_CODES.BACKGROUND.blue, ESCAPE_CODES.FOREGROUND.black]),
          url,
        )
        const urlResult = getUrlCheckInSet(urlSet, url)
        const backgroundColour = urlResult.success
          ? ESCAPE_CODES.BACKGROUND.green
          : ESCAPE_CODES.BACKGROUND.red

        console.debug(
          applyStyles(`STATUS: ${urlResult.status}`, [
            backgroundColour,
            ESCAPE_CODES.FOREGROUND.black,
          ]),
        )
      }

      console.log()
    }
  }
  return urlSet
}

async function addToUrlCheckSet(url: string, urlSet: Set<UrlCheckType>, file: string) {
  const result = await checkUrlStatus(url)

  const urlResult = {
    file,
    url,
    status: result.status,
    success: result.success,
  }

  urlSet.add(urlResult)
  return urlResult
}

function getUrlCheckInSet(urlSet: Set<UrlCheckType>, url: string) {
  return Array.from(urlSet).find((urlCheck) => urlCheck.url === url)!
}

function logWithWarningColor(message: string, log = console.debug): void {
  return logWithStyle(ESCAPE_CODES.FOREGROUND.yellow, message, ESCAPE_CODES.END, log)
}

function logWithStyle(
  startCode: string,
  message: string,
  endCode: string = ESCAPE_CODES.END,
  log = console.log,
): void {
  return log(formatString(message, startCode, endCode))
}

function formatString(message: string, startCode: string, endCode: string = ESCAPE_CODES.END): any {
  return `${startCode}${message}${endCode}`
}

function applyStyles(message: string, styles: string[]): string {
  return formatString(message, styles.join(""), ESCAPE_CODES.END)
}

function logWithStyles(message: string, styles: string[], log = console.log): void {
  return log(formatString(message, styles.join(""), ESCAPE_CODES.END))
}

function getOrder(result: UrlCheckType): number {
  const { status, success } = result

  if (typeof status === "number") {
    if (status < 200 || status >= 300) {
      if (success === false) return 1
      if (success === undefined) return 2
      if (success === true) return 3
    } else {
      if (success === false) return 10
      if (success === undefined) return 11
      if (success === true) return 12
    }
  }

  if (status === undefined) {
    if (success === false) return 4
    if (success === undefined) return 5
    if (success === true) return 6
  }

  if (status === "IGNORED") {
    if (success === false) return 7
    if (success === undefined) return 8
    if (success === true) return 9
  }

  throw new Error(`Unexpected result: ${JSON.stringify(result)}`)
}

async function main() {
  const directoryPath = "./content"
  const fileExtensions = ["md"]
  const ignoreUrls: string[] = [
    "https://distill.pub/2017/aia/",
    "https://www.healthline.com/health/fitness-exercise/benefits-of-exercise",
    "https://huggingface.co/settings/tokens",
    "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389",
    "https://www.cdc.gov/physicalactivity/basics/pa-health/index.htm",
    "https://www.example.com/top-10-benefits-of-exercise",
  ]

  const results: UrlCheckType[] = await checkUrlsInDirectory(
    directoryPath,
    fileExtensions,
    ignoreUrls,
  ).then((results: Set<UrlCheckType>) => {
    const errors = []
    console.log("URL check completed.\n")
    const resultsArray = Array.from(results)
    const failedUrls = resultsArray.filter(
      (result) => "success" in result && result.success === false,
    )
    if (failedUrls.length) {
      console.error(
        applyStyles(
          ["=".repeat(80), `FAILED:\t${failedUrls.length}\\${resultsArray.length}`].join("\n"),
          [ESCAPE_CODES.FOREGROUND.black, ESCAPE_CODES.BACKGROUND.red],
        ),
      )
      console.error(
        "\n" +
          failedUrls
            .map((result) =>
              [`FILE:\t${result.file}`, `URL:\t${result.url}`, `STATUS:\t${result.status}`].join(
                "\n",
              ),
            )
            .join("\n\n"),
      )
      errors.push(...failedUrls)
    } else {
      console.debug(
        applyStyles(["=".repeat(80), `SUCCESS`].join("\n"), [
          ESCAPE_CODES.FOREGROUND.black,
          ESCAPE_CODES.BACKGROUND.green,
        ]),
      )
    }
    return resultsArray
  })

  const skippedResults: UrlCheckType[] = results.filter((result) => result.status === "IGNORED")
  const skippedCount: number = skippedResults.length

  const failedResults: UrlCheckType[] = results
    .filter((result) => skippedResults.indexOf(result) === -1)
    .filter((result) => !result.success)
  const failedCount: number = failedResults.length

  // const successfullResults: UrlCheckType[] = results.filter((result) => failedResults.indexOf(result) === -1).filter((result) => skippedResults.indexOf(result) === -1)
  const successfullResults: UrlCheckType[] = results.filter((result) => result.success)
  const successCount: number = successfullResults.length

  const totalCount = skippedCount + failedCount + successCount
  if (totalCount !== results.length) {
    throw new Error(
      `Error: Total count of results (${totalCount}) does not match the number of results (${results.length}).`,
    )
  }

  if (runningInGithubActions()) {
    console.debug("Running in GitHub Actions")

    core.setOutput("total", totalCount)
    core.setOutput("success", successCount)
    core.setOutput("failed", failedCount)
    core.setOutput("skipped", skippedCount)

    const resultCounts = {
      passed: successCount,
      failed: failedCount,
      skipped: skippedCount,
    }
    console.debug({ result: resultCounts })
    const statusImage = generateImages(resultCounts)
    // set statuses
    // const octokit: Octokit = new Octokit()

    const images = [statusImage]
    console.log({ images })
    const generatedSvg = generateSVG(resultCounts)
    // const generatedSvg = generateSVG({
    //   failed: Math.floor(Math.random() * 10),
    //   passed: Math.floor(Math.random() * 10),
    //   skipped: Math.floor(Math.random() * 10),
    // })
    fs.writeFileSync("dashboard.svg", generatedSvg)

    const [owner, repo] = process.env.GITHUB_REPOSITORY!.split("/")
    console.debug({
      context: {
        sha: context.sha,
        repo,
        owner,
      },
    })
    const octokit = new Octokit()
    console.debug("OctoKit instace created")
    octokit.rest.checks.create({
      repo,
      owner,
      name: "URL check",
      head_sha: context.sha,
      status: "completed",
      conclusion: failedCount > 0 ? "failure" : "success",
      output: {
        title: "URL check",
        summary: `Checked ${totalCount} URLs. ${failedCount} failed, ${successCount} succeeded, ${skippedCount} skipped.`,
        images,
      },
    } satisfies RestEndpointMethodTypes["checks"]["create"]["parameters"])

    console.debug("Check created")

    const table: SummaryTableRow[] = [makeHeader()].concat(
      results.sort((a, b) => getOrder(a) - getOrder(b)).map((result) => makeCells(result)),
    )

    await core.summary
      .addHeading("Overview")
      .addImage(statusImage.image_url, statusImage.alt)
      .addBreak()
      .addRaw(generatedSvg)
      .addHeading("Results table")
      .addTable(table)
      .write()

    console.debug("Summary table added")

    if (failedCount > 0) {
      // core.setFailed(`Checks of ${failedCount}/${totalCount} URLs failing.`)
    }
  } else {
    console.log("Script not running in GitHub Actions")
  }

  console.log("URL check completed.\n")

  if (failedCount > 0) {
    console.error("Errors occurred:")
    // errors.forEach((error) => console.error(error))
    // console.error(errors)
    // process.exit(1)
  } else {
    console.log("No errors occurred.")
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main()
} else {
  console.error("Script has been imported. Please run it directly.")
}
function runningInGithubActions(): boolean {
  return !!process.env.GITHUB_ACTIONS
}

function statusSymbol(status: string | number | undefined): string {
  if (typeof status === "number" && status >= 200 && status < 300) {
    return "✅"
  } else if (status === "IGNORED") {
    return "⏭️"
  } else {
    return "❌"
  }
}

function makeCells(result: UrlCheckType): SummaryTableRow {
  const cells: SummaryTableCell[] = []
  cells.push({ data: statusSymbol(result.status) })
  cells.push({ data: statusCode(result.status) })
  cells.push({ data: result.file })
  cells.push({ data: result.url })
  return cells
}
function makeHeader(): SummaryTableRow {
  const cells: SummaryTableCell[] = []
  cells.push({ data: "Result", header: true })
  cells.push({ data: "Status", header: true })
  cells.push({ data: "File", header: true })
  cells.push({ data: "URL", header: true })
  return cells
}
function statusCode(status: string | number | undefined): string {
  if (typeof status === "number") {
    return status.toString()
  } else {
    return ""
  }
}
function generateImages(count: { passed: number; failed: number; skipped: number }): {
  alt: string
  image_url: string
  caption?: string
} {
  const dashboardUrl = "https://svg.test-summary.com/dashboard.svg"

  const image_url = `${dashboardUrl}?p=${count.passed}&f=${count.failed}&s=${count.skipped}`

  const total = count.passed + count.failed + count.skipped
  const caption = [
    `Passed: ${count.passed}`,
    `Failed: ${count.failed}`,
    `Skipped: ${count.skipped}`,
    `Total: ${total}`,
  ].join(", ")

  const alt = [
    `${count.passed}/${total} tests passed`,
    `Icon generation credit to https://github.com/test-summary/action`,
  ].join("\n")

  return { alt, image_url, caption }
}

function generateSVG({
  passed,
  failed,
  skipped = 0,
}: {
  passed: number
  failed: number
  skipped: number
}): string {
  const total = passed + failed + skipped
  const startingAngle = -90
  const innderRadius = 25
  const outerRadius = 50
  const strokeWidth = 10
  const passedAngle = (passed / total) * 360
  const failedAngle = (failed / total) * 360
  const skippedAngle = (skipped / total) * 360
  const passedColor = "#2ecc71"
  const failedColor = "#e74c3c"
  const skippedColor = "#bdc3c7"
  const width = 100
  const height = 100
  const centreX = width / 2
  const centreY = height / 2
  const circleParameters = {
    innderRadius,
    outerRadius,
    strokeWidth,
  }

  const backgroundCircle = segmentPathFn(centreX, centreY, innderRadius, outerRadius, 0, 360)

  const passedSegment = segmentPathFn(
    centreX,
    centreY,
    innderRadius,
    outerRadius,
    startingAngle,
    startingAngle + passedAngle,
  )
  const failedSegment = segmentPathFn(
    centreX,
    centreY,
    innderRadius,
    outerRadius,
    startingAngle + passedAngle,
    startingAngle + passedAngle + failedAngle,
  )
  const skippedSegment = segmentPathFn(
    centreX,
    centreY,
    innderRadius,
    outerRadius,
    startingAngle + passedAngle + failedAngle,
    startingAngle + passedAngle + failedAngle + skippedAngle,
  )

  const svgArray = []
  // svgArray.push(backgroundCircle)
  if (passedAngle > 0) svgArray.push({ path: passedSegment, fill: passedColor })
  if (failedAngle > 0) svgArray.push({ path: failedSegment, fill: failedColor })
  if (skippedAngle > 0) svgArray.push({ path: skippedSegment, fill: skippedColor, strokeWidth: 0 })

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    ,
    ...svgArray.map((args) => constructSvgPath(args)),
    "</svg>",
  ].join("\n")
}

function constructSvgPath({
  path,
  fill = "none",
  stroke = "none",
  strokeWidth = 0,
}: {
  path: string
  fill?: string
  stroke?: string
  strokeWidth?: number
}): string {
  return `<path d="${path}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />`
}

function _2(
  svg: (strings: TemplateStringsArray, ...values: any[]) => string,
  svgSize: number,
  range: (n: number) => number[],
  segments: number,
  segment: (n: number) => string,
): string {
  return svg`<svg height=${svgSize} viewBox="0 0 ${svgSize} ${svgSize}">
  ${range(segments).map(segment).join("\n  ")}
</svg>`
}

function _polarToCartesian() {
  return (x: number, y: number, r: number, degrees: number): [number, number] => {
    const radians = (degrees * Math.PI) / 180.0
    return [x + r * Math.cos(radians), y + r * Math.sin(radians)]
  }
}

interface PolarToCartesianFn {
  (x: number, y: number, r: number, degrees: number): [number, number]
}

interface SegmentPathFn {
  (x: number, y: number, r0: number, r1: number, d0: number, d1: number): string
}

function polarToCartesian(x: number, y: number, r: number, degrees: number): [number, number] {
  const radians = (degrees * Math.PI) / 180.0
  return [x + r * Math.cos(radians), y + r * Math.sin(radians)]
}

function segmentPath(polarToCartesianFn: PolarToCartesianFn = polarToCartesian): SegmentPathFn {
  return (x, y, r0, r1, d0, d1) => {
    const arc: number = Math.abs(d0 - d1) > 180 ? 1 : 0
    const point = (radius: number, degree: number): string =>
      polarToCartesianFn(x, y, radius, degree)
        .map((n) => n.toPrecision(5))
        .join(",")
    return [
      `M${point(r0, d0)}`,
      `A${r0},${r0},0,${arc},1,${point(r0, d1)}`,
      `L${point(r1, d1)}`,
      `A${r1},${r1},0,${arc},0,${point(r1, d0)}`,
      "Z",
    ].join("")
  }
}
// const segmentPathFn: SegmentPathFn = segmentPath()
function segmentPathFn(...args: Parameters<SegmentPathFn>): ReturnType<SegmentPathFn> {
  return segmentPath()(...args)
}
function _segment(
  svgSize: number,
  segments: number,
  margin: number,
  segmentPath: SegmentPathFn,
  radius: number,
  width: number,
): (n: number) => string {
  return (n: number) => {
    const center: number = svgSize / 2
    const degrees: number = 360 / segments
    const start: number = degrees * n
    const end: number = degrees * (n + 1 - margin) + (margin == 0 ? 1 : 0)
    const path: string = segmentPath(center, center, radius, radius - width, start, end)
    const fill: any = randomColour()
    return `<path d="${path}" style="fill:${fill};stroke:none" />`
  }
}

function _segmentCircle(
  segments: number,
  polarToCartesian: PolarToCartesianFn,
  svgSize: number,
  radius: number,
  width: number,
): (n: number) => string {
  return (n = 0): string => {
    const degree: number = n * (360 / segments)
    const alpha: number = 1 / Math.log2(segments)
    const [cx, cy] = polarToCartesian(svgSize / 2, svgSize / 2, radius - width, degree).map((n) =>
      n.toPrecision(4),
    )
    const fill: any = randomColour()
    return `<circle cx=${cx} cy=${cy} r=${width} style="fill:${fill};stroke:none" />`
  }
}
function randomColour(): string {
  return `hsl(${Math.random() * 360}, 100%, 50%)`
}
