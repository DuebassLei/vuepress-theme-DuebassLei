---
title: RESTful API 实践
date: 2019-12-22
categories:
  - Java
tags:
  - java
---
## RESTful API实践
###  Methods方法

```bash
GET /articles/1	#读取，返回200
PUT /articles/1	#编辑（或路径），返回200
DELETE /articles/1	#删除，返回200
POST /articles	#创建，返回201
GET /articles	#清单，传回200
```

###  Status codes(状态码)

```bash
200 OK	#成功获取，修补（返回JSON对象）
201 Created	#成功发布（返回JSON对象）
202 Accepted	#成功发布，删除，路径-异步
204 No content	#成功删除
206 Partial content	#成功获取-异步

401 Unauthorized	#未认证
403 Forbidden	#已验证，但没有权限
422 Unprocessable entity	#验证方式
```

### Errors

```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json
{
  'id': 'auth_failed',
  'message': "You're not logged in."
}
```

## `request.getParameter()`

 获取参数为`null`和`""`空字符串的区别

### `""`空字符串

当`url`里有`name`属性,但是没有值的时候后台用`request.getParameter("name")`获取的是空字符串`""`

### `null`

当`url`里没有`name`属性,`request.getParameter("name")`获取的值是`null`

##  提取双引号中间的值（`regex`）

```java
String str1 = "\"小明\"";
		String ps = "(?<=\").*?(?=\")";
		Pattern p = Pattern.compile(ps);
		Matcher m = p.matcher(str1);
		while(m.find()){
			System.out.println(m.group());
		}
    
    // output: 小明
```

