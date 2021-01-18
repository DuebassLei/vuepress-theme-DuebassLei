---
title: React之React-Router
date: 2020-10-21
categories:
  - React
tags:
  - react
---

# React 之 React-Router

> React Router 的基础使用，普通路由，嵌套子路由，404 路由

这里推荐一个学习实践 React-Router 网站

[REACT TRAINING ](https://reactrouter.com/web/guides/quick-start)

## React-Router

- react-router base 包
- react-router-dom 封装基于 react-router 的功能

### 说明

- 4.0 版本不需要路由配置，一切皆组件的设计理念
- react-router 提供 router 核心 api,包括 Router,Route,Switch 等
- react-router-dom 提供 BrowserRouter,HashRouter,Route,Link,NavLink

### 安装

```
yarn add react-router-dom
```

### react-router-dom 核心用法

- HashRouter 和 BrowserRouter
- Route: path,exact,component,render
- Navlink,Link
- Switch
- Redirect

#### HashRouter 和 BrowserRouter 区别

```
#HashRouter
http://localhost:3000/#/admin/buttons

#BrowserRouter
http://localhost:3000/admin/buttons
```

## 定义路由

### 定义路由 Home.js

```js
import React from 'react'
import {HashRouter , Route , Link, Switch} from 'react-router-dom'
import Main from './main'
import About from './about'
import Topic from './topic'
export default class Home extends React.Component{

    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}
```

### 定义路由跳转页 main.js

> 其他两个跳转路由页面同改页面定义

```js
import React from 'react'
import { Link } from 'react-router-dom'
export default class Main extends React.Component {

    render() {
        return (
            <div>
                this is main page.
            </div>
        );
    }
}
```

## 定义嵌套子路由

### 定义 router.js

```js
import React from 'react'
import {HashRouter as Router,Route,LinK} from 'react-router-dom'
import Child from './Child'
import About from './about'
import Topic from './topic'
import Home from './Home'
export default class IRouter extends React.Component{

    render(){
        return (
            <Router>
                <Home>
                    <Route path="/main" render={()=>
                        <Child>
                            <Route path="/main/a" component={About}></Route>
                        </Child>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        );
    }
}
```

### 定义嵌套子路由页

```js
import React from 'react'
import { Link } from 'react-router-dom'
export default class Child extends React.Component {

    render() {
        return (
            <div>
                this is main page.
                <Link to="/main/a">嵌套路由</Link>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
```

### Route 用法总结

```js
//路由
<Route path="/admin/ui/buttons" component={Buttons} />

//嵌套子路由
<Route path="/admin" render={()=>
   <Admin>
      <Route path="/admin/home" component={Home} />
   </Admin>
</Route>
```

**最外层路由中不能使用 exact 精准匹配**

- 获取动态路由的值是：

```
{this.props.match.params.xxx}
```

- 定义 404 不匹配路由

```js
<Route component={NoMatch}></Route>
```
