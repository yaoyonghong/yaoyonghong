#创建一个git+node项目
*创建远程仓库
*下载远程仓库到本地

git clone http://.......

//输入用户名，个人设置中不可更改的名字
//输入密码


*进入项目目录

cd allcommand

*执行node初始化，即生成package.json文件

*第一步，初始化
...
npm init

name  项目名称
version 版本
description 描述
entry  项目入口文件
test commit 命令行操作
git     git仓库地址
keywords  关键字
author    作者
license   协议

输入y  回车
ctrl+c

*添加项目结构，即文件夹，文件等

app.js   node入口文件
public   静态资源文件
css    样式文件
js     脚本文件
img    图片文件
views  html页面
routes 路由文件

ps：文件下需要创建文件，否则，git不会监听

*安装依赖

//安装项目依赖
npm install express --save
//安装开发依赖
npm install gulp --save-dev

*添加 gitignore文件，忽略不需要提交的文件或目录

node_modules/
.idea/
.project/
.vscode/
*.exe
*.log
logs/
*.bak


*提交到远程仓库

git add .     提交工作区变更到缓存区
git commit -m‘项目初始化’  提交缓存区变更到本地仓库
git push origin master   推送到本地仓库变更到远程仓库
//输入用户名
//输入密码

*其他命令

停止git追踪指定文件或目录
git rm -r --cached <filename/dirname>
//获取远程仓库更新
git push origin master