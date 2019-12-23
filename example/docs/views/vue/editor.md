---
title: vue中使用vue-quill-editor富文本编辑器及自定义工具栏
date: 2019-12-20
categories:
  - Vue
tags:
  - vue
---

## 前言

在Vue项目中使用vue-quill-editor富文本编辑器及编辑器自定义工具栏。

## 安装
`yarn add vue-quill-editor  --save`

## 引入
```js

import VueQuillEditor from 'vue-quill-editor'
// vue-quill-editor 样式引入
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor);

```

## 使用

```html
 <template>
 	<el-row>
          <el-col :span="20">
            <span style="margin: 0px 12px 0px 10px">评分</span>
            <el-rate
              style="display: inline-block"
              v-model="rateValue"
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
          </el-col>
          <el-col :span="4">
            <i
              class="el-icon-share"
              style="color: red;display: block;margin-left:65%"
              >收藏</i
            >
          </el-col>
        </el-row>
        
          <el-card>
           <span>评论</span>
              <quill-editor
                      v-model="content"
                      ref="myQuillEditor"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @change="onEditorChange($event)"
              >
              </quill-editor>
          </el-card>
       </template>
<script>
import { quillEditor } from "vue-quill-editor";
export default {
  name: "InfoExperience",
  data() {
    return {
      rateValue: null,
      rateStyle: {
        fontSize: "35px"
      },
      content: null, // 初始编辑器内容
      editorOption: {} // 编辑器配置项
    };
  },
  created() {},
  methods: {
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
    }
  }
};
</script>

<style scoped></style>

```
## 效果
![](https://user-gold-cdn.xitu.io/2019/10/22/16df2ec81cadac30?w=1635&h=385&f=png&s=35482)

# 自定义vue-quill-editor工具栏
## Quilljs官网说明
[官网说明 Toolbar Module](https://quilljs.com/docs/modules/toolbar/)

>The Toolbar module allow users to easily format Quill’s contents
It can be configured with a custom container and handlers.

>工具栏模块允许用户轻松格式化Quill的内容。
可以使用自定义container和 handlers进行配置。
```js
var quill = new Quill('#editor', {
  modules: {
    toolbar: {
      container: '#toolbar',  // Selector for toolbar container
      handlers: {
        'bold': customBoldHandler
      }
    }
  }
});
```

## 自定义工具栏参数项
```js
      editorOption: {
        modules: {
          toolbar:  [
            ['bold', 'italic', 'underline', 'strike'],        // 加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'],                      //引用，代码块
            [{ 'header': 1 }, { 'header': 2 }],               // 几级标题
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],     // 有序列表，无序列表
            [{ 'script': 'sub'}, { 'script': 'super' }],      // 下角标，上角标
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // 缩进
            [{ 'direction': 'rtl' }],                         // 文字输入方向
            [{ 'size': ['small', false, 'large', 'huge'] }],  // 字体大小
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],// 标题
            [{ 'color': [] }, { 'background': [] }],          // 颜色选择
            [{ 'font': [] }],// 字体
            [{ 'align': [] }], // 居中
            ['clean']                                         // 清除样式
          ]
        }
      }
```
到这里，你只需要将需要的工具配置项加入`editorOption`中。你可以移除不需要的工具，让工具栏更加简洁，更多使用详见[【quilljs官网】](https://quilljs.com/docs/modules/toolbar/)