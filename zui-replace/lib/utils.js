'use strict'
// 通用方法
const chalk = require('chalk')
const fs = require('fs-extra')

// logs
const defaultLog = log => console.log(chalk.blue(log))
const errorLog = log => console.log(chalk.red(log))
const successLog = log => console.log(chalk.green(log))

// 文件读取
async function readFile(file) {
  return new Promise(resolve => {
    fs.readFile(file, (err, data) => {
      if (err) {
        errorLog(err)
        resolve('')
      } else {
        resolve(data + '')
      }
    })
  })
}
exports.defaultLog = defaultLog
exports.errorLog = errorLog
exports.successLog = successLog
exports.readFile = readFile
