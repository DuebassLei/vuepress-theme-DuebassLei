---
title: SpringBoot中使用freemarker模板动态导出word文件
date: 2019-12-22
categories:
  - SpringBoot
tags:
  - springboot
---

## 前言

使用`freemarker`模板动态导出`word`文件

## 准备

- 环境

  - IntellJ IDEA 2018.2
  - SringBoot 2.1.9

- 版本

  - Word `2003`  `.doc` 格式
  - spring-boot-starter-freemarker `2.1.9`

  

## 简单模板准备

### <一> `word 2003` 新建`.doc` 模板
![简单模板](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddafe5c5e4e?w=560&h=204&f=png&s=43543)

### <二> 另存为`.xml` 文件，格式化代码，并检查是否存在变量分离问题，如图
![error](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddafd80fdc0?w=560&h=210&f=png&s=43881)


调整后

![true](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddafe662b32?w=560&h=103&f=png&s=17995)
### <三> 重命名为`.ftl`模板`freemarker`文件
![ftl文件](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb0147e03c?w=560&h=83&f=png&s=19661)


## Springboot导出简单word

### 使用`freemarker`模板引擎

```xml
  		<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-freemarker</artifactId>
        </dependency>
```

### 配置`freemarker` 

```yml
  #    设置freemarker
  freemarker:
    allow-request-override: false
    #    开发过程建议关闭缓存
    cache: true
    check-template-location: false
    charset: UTF-8
    content-type: text/html; charset=utf-8
    expose-request-attributes: false
    expose-session-attributes: false
    expose-spring-macro-helpers: false
    request-context-attribute:
    # 默认后缀就是.ftl
    suffix: .ftl
    template-loader-path: classPath:/templates/code/    
```

### 将模板`UserInfo.flt `文件放入项目

![import](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb0b8f91f8?w=560&h=143&f=png&s=44175)
### 测试`Controller`代码

```java
    @PostMapping("user/doc")
    @ResponseBody
    @ApiOperation(value="导出用户doc", httpMethod = "POST",produces="application/json",notes = "导出用户doc")
    public ResultBean exportDoc() throws  IOException{
        Configuration configuration = new Configuration();
        configuration.setDefaultEncoding("utf-8");
        configuration.setClassForTemplateLoading(this.getClass(), "/templates/code");
        Template template = configuration.getTemplate("UserInfo.ftl");
        Map<String, Object> dataMap = new HashMap<>();
        dataMap.put("name","gaolei");
        dataMap.put("id","02201");
        dataMap.put("code","251525v");
        dataMap.put("pwd","root");
        dataMap.put("tel","08583552");
        File outFile = new File("UserInfoTest.doc");
        Writer out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outFile),"UTF-8"));
        try {
            template.process(dataMap,out);
            out.flush();
            out.close();
        } catch (TemplateException e) {
            e.printStackTrace();
        }
        return ResultBean.success();
    }
```

### `Swagger`测试
![swagger](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb0cb84c05?w=560&h=306&f=png&s=34559)
### 默认保存在项目根目录

![path](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb2c662b49?w=560&h=223&f=png&s=86859)
### 数据成功导出得到`word`

![数据查看](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb2c5f7ea6?w=560&h=195&f=png&s=38281)


## 复杂模板word导出

### 模板准备

操作同上，模板如下

![复杂模板](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb2e29ef96?w=560&h=442&f=png&s=42996)

### Controller测试

```java
	@PostMapping("user/requireInfo")
    @ResponseBody
    @ApiOperation(value="导出用户确认信息表doc", httpMethod = "POST",produces="application/json",notes = "导出用户确认信息表doc")
    public ResultBean  userRequireInfo() throws  IOException{
        Configuration configuration = new Configuration();
        configuration.setDefaultEncoding("utf-8");
        configuration.setClassForTemplateLoading(this.getClass(), "/templates/code");
        Template template = configuration.getTemplate("need.ftl");
        Map<String , Object> resultMap = new HashMap<>();
        List<UserInfo> userInfoList = new ArrayList<>();
        userInfoList.add(new UserInfo("2019","安全环保处质量安全科2608室","风险研判","9:30","10:30","风险研判","风险研判原型设计","参照甘肃分公司提交的分析研判表，各个二级单位维护自己的风险研判信息，需要一个简单的风险上报流程，各个二级单位可以看到所有的分析研判信息作为一个知识成果共享。","张三","李四"));
        resultMap.put("userInfoList",userInfoList);
        File outFile = new File("userRequireInfo.doc");
        Writer out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outFile),"UTF-8"));
        try {
            template.process(resultMap,out);
            out.flush();
            out.close();
            return null;
        } catch (TemplateException e) {
            e.printStackTrace();
        }
        return ResultBean.success();
    }
```

### `freemarker` 遍历

```xml
	<#list userInfoList as user>
			获取值：${user.name} 
        	...
    </#list>
```

![遍历数据](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb34acc468?w=560&h=209&f=png&s=78804)

### 导出效果
![数据展示](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb3b54cbd0?w=560&h=497&f=png&s=64316)
## 导出带图片Word
### 模板准备
![模板带图](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb3c290226?w=936&h=453&f=png&s=36959)
### Controller
```java
 @PostMapping("user/exportPic")
    @ResponseBody
    @ApiOperation(value="导出带图片的Word", httpMethod = "POST",produces="application/json",notes = "导出带图片的Word")
    public ResultBean exportPic() throws IOException {
        Configuration configuration = new Configuration();
        configuration.setDefaultEncoding("utf-8");
        configuration.setClassForTemplateLoading(this.getClass(), "/templates/code");
        Template template = configuration.getTemplate("userPic.ftl");
        Map<String,Object> map = new HashMap<>();
        map.put("name","gaolei");
        map.put("date","2015-10-12");
        map.put("imgCode",imageToString());
        File outFile = new File("userWithPicture.doc");
        Writer out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outFile),"UTF-8"));
        try {
            template.process(map,out);
            out.flush();
            out.close();
            return null;
        } catch (TemplateException e) {
            e.printStackTrace();
        }
        return  ResultBean.success();
    }

    public static String imageToString() {
        String imgFile = "E:\\gitee\\excel-poi\\src\\main\\resources\\static\\img\\a.png";
        InputStream in = null;
        byte[] data = null;
        try {
            in = new FileInputStream(imgFile);
            data = new byte[in.available()];
            in.read(data);
            in.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        String imageCodeBase64 =  Base64Utils.encodeToString(data);

        return imageCodeBase64;
    }
```
### `Swagger`测试
![swagger](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb64357ace?w=1770&h=719&f=png&s=69701)
### 导出效果
![效果](https://user-gold-cdn.xitu.io/2019/10/22/16df2ddb6501b1cf?w=940&h=498&f=png&s=23232)

## `demo`源码

详情见[github 仓库](https://github.com/DuebassLei/excel-poi.git)



