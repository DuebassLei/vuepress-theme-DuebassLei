---
title:  Springboot 中使用 Jxls 导出 Excel
date: 2020-10-12
categories:
  - SpringBoot
tags:
  - springboot
---


# Jxls 导出 Excel

> Springboot 中使用 Jxls 导出 Excel

## 添加依赖

```xml
  <!--Jxls Excel-->
        <dependency>
            <groupId>org.jxls</groupId>
            <artifactId>jxls</artifactId>
            <version>2.8.1</version>
        </dependency>

        <!--To use Apache POI API based transformer implementation add the following dependency -->
        <dependency>
            <groupId>org.jxls</groupId>
            <artifactId>jxls-poi</artifactId>
            <version>2.8.1</version>
        </dependency>

        <!--To use Java Excel API based transformer implementation add the following dependency -->
        <!-- https://mvnrepository.com/artifact/org.jxls/jxls-jexcel -->
        <dependency>
            <groupId>org.jxls</groupId>
            <artifactId>jxls-jexcel</artifactId>
            <version>1.0.9</version>
        </dependency>
```

## 定义导出实体类`Fish.java`

```java
package com.gaolei.app.entity;

import lombok.Data;

/**
 * @author DuebassLei
 * @version 1.0
 * @date 2020/10/12 17:07
 */
@Data
public class Fish {
    /**
     * 名称
     * */
    private String name;

    /**
     * 价格
     **/
    private String price;

    /**
     * 品种
     * */
    private String kind;

}
```

## 定义`excel`模板

![](https://img-blog.csdnimg.cn/20201013133510801.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70#pic_center)

## 定义控制器`JxlsController.java`

```java
@Slf4j
@Controller
@RequestMapping(value = "/api/jxls")
public class JxlsController {
    @PostMapping(value = "export")
    public void jxlsExport(HttpServletRequest request,HttpServletResponse response) throws IOException {
        log.info("Jxls 导出excel数据");

        //模拟数据
        List<Fish> fishList = new ArrayList<>();
        for (int i = 0; i < 100 ; i++) {
            Fish fish = new Fish();
            fish.setName("小鲤鱼"+i);
            fish.setKind("鲤鱼"+i);
            fish.setPrice("20"+i);
            fishList.add(fish);
        }

        InputStream is = new ClassPathResource("templates/fish.xls").getInputStream();
        OutputStream os = null;
        try {
            os = response.getOutputStream();
            response.addHeader("Content-Disposition", "attachment;filename=" + "fish.xls");
            response.setContentType("application/octet-stream");
            Context context = new Context();
            context.putVar("fishList", fishList);
            JxlsHelper.getInstance().processTemplate(is, os, context);
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            os.flush();
            os.close();
        }
    }
  }
```

## Postman测试

测试接口地址：
`
http://localhost:9999/api/jxls/export
`


![](https://img-blog.csdnimg.cn/20201013133430474.png#pic_center)


##导出数据效果

![](https://img-blog.csdnimg.cn/20201013133447430.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70#pic_center)

**更多功能详见`Jxls`官方`Api`**


## 博文源码： [gitee/Duebasslei](https://gitee.com/DuebassLei/SpringCloudApp)
