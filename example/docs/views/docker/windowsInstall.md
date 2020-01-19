---
title:  Windows10家庭版安装Docker(Hyper-V)
date: 2020-01-08
categories:
  - Docker
tags:
  - docker
---

## 前言
家庭版不支持`Hyper-V`，`Docker Desktop`是无法直接安装的。但其实家庭版是可以通过脚本开启`Hyper-V`来安装`Docker Desktop`的。
## 开启Hyper-V

记事本新建`Start Hyper-V.txt`文件,保存后另存为`Start Hyper-V.cmd`文件，然后以管理员身份打开这个文件。提示是否重启，输入`Y`重启,完成就能使用功能完整的Hyper-V了
```bash
pushd "%~dp0"

dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt

for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"

del hyper-v.txt

Dism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL
```


![](https://user-gold-cdn.xitu.io/2020/1/8/16f8415bedcc4d94?w=846&h=32&f=png&s=4222)

## 家庭版伪装成专业版
`Docker Desktop`会在安装的时候检测系统版本，家庭版直接安装会显示安装失败。所以需要改下注册表绕过安装检测。

***管理员权限运行如下`cmd`命令***

```
REG ADD "HKEY_LOCAL_MACHINE\software\Microsoft\Windows NT\CurrentVersion" /v EditionId /T REG_EXPAND_SZ /d Professional /F
```

![](https://user-gold-cdn.xitu.io/2020/1/8/16f841b4d38e7225?w=1640&h=209&f=png&s=27421)
**重启后此项注修改的注册表值会自动还原，但不影响docker运行**

## 下载Docker
在[官网下载](https://hub.docker.com/)`docker-ce-desktop-windows`后直接安装，默认选项使用`linux container`即可,安装完成后桌面出现`docker`快捷方式图标，双击运行，等待一会出现`Docker is running`，成功启动容器。

![](https://user-gold-cdn.xitu.io/2020/1/8/16f841f1e88b9c78?w=594&h=188&f=png&s=147315)

![](https://user-gold-cdn.xitu.io/2020/1/8/16f841e9e9de0248?w=609&h=215&f=png&s=40875)

**至此，Window家庭版成功安装Docker**

![](https://user-gold-cdn.xitu.io/2020/1/8/16f8422caf838752?w=727&h=611&f=png&s=90678)

## 使用
### 查看版本
```
docker -v
```

![](https://user-gold-cdn.xitu.io/2020/1/8/16f8421b8abeba70?w=1249&h=76&f=png&s=13784)

### 下载镜像
```
docker pull nginx
```

![](https://user-gold-cdn.xitu.io/2020/1/8/16f8424345f1c88b?w=1250&h=216&f=png&s=59454)

### 查看镜像
```
docker images
```

![](https://user-gold-cdn.xitu.io/2020/1/8/16f842536dbc5781?w=1244&h=136&f=png&s=35803)


