---
title: Loadsh用法总结
date: 2020-11-17
categories:
  - Javascript
tags:
  - javascript
---

# Loadsh用法

## Array 数组

###  _.sortBy()

>**sortBy** 方法创建一个元素数组。 以 **iteratee** 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。

```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
_.sortBy(users, [function(o) { return o.user; }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

let sortAraay = fn()
```

