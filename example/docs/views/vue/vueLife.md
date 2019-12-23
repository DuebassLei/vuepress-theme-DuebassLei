---
title: Vue生命周期
date: 2019-12-18
categories:
  - Vue
tags:
  - vue
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue生命周期</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="root"></div>
    <script>
    const app = new Vue({
        el: '#root',
        template: '<div>{{text}}</div>',
        data: {
            text: 0
        },
        beforeCreate () {
            console.log(this.$el, 'beforeCreate')
        },
        created () {
            console.log(this.$el, 'created')
        },
        beforeMount () {
            // mark，服务端渲染的时候不执行
            console.log(this.$el, 'beforeMount')
        },
        // render (h) {
        //     // 和template的作用一样，所以两个不应该同时存在
        //     // 在beforeMount 和 mounted中间执行
        //     console.log('render')
        //     return h('div', {}, this.text)
        //     // throw new TypeError('render error')
        // },
        mounted () {
            // 服务端渲染的时候不执行
            console.log(this.$el, 'mounted')
        },
        beforeUpdate () {
            // 数据更新前
            console.log(this.$el, 'beforeUpdate')
        },
        updated () {
            // 数据更新后
            console.log(this.$el, 'updated')
        },
        activated () {
            // 和组件相关
            console.log(this.$el, 'activated')
        },
        deactivated () {
            console.log(this.$el, 'deactivated')
        },
        beforeDestroy () {
            // 销毁前
            console.log(this.$el, 'beforeDestroy')
        },
        destroyed () {
            // 销毁后
            console.log(this.$el, 'destroyed')
        },
        renderError (h, err) {
            // 本组件的错才会执行，不包括子组件
            return h('div', {}, err.stack)
        },
        errorCaptured () {
            // 子组件的错也可以捕获到，会向上冒泡，正式环境可以使用
        }
    });
    setTimeout(() => {
        app.text += 1;
    }, 1000);
    setTimeout(() => {
        app.$destroy();
    }, 2000);
    </script>
</body>
</html>

```