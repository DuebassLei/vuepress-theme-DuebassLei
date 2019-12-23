---
title: 使用Element-ui Cascader 级联选择器，同时返回 value 和 label
date: 2019-12-20
categories:
  - Vue
tags:
  - vue
  - element-ui
---
## 前言

使用`Element-ui Cascader` 级联选择器，同时返回 `value` 和 `label`

## 使用ref定义myCascader
```html
                <el-cascader
                  style="width:99%;margin-top:10px;"
                  v-model="cates"
                  :options="options"
                  :props="props"
                  @change="handleChange"
                  ref="myCascader"
                ></el-cascader>
```

## 函数处理
```javascript
    handleChange(valueList) {
          let labelList = this.$refs.myCascader.getCheckedNodes()[0].pathLabels;
          this.form.oneCategoryId = valueList[0];
          this.form.oneCategoryName = labelList[0];
          this.form.twoCategoryId = valueList[1];
          this.form.twoCategoryName = labelList[1];
    }
```

## 断点调试

![methods](https://user-gold-cdn.xitu.io/2019/12/12/16ef9f4ad2c00842?w=836&h=148&f=png&s=24520)

![console](https://user-gold-cdn.xitu.io/2019/12/12/16ef9f40e17dddd2?w=822&h=180&f=png&s=18456)

其中`valueList`为`value`值，`labelList`为`label`值


成功使用级联选择器同时返回`vlaue`和`label`值啦>_<.