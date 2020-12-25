<template>
  <div id="chest-list">
    <!-- <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in carouselList" :key="index">
        <el-image :src="item" size="100"></el-image>
      </el-carousel-item>
    </el-carousel> -->
   待续。。。
  </div>
</template>
<script>
const baseUrl = "https://duebasslei.gitee.io/picgopicturebed";
export default {
  name: "ChestList",
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
