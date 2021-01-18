# SpringBoot之定时任务
>在Springboot中创建定时任务，实现动态配置定时任务
## 启动类开启定时任务
```java
@EnableScheduling //开启定时任务
@EnableEurekaClient
@SpringBootApplication
@EnableElasticsearchRepositories(basePackages = "com.gaolei.app.repository")
@Slf4j
public class CloudApp {
    public static void main(String[] args) throws UnknownHostException {
        ConfigurableApplicationContext application = SpringApplication.run(CloudApp.class,args);
        Environment env = application.getEnvironment();
        String ip = InetAddress.getLocalHost().getHostAddress();
        String port = env.getProperty("server.port");
        String path = AppUtil.getString(env.getProperty("server.servlet.context-path"));
        log.info("\n----------------------------------------------------------\n\t" +
                "Application Cloud-App is running! Access URLs:\n\t" +
                "Local: \t\thttp://localhost:" + port + path + "/\n\t" +
                "External: \thttp://" + ip + ":" + port + path + "/\n\t" +
                "Swagger-ui: \thttp://" + ip + ":" + port + path + "/swagger-ui.html\n\t" +
//                "Doc文档: \thttp://" + ip + ":" + port + path + "/doc.html\n" +
                "----------------------------------------------------------");

    }
}
```

## 定时任务实体类SysScheduledCron

>定时任务实体，基础信息字段：corn表达式，任务描述等

```java
@Data
@ApiModel(value = "cron 实体类")
@Entity
@Table(name = "sys_task_cron")
public class SysScheduledCron {

    @Id
    @Column(name = "cron_id")
    @ApiModelProperty(value = "主键")
    private String cronId;

    @Column(name = "cron_key", unique = true)
    @ApiModelProperty(value = "定时任务完整类名")
    private String cronKey;

    @Column(name = "cron_expression")
    @ApiModelProperty(value = "cron表达式")
    private String cronExpression;

    @Column(name = "task_explain")
    @ApiModelProperty(value = "任务描述")
    private String taskExplain;

    @ApiModelProperty(value = "状态: {1:正常,2:停用}")
    @Column(name="task_status")
    private Integer taskStatus;
}
```

## 定时任务状态枚举SysScheduledStatusEnum

```java
public enum SysScheduledStatusEnum {
    /**
     *  开启
     * */
    ENABLED(1),
    /**
     * 关闭
     * */
    DISABLED(2),
    ;

    private Integer code;

    SysScheduledStatusEnum(int code) {
        this.code = code;
    }

    public Integer getCode() {
        return code;
    }
}
```

## 定时任务配置类ScheduledConfig
```java
/**
 * 定时任务配置类
 * @author DuebassLei
 * @version 1.0
 * @date 2020/10/14 19:16
 */
@Configuration
public class ScheduledConfig implements SchedulingConfigurer {

    @Autowired
    private ApplicationContext context;
    @Autowired
    private SysScheduledCronRepository cronRepository;
    @Override
    public void configureTasks(ScheduledTaskRegistrar scheduledTaskRegistrar) {
        for (SysScheduledCron sysScheduledCron : cronRepository.findAll()) {
            Class<?> clazz;
            Object task;
            try {
                clazz = Class.forName(sysScheduledCron.getCronKey());
                task = context.getBean(clazz);
            } catch (ClassNotFoundException e) {
                throw new IllegalArgumentException("sys_task_cron表数据" + sysScheduledCron.getCronKey() + "有误", e);
            } catch (BeansException e) {
                throw new IllegalArgumentException(sysScheduledCron.getCronKey() + "未纳入到spring管理", e);
            }
            Assert.isAssignable(ScheduledOfTask.class, task.getClass(), "定时任务类必须实现ScheduledOfTask接口");
            // 可以通过改变数据库数据进而实现动态改变执行周期
            scheduledTaskRegistrar.addTriggerTask(((Runnable) task),
                    triggerContext -> {
                        String cronExpression = cronRepository.findByCronKey(sysScheduledCron.getCronKey()).getCronExpression();
                        return new CronTrigger(cronExpression).nextExecutionTime(triggerContext);
                    }
            );
        }

    }
}
```
## 定时任务Dao
```java
/**
 * 定时任务 Repository
 * @author DuebassLei
 * @version 1.0
 * @date 2020/10/14 19:19
 */
public interface SysScheduledCronRepository extends JpaRepository<SysScheduledCron,String> {
    SysScheduledCron findByCronKey(String cronKey);

    /**
     * 更新定时任务cron表达式
     *
     * @param newCron
     * @param cronKey
     * @return
     */
    @Modifying
    @Transactional(rollbackFor = Exception.class)
    @Query(value = "update sys_task_cron set cron_expression=?1 where cron_key=?2", nativeQuery = true)
    int updateCronExpressionByCronKey(String newCron, String cronKey);

    /**
     * 更新定时任务状态
     *
     * @param status
     * @param cronKey
     * @return
     */
    @Modifying
    @Transactional(rollbackFor = Exception.class)
    @Query(value = "update sys_task_cron set task_status=?1 where cron_key=?2", nativeQuery = true)
    int updateTaskStatusByCronKey(Integer status, String cronKey);
}
```

## 实现Runnable接口类ScheduledOfTask
```java
/**
 * 实现Runnable接口
 * @author DuebassLei
 * @version 1.0
 * @date 2020/10/14 19:27
 */
public interface ScheduledOfTask extends Runnable {

    /**
     * 定时任务方法
     */
    void execute();

    /**
     * 实现控制定时任务启用或禁用的功能
     */
    @Override
    default void run() {
        SysScheduledCronRepository repository = SpringUtil.getBean(SysScheduledCronRepository.class);
        SysScheduledCron scheduledCron = repository.findByCronKey(this.getClass().getName());
        if (SysScheduledStatusEnum.DISABLED.getCode().equals(scheduledCron.getTaskStatus())) {
            // 任务是禁用状态
            return;
        }
        execute();
    }
}
```
## 创建一个静态定时任务DynamicTask
```java
/**
 * 创建定时任务 静态
 * @author DuebassLei
 * @version 1.0
 * @date 2020/10/15 10:37
 */
@Component
@Slf4j
public class DynamicTask implements ScheduledOfTask {
    private int i;
    @Override
    public void execute() {
        log.info("thread id:{},DynamicPrintTask execute times:{}", Thread.currentThread().getId(), ++i);
    }
}
```
## 测试定时任务
- 手动在数据库中添加一条定时任务数据对应上面创建的定时任务

```sql
INSERT INTO "CLOUD"."SYS_TASK_CORN"("CRON_ID", "CRON_EXPRESSION", "CRON_KEY", "TASK_EXPLAIN", "TASK_STATUS") VALUES ('1', '*/5 * * * * ?', 'com.gaolei.app.entity.task.DynamicTask', '定时任务描述', '1');
```

- 启动服务
>查看控制台输出，定时任务被执行

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-BFkwLO6e-1602751829865)(https://imgkr2.cn-bj.ufileos.com/729d1d33-a757-4f65-bf20-3f81fa0f7ff8.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=skMGdhCSDUTCp7pgJGEnqT2x7pU%253D&Expires=1602821646)]

## 定时任务控制器SysScheduledCronController
>通过接口管理定时任务: 启用状态，执行，更新`cron`表达式等

```java
/**
 * 定时任务控制器
 * @author DuebassLei
 * @version 1.0
 * @date 2020/10/15 12:16
 */
@Api(tags = "定时任务控制器")
@Controller
@RequestMapping("/api/v1/task")
public class SysScheduledCronController {

    @Autowired
    private ApplicationContext context;

    @Autowired
    private SysScheduledCronRepository repository;

    @ApiOperation(value = "定时任务列表")
    @PostMapping("taskList")
    @ResponseBody
    public ResultCodeMsg taskList() {
       return new ResultCodeMsg(ResultCodeEnum.SUCCESS,repository.findAll());
    }


    @ApiOperation(value = "编辑Cron表达式")
    @PostMapping("updateTask")
    public ResultCodeMsg updateTask(
            @RequestParam(value = "cronKey")String cronKey,
            @RequestParam(value ="newCron") String newCron){

        if(!AppUtil.isValidExpression(newCron)){
            throw new IllegalArgumentException("失败,非法表达式:" + newCron);
        }
        repository.updateCronExpressionByCronKey(newCron,cronKey);
        return new ResultCodeMsg(ResultCodeEnum.SUCCESS,null);
    }

    /**
     * 执行定时任务
     * */
    @ResponseBody
    @PostMapping("runTaskCron")
    public ResultCodeMsg<Object> runTaskCron(@RequestParam(value = "cronKey") String cronKey) throws ClassNotFoundException {
        ((ScheduledOfTask) context.getBean(Class.forName(cronKey))).execute();
        return new ResultCodeMsg(ResultCodeEnum.SUCCESS,null);
    }

    /**
     * 启用或禁用定时任务
     */
    @ResponseBody
    @RequestMapping("changeStatusTaskCron")
    public ResultCodeMsg<Object> changeStatusTaskCron(
            @RequestParam(value = "cronKey") String cronKey,
            @RequestParam(value = "taskStatus") Integer taskStatus
    ) {
        repository.updateTaskStatusByCronKey(taskStatus,cronKey);
        return new ResultCodeMsg(ResultCodeEnum.SUCCESS,null);
    }


}
```

## 通过Swagger在线测试接口

- 获取定时任务列表

![](https://img-blog.csdnimg.cn/20201015165052451.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70#pic_center)



- 前端展示

![](https://img-blog.csdnimg.cn/20201015165101792.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70#pic_center)


## 源码地址
[Github:DuebassLei/SpringCloudApp](https://github.com/DuebassLei/springcloud-app)

[Gitee:DuebassLei/SpringCloudApp](https://gitee.com/DuebassLei/SpringCloudApp)




