/**
 * Update version number listed in package json file
 * Grab the last commit version from github and append it to the build number (semantic versioning allows for more details after 3 digits).
 * increment the point release number
 * a commit on package.json is suggested after running this update the version number as displayed in github
 *
 */

const fs = require('fs')
// from packjson get the version field to update
const fileName = './package.json'
const file = require(fileName)

// 2022-08-07 assumes version number in format (g: github) #.#.#-g********  (ex.:  0.1.4-g8fdbf28)
// assumes developer will reset point with each minor version update

const execSync = require('child_process').execSync
// import { execSync } from 'child_process';  // replace ^ if using ES modules
const githubVersion = execSync('git show -s --pretty=format:%h', {
  encoding: 'utf-8'
}) // the default is 'buffer'
console.log('Output was:\n', githubVersion)

console.log('githubNum : ' + githubVersion)
// we are assuming at least one github version attach, regex will fail without '-g' in version number
const regexPoint = /[^.]+\.[^.]+\.(.*)-g/g
const regexMajMin = /([^.]+\.[^.]+)\..+?-g/g
// const VERSION = process.env.npm_package_version
const VERSION = file.version
console.log('current version env: ' + VERSION)
const matchPoint = regexPoint.exec(VERSION)
console.log(' version matchPoint: [' + matchPoint[1] + ']')
const nextPoint = parseInt(matchPoint[1]) + 1
console.log(' next matchPoint: ' + nextPoint)
const majmin = regexMajMin.exec(VERSION)
console.log('majmin: ' + majmin[1])
file.version = majmin[1] + '.' + nextPoint + '-g' + githubVersion

fs.writeFileSync(fileName, JSON.stringify(file, null, 2))
