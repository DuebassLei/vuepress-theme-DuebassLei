<template>
  <div class="tags-wrapper">
    <Common :sidebar="false" :isComment="false">
      <!-- 标签集合 -->
      <ModuleTransition>
        <!-- 收藏 -->
        <favorite></favorite>
      </ModuleTransition>

      <!-- 博客列表 -->
      <ModuleTransition delay="0.08">

      </ModuleTransition>

      <!-- 分页 -->
      <ModuleTransition delay="0.16">
      </ModuleTransition>
    </Common>
  </div>
</template>

<script>
import Common from '@theme/components/Common'
import ModuleTransition from '@theme/components/ModuleTransition'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'

export default {
  mixins: [moduleTransitonMixin],
  components: { Common, ModuleTransition },
  data () {
    return {
    }
  },

  created () {

  },

  mounted () {

  },

  methods: {
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
  .tags-wrapper
    max-width: 740px;
    margin: 0 auto;
    padding: 4.6rem 2.5rem 0;

  @media (max-width: $MQMobile)
    .tags-wrapper
      padding: 5rem 0.6rem 0;
</style>
