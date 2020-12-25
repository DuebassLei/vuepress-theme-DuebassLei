<template>
  <div id="movie-list">
    <!-- <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in carouselList" :key="index">
        <el-image :src="item" size="100"></el-image>
      </el-carousel-item>
    </el-carousel> -->
    <h3>这些年，我们一起看过的电影🎬</h3>
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
  name: "MovieList",
  data() {
    return {
      baseUrl,
      movieList: [
        {
          img: `${baseUrl}/movie/p579729551.png`,
          name: "三傻大闹宝莱坞 3 Idiots (2009)",
          desc: "这几个月来看过的最好的片——”做自己“，也许才是人生终极的成功。别总嘲笑印度人”阿三“，他们已经追上来了，无论经济、科技还是我们一贯认为只会跳舞唱歌的宝莱坞电影。盛赞！5+1星！"
        },
        {
          img: `${baseUrl}/movie/p2190768432.png`,
          name: "爱你，罗茜 Love, Rosie (2014)",
          desc: "不算肤浅的chick-flick。哪怕两小无猜、青梅竹马的男孩女孩，也要经历生活的排山倒海、无数的失去错过后才能在一起啊。Sam Claflin终于把颜值给刷爆了，还是最纯正的英国古典美，Jude Law后继有人～"
        },
        {
          img: `${baseUrl}/movie/p501177648.png`,
          name: "怦然心动 Flipped (2010)",
          desc: "真正的幸福是来自内心深处。"
        },
        {
          img: `${baseUrl}/movie/p2574551676.png`,
          name: "海上钢琴师(1998)",
          desc: "每个人的心里都有自己的一艘船 一个近乎偏执的小归宿 只是因为它让我们感到实实在在的安全 不致无枝可依。"
        },
        {
          img: `${baseUrl}/movie/p457760035.png`,
          name: "泰坦尼克号 Titanic (1997)",
          desc: "爱你原本只是一瞬，却不知在时间的洪流中成了永恒。"
        },
        {
          img: `${baseUrl}/movie/p2455050536.png`,
          name: "大话西游之大圣娶亲(1995)",
          desc: "经历过和正在经历着悟空式的命运和紫霞式的爱情，才发现生命的本质是以最低的姿态出现的。英雄？你为什么不问问做英雄的代价？ “想不到经过这五百年，我要找的并不是她，而是你。”人生际遇真是难以言喻。"
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
