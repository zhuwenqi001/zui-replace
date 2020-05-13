#! /bin/sh
# 入口文件
source zui-replace/git-check.sh
source zui-replace/dependence.sh
node zui-replace/index.js
echo "\033[33m 依赖卸载... \033[0m"
npm uninstall chalk fs-extra inquirer commander
# source zui-replace/git-check.sh && source zui-replace/dependence.sh && && node zui-replace/index.js
# && source zui-replace/git-check.sh && node zui-replace/index.js