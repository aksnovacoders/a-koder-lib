/**
 * This is a minimal script to publish your package to "npm".
 * This is meant to be used as-is or customize as you see fit.
 *
 * This script is executed on "dist/path/to/library" as "cwd" by default.
 *
 * You might need to authenticate with NPM before running this script.
 */
import devkit from '@nx/devkit'
import chalk from 'chalk'
import { execSync } from 'child_process'

const { readCachedProjectGraph } = devkit

function invariant(condition, message) {
  if (!condition) {
    console.error(chalk.bold.red(message))
    process.exit(1)
  }
}

// Executing publish script: node path/to/publish.mjs {name} {version}
const [, , name, version] = process.argv

// A simple SemVer validation to validate the version
const validVersion = /^\d+\.\d+\.\d+(?:-([\w-]+)\.\d+)?$/
invariant(
  version && validVersion.test(version),
  `No version provided or version did not match Semantic Versioning, expected: #.#.#-tag.# or #.#.#, got ${version}.`,
)

const validVersionResult = validVersion.exec(version)
const tag = validVersionResult[1] === undefined ? 'latest' : 'dev'

const graph = readCachedProjectGraph()
const project = graph.nodes[name]

invariant(
  project,
  `Could not find project "${name}" in the workspace. Is the project.json configured correctly?`,
)

const outputPath = project.data?.targets?.build?.options?.outputPath
invariant(
  outputPath,
  `Could not find "build.options.outputPath" of project "${name}". Is the project.json configured correctly?`,
)

process.chdir(outputPath)

// Execute "npm publish" to publish
execSync(`npm publish --tag ${tag}`)
