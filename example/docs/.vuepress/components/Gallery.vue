<template>
  <div id="gallery">
    <h3>🎈2020年春节</h3>
    <p><i>再见2019，欢迎2020，Record Life</i></p>
    <el-row>
      <el-col :span="8" v-for="(o, index) in gallery2019" :key="index">
        <el-card
          :body-style="{ padding: '0px' }"
          :style="{ margin: '10px', borderRadius: '10px' }"
        >
          <el-image :size="size" :src="o.imgUrl"></el-image>
          <p>{{ o.description }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import galleryMixin from "./mixins/mixinGallary";
export default {
  name: "gallery",
  mixins: [galleryMixin],
  data() {
    return {
      size: 150
    };
  }
};
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
