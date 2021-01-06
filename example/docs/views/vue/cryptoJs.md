---
title: vue使用crypto-js实现加密解密
date: 2021-01-05
categories:
  - Vue
tags:
  - vue
---

# vue使用crypto-js实现加密解密

## 安装

```bash
yarn add crypto-js -save
# or 
npm install crypto-js -save
```

## 封装加密工具函数`cryptojs.js`

```js
/**
 * @Author  DuebassLei
 * @Date  2021/1/5
 * @Version 1.0
 * @Description  CryptoJS封装工具
 */
import CryptoJS from 'crypto-js';
export default {
  /**
  * 对密码进行加密
  * @param  {String}     word    需要加密的密码
  * @param  {String}     keyStr    对密码加密的秘钥
  * @return {String}     加密的密文
  * */
  encrypt(word, keyStr) { // 加密
    keyStr = keyStr ? keyStr : 'QWERTY123456';
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  },
  /**
  * 对密码进行解密
  * @param  {String}     word    需要加密的密码
  * @param  {String}     keyStr    对密码加密的秘钥
  * @return {String}      解密的明文
  * */
  decrypt(word, keyStr) { // 解密
    keyStr = keyStr ? keyStr : 'QWERTY123456';
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  },
};
```



## 在组件中使用

```js
# 引入
import CyptoJs from '@/utils/cyptojs'

# 加密
const keyStr = 'ASDFG123456'
CyptoJs.encrypt(this.password,keyStr)

# 解密
const keyStr = 'ASDFG123456'
CyptoJs.decrypt(this.password,keyStr)
```

