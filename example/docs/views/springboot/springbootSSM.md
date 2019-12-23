---
title: SpringBoot2.x | 搭建SSM框架并整合Mybatis-Generator
date: 2018-12-31
categories:
  - SpringBoot
tags:
  - springboot
  - mybatis
---

## 题记

最近忙于实习，转眼2018年只剩下 一天，2019年即将来临。

**明年六月的毕设也到了该准备的阶段，经过一些实践和参考网上的博文，毕设将采用SSM作为基础框架。**

## 本文两个实践知识点

1.  基于SpringBoot 2.x搭建SSM框架

2.  整合Mybatis-Generator代码生成器

## 在IDEA2018下SpringBoot 2.x搭建SSM框架并整合mybaits代码生成器

1.  new project -->spring initializr

> ![](https://upload-images.jianshu.io/upload_images/4335059-6b6cf0c1bbc4c74a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2.  Maven Project

> ![](https://upload-images.jianshu.io/upload_images/4335059-99d0dc1e2a790cb7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3.  勾选web,mybaits,mysql,后面可在pom.xml文件中修改添加所需依赖

> ![](https://upload-images.jianshu.io/upload_images/4335059-eed43888d3839513.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 
>   ![](https://upload-images.jianshu.io/upload_images/4335059-f84bb74624c21c46.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4.  填写项目基础信息，这里我新建名为ssmApp项目

> ![](https://upload-images.jianshu.io/upload_images/4335059-62b2fcb003da342f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

5.  初始项目结构

> ![](https://upload-images.jianshu.io/upload_images/4335059-e29d3b437e6e10ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

6.  pom.xml中的mybatis依赖
```xml
 <dependency>
 <groupId>org.mybatis.spring.boot</groupId>
 <artifactId>mybatis-spring-boot-starter</artifactId>
 <version>1.3.2</version>
 </dependency>
```
7.  建立如下包  ![](http://upload-images.jianshu.io/upload_images/4335059-8faf5b6e6fd617a7.jpg) 

8.  在pom.xml中引入Mybatis-Generator依赖
```xml
 <!-- https://mvnrepository.com/artifact/org.mybatis.generator/mybatis-generator-core -->
 <dependency>
 <groupId>org.mybatis.generator</groupId>
 <artifactId>mybatis-generator-core</artifactId>
 <version>1.3.6</version>
 </dependency>
```
9.  编写`generatorConfig.xml`文件
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
 PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
 "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
​
<generatorConfiguration>
 <context id="testTables" targetRuntime="MyBatis3">
 <commentGenerator>
 <!-- 是否去除自动生成的注释 true：是 ： false:否 -->
 <property name="suppressAllComments" value="true"/>
 </commentGenerator>
 <!--数据库连接的信息：驱动类、连接地址、用户名、密码 -->
 <jdbcConnection driverClass="com.mysql.cj.jdbc.Driver"
 connectionURL="jdbc:mysql://127.0.0.1:3306/test?useUnicode=true&amp;characterEncoding=utf8&amp;useSSL=false"
 userId="root"
 password="root">
 </jdbcConnection>
 <!-- 默认false，把JDBC DECIMAL 和 NUMERIC 类型解析为 Integer，为 true时把JDBC DECIMAL 和
 NUMERIC 类型解析为java.math.BigDecimal -->
 <javaTypeResolver>
 <property name="forceBigDecimals" value="false"/>
 </javaTypeResolver>
​
 <!-- targetProject:生成实体类的位置 -->
 <javaModelGenerator targetPackage="com.gaolei.domain"
 targetProject="src/main/java">
 <!-- enableSubPackages:是否让schema作为包的后缀 -->
 <property name="enableSubPackages" value="false"/>
 <!-- 从数据库返回的值被清理前后的空格 -->
 <property name="trimStrings" value="true"/>
 </javaModelGenerator>
 <!-- targetProject:mapper.xml映射文件生成的位置 -->
 <sqlMapGenerator targetPackage="mapper"
 targetProject="src/main/resources">
 <!-- enableSubPackages:是否让schema作为包的后缀 -->
 <property name="enableSubPackages" value="false"/>
 </sqlMapGenerator>
 <!-- targetPackage：mapper接口生成的位置 -->
 <javaClientGenerator type="XMLMAPPER"
 targetPackage="com.gaolei.dao"
 targetProject="src/main/java"
 >
 <!-- enableSubPackages:是否让schema作为包的后缀 -->
 <property name="enableSubPackages" value="false"/>
 </javaClientGenerator>
 <!-- 指定数据库表 -->
 <table  tableName="roles"   domainObjectName="Roles"    enableCountByExample="false" enableUpdateByExample="false" enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false" />
 <!-- 有些表的字段需要指定java类型
 <table schema="" tableName="">
 <columnOverride column="" javaType="" />
 </table> -->
 </context>
</generatorConfiguration>
```

10.  编写`GeneratorSqlmap.java`
```java
package com.gaolei.generator;
​
import org.apache.ibatis.io.Resources;
import org.mybatis.generator.api.MyBatisGenerator;
import org.mybatis.generator.config.Configuration;
import org.mybatis.generator.config.xml.ConfigurationParser;
import org.mybatis.generator.internal.DefaultShellCallback;
​
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
​
public class GeneratorSqlmap {
​
 public void generator() throws Exception {
 List<String> warnings = new ArrayList<String>();
 boolean overwrite = true;
 /*指定 逆向工程配置文件*/
​
 String file = "generatorConfig.xml";
 InputStream in = Resources.getResourceAsStream(file);
 ConfigurationParser cp = new ConfigurationParser(warnings);
 Configuration config = cp.parseConfiguration(in);
 DefaultShellCallback callback = new DefaultShellCallback(overwrite);
 MyBatisGenerator myBatisGenerator = new MyBatisGenerator(config,
 callback, warnings);
 myBatisGenerator.generate(null);
 in.close();
 }
 public static void main(String[] args) throws Exception {
 try {
 GeneratorSqlmap generatorSqlmap = new GeneratorSqlmap();
 generatorSqlmap.generator();
 System.out.println("生成成功");
 } catch (Exception e) {
 e.printStackTrace();
 }
​
​
 }
}
```
11.  编写`application.properties`配置文件

## 数据源配置
```yaml
spring.datasource.url=jdbc:mysql://localhost:3306/test?characterEncoding=utf8&useSSL=false&useUnicode=true
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
## Mybatis 配置
mybatis.typeAliasesPackage=com.gaolei.domain
mybatis.mapperLocations=classpath:mapper/*.xml
```

12.  在启动类中添加扫描
```java
package com.gaolei;
​
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
​
@SpringBootApplication
//mapper 接口类扫描包配置
@MapperScan ("com.gaolei.dao")
public class SsmdemoApplication {
 public static void main(String[] args) {
 SpringApplication.run(SsmdemoApplication.class, args);
 }
}
```

13.  生成代码  ![](https://upload-images.jianshu.io/upload_images/4335059-3f87b4d372762a8d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

14.  编写测试类`RolesRestController.java`  ![](https://upload-images.jianshu.io/upload_images/4335059-47d84c5917d9d2c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

15.  访问地址`http://localhost:8080/api/getRoles?id=1`  ![](https://upload-images.jianshu.io/upload_images/4335059-89566b02ef7c6380.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

使用Postman抓取数据信息：  ![](https://upload-images.jianshu.io/upload_images/4335059-b30d58f1c88f6ade.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

## 获取源码

*留言邮箱*
