---
title: Vue动态路由传参
date: 2020-04-20
categories:
  - Vue
tags:
  - vue
---

## Vue动态路由传参

- query传参
- params传参

```js
//定义Detail路由
{
     path: '/detail/:id',
     name: 'Detail'
     component: () => import('@/views/Detail.vue')
}
```

### 1.query方式传参和接收参数

传参: 

```js
this.$router.push({
        path:'/detail/:id',
        query:{
          id:id
        }
      })
```

接收参数:

```js
this.$route.query.id
```

*Tips:*

> 传参是this.$router,接收参数是this.$route,这里千万要看清了！！！

### 2.params方式传参和接收参数

传参: 

```js
this.$router.push({
        name:'Detail',
        params:{
          id:id
        }
      })
```

接收参数:

```js
this.$route.params.id
```

*Tips:*

> params传参，push里面只能是 name:'xxxx',不能是path:'/xxx',因为params只能用name来引入路由，如果这里写成了path，接收参数页面会是undefined！！！

#### **另外，二者还有点区别：**

- 1. 接收参数

```js
// query通过this.$route.query接收参数
created () {
    const id = this.$route.query.id;
}
 
// params通过this.$route.params来接收参数
created () {
    const id = this.$route.params.id;
}
```

- 2. 切换路由

```js
// query通过path切换路由
<router-link :to="{path: 'Detail', query: { id: 1 }}">前往Detail页面</router-link>
// params通过name切换路由
<router-link :to="{name: 'Detail', params: { id: 1 }}">前往Detail页面</router-link>复制代码
```



> 简单说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，浏览器刷新页面不会消失，而params相当于post请求，参数不会在地址栏中显示，浏览器刷新页面后消失。



### 3.**this.$router和this.$route有何区别？**

> 在控制台打印两者可以很明显的看出两者的一些区别：

![clipboard.png](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9zZWdtZW50ZmF1bHQuY29tL2ltZy9iVmJiSTdm?x-oss-process=image/format,png)

- 1.$router为VueRouter实例，想要导航到不同URL，则使用$router.push方法。
- 2.$route为当前router跳转对象，可以获取name、path、query、params等。





## Vue监听路由

#### 方式一：监听$router

> **复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） `$route` 对象：**



```js
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
```

#### 方式二：**唯一值 `key`** **属性**

> **Vue 为你提供了一种方式来声明“这两个元素是完全独立的——不要复用它们”。只需添加一个具有唯一值的 `key`** **属性即可**

```js
<router-view :key="key"></router-view>

computed: {
    key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    }
 }
```

*使用computed属性和Date()可以保证每一次的key都是不同的，这样就可以如愿刷新数据了。*

### 实践

#### 1. 定义路由

```js
      {
          path: '/hse/problem/prMain/deal/:id',
          component: () => import('@/views/hse/Problem/PrDeal.vue'),
          meta: {
            keepAlive: true
          }
        },
```

#### 2. 动态路由传参

```js
 	handleDeal(id){
              this.$router.push(
                {
                  path: `/hse/problem/prMain/deal/${id}`,
                  params: {id: id}
                }
              )
            }
```

#### 3. 监听路由

```js
          watch:{
           //监听路由
           $route(){
             if(this.$route.params!==null){
               this.paramId = this.$route.params.id;
             }
           },
            paramId(newVal,oldVal){
              if(newVal !== undefined && newVal !== null){
                  //初始化数据	
                  this.init();
              }
            }
          }
```

#### 4. init方法初始化数据

```js
methods:{
              //初始化数据
              init(){
                let vm = this;
                vm.$nextTick(()=>{
                  vm.$axios.get(`/hse/sim/prProblem/v1/get/${vm.dataId}`).then(reply=>{
                    vm.form = reply.data;
                  }).catch(e=>{
                    vm.$toast.fail(e);
                  })
                })
              }
}
```



