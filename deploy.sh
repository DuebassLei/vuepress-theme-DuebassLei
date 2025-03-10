#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd example/docs/public

# 指定域名
echo 'blog.gaosanshi.top' > CNAME

# git
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/DuebassLei/DuebassLei.github.io.git master:master
#git push -f https://gitee.com/DuebassLei/DuebassLei master:master
cd -
