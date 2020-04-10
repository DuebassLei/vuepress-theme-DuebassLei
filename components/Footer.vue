<template>
  <div class="footer-wrapper">
    <p style="color: #2c3e50">
      🔔本站遵循MIT开源协议，内容仅供用于学习和交流，请勿用于商业用途，转载请注明出处及原文链接。
    </p>

    <span>
      <i class="iconfont reco-theme"></i>
      <a target="blank" href="https://github.com/DuebassLei/vuepress-theme-DuebassLei">主题 Vuepress-Theme-DuebassLei</a>
    </span>
    <span v-if="$themeConfig.record">
      <i class="iconfont reco-beian"></i>
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span>
    <span>
      <i class="iconfont reco-copyright"></i>
      <a>
        <span v-if="$themeConfig.startYear">{{ $themeConfig.startYear }} - </span>
        {{ year }}
        &nbsp;&nbsp;🌱
        <span v-if="$themeConfig.author || $site.title">{{ $themeConfig.author || $site.title }}</span>
      </a>
    </span>
    <span v-show="$themeConfig.valineConfig !== undefined">
      <i class="iconfont reco-eye"></i>
      <AccessNumber idVal="/" />
    </span>
    <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    padding: 1.5rem 2.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: lighten($textColor, 25%);
    a {
      font-size 14px
    }
    > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
    .cyber-security {
      img {
        margin-right .5rem
        width 20px
        height 20px
        vertical-align middle
      }
      a {
        vertical-align middle
      }
    }
  }

@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
