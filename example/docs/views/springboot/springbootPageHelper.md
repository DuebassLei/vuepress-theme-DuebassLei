---
title: Springboot2.x | 整合PageHelper实现分页
date: 2019-01-04
categories:
  - SpringBoot
tags:
  - springboot
---
## 引言
在之前搭建好的Springboot 2.x+Mybatis+Druid+Thymeleaf+Swagger框架基础上
进行个人毕设开发时，在前台数据展示的时候，需要对数据分页展示，使用Mybatis-PageHelper插件。
## 环境
开发工具 ：
- IDEA 2018
- SpingBoot : 2.1M
- Mybatis :3.4
- Mysql : 8.0

## 整合PageHelper到项目

### 1. `pom.xml`添加如下依赖
```xml
      <!-- pagehelper分页插件依赖 -->
        <dependency>
            <groupId>com.github.pagehelper</groupId>
            <artifactId>pagehelper-spring-boot-starter</artifactId>
            <version>1.2.5</version>
        </dependency>
```
### 2.配置文件`application.yml`中添加：
```yaml
pagehelper:
  helper-dialect: mysql
  reasonable: true
  support-methods-arguments: true
  params: count=countsql
```
到这里配置就完成了，在Springboot中整合就是这么简洁，约定大约配置的方式，大量的减少了配置文件的使用

配置参数说明
| 属性                    | 作用                          | 说明                                                         |
| ----------------------- | ----------------------------- | ------------------------------------------------------------ |
| helperDialect           | 指定数据库                    | 可以不配置，插件会自动检测数据库的类型                       |
| reasonable              | 分页合理化参数，默认值为false | 当该参数设置为 true 时，pageNum<=0 时会查询第一页， pageNum>pages（超过总数时），会查询最后一页。默认false 时，直接根据参数进行查询。 |
| params                  | 用于从对象中根据属性名取值    | 可以配置pageNum,pageSize,count,pageSizeZero,reasonable。不配置映射的用默认值。 |
| supportMethodsArguments | 默认值false                   | 分页插件会从查询方法的参数值中，自动根据上面 params 配置的字段中取值，查找到合适的值时就会自动分页。 |

## pageHelper使用
1.  *Kind.java*
```java
public class Kind {
    private String kindCode;

    private String name;

    private String info;

    private Date date;

    private byte[] via;
    //省略set()和get()方法
}
```
2. service层
```java
   /**
     * 查找所有的Kind数据
     * */
@Service
public class KindServiceImpl implements KindService {
    @Autowired
    private KindMapper kindMapper;
    @Override
    public List<Kind> selectAllKind() {
        return kindMapper.selectAllKind();
    }
}
```
3. Controller层
```java
    @GetMapping(value = "airKind")
    @ApiOperation(value = "Air Kind",notes = "气体分类")
    public String  airKind(Model model){
        int pageNum=1;//第几页
        int pageSize=10;//每页数据条数
        Page<Kind> page = PageHelper.startPage(pageNum, pageSize);
        List<Kind> listKind  = kindService.selectAllKind();//从数据库中查出所有数据
        System.out.println("总共条数："+page.getTotal());
        for (Kind kind : page.getResult()) {
            System.out.println(kind.getName());
        }
        model.addAttribute("kinds",listKind);
        return "knowAir/airKind";
    }
```
4. 模板*airKind.html*展示分页（关键代码）
```html
                        <table class="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>分类编码</th>
                                            <th>名称</th>
                                            <th>时间</th>
                                            <th>详情</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr th:each="kind:${kinds}">
                                            <td th:text="${kind.kindCode}"></td>
                                            <td th:text="${kind.name}"></td>
                                            <td th:text="${kind.date}"></td>
                                            <td >详情</td>
                                        </tr>
                                        </tbody>
                         </table>
```
5. 浏览器访问
![](https://upload-images.jianshu.io/upload_images/15668934-4cf9609359056c5c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
6. 后台测试输出
![](https://upload-images.jianshu.io/upload_images/15668934-a76d30bf54d9f363.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***至此分页插件配置success。***

- 更多使用请参考
[MyBatis 分页插件 PageHelper官方文档](https://pagehelper.github.io/)

- 上一篇 
[SpringBoot 2搭建SSM框架并整合Mybatis-Generator](https://www.jianshu.com/p/dfeea5bb5e6d)

![](https://upload-images.jianshu.io/upload_images/15668934-35e91310ef982659.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)











