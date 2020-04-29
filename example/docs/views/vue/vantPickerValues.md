---
title: van-picker级联选择（获取多个字段）
date: 2020-04-21
categories:
  - Vue
tags:
  - vue
  - vant
---
## 前言
>使用`Vant`的`picker`级联选择返回多个字段数据信息

### 官方文档
![Events事件](https://img-blog.csdnimg.cn/20200421143151357.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)


### 修改`onConfirm `事件
```js
			//data返回数据数组，index返回索引数组	
            onConfirm(data,index)
            {   
                let vm = this;
                let str = "";  // 呈现页面显示  /xxx/xxx/xxx
                for(let i = 0;i < data.length; i ++){
                    if(i>0){
                        str += "/" + data[i];
                    }
                    else{
                        str +=data[i];
                    }
                }
                // 获取一级分类
                vm.form.oneCategoryId = vm.columns[index[0]].id;
                vm.form.oneCategoryName = vm.columns[index[0]].name;
                // 获取二级分类
                if(vm.columns[index[0]].children !== undefined){
                  vm.form.twoCategoryId =vm.columns[index[0]].children[index[1]].id;
                  vm.form.twoCategoryName =vm.columns[index[0]].children[index[1]].Name;
                }
                this.form.kind = str;

                this.showPicker = false
            }
```

```html
                      <van-field readonly clickable placeholder="一二级分类" :value="form.kind" @click="showPicker = true" />
                      <van-popup v-model="showPicker" position="bottom" :duration="0">
                        <van-picker show-toolbar title="分类选择" :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" @change="onChange" />
                      </van-popup>
```

### 控制台`debugger`调试
![控制台测试](https://img-blog.csdnimg.cn/20200421143554853.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
- 数据源
![数据源](https://img-blog.csdnimg.cn/2020042114390480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70)
- 效果
![选择效果](https://img-blog.csdnimg.cn/20200421143713354.png)

