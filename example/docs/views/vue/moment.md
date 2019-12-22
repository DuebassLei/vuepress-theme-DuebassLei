---
title: Moment.js在vue中格式化日期
date: 2019-12-09
categories:
  - Vue
tags:
  - vue
---

## 前言

Moment是一个JavaScript 日期处理类库

## 在vue项目中

安装moment.js包

```shell
npm install moment --save
```

## 定义时间格式化全局过滤器

在需要使用的组件导入组件

```javascript
import moment from 'moment'
export default {
  name: 'Published',
  components: {
  },
  data () {
    return {
      ....
    }
  },
  filters: {
    dateFormat (time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  methods: {
  		.....
  }
```

## 在需要格式化时间的地方使用插值表达式


```html
<div>发布时间：{{ item.deploymentTime | dateFormat }}</div>           
```

## 参考

[Moment.js中文网](http://momentjs.cn/)
