---
title: Centos常用操作
date: 2020-12-14
categories:
  - Centos
tags:
  - linux
---

## yum镜像源更换
```bash
#进入镜像源目录

cd /etc/yum.repos.d

# 备份旧的配置文件 

mv CentOS-Base.repo CentOS-Base.repo.bak 

#下载阿里源的文件 

wget -O CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo 

#清理缓存

yum clean all 

#重新生成新的缓存

yum makecache 
```

## 安装基础库
### 安装gcc
>gcc是linux下的编译器在此不多做解释，感兴趣的小伙伴可以去查一下相关资料，它可以编译 C,C++,Ada,Object C和Java等语言
```bash
#查看gcc版本 
gcc -v

#安装
yum -y install gcc

```

### pcre、pcre-devel安装
>pcre是一个perl库，包括perl兼容的正则表达式库，nginx的http模块使用pcre来解析正则表达式，所以需要安装pcre库。
```bash
#安装
yum install -y pcre pcre-devel
```
### zlib安装
>zlib库提供了很多种压缩和解压缩方式nginx使用zlib对http包的内容进行gzip，所以需要安装
```bash
#安装
yum install -y zlib zlib-devel
```



### openssl安装
>openssl是web安全通信的基石
```bash
#安装
yum install -y openssl openssl-devel
```

## 安装nginx
```bash
#1 下载nginx
wget http://nginx.org/download/nginx-1.18.0.tar.gz 

#2 解压
tar -zxvf  nginx-1.18.0.tar.gz

#3 进入nginx解压的文件目录
cd nginx-1.18.0

#4 依次运行下面命令
./configure
 
make
 
make install
 
#5 默认安装目录usr/local/nginx
cd usr/local/nginx

#配置所在文件
usr/local/nginx/conf

#切换到/usr/local/nginx/sbin，启动nginx
./nginx

#查看nginx进程,是否启动成功
ps -ef | grep nginx
```

## `firewall`防火墙
### 安装及查看服务
```bash
# 安装
yum install firewalld

# 开启服务
systemctl start firewalld.service

# 关闭服务
systemctl stop firewalld.service


#开机自动启动
systemctl enable firewalld.service

#关闭开机启动
systemctl disable firewalld.service 

#查看状态
firewall-cmd --state #running 表示运行
```
### 启用某个服务

```bash
#临时
firewall-cmd --zone=public --add-service=https

#永久
firewall-cmd --permanent --zone=public --add-service=https 
```

### 开启某个端口

```bash
#永久
firewall-cmd --permanent --zone=public --add-port=8080-8081/tcp 
#临时
firewall-cmd --zone=public --add-port=8080-8081/tcp 
```
### 伪装`IP`
>防火墙可以实现伪装IP的功能，下面的端口转发就会用到这个功能。

```bash
firewall-cmd --query-masquerade # 检查是否允许伪装IP
firewall-cmd --add-masquerade # 允许防火墙伪装IP
firewall-cmd --remove-masquerade# 禁止防火墙伪装IP
```

### 端口转发
```bash
# 将80端口的流量转发至8080
firewall-cmd --add-forward-port=port=80:proto=tcp:toport=8080 --permanent
# 将80端口的流量转发至
firewall-cmd --add-forward-port=port=80:proto=tcp:toaddr=192.168.0.1 --permanent
# 将80端口的流量转发至192.168.0.1的8080端口
firewall-cmd --add-forward-port=port=80:proto=tcp:toaddr=192.168.0.1:toport=8080 --permanent
```

### 使用命令加载设置

```bash
firewall-cmd --reload
```

### 查看开启的端口和服务

```bash
#服务空格隔开 例如 dhcpv6-client https ss
firewall-cmd --permanent --zone=public --list-services

#端口空格隔开 例如 8080-8081/tcp 8388/tcp 80/tcp
firewall-cmd --permanent --zone=public --list-ports 

```




## 修改ssh端口
### 一、修改`ssh`配置文件`sshd_config`

![编辑配置文件](https://img-blog.csdnimg.cn/20201214133118599.png)
![开启10022端口](https://img-blog.csdnimg.cn/20201214133400769.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)

### 二、防火墙设置
#### 开启`10022` 端口

```bash
#开放10022端口
firewall-cmd --zone=public --add-port=10022/tcp --permanent

#重载配置
firewall-cmd --reload
```
![开启端口](https://img-blog.csdnimg.cn/2020121413372241.png)
三、向`SELinux`中添加修改的`SSH`端口

#### 先安装`SELinux`的管理工具 `semanage` (如果已经安装了就直接到下一步) 

```bash
yum provides semanage
```
 

#### 安装运行`semanage`所需依赖工具包` policycoreutils-python`
```bash
yum -y install policycoreutils-python
```
 

#### 查询当前 `ssh` 服务端口

```bash
semanage port -l | grep ssh
```

#### 向 `SELinux` 中添加 `ssh` 端口

```bash
semanage port -a -t ssh_port_t -p tcp 10022
```
![查看并添加10022端口](https://img-blog.csdnimg.cn/20201214134314126.png)
 #### 重启 `ssh` 服务

```
systemctl restart sshd.service
```
 
测试成功后，把`22`端口注释掉即可

### 参考
- [CentOS7修改SSH端口](https://www.cnblogs.com/heqiuyong/p/11072829.html)

## 修改`root`密码
>已`root`用户登录后

```bash
#输入该命令修改密码
passwd
```
不需要重启，下此的登陆使用修改后密码进行登录。


## `Netstat` 命令
>`Netstat `命令用于显示各种网络相关信息，如网络连接，路由表，接口状态 `(Interface Statistics)，masquerade` 连接，多播成员` (Multicast Memberships)` 等等。

### 常见参数
```bash
-a (all) #显示所有选项，netstat默认不显示LISTEN相关
-t (tcp) #仅显示tcp相关选项
-u (udp) #仅显示udp相关选项
-n #拒绝显示别名，能显示数字的全部转化成数字。(重要)
-l #仅列出有在 Listen (监听) 的服務状态

-p #显示建立相关链接的程序名(macOS中表示协议 -p protocol)
-r #显示路由信息，路由表
-e #显示扩展信息，例如uid等
-s #按各个协议进行统计 (重要)
-c #每隔一个固定时间，执行该netstat命令。
```
### 常用命令
#### 列出所有端口 (包括监听和未监听的)
```bash  
netstat -a #列出所有端口
netstat -at #列出所有tcp端口
netstat -au #列出所有udp端口 
netstat -antlp
```

#### 列出所有处于监听状态的 `Sockets`
```bash
netstat -l #只显示监听端口
netstat -lt #只列出所有监听tcp端口
netstat -lu #只列出所有监听udp端口
netstat -lx #只列出所有监听UNIX端口
```

