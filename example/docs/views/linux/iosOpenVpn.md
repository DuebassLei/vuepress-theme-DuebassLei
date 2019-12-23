---
title: Ios配置 openVPN 客户端
date: 2019-12-06
tags:
 - centos
categories:
 - Centos
---
 
## 前言

在阿里云轻应用服务器上安装了openVPN serve，在 `window 10` 系统上已经成功安装openVPN客户端并连接成功。

## 安装
在App Store上下载安装  `openVPN` ，方法自行百度。

![](https://cdn.nlark.com/yuque/0/2019/png/215812/1565855474396-ac3fa946-d022-4acb-8088-cdcdc5dc837f.png#align=left&display=inline&height=260&originHeight=260&originWidth=900&size=0&status=done&width=900)

> logo 长这样噢>_<
## 步骤
### 1. 首先打开在`windows 10` 上已经配置正常使用的配置文件目录：
> 后面手机上会使用`Config`文件夹下的配置文件，一样的配置。

![](https://cdn.nlark.com/yuque/0/2019/png/215812/1565855474435-593dedeb-2557-448f-9308-da7bd7e88a76.png#align=left&display=inline&height=304&originHeight=304&originWidth=968&size=0&status=done&width=968)

> 这里是生成的服务端CA证书和用户秘钥、证书，以及`client.ovpn`配置文件


### 2.  打开openVPN软件 ，界面如下：

![](https://cdn.nlark.com/yuque/0/2019/png/215812/1565855474391-171aaa3f-18c8-413e-8d1b-90a9ef2429d0.png#align=left&display=inline&height=2204&originHeight=2204&originWidth=1240&size=0&status=done&width=1240)

### 大概意思就是两种导入的方式：

- 1 使用iTunes工具将文件拷贝到软件目录下（IOS系统文件系统安全>_<）
- 2 以附件的形式发送邮件

![](https://cdn.nlark.com/yuque/0/2019/png/215812/1565855474364-ecc4fe6b-6a06-43da-b78d-41023fea5aa9.png#align=left&display=inline&height=2204&originHeight=2204&originWidth=1240&size=0&status=done&width=1240)

嗯，就是这样简单。

### 导入`client.ovpn ,user.crt,user.key`文件

> 我使用是方式一，将配置文件夹`config` 拷贝到手机软件安装目录下，这里使用的工具是`Itools` (替代iTunes 将文件拷贝到手机)


![](https://cdn.nlark.com/yuque/0/2019/png/215812/1565855474704-e15f73b0-7653-4a1a-865d-f5ccafec37a7.png#align=left&display=inline&height=611&originHeight=611&originWidth=1240&size=0&status=done&width=1240)

![](https://cdn.nlark.com/yuque/0/2019/png/215812/1565855474320-e6b3e752-2364-4195-b52e-c48b11a1cf98.png#align=left&display=inline&height=533&originHeight=533&originWidth=1072&size=0&status=done&width=1072)

这里我已经安装连接过了，所以这个配置没在这个目录下

![](https://cdn.nlark.com/yuque/0/2019/png/215812/1565855474420-f6fb13ab-07fe-449d-a5c9-9cd2d14f60a1.png#align=left&display=inline&height=24&originHeight=24&originWidth=733&size=0&status=done&width=733)

正常配置文件导入后打开软件，会提示你是否加载当前配置文件，点击添加。之后点击连接就OK了。

![](https://cdn.nlark.com/yuque/0/2019/png/215812/1565855475146-2712bfc1-25b2-4360-9bc3-ecc24687d1a9.png#align=left&display=inline&height=2204&originHeight=2204&originWidth=1240&size=0&status=done&width=1240)

连接成功啦>_<

![](https://cdn.nlark.com/yuque/0/2019/png/215812/1565855475399-1b4b3892-3af5-442e-b869-9ff5eef0fa9e.png#align=left&display=inline&height=2204&originHeight=2204&originWidth=1240&size=0&status=done&width=1240)

## openVpn Server在Centos 7上安装

- 参考文章:

> [VPN之 OpenVpn详细讲解与安装到阿里云服务器](https://fennbk.com/7621)

