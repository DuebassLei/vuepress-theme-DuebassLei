---
title: JavaScript 常用总结
date: 2019-12-04
categories:
  - JavaScript
tags:
  - javascript
---

## 清空对象属性值

```javascript
let obj = {a:1,b:2}
// 1. Object.key枚举所有属性
Object.keys(obj).forEach(key => obj[key]= '');
// 2. for...in循环
for(let key in obj){
         obj[key]  = ''
     }
```

> 区别：
>
> > `Object.keys()` 遍历对象本身所有可枚举的属性，不会再去原型链上寻找，而`for in`会遍历原型链上的属性，一般都要带一个`hasOwnProperty`来判断是否是自己本身持有的属性。

## 对象遍历

### `for ... in` 

> 以任意顺序遍历一个对象的除[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性。

```javascript
var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}
// 输出:
// obj.a = 1
// obj.b = 2
// obj.c = 3
```

### `Object.keys`

> 用于获取对象自身所有的可枚举的属性值，但不包括原型中的属性，然后返回一个由属性名组成的数组。注意它同`for..in`一样不能保证属性按对象原来的顺序输出。（可枚举-自身）

```javascript
// 数组
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// 类数组对象
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// 类数组对象-随机下标
var varObj = { 120: 'a', 5: 'b', 8: 'c' };
console.log(Object.keys(varObj)); // console: ['5', '8', '120']
```

### `for...of` 

> 在[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/iterable)（包括 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array)，[`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Map)，[`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)，[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String)，[`TypedArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)，[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

####  迭代Array

```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}

// output:
// 11
// 21
// 31
```

如果你不想修改语句块中的变量 , 也可以使用[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)代替`let`。

```javascript
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}

//output:
// 10
// 20
// 30
```

####  ​迭代String

```javascript
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}

// "b"
// "o"
// "o"

```

####  迭代Map

```javascript
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ["a", 1]
// ["b", 2]
// ["c", 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

####  ​迭代Set

```js
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

## 对象拷贝

### 方法一： `Object.assign()`

```javascript
//浅拷贝
const a = {a: 1};
const b = {};
Object.assign( b, a)
```

### 方法二 ：`ES6`扩展运算符(`...`)

```javascript
//浅拷贝
const a = {a: 1};
const b = {...a};
```

### 方法三 ：`json`

```javascript
//深拷贝
const obj1 = {a: 1};
const obj2 = JSON.parse(JSON.stringify(obj1));
```

## FormData
>接口提供了一种表示表单数据的键值对的构造方式,如果送出时的编码类型被设为 "multipart/form-data"，它会使用和表单一样的格式。

###  新建`FormData`对象并添加数据
```javascript
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');
```

###  FormData.values() 
方法返回一个允许遍历该对象中所有值的 迭代器 。这些值是 `USVString` 或是`Blob`对象。
```javascript
// 获取所有值
for (var value of formData.values()) {
   console.log(value); 
}
//output:
//  value1
//  value2
```
###  遍历对象属性、值插入FormData
```javascript
      let obj = { 
              userName: "zhang san",
              password: "root1234",
              tel: "8008208820",
              address: "北京",
              email: "test@163.com"
            };
      const formData = new FormData();
      
      Object.keys(obj).forEach(key => {
        formData.append(key, obj[key]);
      });
```

## fetch
###  基本使用
```javascript
fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch((err) => {})
  ```

  ###  请求选项
  ```javascript
  fetch('/data.json', {
  method: 'post',
  body: new FormData(form), // post body
  body: JSON.stringify(...),

  headers: {
    'Accept': 'application/json'
  },

  credentials: 'same-origin', // send cookies
  credentials: 'include',     // send cookies, even in CORS

})
  ```
###  与node.js一起使用
```javascript
const fetch = require('isomorphic-fetch')
```

###  响应
```javascript
fetch('/data.json')
.then(res => {
  res.text()       // response body (=> Promise)
  res.json()       // parse via JSON (=> Promise)
  res.status       //=> 200
  res.statusText   //=> 'OK'
  res.redirected   //=> false
  res.ok           //=> true
  res.url          //=> 'http://site.com/data.json'
  res.type         //=> 'basic'
                   //   ('cors' 'default' 'error'
                   //    'opaque' 'opaqueredirect')

  res.headers.get('Content-Type')
})
```

###  捕捉异常
```javascript
fetch('/data.json')
  .then(checkStatus)


function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    let err = new Error(res.statusText)
    err.response = res
    throw err
  }
}
```
非2xx响应仍然是成功的请求。使用另一个函数将其转换为错误。
>参考
- https://fetch.spec.whatwg.org/
- https://www.npmjs.com/package/whatwg-fetch


## Axios基本使用
>`Axios` 是一个基于 `promise` 的 `HTTP` 库，可以用在浏览器和 node.js 中。

###  特点
- 从浏览器中创建 XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF

###  执行 `GET` 请求
```js
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 可选地，上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
###  执行 `POST` 请求
```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

###  执行多个并发请求
```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
```
###  `Axios API`
可以通过向 `axios` 传递相关配置来创建请求
- axios(config)

```js
// 发送 POST 请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

- axios(url[, config])
```js
// 发送 GET 请求（默认的方法）
axios('/user/12345');
```
###  并发
处理并发请求的助手函数
```js
axios.all(iterable)
axios.spread(callback)
```
###  创建实例
可以使用自定义配置新建一个 axios 实例
```js
axios.create([config])
var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```
###  请求配置
这些是创建请求时可以用的配置选项。只有 `url` 是必需的。如果没有指定 `method`，请求将默认使用 `get` 方法。
```js
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认是 get

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认的

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的

  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: : {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```
###  响应结构
- 某个请求的响应包含以下信息
```js
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

  // `config` 是为请求提供的配置信息
  config: {}
}
```

- 使用 then 时，你将接收下面这样的响应：
```js
axios.get('/user/12345')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```
在使用 `catch` 时，或传递 `rejection callback` 作为 `then` 的第二个参数时，响应可以通过 `error` 对象可被使用，正如在错误处理这一节所讲。

###  配置的默认值/defaults
你可以指定将被用在各个请求的配置默认值
- 全局的 `axios` 默认值
```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```
- 自定义实例默认值
```js
// 创建实例时设置配置的默认值
var instance = axios.create({
  baseURL: 'https://api.example.com'
});
// 在实例已创建后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```
###  配置的优先顺序
配置会以一个优先顺序进行合并。这个顺序是：在 `lib/defaults.js` 找到的库的默认值，然后是实例的 `defaults` 属性，最后是请求的 `config` 参数。后者将优先于前者。这里是一个例子：
```js
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create();

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500;

// 为已知需要花费很长时间的请求覆写超时设置
instance.get('/longRequest', {
  timeout: 5000
});
```
###  拦截器
在请求或响应被 then 或 catch 处理前拦截它们。
```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```
如果你想在稍后移除拦截器，可以这样：
```js
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```
可以为自定义 axios 实例添加拦截器
```js
var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```
###  错误处理
```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```
可以使用 `validateStatus` 配置选项定义一个自定义 `HTTP` 状态码的错误范围。
```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 状态码在大于或等于500时才会 reject
  }
})
```
###  `TypeScript`
axios includes TypeScript definitions.
```js
import axios from 'axios';
axios.get('/user?ID=12345');
```


