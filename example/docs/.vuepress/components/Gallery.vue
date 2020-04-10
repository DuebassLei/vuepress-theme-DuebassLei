<template>
  <div id="gallery">
    <h3>🎈2020年春节</h3>
    <p><i>再见2019，欢迎2020，Record Life</i></p>
    <el-row>
      <el-col :span="8" v-for="(o, index) in data1" :key="index">
        <el-card :body-style="{ padding: '0px' }" :style="{margin:'10px',borderRadius:'5%'}">
          <el-image :size="size" :src="o.imgUrl"></el-image>
<!--          <div style="padding: 14px;">-->
<!--            <h1>{{o.author}}</h1>-->
<!--            <p >{{o.description}}</p>-->
<!--            <div class="action_btn">-->
<!--              <el-button type="text" class="button"><a :href="o.url"  target="_blank" :style="{color:'#000'}">{{o.action}}</a></el-button>-->
<!--            </div>-->
<!--          </div>-->
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
            name:"兰花",
            description:"",
            url:"",
            action:"前往",
            imgUrl:require('../public/photo/ps2.jpg')
          },
          {
            author:"",
            description:"",
            url:"",
            action:"前往",
            imgUrl:require('../public/photo/ps3.jpg')
          },
          {
            author:"",
            description:"",
            url:"",
            action:"前往",
            imgUrl:require('../public/photo/ps4.jpg')
          },
          {
            author:"",
            description:"",
            url:"",
            action:"前往",
            imgUrl:require('../public/photo/ps5.jpg')
          },
          {
            author:"",
            description:"",
            url:"",
            action:"前往",
            imgUrl:require('../public/photo/ps6.jpg')
          },
          {
            author:"",
            description:"",
            url:"",
            action:"前往",
            imgUrl:require('../public/photo/ps7.jpg')
          },
          {
            author:"",
            description:"",
            url:"",
            action:"前往",
            imgUrl:require('../public/photo/ps8.jpg')
          },
          {
            author:"",
            description:"",
            url:"",
            action:"前往",
            imgUrl:require('../public/photo/ps9.jpg')
          },
          {
            author:"",
            description:"",
            url:"",
            action:"前往",
            imgUrl:require('../public/photo/ps10.jpg')
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
      margin-top 10px
      width 100%
      height 100%
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
