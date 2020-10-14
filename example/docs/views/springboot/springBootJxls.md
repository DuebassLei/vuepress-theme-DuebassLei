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

![](https://imgkr2.cn-bj.ufileos.com/58890a70-e33a-407f-b8e6-5cb2634d178f.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=x3mz2ctbmhu%252FaZec5wYoANyl%252Bek%253D&Expires=1602583739)


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

![](https://imgkr2.cn-bj.ufileos.com/c2771ece-bc8c-44b6-a5f8-13ad75664d3f.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=xpdf3hY7vT0ef5U%252BKm4RBnvFI4g%253D&Expires=1602583884)


##导出数据效果

![](https://imgkr2.cn-bj.ufileos.com/2ff76d28-593f-46a2-8e93-0cb8810eef5f.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=McZ7MDU7dbCfJZzaYLbms4QarDk%253D&Expires=1602584000)

**更多功能详见`Jxls`官方`Api`**


## 博文源码： [gitee/Duebasslei](https://gitee.com/DuebassLei/SpringCloudApp.git)
