
module.exports = {
  title: "海边的小溪鱼",
  description: '人生如逆旅，我亦是行人',
  dest: 'example/docs/public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // theme: 'reco',
  theme: require.resolve('../../../'),
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
      { text: '联系',
        icon: 'reco-message',
        items: [
          //{ text: 'NPM', link: 'https://www.npmjs.com/~reco_luan', icon: 'reco-npm' },
          { text: 'CSDN', link: 'https://blog.csdn.net/m0_37903882', icon: 'reco-csdn' },
          { text: 'GitHub', link: 'https://github.com/DuebassLei', icon: 'reco-github' },
          { text: '简书', link: 'https://www.jianshu.com/u/6740c2a5866d', icon: 'reco-jianshu' },
          { text: '掘金', link: 'https://juejin.im/user/5aa1029c51882555770c0603', icon: 'reco-juejin' },
          { text: '码云', link: 'https://gitee.com/DuebassLei', icon: 'reco-mayun' },
          { text: '知乎', link: 'https://www.zhihu.com/people/gao-lei-79-95/activities', icon: 'reco-zhihu' }
          // { text: '博客圆', link: 'https://www.cnblogs.com/luanhewei/', icon: 'reco-bokeyuan' },
         // { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A', icon: 'reco-wechat' },
        ]
      }
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      },
      tools: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: '收藏' // 默认 “工具”
      },

    },
    logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'DuebassLei',
    // 备案号
    record: '海边的小溪鱼',
    // 项目开始时间
    startYear: '2018',
    editLinkText:"编辑该页面",
    /**
     *  GitHub Repository
     */
    repo: 'DuebassLei/vuepress-theme-reco',
    // // 假如文档不是放在仓库的根目录下：
    docsDir: 'example/docs',
    // // 假如文档放在一个特定的分支下：
    docsBranch: 'develop',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'uFQFtFXij22g7A1mEcSbrOeV-gzGzoHsz',// your appId
      appKey: 'jJfllLrLraFAWscO036Fwabp', // your appKey
      placeholder: '欢迎留言与我分享您的想法...'
    },
    vssueConfig: {
      admins: ['recoluan'],
      platform: 'github',
      owner: 'vuepress-reco',
      repo: 'vuepress-reco.github.io',
      clientId: '4d81cea3b3d8aac8e88e',
      clientSecret: 'd23e8556b6d3c85abffbf4b8d853afb2ea08875a',
    },
    // keyPage: {
    //   keys: ['123456']
    // },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ]
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    require('./plugins/notification/index'),
    require('./plugins/element/index')
  ]
}
