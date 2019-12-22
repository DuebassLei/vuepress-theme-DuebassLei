---
title: SQL连接查询
date: 2019-12-01
categories:
  - SQL
tags:
  - sql
---
##  SQL连接查询
```sql
SELECT * FROM order_items 
  LEFT OUTER JOIN orders 
  ON order_items.order_id = orders.id
```

```sql
SELECT * FROM `A` INNER JOIN `B`
┌────────┐
│ A  ┌───┼────┐
│    │ ∩ │    │
└────┼───┘  B │
     └────────┘
内部联接	∩
左外连接	A + ∩
右外连接	∩ + B
完全外部联接	A + ∩ + B
```

##  select语句
```sql
SELECT * FROM table
SELECT * FROM table1, table2, ...
SELECT field1, field2, ... FROM table1, table2, ...
SELECT ... FROM ... WHERE condition
SELECT ... FROM ... WHERE condition GROUPBY field
SELECT ... FROM ... WHERE condition GROUPBY field HAVING condition2
SELECT ... FROM ... WHERE condition ORDER BY field1, field2
SELECT ... FROM ... WHERE condition ORDER BY field1, field2 DESC
SELECT ... FROM ... WHERE condition LIMIT 10
SELECT DISTINCT field1 FROM ...
SELECT DISTINCT field1, field2 FROM ...
```

##  select join
```sql
Select - Join
SELECT ... FROM t1 JOIN t2 ON t1.id1 = t2.id2 WHERE condition
SELECT ... FROM t1 LEFT JOIN t2 ON t1.id1 = t2.id2 WHERE condition
SELECT ... FROM t1 JOIN (t2 JOIN t3 ON ...) ON ...
```