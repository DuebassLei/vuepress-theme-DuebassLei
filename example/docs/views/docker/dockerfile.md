---
title: Docker之Dockerfile指令
date: 2020-04-02
categories:
  - Docker
tags:
  - docker
---
## Dockerfile关于
　在`Docker`中创建镜像最常用的方式，就是使用`Dockerfile`。`Dockerfile`是一个`Docker`镜像的描述文件，`Dockerfile`包含了一条条的指令，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。

## `Dockerfile`思维导图
![](https://upload-images.jianshu.io/upload_images/15668934-8fc9d137e3a31f9d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## `Dockerfile`示例

```bash
# FROM指定所需依赖的基础镜像 ,格式：FROM <image>:<tag>
FROM java:8

# 持久化到指定目录
VOLUME /tmp

# ADD复制文件，格式：ADD <src> <dest>
ADD eureka-server-1.0-SNAPSHOT.jar  app.jar

# RUN在容器构建过程中执行的命令,格式：RUN <command>
RUN bash  -c "touch /app.jar"

# EXPOSE声明需要对外暴露的端口
EXPOSE  8761

#ENTRYPOINT  指定docker容器启动时执行的命令
##"-Djava.security.egd=file:/dev/./urandom" 加快随机数产生过程
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"] 
```

##  `Dockerfile`常用指令

## 2.1 FROM

　　指明构建的新镜像是来自于哪个基础镜像，例如：

```bash
FROM centos:6
```

## 2.2 MAINTAINER

　　指明镜像维护者及其联系方式（一般是邮箱地址），例如：

```bash
MAINTAINER DuebassLei <1130122701@qq.com>
```

　　不过，`MAINTAINER`并不推荐使用，更推荐使用LABEL来指定镜像作者，例如：

```bash
LABEL maintainer="DuebassLei"
```

## 2.3 RUN

　　构建镜像时运行的`Shell`命令，例如：

```bash
RUN ["yum", "install", "httpd"]
RUN yum install httpd
```

## 2.4 CMD

　　启动容器时执行的`Shell`命令，例如：

```bash
CMD ["-C", "/start.sh"] 
CMD ["/usr/sbin/sshd", "-D"] 
CMD /usr/sbin/sshd -D
```

## 2.5 EXPOSE

　　声明容器运行的服务端口，例如：

```bash
EXPOSE 80 443
```

## 2.6 ENV

　　设置环境内环境变量，例如：

```bash
ENV MYSQL_ROOT_PASSWORD 123456
ENV JAVA_HOME /usr/local/jdk1.8.0_45
```

## 2.7 ADD

　　拷贝文件或目录到镜像中，例如：

```bash
ADD <src>...<dest>
ADD html.tar.gz /var/www/html
ADD https://xxx.com/html.tar.gz /var/www/html
```

　　***PS：***如果是URL或压缩包，会自动下载或自动解压。

## 2.8 COPY

　　拷贝文件或目录到镜像中，用法同ADD，只是不支持自动下载和解压，例如：

```bash
COPY ./start.sh /start.sh
```

## 2.9 ENTRYPOINT

　　启动容器时执行的`Shell`命令，同`CMD`类似，只是由`ENTRYPOINT`启动的程序**不会被docker run命令行指定的参数所覆盖**，而且，**这些命令行参数会被当作参数传递给ENTRYPOINT指定指定的程序**，例如：

```bash
ENTRYPOINT ["/bin/bash", "-C", "/start.sh"]
ENTRYPOINT /bin/bash -C '/start.sh'
```

　　***PS：***`Dockerfile`文件中也可以存在多个`ENTRYPOINT`指令，但仅有最后一个会生效。

## 2.10 VOLUME

　　指定容器挂载点到宿主机自动生成的目录或其他容器，例如：

```bash
VOLUME ["/var/lib/mysql"]
```

　　***PS：***一般不会在Dockerfile中用到，更常见的还是在docker run的时候指定-v数据卷。

## 2.11 USER

　　为RUN、CMD和ENTRYPOINT执行Shell命令指定运行用户，例如：

```bash
USER <user>[:<usergroup>]
USER <UID>[:<UID>]
USER edisonzhou
```

## 2.12 WORKDIR

　　为RUN、CMD、ENTRYPOINT以及COPY和AND设置工作目录，例如：

```bash
WORKDIR /data
```

## 2.13 HEALTHCHECK

　　告诉Docker如何测试容器以检查它是否仍在工作，即健康检查，例如：

```bash
HEALTHCHECK --interval=5m --timeout=3s --retries=3 \
    CMD curl -f http:/localhost/ || exit 1
```

> 一些选项的说明：

- `  --interval=DURATION (default: 30s)`：每隔多长时间探测一次，默认30秒
-  `-- timeout= DURATION (default: 30s)`：服务响应超时时长，默认30秒
-  `--start-period= DURATION (default: 0s)`：服务启动多久后开始探测，默认0秒
-  `--retries=N (default: 3)`：认为检测失败几次为宕机，默认3次

> 一些返回值的说明：

-  ` 0`：容器成功是健康的，随时可以使用
-  `1`：不健康的容器无法正常工作
-  `2`：保留不使用此退出代码

## 2.14 ARG

　　在构建镜像时，指定一些参数，例如：

```bash
FROM centos:6
ARG user # ARG user=root
USER $user
```

　　这时，我们在docker build时可以带上自定义参数user了，如下所示：

```bash
docker build --build-arg user=DuebassLei Dockerfile .
```


### *参考*
[你必须知道的Dockerfile](https://www.cnblogs.com/edisonchou/p/dockerfile_inside_introduction.html)

[Dockerfile reference](https://docs.docker.com/engine/reference/builder/)