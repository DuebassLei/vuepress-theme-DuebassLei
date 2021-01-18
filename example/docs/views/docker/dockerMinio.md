---
title: Docker部署MinIO对象存储服务器
date: 2020-05-01
categories:
  - Docker
tags:
  - docker
---

## 简介
>`MinIO`是世界上最快的对象存储服务器。在标准硬件上，读/写速度分别为`183 GB / s`和`171 GB / s`，对象存储可以作为主要存储层，用于`Spark，Presto，TensorFlow，H2O.ai`以及替代产品等各种工作负载用于`Hadoop HDFS`。

`MinIO`是一种高性能的分布式对象存储系统。它是软件定义的，可在行业标准硬件上运行，并且在`Apache V2`许可下是`100％`开放源代码。

## Docker部署MinIO
- 搜索`docker`仓库中`minio`相关的镜像

`docker search minio`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200501113717817.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
- 拉取镜像

`Docker pull minio/minio`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200501114312915.png)


- 启动容器并设置环境变量
```bash
docker run -p 9000:9000 --name minio \
-e "MINIO_ACCESS_KEY=youAccessKey" \
-e "MINIO_SECRET_KEY=youSecretKey" \
-v D:/docker/minio/data:/data \
-v D:/docker/minio/config:/root/.minio \
minio/minio server /data
```
>`MINIO_ACCESS_KEY` 是登录名
`MINIO_SECRET_KEY` 是密码

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200501114630963.png)
- 访问*Minio* `http://127.0.0.1:9000`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200501114705310.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
- 登录并新建BucketName
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020050111480385.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
 
 参考：
 
 [Docker部署Minio](https://www.cnblogs.com/XYYCKL/p/12066228.html)