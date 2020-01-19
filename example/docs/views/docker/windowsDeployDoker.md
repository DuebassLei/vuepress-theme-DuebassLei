---
title:  Windows下Intellij IDEA实现Docker部署SpringCloud项目
date: 2020-01-19
categories:
  - Docker
  - SpringCloud
tags:
  - docker
  - springcloud
---
## 前言
将本地普通的`SpringCloud`项目在IDEA下使用`Docker`部署
## 环境
- Windows 10
- IntelliJ IDEA 2018
- Docker  18.09.2
![](https://user-gold-cdn.xitu.io/2020/1/19/16fbdacb69f40bd5?w=727&h=611&f=png&s=90949)
## 本地连接不需要TLS加密
将docker与本地的连接设置为不需要TLS加密

![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd1cd5308b144?w=1042&h=717&f=png&s=89802)

## IDEA 安装Docker插件

![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd1f59d00c9af?w=1299&h=872&f=png&s=118772)

## 配置连接本地Docker


![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd20b3000d58a?w=1299&h=872&f=png&s=77294)

显示`Connection Successful` 成功连接到了本机上的`docker` !

## 打开一个本地SpringCloud项目

这是一个之前学习SpringCloud的多模块的项目，这里测试将子模块`eureka-server`部署在本地Docker上
![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd4d40150e078?w=1887&h=694&f=png&s=166850)


![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd53dcf89819f?w=1882&h=702&f=png&s=142449)

## 在项目根目录添加Dockerfile文件
```dockerfile
FROM java:8

#持久化到指定目录
VOLUME /tmp

# 将工程jar包（eureka-service-1.0-SNAPSHOT.jar）拷贝到 app.jar中
COPY target/eureka-server-1.0-SNAPSHOT.jar  app.jar

RUN bash  -c "touch /app.jar"

EXPOSE  8761
# 执行jar包  "-Djava.security.egd=file:/dev/./urandom"加快随机数产生过程

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
```

![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd5b1de93aaae?w=1868&h=463&f=png&s=87142)
## 配置编辑Docker Deployment Configuration


![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd6357a5c7b8a?w=604&h=1010&f=png&s=85903)

### 端口映射

![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd64f66aa399f?w=636&h=166&f=png&s=12120)
### 挂载目录

![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd986093a1da2?w=626&h=250&f=png&s=14686)


![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd988f6f991af?w=604&h=1010&f=png&s=61431)

## 构建Docker镜像

![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd9cb393905f1?w=1865&h=814&f=png&s=137012)
### 成功创建本地镜像,容器

![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd9b17152f5ac?w=1822&h=672&f=png&s=82170)

### 查看详细配置信息

![](https://user-gold-cdn.xitu.io/2020/1/19/16fbd9f85e93c1a7?w=1871&h=418&f=png&s=66869)

## 访问通过容器启动的Eureka服务

![](https://user-gold-cdn.xitu.io/2020/1/19/16fbda07f2f4128a?w=1903&h=985&f=png&s=138437)

### 查看正在运行的容器

![](https://user-gold-cdn.xitu.io/2020/1/19/16fbda26f7dbe611?w=1875&h=113&f=png&s=24230)