'use strict'

const program = require('commander')
const inquirer = require('inquirer')
const path = require('path')
const { errorLog } = require('./lib/utils')

const { Replace } = require('./lib/replace')

async function operateProcess(answers) {
  const replace = new Replace(answers.excludeDir)
  replace.getFile(path.resolve(process.cwd(), ''))
  await replace.replace()
  errorLog('zui升级完成！')
  errorLog(
    '注：若项目开启了eslint，查看package.json 中是否存在run lint命令，存在则执行lint操作；否则执行eslint格式化，如：eslint --ext .js,.vue src 参考https://cn.eslint.org/docs/user-guide/command-line-interface'
  )
}

const initAction = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message:
          '请输入本次操作需要排除的文件夹（如本地打包后的文件夹。多个文件夹以英文逗号分隔。已内置.git、node_modules。）：',
        name: 'excludeDir',
        default: ''
      }
    ])
    .then(answers => {
      operateProcess(answers)
    })
}

program.description('replace').action(initAction)

program.parse(process.argv)
