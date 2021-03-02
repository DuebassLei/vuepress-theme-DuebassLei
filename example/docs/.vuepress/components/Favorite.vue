<template>
<div id="favorite">
    <el-row type="flex" justify="center">
    <el-col :span="18" >
      <el-card :style="{borderRadius: '10px'}">
        <div slot="header">
          <span style="color: #46BD87">Vant-App移动端</span>
          <a target="_blank" style="float: right; padding: 3px 0;color: #F56C6C;margin: 0 2px" href="https://github.com/DuebassLei/vant-app">Github仓库</a>
          <a target="_blank" style="float: right; padding: 3px 0;color: #46BD87;margin: 0 2px" href="https://blog.gaosanshi.top/vant-app/">在线预览</a>
        </div>
        <div class="app_img">
          <el-carousel :interval="4000" type="card" height="450px">
            <el-carousel-item v-for="(item, index) in vantAppList" :key="index">
              <el-image :src="item.url" size="145"></el-image>
            </el-carousel-item>
        </el-carousel>
        </div>
        <div class="app_desc">
          <div class="output_wrapper" id="output_wrapper_id" style="font-size: 15px; color: rgb(62, 62, 62); line-height: 1.8; word-spacing: 2px; letter-spacing: 2px; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%); background-size: 20px 20px; background-position: center center;"><h2 id="h" style="color: inherit; line-height: inherit; padding: 0px; margin: 1.6em 0px; font-weight: bold; font-size: 1.4em;"><span style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;">简介</span></h2>
            <p style="font-size: inherit; color: inherit; line-height: inherit; padding: 0px; margin: 0.5em 0px;">一个弄着玩的APP，使用Vue全家桶VueCli3.x+Vant+Vuex+Vue-Router。</p>
            <h2 id="h-1" style="color: inherit; line-height: inherit; padding: 0px; margin: 0.5em 0px; font-weight: bold; font-size: 1.4em;"><span style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;">功能</span></h2>
            <ul style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px; padding-left: 32px; list-style-type: disc;">
              <li style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px; margin-bottom: 0.5em;"><span style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;">Vant 按需加载组件</span></li>
              <li style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px; margin-bottom: 0.5em;"><span style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;">Vant 主题个性化定制</span></li>
              <li style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px; margin-bottom: 0.5em;"><span style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;">移动端vw,rem适配</span></li>
              <li style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px; margin-bottom: 0.5em;"><span style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;">Vuex,Vue-Router模块化</span></li>
              <li style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px; margin-bottom: 0.5em;"><span style="font-size: inherit; color: inherit; line-height: inherit; margin: 0px; padding: 0px;">axios组件http.js封装</span></li>
            </ul>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

</div>
</template>

<script>
const baseUrl = "https://duebasslei.gitee.io/picgopicturebed";
  export default {
    name:"favorite",
    data(){
      return{
        size: 150,
        vantAppList:[
          {
            desc: '首页',
            url: `${baseUrl}/openSource/vant-app1.jpg`
          },
          {
            desc: '小说列表',
            // url: `${baseUrl}/openSource/vant-app2.jpg`
            url: `${baseUrl}/openSource/20210302163330.png`


          },
          {
            desc: '小说简介',
            url: `${baseUrl}/openSource/20210302163508.png`
          },

        ]
      }
    }
  }
</script>
<style lang="stylus" scoped >
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
