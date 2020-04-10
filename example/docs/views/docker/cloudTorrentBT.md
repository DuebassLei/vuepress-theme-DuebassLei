---
title: 使用阿里云服务器Centos7环境下载BT文件
date: 2020-01-09
categories:
  - Docker
tags:
  - docker
  - linux
---
## 前言
使用阿里云`centos7`环境（已经安装`docker`），使用`docker`方式安装`cloud-torrent`并下载`bt`动漫资源

>优点
- 图形化界面
- 使用简洁
- 不限速（取决于你的服务器带宽）

## cloud-torrent简介
[Cloud torrent](https://github.com/jpillora/cloud-torrent)是一个使用`Go（golang）`编写的自托管远程`torrent`客户端。 您可以从远程启动`torrent`，这些`torrent`以文件集的形式下载到服务器的本地磁盘上，然后可以通过`HTTP`检索或流式传输。

`Cloud torrent`是一个自托管的远程`torrent`客户端，使用`Go（golang）`编写。 您可以远程启动`torrent`，这些`torrent`以文件集的形式下载到服务器的本地磁盘上，然后可以通过`HTTP`检索或流式传输。


## Docker方式安装
```powershell
$ docker run -d -p 3000:3000 -v /path/to/my/downloads:/downloads jpillora/cloud-torrent
```

- -v 将本地文件目录挂载到容器对应目录 （格式：-v 宿主机目录：容器目录)

- -p 指定端口映射，格式为：主机(宿主)端口:容器端口

- -d 后台运行容器，并返回容器ID；


![](https://user-gold-cdn.xitu.io/2020/1/9/16f892fb0816cc5e?w=868&h=212&f=png&s=105629)

查看启动的`cloud-torrent`容器

![](https://user-gold-cdn.xitu.io/2020/1/9/16f89330e25b0729?w=869&h=118&f=png&s=46976)


## 访问`cloud-torrent`服务
>直接将要下载的BT动漫磁力文件拖进来进行下载，这里选择的是

`[CyC] 夏日友人帐 S6 (BD 1080p Hi10 x264 FLAC).torrent`

![](https://user-gold-cdn.xitu.io/2020/1/9/16f8935c874b3535?w=1126&h=386&f=png&s=78648)

![](https://user-gold-cdn.xitu.io/2020/1/9/16f8a270238e92bf?w=1240&h=600&f=png&s=218743)

### 进度预览

![](https://user-gold-cdn.xitu.io/2020/1/9/16f8938ed540ffaa?w=1000&h=898&f=png&s=104103)

### 编辑删除、预览

![](https://user-gold-cdn.xitu.io/2020/1/9/16f893ba96151654?w=1073&h=652&f=png&s=103712)

