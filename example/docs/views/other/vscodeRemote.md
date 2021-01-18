---
title: VSCode配置远程开发项目
date: 2020-04-03
categories:
 - Other
---
## Visual Studio Code Insiders内测版
[最新内测版下载地址](https://code.visualstudio.com/insiders/)
![](https://upload-images.jianshu.io/upload_images/15668934-7d719d94d7e4180b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 安装Remote Development扩展

![](https://upload-images.jianshu.io/upload_images/15668934-9fc5a297084e248e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##设置
![](https://upload-images.jianshu.io/upload_images/15668934-b6073df47fab5ea4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
勾选
![](https://upload-images.jianshu.io/upload_images/15668934-8f1cfc56c2208ff8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 新建连接
![](https://upload-images.jianshu.io/upload_images/15668934-381b6388dcf82354.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
安装完插件后左下角会出现一个绿色的图标，点击选择会在命令窗口弹出几个选项
### 设置ssh config
![](https://upload-images.jianshu.io/upload_images/15668934-ec4688a71789f2f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

选择一个config文件，也可以直接输入user@host（如root@47.103.*.*）
![](https://upload-images.jianshu.io/upload_images/15668934-b379287ebff84276.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

自定义配置文件，格式如下：
```bash
# Read more about SSH config files: https://linux.die.net/man/5/ssh_config
Host 输入你的Host名字
    HostName 输入你的IP地址
    User 输入你的用户名
```

![](https://upload-images.jianshu.io/upload_images/15668934-16e436815cd7b855.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 
![](https://upload-images.jianshu.io/upload_images/15668934-6180cb3414cbf10c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

需要在vs code下方输入远程用户密码，成功登陆
![](https://upload-images.jianshu.io/upload_images/15668934-c410e962e241fb5b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```bash
91af6d8aa60c: running
Acquiring lock on /root/.vscode-server-insiders/bin/d8e3cca049b1baa317ab9ef0d3f673b08e53d8fa/vscode-remote-lock.root.d8e3cca049b1baa317ab9ef0d3f673b08e53d8fafa                                                                                                                                                         t/.vscode-server-insiders/bin/d8e
\ln /root/.vscode-server-insiders/bin/d8e3cca049b1baa317ab9ef0d3f673b08e53d8fa/vscode-remote-lock.root.d8e3cca049b1baa317ab9ef0d3f673b08e53d8fa.target /root/.vscode-server-insiders/bin/d8e3cca049b1baa317ab9ef0d3f673b08e53d8fa/vscode-remote-lock.root.d8e3cca049b1baa317ab9ef0d3f673b08e53d8fa
Found existing installation at /root/.vscode-server-insiders/bin/d8e3cca049b1baa317ab9ef0d3f673b08e53d8fa...
Found running server...

*
* Reminder: You may only use this software with Visual Studio family products,
* as described in the license (https://go.microsoft.com/fwlink/?linkid=2077057)
*

Checking server status on port 44455 with wget
91af6d8aa60c: start
sshAuthSock====
agentPort==44455==
osReleaseId==centos==
arch==x86_64==
webUiAccessToken====
tmpDir==/run/user/0==
platform==linux==
91af6d8aa60c: end
```
打开文件夹，这块点击完ok后又得在下方输入系统的密码
![](https://upload-images.jianshu.io/upload_images/15668934-355e0fb0c105ae57.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###效果图
![](https://upload-images.jianshu.io/upload_images/15668934-be3824168aa3da27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


*参考*
[2019 VS Code 远程开发配置](https://blog.csdn.net/yh0503/article/details/89851899)