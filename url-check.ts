#!/usr/bin/env -S npx -y tsx --no-cache
import * as fs from "fs"
import * as path from "path"

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

// Function to extract URLs from a string
function extractUrls(str: string): string[] {
  const urlRegex = /(https?:\/\/[^\s\)\]\}>]+)/g

  return str.match(urlRegex) || []
}

// Function to check URL response status
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
      } else {
        console.debug(
          applyStyles(`URL:\t`, [ESCAPE_CODES.BACKGROUND.blue, ESCAPE_CODES.FOREGROUND.black]),
          url,
        )
        const result = await checkUrlStatus(url)

        const backgroundColour = result.success
          ? ESCAPE_CODES.BACKGROUND.green
          : ESCAPE_CODES.BACKGROUND.red
        console.debug(
          applyStyles(`STATUS: ${result.status}`, [
            backgroundColour,
            ESCAPE_CODES.FOREGROUND.black,
          ]),
        )
        urlSet.add({
          file,
          url,
          status: result.status,
          success: result.success,
        })
      }
      console.log()
    }
  }
  return urlSet
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

const directoryPath = "./content"
const fileExtensions = ["md"]
const ignoreUrls: string[] = []

await checkUrlsInDirectory(directoryPath, fileExtensions, ignoreUrls)
  .then((results: Set<UrlCheckType>): void => {
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
      process.exit(1)
    }
  })
  .catch((error) => {
    console.error("Error occurred:", error)
  })
