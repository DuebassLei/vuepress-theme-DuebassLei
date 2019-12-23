---
title: 常见代理设置
date: 2019-12-07
tags:
 - proxy
categories:
 - Linux
---

## Git代理设置

### 设置代理

```sh
git config --global https.proxy 代理地址
git config --global http.proxy 代理地址
```

### 查看当前已设置的代理

```sh
git config --global  --get https.proxy

git config --global  --get https.proxy
```

### 取消代理

```sh
git config --global --unset http.proxygit config --global --unset https.proxy
```

##  `npm`设置代理

```sh
npm config set proxy http://10.22.129.20:8080
npm config set proxy https://10.22.129.20:8080
```

## `yarn`设置代理

### 配置国内镜像-淘宝镜像

```sh
yarn config set registry https://registry.npm.taobao.org
```

### 查看代理

```sh
yarn config list
```

### 设置代理

```sh
yarn config set proxy http://10.22.3.21:8080  http://username:password@server:port
yarn confit set https-proxy http://username:password@server:port
```

### 取消代理

```sh
yarn config delete proxy
yarn config delete https-proxy
```







