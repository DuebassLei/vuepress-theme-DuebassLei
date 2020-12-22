---
title: Javascript之简单理解async/await
date: 2020-12-06
categories:
  - Javascript
tags:
  - javascript
  - promise
---

## 什么是async？什么是await？

在`JavaScript`的世界，同步`sync`异步`async`的爱恨情仇，就如同偶像剧一般的剪不断理还乱，特别像是`setTimeout`、`setInterval`、`MLHttpRequest`或`fetch`这些同步、异步混杂的用法，都会让人一个头两个大，幸好`ES6`出现了`promise`，`ES7`出现了`async、await`，帮助我们可以更容易的进行代码逻辑的撰写。


对于同步和异步理解，使我觉得比较好理解的方法：「**同一个跑道vs不同跑道**」，透过跑步的方式，就更容易明白同步和异步。

> - 同步：在「*同一个跑道*」比赛「接力赛跑」，当棒子没有交给我，我就得等你，不能跑。
> - 异步：在「*不(非)同跑道*」比赛「赛跑」，谁都不等谁，只要轮到我跑，我就开始跑。

![简单理解JavaScript Async 和Await](https://img-blog.csdnimg.cn/img_convert/6668aab5ca1bebc3efb509200780f018.png)

在`ES7`里`async`的本质是`promise`的语法糖，*只要`function`标记为`async`，就表示里头可以撰写`await`的同步语法*，而`await`顾名思义就是「等待」，它会确保一个`promise`函数都执行到解决(` resolve` )或出错( `reject `)后才会进行下一步，当`async function`的内容全都结束后，会返回一个`promise`，这表示后方可以使用`.then`语法来做连接，基本的代码就像下面这样：

```js
async function a(){
  await b();
  .....       // 等 b() 完成後才會執行
  await c();
  .....       // 等 c() 完成後才會執行
  await new Promise(resolve=>{
    .....
  });
  .....       // 上方的 promise 完成後才會執行
}
a();
a().then(()=>{
  .....       // 等 a() 完成後接著執行
});
```

## 利用async 和await 做个「漂亮的等待」

比较了解`async`和`await`的意思之后，就来试试看做个「*漂亮的等待*」，使用`ES6` 的`promise`来实现`delay` (如同下方的代码范例) ，这个`delay`透过`.then`来完成一步一步的串接，虽然逻辑上很清楚，但若要实作比较复杂的流程，就得把每个代码写在对应的`callback`里，也就没有想像的容易，这就是「不太漂亮的等待」 (使用setTimeout的做法就是不漂亮的等待)。

```js
const delay = (s) => {
  return new Promise(resolve => {
    setTimeout(resolve,s); 
  });
};

delay().then(() => {
  console.log(1);     // 顯示 1
  return delay(1000); // 延遲ㄧ秒
}).then(() => {
  console.log(2);     // 顯示 2
  return delay(2000); // 延遲二秒
}).then(() => {
  console.log(3);     // 顯示 3
});
```

如果我们把上面的代码修改为`async`和`await`的写法，突然就发现代码看起来非常的干净，因为`await`会等待收到`resolve`之后才会进行后面的动作，如果没有收到就会一直处在等待的状态，所以什么时候该等待，什么时候该做下一步，就会非常清楚明了，这也就是我所谓「漂亮的等待」。

> 注意，`await `一定得运行在`async function` 内！

```js
~async function{           // ~ 開頭表示直接執行這個 function，結尾有 ()
  const delay = (s) => {
    return new Promise(function(resolve){  // 回傳一個 promise
      setTimeout(resolve,s);               // 等待多少秒之後 resolve()
    });
  };

  console.log(1);      // 顯示 1
  await delay(1000);   // 延遲ㄧ秒
  console.log(2);      // 顯示 2
  await delay(2000);   // 延遲二秒
  console.log(3);      // 顯示 3
}();
```

## 搭配Promise

基本上只要有`async`和`await` 的地方，就一定有`promise`的存在，`promise`顾名思义就是「保证执行之后才会做什么事情」，刚刚使用了`async`、`await`和`promise`改善`setTimeout`这个容易出错的异步等待，针对`setInterval`，也能用同样的做法修改

举例来说，下面的代码执行之后，并「*不会*」如我们预期的「*先显示`1`，再显示`haha0...haha5` ，最后再显示`2`*」，而是「*先显示`1`和`2`，然后再出现`haha0...haha5`*」，因为虽然代码逻辑是从上往下，但在`count function`里头是异步的语法，导致自己走自己的路，也造成了结果的不如预期。

```js
const count = (t,s) => {
  let a = 0;
  let timer = setInterval(() => {
    console.log(`${t}${a}`);
    a = a + 1;
    if(a>5){
      clearInterval(timer);
    }
  },s);
};

console.log(1); 
count('haha', 100);
console.log(2);
```

这时我们可以透过`async、await`和`promise`进行修正，在显示`1`之后，会「*等待*」`count function`结束后再显示`2`。

```js
~async function(){  
  const count = (t,s) => {
      return new Promise(resolve => {
        let a = 0;
        let timer = setInterval(() => {
          console.log(`${t}${a}`);
          a = a + 1;
          if(a>5){
            clearInterval(timer);
            resolve();  // 表示完成
          }
        },s);
      });
    };

  console.log(1); 
  await count('haha', 100);
  console.log(2);
}();
```

![简单理解JavaScript Async 和Await](https://img-blog.csdnimg.cn/img_convert/1684675cb0ab8e7e99718cdd24bb9c10.png)


## 链式调用

> 假设一个业务，分多个步骤完成，每个步骤都是异步的，而且依赖于上一个步骤的结果。我们仍然用 `setTimeout` 来模拟异步操作：

```js
/**
 * 传入参数 n，表示这个函数执行的时间（毫秒）
 * 执行的结果是 n + 100，这个值将用于下一步骤
 */
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 100), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}
```



### `Promise`实现

```js
function init() {
    console.time("start init");
    const time1 = 100;
    step1(time1)
        .then(time2 => step2(time2))
        .then(time3 => step3(time3))
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("end init");
        });
}

init();

// step1 with 100
// step2 with 200
// step3 with 300
// result is 400
```



### `async awit`实现

```js
async function init() {
    console.time("start init");
    const time1 = 100;
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    console.log(`result is ${result}`);
    console.timeEnd("end init");
}

init();
```

结果和之前的 `Promise` 实现是一样的，但是这个代码看起来是不是清晰得多



## 关于文中几个知识点概念

### 

### setTimeout() 

> 方法用于在指定的毫秒数后调用函数或计算表达式。

```js
function fn1(){
			console.log("你好");
		}
setTimeout(fn1,3000);
```



### setInterval()

> `每隔一段时间`执行一次指定的语句或函数，是个重复性的操作。

```js
setInterval(fn1,8000); 
```

## 小结

坦白说只要你一但熟悉了`async `和`await`，就真的回不去了，虽然说`callback` 仍然是代码开发里必备的功能，但对于同步和异步之间的转换，以后就交给`async` 和`await`来处理吧！


