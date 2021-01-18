---
title: van-picker级联选择（自定义字段显示）
date: 2020-04-21
categories:
  - Vue
tags:
  - vue
---
## 前言
>`Vant之van-picker`级联选择
>1. 将自定义平铺结构转化为层级结构数据
>2. 动态`$set()`给每一条数据对象添加`text`属性用于展示


### 数据处理
#### 原始数据
```js
[
  {id: 'node1',pid: 'root',content: 'test'},
  {id: 'node2',pid: 'root',content: 'test'},
  {id: 'node3',pid: 'node1',content: 'test'},
  {id: 'node4',pid: 'node2',content: 'test'},
  {id: 'node5',pid: 'node3',content: 'test'},
  {id: 'node6',pid: 'node1',content: 'test'}
]
```

### 转化后数据
```js
[
  {
    id: 'node1',
    pid: 'root',
    content: 'test',
    children: [
      {
        id: 'node3',
        pid: 'node1',
        ccontent: 'test',
        children: [
          {id: 'node5',pid: 'node3',content: 'test'}
        ]
      },
      {id: 'node6',pid: 'node1',content: 'test'}
    ]
  },
  {
    id: 'node2',
    pid: 'root',
    content: 'test',
    children: [
      {id: 'node4',pid: 'node2',content: 'test'}
    ]
  },
]
```

### 转化函数`tile2nest`
```js
 // 平铺结构转嵌套结构
        tile2nest(array, key, pKey, childrenKey) {
          if (!array || array.constructor !== Array) {
            return array;
          }
          // 复制一份，避免修改原始数组
          let ary = [...array];
          key = key || "id"; // 平铺数据主键
          pKey = pKey || "parentId";//平铺数据父节点数据
          childrenKey = childrenKey || "children";//子节点名称
          // 定义一个待移除数组
          let ary2remove = [];
          ary.map(item => {
			//动态添加属性text以适应van-picker组件默认显示text字段
            this.$set(item,'text',item.name);
            
            if (item[key] !== item[pKey]) {
              // 找父节点
              let p = ary.filter(c => c[key] === item[pKey]);
              if (p && p.length == 1) {
                p[0].children = p[0].children || [];
                // 将子节点放到父节点中
                p[0].children.push(item);
                ary2remove.push(item[key]);
              }
            }
          });

          // 遍历移除待删除对象
          ary2remove.map(item => {
            ary = ary.filter(c => c[key] !== item);
          });
          //返回转化后的层次结构数据
          return ary;
        }
```
### 使用组件
```html
                      <van-field readonly clickable placeholder="一二级分类" :value="form.kind" @click="showPicker = true" />
                      <van-popup v-model="showPicker" position="bottom" :duration="0">
                        <van-picker show-toolbar title="分类选择" :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" @change="onChange" />
                      </van-popup>
```

```js
 onConfirm(value)            {
                let str = "";  // 呈现页面显示  /xxx/xxx/xxx
                for(let i= 0;i<value.length;i++){
                    if(i>0){
                        str += "/" + value[i];
                    }
                    else{
                        str +=value[i];
                    }
                }
                this.form.kind = str;
                this.showPicker = false
            },
```

### 效果
![选择效果](https://img-blog.csdnimg.cn/20200420182135508.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
- 选择后效果

![选择后效果](https://img-blog.csdnimg.cn/20200420181931649.png)