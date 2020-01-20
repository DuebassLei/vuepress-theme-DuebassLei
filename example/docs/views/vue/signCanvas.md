---
title: Vue使用手写签名组件Sign-Canvas
date: 2020-01-20
categories:
 - Vue
tags:
 - Vue
---


## 前言
使用[【sign-canvas】](https://github.com/langyuxiansheng/vue-sign-canvas)组件二次封装自定义手写签名组件，一个基于`canvas`开发封装实现的通用手写签名板(电子签名板),支持`PC`端和移动端，效果如下图所示：

![](https://user-gold-cdn.xitu.io/2020/1/20/16fc256dfb5ab61b?w=963&h=671&f=png&s=62284)
## 安装
```shell
yarn add sin-canvas
```

## 全局引入
```js
import SignCanvas from "sign-canvas";
Vue.use(SignCanvas);
```

## 组件封装
```html
<template>
  <div class="sign">
    <el-dialog title="在线签名" :visible.sync="visible" :show-close="false">
      <sign-canvas
        class="sign-canvas"
        ref="SignCanvas"
        :options="options"
        v-model="value"
      />
      <div class="btnList">
        <el-button
          type="danger"
          size="small"
          icon="el-icon-delete"
          @click="canvasClear()"
          >清空</el-button
        >
        <el-button
          type="primary"
          size="small"
          icon="el-icon-check"
          @click="saveAsImg()"
          >保存</el-button
        >
        <!--        <el-button-->
        <!--          type="info"-->
        <!--          size="small"-->
        <!--          icon="el-icon-download"-->
        <!--          circle-->
        <!--          @click="downloadSignImg()"-->
        <!--          >下载</el-button-->
        <!--        >-->
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "signDialog",
  props: {
    //弹窗变量
    visible: {
      type: Boolean,
      default: false
    },
    //图片信息Base64
    src: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      value: null,
      options: {
        lastWriteSpeed: 1, //书写速度 [Number] 可选
        lastWriteWidth: 2, //下笔的宽度 [Number] 可选
        lineCap: "round", //线条的边缘类型 [butt]平直的边缘 [round]圆形线帽 [square]	正方形线帽
        lineJoin: "round", //线条交汇时边角的类型  [bevel]创建斜角 [round]创建圆角 [miter]创建尖角。
        canvasWidth: 700, //canvas宽高 [Number] 可选
        canvasHeight: 450, //高度  [Number] 可选
        isShowBorder: false, //是否显示边框 [可选]
        bgColor: "#fcc", //背景色 [String] 可选
        borderWidth: 1, // 网格线宽度  [Number] 可选
        borderColor: "#ff787f", //网格颜色  [String] 可选
        writeWidth: 5, //基础轨迹宽度  [Number] 可选
        maxWriteWidth: 30, // 写字模式最大线宽  [Number] 可选
        minWriteWidth: 5, // 写字模式最小线宽  [Number] 可选
        writeColor: "#101010", // 轨迹颜色  [String] 可选
        isSign: true, //签名模式 [Boolean] 默认为非签名模式,有线框, 当设置为true的时候没有任何线框
        imgType: "png" //下载的图片格式  [String] 可选为 jpeg  canvas本是透明背景的
      }
    };
  },
  methods: {
    /**
     * 清除画板
     */
    canvasClear() {
      this.$refs.SignCanvas.canvasClear();
    },

    /**
     * 保存图片
     */
    saveAsImg() {
      const img = this.$refs.SignCanvas.saveAsImg();
      //alert(`image 的base64：${img}`);
      this.$emit("update:visible", false);
    },

    /**
     * 下载图片
     */
    downloadSignImg() {
      this.$refs.SignCanvas.downloadSignImg();
    }
  }
};
</script>

<style lang="stylus" scoped>
.sign >>> .el-dialog{
    background: #b4a078;
}
.sign >>> .el-dialog__header {
    padding 2px 0px
}

.sign >>> .el-dialog__body {
    padding 0
}
.sign >>> .el-button{
    /*font-family STXingkai*/
    font-size 12px
    font-weight 400
}
.btnList{
    padding 5px
}
.sign >>> .el-dialog__title {
    line-height: 32px;
    font-size: 24px;
    /*font-family STXingkai*/
    color: hsl(40, 28.57% , 30.82%);
    text-shadow: 0 .03em .03em black;
 }
.sign-canvas {
    display: block;
    margin: 0 auto;
    background: #f4f0ea;
    border-radius: 8px;
}
</style>
```

## 使用
```html
                <sign-dialog
                  :visible.sync="receiverSignFlag"
                  @change="handleReceiverSign"
                ></sign-dialog>

                <template
                  v-if="getReceiver != null && getReceiver != undefined"
                >
                  <img :src="getReceiver" width="80" height="60" />
                </template>
                <el-button
                  type="primary"
                  @click="handleReceiverFlag"
                  icon="el-icon-edit"
                  size="small"
                  style="float: right;margin-top: 15px;"
                  >签名</el-button
                > 
```

