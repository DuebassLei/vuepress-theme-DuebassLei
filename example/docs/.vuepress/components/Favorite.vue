<template>
<div id="favorite">
  <h1>在线工具备忘录</h1>
  <div class="note_book" id="output_wrapper_id">
    <p class="p_css" class="p_css">Window下推荐</p>
    <ul class="ul_css" >
      <li class="ul_li_css"><span class="ul_li_span_css">Jetbrain全家桶 开发编辑器</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">X-shell  远程ssh工具</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">Postman 接口测试工具</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">PowerDesigner 数据库设计工具 </span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">Navicat 数据库连接工具</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">RedisDesktop Redis客户端 </span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">Typora+PicGo 来写markdown</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">ProcessOn  流程图</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">MindMaster  脑图 </span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">Snipaste  截图工具</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">ScreenToGif Gif录制</span></li>
    </ul>
    <p class="p_css">Mac下推荐：</p>
    <ul class="ul_css">
      <li class="ul_li_css"><span class="ul_li_span_css">Jetbrain全家桶</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">Typora+upic来写markdown</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">iTerm终端</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">Transmit Mac最强FTP工具</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">JumpDesktop Mac最强远程桌面工具（连接Win）</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">XMind 好用的脑图</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">Medis Mac下好用好看的Redis可视化管理工具</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">Dash Mac下超好用的离线文档</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">Shimo Mac下好用的VPN客户端（稳定~）</span></li>
      <li class="ul_li_css"><span class="ul_li_span_css">最重要的一个：OBS （开直播好方便 (*￣︶￣)）</span></li>
    </ul>
  </div>
</div>
</template>

<script>
  export default {
    name:"favorite",
    data(){
      return{
        size: 150,
        data1:[
          {
            author:"Convertio",
            description:"多文件格式转换",
            url:"https://convertio.co/zh/",
            action:"GO",
            imgUrl:require('../public/image/0001.png')
          },
          {
            author:"TinyPNG",
            description:"图片无损压缩",
            url:"https://tinypng.com/",
            action:"GO",
            imgUrl:require('../public/image/0002.png')
          },
          {
            author:"Typora",
            description:"Markdown 编辑器",
            url:"https://www.typora.io/",
            action:"GO",
            imgUrl:require('../public/image/0003.png')
          }
        ],
        data2:[
          {
            author:"Licecap",
            description:"屏幕录制工具",
            url:"https://licecap.en.softonic.com/",
            action:"GO",
            imgUrl:require('../public/image/0004.png')
          },
          {
            author:"Processon",
            description:"专业作图聚合工具",
            url:"https://www.processon.com/",
            action:"GO",
            imgUrl:require('../public/image/0005.png')
          },
          {
            author:"CCleaner",
            description:"轻量 PC 优化工具",
            url:"https://www.ccleaner.com/",
            action:"GO",
            imgUrl:require('../public/image/0006.png')
          }
        ],
        data3:[
          {
            author:"Xshell",
            description:"远程SSH工具",
            url:"http://www.netsarang.com/download/software.html",
            action:"GO",
            imgUrl:require('../public/image/0004.png')
          },
          {
            author:"ScreenToGif",
            description:"Gif图像屏幕录制",
            url:"https://www.screentogif.com",
            action:"GO",
            imgUrl:require('../public/image/0005.png')
          },
          {
            author:"Snipaste",
            description:"Windows截图工具",
            url:"https://www.snipaste.com",
            action:"GO",
            imgUrl:require('../public/image/0006.png')
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>

  .note_book{
    font-size: 16px; color: rgb(62, 62, 62);
    line-height: 1.6;
    word-spacing: 0px;
    letter-spacing: 0px;
    font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
    background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
    background-size: 20px 20px;
    background-position: center center;
  }
  .p_css{
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    padding: 0px;
    margin: 1.5em 0px;
  }
  .ul_css{
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    margin: 0px;
    padding: 0px;
    padding-left: 32px;
    list-style-type: disc;
  }
  .ul_li_css{
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    margin: 0px;
    padding: 0px;
    margin-bottom: 0.5em;
  }
  .ul_li_span_css{
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    margin: 0px;
    padding: 0px;
  }
</style>
