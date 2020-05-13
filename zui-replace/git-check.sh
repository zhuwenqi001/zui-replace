#! /bin/sh
# 分支检查。确认为（本地、远程）最新分支

echo "\033[33m git检查... \033[0m"
# 分支检查-本地
if test -n "$(git status --porcelain)"; then
  echo "\033[31m 当前目录存在未提交文件，需处理为完全干净的分支 \033[0m" >&2;
  exit 128;
fi

# 分支检查-远程
# if test "0" != "$(git rev-list --count --left-only @'{u}'...HEAD)"; then
#   echo "\033[31m 远程存在更新版本，建议拉取最新代码 \033[0m" >&2;
#   exit 128;
# fi

# 切分支
branch=$(git branch | grep feature/zui-replace)
if [ -n "$branch" ]; then
    echo "\033[32m feature/zui-replace already exists. \033[0m"
    git checkout feature/zui-replace
else
    echo "\033[32m create branch feature/zui-replace. \033[0m"
    git checkout -b feature/zui-replace
fi
