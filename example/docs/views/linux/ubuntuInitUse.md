---
title: Ubuntu20.04LTS初体验
date: 2020-07-13
tags:
 - ubuntu
categories:
 - Linux
---

## 下载Ubuntu20.04LTS镜像
[Ubuntu官方镜像下载](https://ubuntu.com/download/desktop)
![](https://img-blog.csdnimg.cn/20200712101826306.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
## 安装
>鉴于网上安装教程太多这里就不在赘述了，自行`google`

### 注意事项
#### 分区
>Windows系统安装Ubuntu双系统分区问题，分区不合理容易造成后期 `/home`或`/usr`存储空间不足问题，建议采用以下分区方式：

1. `swap`交换空间
	- 大小：推荐与电脑内存一致
	- 分区类型：主分区
	- 分区位置：空间起始位置
	- 用于：交换空间

2. `efi`系统分区
	- 大小：`512M`,系统的引导文件都在这
	- 分区类型：逻辑分区
	- 分区位置：空间起始位置
	- 用于：`efi`系统分区

3. `/`分区
	- 大小：剩余未分配的全部空间
	- 分区类型：逻辑分区
	- 分区位置：空间起始位置
	- 挂载点：`/`
在安装启动设备器一栏，选择`efi`系统分区对应的存储空间

## 设置
### 网络镜像更换国内源
#### 	`apt软件源` 
>编辑`vim /etc/apt/sources.list`，建议先备份
![](https://img-blog.csdnimg.cn/20200712103824704.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
修改内容为：
```bash
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse

```
#### 软件和更新更换国内镜像地址
![](https://img-blog.csdnimg.cn/202007121042501.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)### 屏幕分辨率高导致显示字体过小
![](https://img-blog.csdnimg.cn/20200712104450284.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
## 安装软件

####  `ssh`
```bash
#安装ssh
sudo apt install openssh-server
#查看ssh服务状态
sudo systemctl status ssh
#更新防火墙规则
sudo ufw allow ssh
#远程ssh连接 root@470.103.27.2x
ssh username@IP 
```
![](https://img-blog.csdnimg.cn/20200712104913683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)#### `ftp`(安装自带)
```bash
#ftp远程连接 `ftp 47.103.27.2x`
ftp IP
#下载文件
ftp> get remote-filename local-filename
#上传文件
ftp> put remote-filename local-filename
```

#### 自带截图的键盘快捷键
```bash
#Pirnt Screen 为截屏键
#保存到文件夹，主目录（home）下的图片文件夹中
Print Screen  #截取整个桌面
Alt + Print Screen #截取选中的窗口
Shift + Print Screen #自由选区
#剪贴板
Ctrl + Print Screen  #整个桌面
Ctrl + Alt + Print Screen #选中的窗口
Shift + Ctrl + Print Screen #自由选区
```

#### 安装`VSCode`
>从`vscode`官网下载最新版本，[deb包下载地址](https://code.visualstudio.com/docs?dv=linux64)
```bash
#安装
dpkg -i  code_1.47.0-1594283939_amd64.deb  
```		
*注：deb安装包都是此命令格式安装*

#### 安装JDK 1.8
1. 下载
[jdk-8u221-linux-x64.tar.gz ](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
2. 解压

```bash
tar -xzvf jdk-8u221-linux-x64.tar.gz 
```
![](https://img-blog.csdnimg.cn/20200712180035846.png)
 复制到指定目录

```bash
cp -r jdk1.8.0_221 /usr/local/java/ 
```

3. 设置jdk环境变量

```bash
#编辑/etc/profile文件，在末尾添加下面配置
vim /etc/profile 

#java env
export JAVA_HOME=/usr/local/java/jdk1.8.0_221

export JRE_HOME=${JAVA_HOME}/jre

export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib

export PATH=${JAVA_HOME}/bin:$PATH

```


4. 使配置生效
```bash
source /etc/profile
```
5. 查看安装`JAVA JDK`版本
![](https://img-blog.csdnimg.cn/2020071218113165.png)验证是否安装成功！


#### Ubuntu下的飞秋版本叫信使（iptux）
```bash
sudo apt-get install iptux
```
注意事项

有一点需要注意下，默认的iptux编码格式为utf-8，所以如果不修改的话，看到的列表是这样的，有乱码的存在：
产生这个问题，请找到工具>首选项>系统>首选网络编码，输入gb2312，确定后关闭，再重新打开一下，就会看到全部都正常了。

#### Windows、Ubuntu 双系统时间不统一
如果你是双系统，安装完 Ubuntu 设置好系统时间后，回到 Windows 会发现时间不统一。为了理解为什么，我们得先了解点基础知识：

UTC(Coordinated Universal Time)，协调世界时（世界统一时间)；
GMT(Greenwich Mean Time)，格林威治标准时间。
Windows 与类 Unix 系统(Unix/Linux/Mac)看待系统硬件时间的方式是不一样的：

Windows 把计算机硬件时间当作本地时间(local time)，所以在 Windows 系统中显示的时间跟 BIOS 中显示的时间是一样的。
类 Unix 系统把计算机硬件时间当作 UTC， 所以系统启动后会在该时间的基础上，加上电脑设置的时区数(比中国就加8)，因此 Ubuntu 中显示的时间总是比 Windows 中显示的时间快 8 小时。
当你在 Ubuntu 中把系统显示的时间设置正确后，计算机硬件时间就变成了在这个时间上减去 8 小时，所以当你切换成 Windows 系统后慢了8小时，就是这个原因。

解决方案：在 Ubuntu 中把计算机硬件的时间改成系统显示时间，即禁用 Ubuntu 中的 UTC

```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

[参考写给工程师的 Ubuntu 20.04 最佳配置指南](https://sspai.com/post/60411)