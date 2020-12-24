const path = require("path");

// Theme API.
module.exports = (options, ctx) => ({
  alias() {
    const { themeConfig, siteConfig } = ctx;
    // resolve algolia
    const isAlgoliaSearch =
      themeConfig.algolia ||
      Object.keys((siteConfig.locales && themeConfig.locales) || {}).some(
        base => themeConfig.locales[base].algolia
      );
    return {
      "@AlgoliaSearchBox": isAlgoliaSearch
        ? path.resolve(__dirname, "components/AlgoliaSearchBox.vue")
        : path.resolve(__dirname, "noopModule.js"),
      "@SearchBox": path.resolve(__dirname, "components/SearchBox.vue")
    };
  },

  plugins: [
    "@vuepress-reco/back-to-top",
    "@vuepress-reco/extract-code",
    "@vuepress-reco/loading-page",
    "@vuepress-reco/pagation",
    "@vuepress-reco/comments",
    "@vuepress/active-header-links",
    [
      "@vuepress/medium-zoom",
      {
        selector: ".theme-reco-content :not(a) > img"
      }
    ],
    "@vuepress/plugin-nprogress",
    [
      "@vuepress/plugin-blog",
      {
        permalink: "/:regular",
        frontmatters: [
          {
            id: "tags",
            keys: ["tags"],
            path: "/tag/",
            layout: "Tags",
            scopeLayout: "Tag"
          },
          {
            id: "categories",
            keys: ["categories"],
            path: "/categories/",
            layout: "Categories",
            scopeLayout: "Category"
          },
          {
            id: "openSource",
            keys: ["openSource"],
            path: "/openSource/",
            layout: "OpenSource",
            scopeLayout: "OpenSource"
          },
          {
            id: "hobby",
            keys: ["hobby"],
            path: "/hobby/",
            layout: "Hobby",
            scopeLayout: "Hobby"
          },
          {
            id: "mine",
            keys: ["mine"],
            path: "/mine/",
            layout: "Mine",
            scopeLayout: "Mine"
          },
          {
            id: "timeline",
            keys: ["timeline"],
            path: "/timeline/",
            layout: "TimeLines",
            scopeLayout: "TimeLine"
          },
          {
            id: "movie",
            keys: ["movie"],
            path: "/movie/",
            layout: "Movie",
            scopeLayout: "Movie"
          },
          
        ]
      }
    ],
    [
      "container",
      {
        type: "tip",
        defaultTitle: {
          "/zh/": "提示"
        }
      }
    ],
    [
      "container",
      {
        type: "warning",
        defaultTitle: {
          "/zh/": "注意"
        }
      }
    ],
    [
      "container",
      {
        type: "danger",
        defaultTitle: {
          "/zh/": "警告"
        }
      }
    ]
  ]
});
