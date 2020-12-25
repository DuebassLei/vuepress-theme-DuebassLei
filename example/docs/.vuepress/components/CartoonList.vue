<template>
  <div id="movie-list">
    <!-- <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in carouselList" :key="index">
        <el-image :src="item" size="100"></el-image>
      </el-carousel-item>
    </el-carousel> -->
    <h3>这些年，我们一起追过的番剧📼</h3>
    <el-row :gutter="20">
      <el-col
        :span="12"
        v-for="(o, index) in movieList"
        :key="index"
        style="margin-top: 10px"
      >
        <el-card style="border-radius: 10px;">
          <div slot="header" class="clearfix">
            <span>{{ o.name }}</span>
          </div>
          <el-image :src="o.img" fill="fill"  :style="{height:'300px'}"/>
          <div style="padding: 8px;height: 100px">
            <span>{{ o.desc }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const baseUrl = "https://duebasslei.gitee.io/picgopicturebed";
export default {
  name: "CartoonList",
  data() {
    return {
      baseUrl,
      movieList: [
        {
          img: `${baseUrl}/movie/p2020122501.png`,
          name: "四月是你的谎言",
          desc: "“我喜欢了你十年，却用整个四月，编织了一个我不爱你的谎言。”"
        },
        {
          img: `${baseUrl}/movie/p2020122502.png`,
          name: "甲铁城的卡巴内瑞",
          desc: "真正的英雄是谁？\n" +
            "是甲铁城的卡巴内瑞，是勇敢地守护他人，乃至献出生命的人们。"
        },
        {
          img: `${baseUrl}/movie/p2020122503.png`,
          name: "紫罗兰永恒花园",
          desc: "花无凋零之日，爱无传达之期，爱情亘古不变，紫罗兰永世长存，我的天这个画质，爱了爱了"
        },
        {
          img: `${baseUrl}/movie/p2020122504.png`,
          name: "我们仍未知道那天所看见的花的名字",
          desc: "看着你们的评论，我都有点怀疑自己是不是白活了22年，我没有青梅竹马，没有初恋，没有早恋，没有叛逆，只有认认真真地学习，上了所还行的大学，毕业时也没有和室友喝到天荒地老，就这样平平淡淡地离去，哎！"
        },
        {
          img: `${baseUrl}/movie/p2020122505.png`,
          name: "一人之下",
          desc: "宝姐终于动起来啦~~~！(\"▔□▔)/\n" +
            "等这一天等得太久，想想还有些小激动呢"
        },
        {
          img: `${baseUrl}/movie/p2020122506.png`,
          name: "天行九歌",
          desc: "焰灵姬老婆呀~~~"
        },
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
  height: 250px;
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
