---
title: Ionic 构建 Vue Web App
date: 2019-12-31
categories:
  - Vue
tags:
  - ionic
  - vue
---
## 创建vue项目

```vue
vue create ionic-vue
```
![](https://upload-images.jianshu.io/upload_images/15668934-c7249c3103f14274.png&originHeight=867&originWidth=1618&size=122732&status=done&style=none&width=809?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

构建成功,运行：

```shell
yarn run serve
```

![](https://upload-images.jianshu.io/upload_images/15668934-032ac6c543779a4a.5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在浏览器中输入： `locahost:8081` 
![](https://upload-images.jianshu.io/upload_images/15668934-63ecbbcb28d0f300.png&originHeight=903&originWidth=1920&size=88233&status=done&style=none&width=960?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 安装ionic相关依赖
安装ionic相关依赖（其中@ionic/core是组件部分，@ionic/vue是封装成Vue方式调用的接口部分）：

```shell
yarn add @ionic/vue @ionic/core vue-router
```

![](https://upload-images.jianshu.io/upload_images/15668934-f27222b6a037cf39.png&originHeight=701&originWidth=1556&size=171023&status=done&style=none&width=778?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/15668934-21bf9c50c6287f0d.png&originHeight=374&originWidth=1536&size=90584&status=done&style=none&width=768?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 在main.js中添加配置
```javascript
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
Vue.use(Ionic);
```

## 服务启动报警告：

```javascript
 WARNING Compiled with 1 warnings 
 WARNING  Compiled with 1 warnings      
 WARNING  in ./node_modules/@ionic/vue/dist/ionic-vue.esm.js

"export 'ICON_PATHS' was not found in 'ionicons/icons'
```

![](https://upload-images.jianshu.io/upload_images/15668934-eb9e529e451d36b3.5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 解决办法：
安装 `ionicons` 依赖
```bash
yarn add ionicons
```
![](https://upload-images.jianshu.io/upload_images/15668934-95ddd8ec49dd9b98.png&originHeight=372&originWidth=1560&size=86136&status=done&style=none&width=780?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)再次启动服务 `yarn serve` 



## 使用 `ionic`  的 `UI`  组件
> 重写 `HelloWorld.vue` 页面


```vue
<template>
 <ion-app>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>卡片</ion-title>
      </ion-toolbar>
    </ion-header>,
    <ion-content fullscreen>
      <ion-card>
        <img src="./madison.jpg" />
        <ion-card-header>
          <ion-card-subtitle>目的地</ion-card-subtitle>
          <ion-card-title>威斯康星州麦迪逊</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          麦迪逊于1829年在莫诺纳湖和门多塔湖之间的地峡上建立，1836年被命名为威斯康星州的首府。
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
      --ion-safe-area-top: 20px;
      --ion-safe-area-bottom: 22px;
    }
</style>

```


### 注意
若IDE编辑器中或者浏览器控制台提示 `unknown element` , 这是因为 `ionic`  组件是 `web`  组件，所以你需要告诉 `vue` ,以 `ion` 前缀开头的组件不是 `Vue` 组件，需要在 `src/main.js` 中添加如下设置：
```javascript
Vue.config.ignoredElements = [/^ion-/]
```

## 效果

![](https://upload-images.jianshu.io/upload_images/15668934-56027f98c12cac28.png&originHeight=737&originWidth=414&size=193579&status=done&style=none&width=207?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 参考
[Ionic Framework官网](https://ionicframework.com/) 

