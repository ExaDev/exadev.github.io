#!/usr/bin/env -S npx -y tsx --no-cache
import * as core from "@actions/core";
import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";

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
        success: response.status < 400 || response.status >= 500,
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

async function main() {
  const directoryPath = "./content"
  const fileExtensions = ["md"]
  const ignoreUrls: string[] = [
    "https://distill.pub/2017/aia/",
    "https://www.healthline.com/health/fitness-exercise/benefits-of-exercise",
    "https://huggingface.co/settings/tokens",
    "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389",
    "https://www.cdc.gov/physicalactivity/basics/pa-health/index.htm",
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

  // const junitXml = makeJunitXml(results, "URL Check")
  const skipped: number = results.filter((result) => result.status === "IGNORED").length
  const failed: number = results.filter((result) => result.success === false).length
  const success: number = results.length - skipped - failed
  const total: number = results.length

  if (runningInGithubActions()) {
    console.debug("Running in GitHub Actions")
    core.startGroup("URL Check Results")
    core.setOutput("total", total)
    core.setOutput("success", success)
    core.setOutput("failed", failed)
    core.setOutput("skipped", skipped)
    core.endGroup()
    if (failed > 0) {
      core.setFailed(`Checks of ${failed}/${total} URLs failing.`)
    }
  } else {
    console.log("Script not running in GitHub Actions")
  }

  console.log("URL check completed.\n")

  if (failed > 0) {
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
