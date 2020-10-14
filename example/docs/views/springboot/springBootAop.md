---
title: SpringBoot之AOP整合，记录系统日志
date: 2020-10-14
categories:
  - SpringBoot
tags:
  - springboot
---

# SpringBoot之AOP整合，记录系统日志
>Springboot2.x 版本整合AOP，通过自定义注解方式实现记录系统日志
## 添加依赖
>pom中引入SpringBoot的AOP相关的依赖
```xml
        <!-- Spring AOP -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>
```

## 定于日志实体类SysLog
```java
@Table(name = "sys_log")
@Entity
@Data
@ApiModel(value = "日志实体类")
public class SysLog {
    @Id
   // @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    /**
     * 类名
     * */
    @Column(nullable = false)
    private String className;

    /**
     * 方法名
     * */
    @Column(nullable = false)
    private String methodName;

    /**
     * 参数
     * */
    @Column(nullable = false)
    private String params;

    /**
     * 执行时间
     * */
    @Column(nullable = false)
    private Long execTime;

    /**
     * 切面标记
     * */
    private String remark;

    /**
     * 创建时间
     * */
    @Column(nullable = false)
    private String createDate;

    /**
     * 请求URL
     * */
    @Column(nullable = false)
    private String url;

    /**
     * 请求IP
     * */
    @Column(nullable = false)
    private String ip;

    /**
     * http method
     * */
    @Column(nullable = false)
    private String httpMethod;

}
```
## 自定义注解@SysLogAnnotation
```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface SysLogAnnotation {
    String value() default "";
}

```
##  @Aspect注解声明一个切面
```java
@Aspect
@Component
public class SysLogAspect {
    @Autowired
    private SysLogService sysLogService;


    /**
     * 这里我们使用注解的形式
     * 当然，我们也可以通过切点表达式直接指定需要拦截的package,需要拦截的class 以及 method
     * 切点表达式:   execution(...)
     * 例如：execution(public * com.example.demo.controller.*.*(..))
     */
    @Pointcut("@annotation(com.gaolei.app.anno.SysLogAnnotation)")
    public void logPointCut() {}

    /**
     * 环绕通知 @Around  ， 当然也可以使用 @Before (前置通知)  @After (后置通知)
     * @param point
     * @return
     * @throws Throwable
     */
    @Around("logPointCut()")
    public Object around(ProceedingJoinPoint point) throws Throwable {
        long beginTime = System.currentTimeMillis();
        Object result = point.proceed();
        long time = System.currentTimeMillis() - beginTime;
        try {
            saveLog(point, time);
        } catch (Exception e) {
        }
        return result;
    }

    /**
     * 保存日志
     * @param joinPoint
     * @param time
     */
    private void saveLog(ProceedingJoinPoint joinPoint, long time) {
        SysLog sysLog = new SysLog();
        //获取请求url,ip,httpMethod
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        String ip = request.getRemoteAddr();
        String httpMethod = request.getMethod();
        String url = request.getRequestURL().toString();
        sysLog.setIp(ip);
        sysLog.setHttpMethod(httpMethod);
        sysLog.setUrl(url);
        sysLog.setId(UUIDGenerator.generate());

        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Method method = signature.getMethod();

        sysLog.setExecTime(time);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        sysLog.setCreateDate(dateFormat.format(new Date()));
        SysLogAnnotation annotation = method.getAnnotation(SysLogAnnotation.class);
        if(annotation != null){
            //注解上的描述
            sysLog.setRemark(annotation.value());
        }
        //请求的 类名、方法名
        String className = joinPoint.getTarget().getClass().getName();
        String methodName = signature.getName();
        sysLog.setClassName(className);
        sysLog.setMethodName(methodName);
        //请求的参数
        Object[] args = joinPoint.getArgs();
        try{
            List<String> list = new ArrayList<String>();
            for (Object o : args) {
                list.add(new Gson().toJson(o));
            }
            sysLog.setParams(list.toString());
        }catch (Exception e){ }
        sysLogService.saveSysLog(sysLog);
    }

}
```
## 定义service
```java
public interface SysLogService {

    boolean saveSysLog(SysLog sysLog);
}
```

## 定义serviceImpl
```java
@Slf4j
@Service
public class SysLogServiceImpl  implements SysLogService {
    @Autowired
    private SysLogRepository sysLogRepository;

    @Override
    public boolean saveSysLog(SysLog sysLog){
        sysLogRepository.save(sysLog);
//        log.info(sysLog.getParams());
        log.info("成功");
        return true;
    }

}
```
##定义测试TestController控制器
```java
@Api(tags = "测试")
@Controller
@RequestMapping(value = "/test/v1")
public class TestController {

    @SysLogAnnotation("切面测试")
    @GetMapping("/test")
    public String test(@RequestParam("name") String name){
        return name;
    }

}
```

## 测试
```http
http://localhost:9999/test/v1/test?name=gaolei
```
- idea断点查看

![](https://imgkr2.cn-bj.ufileos.com/fcd329b0-e00b-4bfa-85e6-5a4776e48493.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=oIXD%252Fuq3TiQnaMSuC7vh%252FsY9%252FxY%253D&Expires=1602755956)

- 查看数据库


![](https://imgkr2.cn-bj.ufileos.com/8115a3f1-3bfb-4f5f-aa4a-b3a9f6612951.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=Mk1sonD8M4Q0FoPo%252Fn5OouS0OHc%253D&Expires=1602756055)


## 博文源码： [gitee/Duebasslei](https://gitee.com/DuebassLei/SpringCloudApp.git)



