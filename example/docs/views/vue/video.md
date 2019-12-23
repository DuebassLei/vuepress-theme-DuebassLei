---
title: 在vue中使用video.js实现文件播放。
date: 2019-12-19
categories:
  - Vue
tags:
  - vue
---

## 前言
在vue中使用video.js实现文件播放。

## 安装
`yarn add video.js` 

```shell
success Saved 24 new dependencies.
info Direct dependencies
└─ video.js@7.6.5
info All dependencies
├─ @babel/runtime@7.6.2
├─ @videojs/http-streaming@1.10.6
├─ aes-decrypter@3.0.0
├─ dom-walk@0.1.1
├─ for-each@0.3.3
├─ individual@2.0.0
├─ is-function@1.0.1
├─ keycode@2.2.0
├─ m3u8-parser@4.4.0
├─ mpd-parser@0.8.1
├─ mux.js@5.2.1
├─ object-inspect@1.6.0
├─ parse-headers@2.0.2
├─ pkcs7@1.0.2
├─ rust-result@1.0.0
├─ safe-json-parse@4.0.0
├─ string.prototype.trim@1.2.0
├─ string.prototype.trimleft@2.1.0
├─ string.prototype.trimright@2.1.0
├─ url-toolkit@2.1.6
├─ video.js@7.6.5
├─ videojs-font@3.2.0
├─ videojs-vtt.js@0.14.1
└─ xhr@2.4.0
```



## main.js中引入

```javascript
import Video from "video.js";
import "video.js/dist/video-js.min.css"
Vue.prototype.$video = Video
```


## 在VideoPlayer.vue 组件中使用
```html
<template>
  <div class="video_box">
    <video ref="videoPlayer" class="video-js" poster="../../../assets/logo.png">
      <source
        src="../../../../public/static/video/test1.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  data() {
    return {
      player: null
    };
  },
  mounted() {
    // 播放参数
    let options = {
      controls: true, // 是否显示底部控制栏
      preload: "auto", // 加载<video>标签后是否加载视频
      autoplay: "muted", // 静音播放
      // playbackRates: [0.5, 1, 1.5, 2],// 倍速播放
      width: "640",
      height: "247",
      controlBar: {
        // 自定义按钮的位置
        children: [
          {
            name: "playToggle"
          },
          {
            name: "progressControl"
          },
          {
            name: "currentTimeDisplay"
          },
          {
            name: "timeDivider"
          },
          {
            name: "durationDisplay"
          },

          {
            name: "volumePanel", // 音量调整方式横线条变为竖线条
            inline: false
          },
          {
            name: "pictureInPictureToggle" //画中画播放模式
          },
          {
            name: "fullscreenToggle"
          }
        ]
      }
    };
    this.player = this.$video(this.$refs.videoPlayer, options,function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.video_box {
  margin: 10px;
  width: 99%;
  height: 450px;
}
.video-js {
  width: 100%;
  height: 450px;
}
</style>


```

## 效果
![image.png](https://user-gold-cdn.xitu.io/2019/10/22/16df2eb14384a333?w=1412&h=649&f=png&s=197802)

