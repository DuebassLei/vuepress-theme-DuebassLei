<template>
  <div id="gallery">
    <h1>画廊</h1>
    <el-row>
      <el-col :span="8" v-for="(o, index) in data1" :key="index">
        <el-card :body-style="{ padding: '0px' }" :style="{margin:'10px',borderRadius:'5%'}">
          <el-avatar :size="size" :src="o.imgUrl"></el-avatar>
          <div style="padding: 14px;">
            <h1>{{o.author}}</h1>
            <p >{{o.description}}</p>
            <div class="action_btn">
              <el-button type="text" class="button"><a :href="o.url"  target="_blank" :style="{color:'#000'}">{{o.action}}</a></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" v-for="(o, index) in data2" :key="index">
        <el-card :body-style="{ padding: '0px' }" :style="{margin:'10px',borderRadius:'5%'}">
          <el-avatar :size="size" :src="o.imgUrl"></el-avatar>
          <div style="padding: 14px;">
            <h1>{{o.author}}</h1>
            <p >{{o.description}}</p>
            <div class="action_btn">
              <el-button type="text" class="button"><a :href="o.url"  target="_blank" :style="{color:'#000'}">{{o.action}}</a></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name:"gallery",
    data(){
      return{
        size: 150,
        data1:[
          {
            author:"Convertio",
            description:"多文件格式转换",
            url:"https://convertio.co/zh/",
            action:"前往",
            imgUrl:require('../public/image/0001.png')
          },
          {
            author:"TinyPNG",
            description:"图片无损压缩",
            url:"https://tinypng.com/",
            action:"前往",
            imgUrl:require('../public/image/0002.png')
          },
          {
            author:"Typora",
            description:"Markdown 编辑器",
            url:"https://www.typora.io/",
            action:"前往",
            imgUrl:require('../public/image/0003.png')
          }
        ],
        data2:[
          {
            author:"Licecap",
            description:"屏幕录制工具",
            url:"https://licecap.en.softonic.com/",
            action:"前往",
            imgUrl:require('../public/image/0004.png')
          },
          {
            author:"Processon",
            description:"专业作图聚合工具",
            url:"https://www.processon.com/",
            action:"前往",
            imgUrl:require('../public/image/0005.png')
          },
          {
            author:"CCleaner",
            description:"轻量 PC 优化工具",
            url:"https://www.ccleaner.com/",
            action:"前往",
            imgUrl:require('../public/image/0006.png')
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .el-card{
    text-align center
    .image{
      margin-top 15px
      width 75%
      height 75%
      border-radius 50%
    }
  }
  .action_btn{
    background-color #A0CFFF
    color #fff
    border-radius 40px
    display: flex;
    justify-content: center;
    a:hover
    {
      background-color lightseagreen
    }
  }

</style>
