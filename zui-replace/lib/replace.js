'use strict'
const fs = require('fs-extra')

const { regList, replaceList } = require('./reg')
const { successLog, errorLog, readFile } = require('./utils')

class Replace {
  constructor(excludeDir) {
    // 排除不需要遍历的文件夹
    this.excludeDir = ['node_modules', '.git', 'zui-replace']
    this.fileList = []
    excludeDir && (this.excludeDir = this.excludeDir.concat(excludeDir.split))
  }
  // 遍历获取所有文件
  getFile(path) {
    const dirList = fs.readdirSync(path)
    dirList.forEach(item => {
      if (fs.statSync(path + '/' + item).isDirectory()) {
        // 文件夹
        if (!this.excludeDir.some(f => f === item)) {
          this.getFile(path + '/' + item)
        }
      } else {
        // 非package.json/package-lock.json
        if (!/\.json/g.test(item)) {
          this.fileList.push(path + '/' + item)
        }
      }
    })
  }
  // 替换
  async replace() {
    for (const file of this.fileList) {
      let data = await readFile(file)
      data = data + ''
      let writeFlg = false
      writeFlg = regList.some(item => item.test(data))
      if (writeFlg) {
        regList.forEach((item, i) => {
          data = data.replace(item, replaceList[i])
        })
        try {
          await fs.outputFile(file, data)
          successLog('writeFile success!' + file)
        } catch (error) {
          errorLog('writeFile error!' + file)
        }
      }
    }
  }
}
exports.Replace = Replace
