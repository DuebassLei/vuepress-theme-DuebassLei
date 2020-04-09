---
title: Typora+PicGo+Github/Gitee搭建免费稳定的图床
date: 2020-04-10
categories:
 - Other
tags:
 - github
---
## PicGo
一个用于快速上传图片并获取图片URL链接的工具
![](https://upload-images.jianshu.io/upload_images/15668934-3e1f97c2acbc8fae?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/15668934-3822c0240c588257?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
而这里边，SM.MS和Imgur有免费版也有收费版，腾讯云、七牛、阿里云、又拍云都是收费的，微博图床据说已经挂了，那么，也就剩下GitHub安全、免费又可靠了。
所以我们可以将本地的文件，或者剪切板上截图发送到图床并生成在线图片链接，再贴到我们的博文里，不再占用我们服务器的存储和带宽啦。

[PicGo Github仓库地址](https://github.com/Molunerfinn/PicGo)
## 方式一：Github仓库图床
### 新建Public Github仓库
创建Repository
点击"New repository"按钮，仓库名字随意
![](https://upload-images.jianshu.io/upload_images/15668934-869a8ef693e14311?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 新生成一个Personal access tokens 
生成一个Token用于操作GitHub repository
`Settings --> Developer Settings --> Personal access tokens`
![](https://upload-images.jianshu.io/upload_images/15668934-9db3c222b3a1d930?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/15668934-7f977713e4bdddca?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
勾选repo权限,填写描述然后点击"Generate token"按钮
![](https://upload-images.jianshu.io/upload_images/15668934-03bb4ac62dfb9b18?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
生成Token
![](https://upload-images.jianshu.io/upload_images/15668934-3dda33668da300cc?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
会生成如上图的一串token，这串token之后不会再显示，所以第一次看到的时候，可以建个文本文件保存，忘记了只有重新生成，每次都不一样。
***
## PicGo安装及配置
### 下载PicGo
Github下载太慢，这里提供[蓝奏云文件下载地址](https://www.lanzous.com/b04abbw8h)

### 配置Github图床
![](https://upload-images.jianshu.io/upload_images/15668934-ff5e3cd12e25ea6c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### *填写说明*
>- 第一行设定仓库名按照“账户名/仓库名的格式填写”，比如我的是：`DuebassLei/PicGoPictureBed`
>- 第二行分支名统一填写`master`
>- 第三行将之前的`Token`粘贴在这里
>- 第四行留空
>- 第五行自定义域名的作用是在上传图片后成功后，`PicGo`会将“自定义域名+上传的图片名”生成的访问链接，放到剪切板上，自定义域名需要按照这样去填写：`https://raw.githubusercontent.com/账户名/仓库名/master`，比如我的是：`https://raw.githubusercontent.com/DuebassLei/PicGoPictureBed/master`

### 快捷键及相关配置
支持快捷键command+shift+p（macOS）或者control+shift+p（windows\linux）用以支持快捷上传剪贴板里的图片（第一张）。
PicGo支持自定义快捷键，使用方法见配置手册。
注：可以将快捷键设置为ctrl+shift+c

***Tips***
将上面的步骤都设置好，每次截图之后，都可以按一下ctrl+shift+c，这样就会将剪切板上面的截图转化为在线网络图片链接，简直就是爽的不要不要的，关键是背靠 GitHub 和微软，比自建服务器都稳！
***

## 方式二：Gitee仓库图床
### 新建gitee仓库
在gitee新建一个公开的资源仓库
![](https://upload-images.jianshu.io/upload_images/15668934-38ec621c50afcc07?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 设置个人token
![](https://upload-images.jianshu.io/upload_images/15668934-8174b3dbe7bde1da?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/15668934-c15ae015771c1c7f?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 设置Picgo的gitee插件配置
![](https://upload-images.jianshu.io/upload_images/15668934-785ed53f2202e8f8?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
*Tips:*
会生成如上图的一串token，这串token之后不会再显示，所以第一次看到的时候，可以建个文本文件保存，忘记了只有重新生成，每次都不一样。
上传成功测试图片url：
```
https://gitee.com/DuebassLei/PicGoPictureBed/raw/master/static/animation.JPG
```
![](https://upload-images.jianshu.io/upload_images/15668934-a574a8f734c16d53?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
Gitee图床成功配置啦，国内访问超级快，比Github快N倍，写文档图床就用它啦！
### 注意啦Tips
>***接下来在Typora中配置PicGo更愉快的写作。***
## Typora配置PicGo
### 下载Typora
[最新版下载](https://www.typora.io/)


###  1.配置PicGo服务
![](https://upload-images.jianshu.io/upload_images/15668934-f6818a964462618b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/15668934-31097de0613e5ccc?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 2.设置Typora
![](https://upload-images.jianshu.io/upload_images/15668934-cfc24b5dce90da8f?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
验证设置是否正确
![](https://upload-images.jianshu.io/upload_images/15668934-12785de41069c228?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/15668934-6b94fe32050f47de?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

好，到这里已经就成功将`Github/Gitee仓库+PicGo+Typora`设置好了，可以正常使用图床了写作了，不用在因为插入图片而烦恼，主要还免费>_<。
### 设置PicGo上传图片的快捷键
![](https://upload-images.jianshu.io/upload_images/15668934-74a0a5cb12b7e327?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 打开Typora测试上传图片
用截图工具如`QQ`的`Ctrl+ALT+A`快捷键对需要的区域截图，存储到剪贴板中，然后按下刚才在`picgo`设置好的上传快捷键`Ctrl+Shift+P`组合键上传到`Gitee`，会返回图片的上传地址到剪贴板中，最后在`typora`中`ctrl+v`粘贴。

## 本文参考
[Typora和PicGo使用](https://www.dazhuanlan.com/2019/10/05/5d987ea746d27)

[PicGo官方中文文档](https://picgo.github.io/PicGo-Doc/zh/)

[Typora+PicGo，最好用的Markdown+最好用的图床工具](https://blog.csdn.net/bruce_6/article/details/104821531)