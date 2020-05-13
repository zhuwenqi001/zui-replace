#! /bin/sh
# 依赖处理

# 1.nrm 检查
echo "\033[33m 依赖处理... \033[0m"
if test -n "$(nrm ls)"; then
  npm install nrm -g
fi

nrm add zto http://npm.ztosys.com/
nrm use zto

# 2.依赖下载
rm -rf node_modules
npm install
npm install chalk fs-extra inquirer commander --save-dev
npm uninstall element-ui 
npm install @zto/zui --save
