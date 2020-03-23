---
title: Cordova+Vue打包Android Apk
date: 2020-03-23
categories:
  - Vue
  - Android
tags:
  - vue
  - android
---
## Cordova打包Vue移动端项目Android
 ### 环境要求
 >1.  Cordova 
 >2. Gradle
 >3. Android SDK
 >4. Java JDK
 >5. Node.js

### 安装Cordova
`npm install -g cordova`


![在这里插入图片描述](https://img-blog.csdnimg.cn/2020032311404728.png)


### 安装Android SDK
下载安装Android SDK [installer_r24.4.1-windows.exe](https://dl.google.com/android/installer_r24.4.1-windows.exe?utm_source=androiddevtools&utm_medium=website),安装你所需要的Android API
![](https://img-blog.csdnimg.cn/20200323113630159.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
配置Android SDK环境变量
```yaml
ANDROID_HOME:	C:\Users\Gaolei\AppData\Local\Android\android-sdk
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200323113805943.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
### 安装Gradle
[Gradle官网安装下载](https://gradle.org/install/)

下载后解压文件
![](https://img-blog.csdnimg.cn/20200323114836935.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
配置Gradle环境变量

![](https://img-blog.csdnimg.cn/20200323115054619.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
查看已安装Gradle版本
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200323115140489.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)

## Cordova创建项目
`cordova build portal-vue`
`cordova platform add android --save`

查看环境要求是否符合,如下图符合
`cordova  requirements`
![](https://img-blog.csdnimg.cn/20200323115407462.png)
构建APP，并运行demo
![](https://img-blog.csdnimg.cn/20200323115521922.png)

![](https://img-blog.csdnimg.cn/20200323115625750.png)

原始默认生成项目的apk打包
![](https://img-blog.csdnimg.cn/20200323115741840.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
默认效果
![](https://img-blog.csdnimg.cn/20200323115849159.png)
***接下来的步骤就是将vue项目整合到Cordova项目里面***
## Vue项目使用Cordova打包
### 创建一个的Vue项目
在新建的gradle项目portal-vue下新建vue项目vdemo
`vue create vdemo`
![](https://img-blog.csdnimg.cn/20200323143812695.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)

修改配置文件`vue.config.js`
```js
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static'
}
```
打包vue项目，生成dist目录
![](https://img-blog.csdnimg.cn/20200323142236151.png)
将dist目录下文件拷贝到`www/`路径下，替换原来下面的内容
***打包成 `Apk`文件***
`cordova build android `

![](https://img-blog.csdnimg.cn/20200323144451535.png)
**浏览器预览:**
[http://localhost:8000/android/www/index.html](http://localhost:8000/android/www/index.html)
`cordova serve android`
**真机预览**直接将打包后的apk文件用安卓手机即可查看效果。
![](https://img-blog.csdnimg.cn/20200323144953727.png)
![](https://img-blog.csdnimg.cn/20200323143527612.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
至此，一个简单的Vue项目通过Cordova打包成 Android APK了。

## github源码
[Duebasslei/cordova-vue-android](https://github.com/DuebassLei/cordova-vue-android.git)
