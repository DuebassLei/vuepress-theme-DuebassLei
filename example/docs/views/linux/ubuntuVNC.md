---
title: 阿里云 | VNC搭建Ubuntu可视化界面
date: 2018-12-30
tags:
 - linux
categories:
 - Linux
---

## 写在前面：

 ***还能用学生优惠，买的半年阿里云服务器，折腾中。。。打算将毕设部署到服务器上，这里是参考网上教程搭建Ubuntu可视化界面***

![](https://upload-images.jianshu.io/upload_images/4335059-008248f537dd711d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

## 设置远程连接

![](https://upload-images.jianshu.io/upload_images/4335059-49c072ecbecbb6f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

## 点击Ubuntu轻量应用服务器卡片的远程连接按钮，连接服务器

![](https://upload-images.jianshu.io/upload_images/4335059-3116a39265dc1a74.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 切换root用户  

![](https://upload-images.jianshu.io/upload_images/4335059-8b648e305be2747e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

连接成功后开始安装软件。

## 一、VNC的安装与配置

*   安装之前先输入

> `apt-get update`

获取最新套件的信息。

*   输入以下命令安装VNC(这里我已将安装过，显示版本信息)

> `apt-get install vnc4server`

![](https://upload-images.jianshu.io/upload_images/4335059-ddbe7587a57d02b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

*   启动VNC

> `vncserver`

设置密码  ![](https://upload-images.jianshu.io/upload_images/4335059-e80307a9a0c0d717.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

出现以下信息，说明启动成功。  ![](https://upload-images.jianshu.io/upload_images/4335059-29432788411bdcee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

## 二、gnome 桌面环境安装与配置

*   安装x－windows的基础

> `sudo apt-get install x-window-system-core`

*   安装登录管理器

> `sudo apt-get install gdm`

*   安装Ubuntu的桌面

> `sudo apt-get install ubuntu-desktop`

</pre>

*   安装gnome配套软件

> `sudo apt-get install gnome-panel gnome-settings-daemon metacity nautilus gnome-terminal`

*   修改VNC配置文件

> `vi ~/.vnc/xstartup`

*   修改为:
```bash
#!/bin/sh
# Uncomment the following two lines for normal desktop:
export XKL_XMODMAP_DISABLE=1
 unset SESSION_MANAGER
# exec /etc/X11/xinit/xinitrc
unset DBUS_SESSION_BUS_ADDRESS
gnome-panel &
gnome-settings-daemon &
metacity &
nautilus &
gnome-terminal &
```
*   杀掉原桌面进程，输入命令（其中的:1是桌面号）：

> `vncserver -kill :1`

*   输入以下命令生成新的会话：

> `vncserver :1`

### 开启VNC服务需要用到的5900和5901端口。

![](https://upload-images.jianshu.io/upload_images/4335059-8cd83176196e14f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

## 三、本地使用VNC连接

*   下载官网安装包[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/),我这里本地环境为Windows，官网支持以下平台  ![](https://upload-images.jianshu.io/upload_images/4335059-2afe47e8323a3954.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

*   本地安装VNC后，打开软件，使用`ip:1`的方式连接

![](https://upload-images.jianshu.io/upload_images/4335059-fe2143c6ced0b5e4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

*   输入之前设置的VNC密码后点击连接  

![](https://upload-images.jianshu.io/upload_images/4335059-e69779de988c9c12.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

*   连接成功即可看到Ubuntu桌面的界面了  

![](https://upload-images.jianshu.io/upload_images/4335059-338901b14201906c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

## 参考博文：
[用VNC搭建Ubuntu VNC可视化界面](https://help.aliyun.com/knowledge_detail/59330.html)
