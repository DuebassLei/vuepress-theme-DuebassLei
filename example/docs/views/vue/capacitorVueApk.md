---
title: Capacitor+Vue+Vant移动端打包总结
date: 2020-04-23
categories:
  - Vue
tags:
  - vue
  - vant
  - android
---
## Capacitor+Vue+Vant移动端打包总结

>本笔记为打包`Vue`移动端`Android Apk`
### 打包步骤
>`Capacitor`与`Vue`项目结合基本配置自行百度/谷歌，这里是已集成配置好的项目。

***步骤：***
- `npm run build`打包`vue`项目生成`dist`目录
![dist](https://img-blog.csdnimg.cn/20200423185407718.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
- `npx cap sync`同步依赖和拷贝文件`dist`下文件到`Android`的`assets`目录下
![Android](https://img-blog.csdnimg.cn/20200423185644152.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20200423185917135.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
- `npx cap open android `自动调用打开Android Studio工具构建项目，编译调试即可。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200423190504561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)






### Capacitor基本命令
```bash
#安装 Capacitor
npm install --save @capacitor/core @capacitor/cli

#初始化 Capacitor，会要求输入 App Name、App ID
npx cap init

#添加 iOS 或 Android 平台
npx cap add ios 
npx cap add android 

#自动打开 Xcode 或 Android Studio 打包工程。
npx cap open ios 
npx cap open android 

#拷贝`www`目录到iOS或Android工程
 npx cap copy ios
 npx cap copy android 
 
#安装插件或依赖后更新iOS或Androd工程的依赖
 npx cap update ios npx cap update android 
 
 #同步工程包括更新依赖以及拷贝`www`目录，相当于`copy`+`update`
 npx cap sync
 
 #打开浏览器测试PWA
 npx cap serve 
```



### 问题一
在使用Capacitor打包Android项目上运行该应用程序时遇到问题。
Android Studio拒绝运行项目并显示以下错误：

>错误：无法找到脚本“：`xxx\android\capacitor-cordova-android-plugins\cordova.variables.gradle`”它不存在。

![errors](https://img-blog.csdnimg.cn/20200422174631170.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
#### 解决办法
如果您无法在android项目文件夹中找到`capacitor-cordova-android-plugins`文件夹，则需要运行`capacitor`命令来创建它（并更新插件变量）：
```bash
npx cap sync
```
通过手动再次同步`Gradle`文件可以解决此问题

### 问题二
>`This version of Android Studio cannot open this project, please retry with Android Studio 3.5 or newer`

出现这个问题是因为使用的Gradle版本太高，只需要将gradle降级就可以，或者使用本地还能编译的配置版本替换即可。




`classpath 'com.android.tools.build:gradle:3.3.1'`

[参考Stackoverflow问题](https://stackoverflow.com/questions/54784948/this-version-of-android-studio-cannot-open-this-project-please-retry-with-andro )

#### 解决办法一
> 降低`gradle`版本

- 修改`build.gradle`
	```bash
	classpath 'com.android.tools.build:gradle:3.3.1'
	```
- 修改`gradle-wrapper.properties`
	```bash
	distributionUrl=https\://services.gradle.org/distributions/gradle-4.10.1-all.zip
	```
#### 解决方法二：
>升级`Android studio`版本新版本