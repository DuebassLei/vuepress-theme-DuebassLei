---
title:  docker+nginx部署vue项目
date: 2020-01-02
categories:
  - Docker
tags:
  - docker
  - nginx
---

## 环境
- Centos 7
- Docker
- Nginx

 
## 将项目打包
```
yarn run build
```
打包生成生成`dist`静态资源目录
![](https://user-gold-cdn.xitu.io/2020/1/2/16f6616f82c6d37f?w=917&h=162&f=png&s=14081)


## 我这里资源文件放置在阿里云服务器`/usr/gaolei/dockers/nginx-docker`下

![](https://user-gold-cdn.xitu.io/2020/1/2/16f661a8ccc61967?w=880&h=57&f=png&s=10850)


![](https://user-gold-cdn.xitu.io/2020/1/2/16f661b145cbcf04?w=874&h=55&f=png&s=11304)

## 编写Dockerfile
```
vim Dockefile
```


![](https://user-gold-cdn.xitu.io/2020/1/2/16f661ca864e461b?w=870&h=507&f=png&s=51463)

```bash
# Base Image设置基础镜像
FROM nginx

#Define Author 定义作者
# maintainer [已遗弃]
# MAINTAINER DuebassLei 1130122701@qq.com
LABEL maintaniner="DuebassLei"

# 将文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY vueAdmin/  /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
```

## 编辑nginx.conf
```bash
worker_processes auto;
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;
 
#pid        logs/nginx.pid;
 
 
events {
    worker_connections  1024;
}
 
 
http {
    include       mime.types;
    default_type  application/octet-stream;
 
    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';
 
    #access_log  logs/access.log  main;
 
    sendfile        on;
    #tcp_nopush     on;
 
    #keepalive_timeout  0;
    keepalive_timeout  65;
 
    #gzip  on;
 
    client_max_body_size   20m;
    server {
        listen       80;
        server_name  127.0.0.1;
 
        #charset koi8-r;
 
        #access_log  logs/host.access.log  main;
     location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
        }
        #error_page  404              /404.html;
 
        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
 
        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}
 
        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}
 
        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }
 
 
    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;
 
    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
}
```


## 构建自定义镜像
```bash
# 默认使用当前目录下的Dockerfile构建
docker build -t nginx:v1 .
```

![](https://user-gold-cdn.xitu.io/2020/1/2/16f6629391224c00?w=869&h=326&f=png&s=32686)

查看镜像

```bash
docker images
```

![](https://user-gold-cdn.xitu.io/2020/1/2/16f662a80b2bdbd4?w=872&h=129&f=png&s=11991)

## 启动并查看运行容器
```bash
# -p 端口转发 宿主机端口：容器端口  
docker run -p 9999:80 -d nginx:v1
docker ps
```

![](https://user-gold-cdn.xitu.io/2020/1/2/16f6630c4e40d7af?w=871&h=116&f=png&s=13984)

## 访问效果

![](https://user-gold-cdn.xitu.io/2020/1/2/16f662f74ec0a26b?w=1917&h=770&f=png&s=49479)