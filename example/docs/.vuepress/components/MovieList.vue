<template>
  <div id="movie-list">
    <!-- <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in carouselList" :key="index">
        <el-image :src="item" size="100"></el-image>
      </el-carousel-item>
    </el-carousel> -->
    <h3>这些年，我们一起看过的电影📺</h3>
    <el-row :gutter="20">
      <el-col
        :span="8"
        v-for="(o, index) in movieList"
        :key="index"
        style="margin-top: 10px"
      >
        <el-card style="border-radius: 10px;">
          <div slot="header" class="clearfix">
            <span>{{ o.name }}</span>
          </div>
          <img :src="o.img" class="image" />
          <div style="padding: 14px;">
            <span>{{ o.desc }}</span>
            <div class="bottom clearfix"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const baseUrl = "https://duebasslei.gitee.io/picgopicturebed";
export default {
  name: "MovieList",
  data() {
    return {
      baseUrl,
      carouselList: [
        `${baseUrl}/photo/bg/0001.png`,
        `${baseUrl}/photo/bg/0002.png`,
        `${baseUrl}/photo/bg/0003.png`,
        `${baseUrl}/photo/bg/0005.png`,
        `${baseUrl}/photo/bg/0006.png`,
        `${baseUrl}/photo/bg/0009.png`
      ],
      movieList: [
        {
          img: `${baseUrl}/photo/bg/0001.png`,
          name: "《天空之城》",
          desc: "em...."
        },
        {
          img: `${baseUrl}/photo/bg/0002.png`,
          name: "《爱你，罗茜》",
          desc: "em...."
        },
        {
          img: `${baseUrl}/photo/bg/0005.png`,
          name: "《疯狂动物城》",
          desc: "em...."
        },
        {
          img: `${baseUrl}/photo/bg/0006.png`,
          name: "《天空之城》",
          desc: "em...."
        },
        {
          img: `${baseUrl}/photo/bg/0009.png`,
          name: "《天空之城》",
          desc: "em...."
        },
        {
          img: `${baseUrl}/photo/bg/0001.png`,
          name: "《天空之城》",
          desc: "em...."
        },
        {
          img: `${baseUrl}/photo/bg/0001.png`,
          name: "《天空之城》",
          desc: "em...."
        },
        {
          img: `${baseUrl}/photo/bg/0001.png`,
          name: "《天空之城》",
          desc: "em...."
        },
        {
          img: `${baseUrl}/photo/bg/0001.png`,
          name: "《天空之城》",
          desc: "em...."
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.time {
   font-size: 13px;
   color: #999;
 }

 .bottom {
   margin-top: 13px;
   line-height: 12px;
 }

 .button {
   padding: 0;
   float: right;
 }

 .image {
   width: 200px;
   height: 125px;
   display: block;
 }

 .clearfix:before,
 .clearfix:after {
     display: table;
     content: "";
 }

 .clearfix:after {
     clear: both
 }
</style>
