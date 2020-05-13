'use strict'
const regList = [
  /import Element from/g,
  /_\?element-ui/g,
  /element-ui/g,
  /elementUI/g,
  /Vue.use\(Element/g,
  /<el/g,
  /<\/el/g,
  /\.el-/g,
  /el-icon/g,
  /class\s*=\s*"el-/g,
  /class\s*=\s*'el-/g,
  /whiteList\s*:\s*\['fa',\s*'el'\]/g,
  /whiteList\s*:\s*\["fa",\s*"el"\]/g
]

const replaceList = [
  'import Zui from',
  '_?@zto\\/zui',
  '@zto/zui',
  'zui',
  'Vue.use(Zui',
  '<z',
  '</z',
  '.z-',
  'z-icon',
  'class="z-',
  "class='z-",
  "whiteList: ['fa fa-', 'z-']",
  'whiteList: ["fa fa-", "z-"]'
]

exports.regList = regList
exports.replaceList = replaceList
