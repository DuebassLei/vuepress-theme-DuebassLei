---
title: MyBatis中Like语句
date: 2019-12-01
categories:
  - SQL
tags:
  - sql
---
##  原生写法

```sql
select * from user where username like '%${value}%'
```
注意： 
    `${value}`里面必须要写`value`，不然会报错

##  `oracle`数据库：

```sql
SELECT *  FROM  user  WHERE  name like CONCAT('%',#{name},'%')  
```

或 :

```sql
SELECT  *  FROM  user  WHERE  name like '%'||#{name}||'%'  
```

##  `SQLServer`数据库：

```sql
SELECT  *  FROM  user  WHERE  name like '%'+#{name}+'%'  
```

##  `mysql`数据库：

```sql
SELECT  *  FROM  user  WHERE  name like CONCAT('%',#{name},'%')  
```

##  `DB2`数据库：

```sql
SELECT  *  FROM  user  WHERE  name like CONCAT('%',#{name},'%')  
```

或

```sql
SELECT  *  FROM  user  WHERE  name like '%'||#{name}||'%'  
```

##  示例

```xml
  <select id="queryRiskFlow" parameterType="java.util.Map" resultMap="FormRiskVo">
        SELECT A.PROC_INST_ID_ ,B.STATUS_,B.PROC_DEF_ID_,C.* FROM
            BPM_BUS_LINK A,BPM_PRO_INST B,FORM_RISK C
            where A.PROC_INST_ID_ = B.ID_
             AND A.BUSINESSKEY_STR_ = C.ID_
        <if test="name!=null">
            AND C.NAME LIKE '%' || #{name} ||'%'
        </if>
        <if test="orderBySql!=null">
            ORDER BY ${orderBySql}
        </if>
        <if test="orderBySql==null">
            ORDER BY C.ID_ DESC
        </if>
    </select>
```

