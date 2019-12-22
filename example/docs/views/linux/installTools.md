---
title: Centos安装Node,Npm,Yarn
date: 2019-12-05
tags:
 - Centos
categories:
 - centos
---

## 下载Node
```
wget https://npm.taobao.org/mirrors/node/v12.9.1/node-v12.9.1-linux-x64.tar.xz
```
## 解压
```
tar -xvf node-v12.9.1-linux-x64.tar.xz
```
## 重命名 `node` 

```
mv node-v12.9.1-linux-x64 node
```
![image.png](https://cdn.nlark.com/yuque/0/2019/png/215812/1567409104614-57a0cd86-5115-49cc-a3a9-68cc82bac925.png#align=left&display=inline&height=137&name=image.png&originHeight=171&originWidth=1076&size=43200&status=done&width=860.8)
## 建立软连接，变为全局

```
 ln -s /usr/gaolei/project/node/bin/npm /usr/local/bin/
 
 ln -s /usr/gaolei/project/node/bin/node  /usr/local/bin/
```
![image.png](https://cdn.nlark.com/yuque/0/2019/png/215812/1567409291346-a4a2475d-180c-498e-80ba-9a2be72fdf30.png#align=left&display=inline&height=237&name=image.png&originHeight=296&originWidth=1084&size=58127&status=done&width=867.2)

# 安装Yarn
```
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo

sudo yum install yarn
```
![image.png](https://cdn.nlark.com/yuque/0/2019/png/215812/1567409612530-b3fe210a-cd77-4bdd-8843-570be8950c6f.png#align=left&display=inline&height=42&name=image.png&originHeight=53&originWidth=1078&size=7890&status=done&width=862.4)
