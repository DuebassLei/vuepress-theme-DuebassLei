---
title: Cordova+Vue打包Android Apk
date: 2019-03-23
categories:
  - Vue
tags:
  - vue
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


![](https://upload-images.jianshu.io/upload_images/15668934-dfe4bed160cbf8a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 安装Android SDK
下载安装Android SDK [installer_r24.4.1-windows.exe](https://dl.google.com/android/installer_r24.4.1-windows.exe?utm_source=androiddevtools&utm_medium=website),安装你所需要的Android API
![](https://upload-images.jianshu.io/upload_images/15668934-209f210979b643ba?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
配置Android SDK环境变量
```yaml
ANDROID_HOME:	C:\Users\Gaolei\AppData\Local\Android\android-sdk
```
![](https://upload-images.jianshu.io/upload_images/15668934-5f8e78f8e5035419?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 安装Gradle
[Gradle官网安装下载](https://gradle.org/install/)

下载后解压文件
![](https://upload-images.jianshu.io/upload_images/15668934-b0fcd5a5d7f1eeae?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
配置Gradle环境变量

![](https://upload-images.jianshu.io/upload_images/15668934-b50ef5ef9dab09b1?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
查看已安装Gradle版本
![image](https://upload-images.jianshu.io/upload_images/15668934-8ce0ea0aab6ef3af?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Cordova创建项目
`cordova build portal-vue`
`cordova platform add android --save`

查看环境要求是否符合,如下图符合
`cordova  requirements`
![](https://upload-images.jianshu.io/upload_images/15668934-ac5fc8151949d350.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
构建APP，并运行demo
![](https://upload-images.jianshu.io/upload_images/15668934-bae883e6a97be791.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/15668934-b0cd37ead8b0e769.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

原始默认生成项目的apk打包
![](https://upload-images.jianshu.io/upload_images/15668934-bfa017e67bb7afeb?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
默认效果
![](https://upload-images.jianshu.io/upload_images/15668934-ff4479c3c2272368.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
***接下来的步骤就是将vue项目整合到Cordova项目里面***
## Vue项目使用Cordova打包
### 创建一个的Vue项目
在新建的gradle项目portal-vue下新建vue项目vdemo
`vue create vdemo`
![](https://upload-images.jianshu.io/upload_images/15668934-1335834231cccb53?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

修改配置文件`vue.config.js`
```js
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static'
}
```
打包vue项目，生成dist目录
![](https://upload-images.jianshu.io/upload_images/15668934-5586b3570bbb3b95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
将dist目录下文件拷贝到`www/`路径下，替换原来下面的内容
***打包成 `Apk`文件***
`cordova build android `

![](https://upload-images.jianshu.io/upload_images/15668934-5dfaad74f18b332a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**浏览器预览:**
[http://localhost:8000/android/www/index.html](http://localhost:8000/android/www/index.html)
`cordova serve android`
**真机预览**直接将打包后的apk文件用安卓手机即可查看效果。
![](https://upload-images.jianshu.io/upload_images/15668934-3ad7821192dad9bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/15668934-91957c75c0c47b1c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
至此，一个简单的Vue项目通过Cordova打包成 Android APK了。

## github源码
[Duebasslei/cordova-vue-android](https://github.com/DuebassLei/cordova-vue-android.git)
