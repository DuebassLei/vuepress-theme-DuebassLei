---
title: Docker安装Oracle 12c
date: 2020-03-26
categories:
  - Docker
  - Linux
  - Oracle
tags:
  - docker
  - linux
  - oracle
---
## Oracle简介
>Oracle 12c，全称Oracle Database 12c，是Oracle 11g的升级版，新增了很多新的特性
## Docker下载oracle12c
### **查找oracle镜像**
`docker search oracle`
![](https://upload-images.jianshu.io/upload_images/15668934-e26fb9fd1e3e196b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 
**下载Oracle镜像**
>我这里选择`truevoly/oracle-12c`镜像

`docker pull truevoly/oracle-12c`
### **查看已安装镜像**
![](https://upload-images.jianshu.io/upload_images/15668934-4a73af68fe9e1192.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### **启动Oracle数据库**
启动并暴露`8080&1521`端口，`8080`可以登录网页端管理，`1521`是数据连接端口:
`docker run -d -p 8080:8080 -p 1521:1521 truevoly/oracle-12c`
![](https://upload-images.jianshu.io/upload_images/15668934-84e55ca05a9c1fb3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
启动并暴露8080&1521端口，并且挂载宿主机目录 *`/var/oracle/data`* 到oracle服务器*`/u01/app/oracle`*目录，这样database数据就保存在本地宿主机上：
`docker run -d -p 8080:8080 -p 1521:1521 -v /var/oracle/data:u01/app/oracle truevoly/oracle-12c`

 启动并定制化DBCA总内存大小，DBCA_TOTAL_MEMORY (in Mb):



### **查看日志**
`docker logs -f 84d8`

![](https://upload-images.jianshu.io/upload_images/15668934-d710710456d9e487.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###  进入oracle容器
进入镜像的bash对数据库进行进一步的操作
```bash
docker exec -it 84d8 /bin/bash
```

## **连接Oracle数据库**
```yml
hostname: localhost #主机名
port: 1521 #端口号
sid: xe 
service name: xe #服务名
username: system #用户名
password: oracle #密码
```
使用navicat连接数据库
![](https://upload-images.jianshu.io/upload_images/15668934-a0a794f98db2f6d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 创建用户一般分四步：

- 第一步：创建临时表空间（可选）
- 第二步：创建数据表空间
- 第三步：创建用户并制定表空间
- 第四步：给用户授予权限
### 创建表空间
```sql
-- 创建表空间  `BKJ`
CREATE TABLESPACE BKJ 
	TEMPFILE '/u01/app/oracle/oradata/tablespace/BKJ.DBF' 
	SIZE 32M 
	AUTOEXTEND ON 
	NEXT 32 M MASIZE UNLIMITED 
	EXTENT MANAGEMENT LOCAL;
```

### 新建用户
```sql
-- 新建用户`TEST`并选择刚创建的表空间 `BKJ`
CREATE USER TEST  
	IDENTIFIED BY  123456          
		ACCOUNT UNLOCK          
		DEFAULT TABLESPACE BKJ;
```
### 赋予用户权限
```sql
-- connect,resource,dba权限赋予 test用户
GRANT CONNECT,RESOURCE,DBA TO TEST;

-- 多权限授权
GRANT CREATE USER,DROP USER,ALTER USER ,CREATE ANY VIEW ,
DROP ANY VIEW,EXP_FULL_DATABASE,IMP_FULL_DATABASE,
DBA,CONNECT,RESOURCE,CREATE SESSION TO TEST;
```
新建用户成功啦>_<

## Oracle导入dmp文件
```bash
# imp 命令导入

imp test/123456@localhost:1521/XE 
  file=/u01/app/oracle/test2020.dpm
  log=/u01/app/oracle/imp.log 
  fromuser=admin 
  touser=test 
  constraints=N ignore=y

# impdp命令导入
impdp test/123456@localhost/XE 
  DIRECTORY=DATA_PUMP_DIR 
  DUMPFILE=test2020.dpm 
  REMAP_SCHEMA=admin:test 
  REMAP_TABLESPACE=ADMIN_BKJ:BKJ
# 说明：
#  remap_schema当你从A用户导出的数据，想要导入到B用户中去，就使用这个：
#    remap_schema=A:B


#  remap_tablespace 与上面类似，数据库对象本来存在于tbs_a表空间，现在你不想放那儿了，想换到tbs_b，就用这个
#    remap_tablespace=tbs_a:tbs_b 结果是所有tbs_a中的对象都会建在tbs_b表空间中。

#提示：这样做的前提是目标用户B和目标表空间都存在

```

**参考文章**
[Docker快速搭建Oracle12c](http://www.imooc.com/article/268649?block_id=tuijian_wz)
[https://github.com/MaksymBilenko/docker-oracle-12c](https://github.com/MaksymBilenko/docker-oracle-12c)








