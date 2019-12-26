const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: '@DuebassLei/vuepress-plugin-element-ui',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
