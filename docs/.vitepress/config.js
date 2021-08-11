module.exports = {
  lang: 'Zh',
  title: 'ByteWebMonitor',
  description: '闻星',
  // markdown: {
  //   // options for markdown-it-anchor
  //   // anchor: { permalink: false },

  //   // options for markdown-it-toc

  //   config: (md) => {
  //     // use more markdown-it plugins!
  //     md.use(require('markdown-it'))
  //     md.use(require('markdown-it-latex').default)
  //     md.use(require('markdown-it-katex'))
  //     md.use(require('markdown-it-toc'))

  //     const originalRender = md.render
  //     const REG_MATH_MUSTACHE_TAG = /<span class="katex">/g
  //     const replacer = '<span v-pre class="katex">'
  //     md.render = function () {
  //       return originalRender
  //         .apply(this, arguments)
  //         .replace(REG_MATH_MUSTACHE_TAG, replacer)
  //     }


  //   // md.use(require('@iktakahiro/markdown-it-katex'))
  //   // md.render = function () {
  //   //     return md
  //   //         .render
  //   //         .apply(this, arguments)
  //   //         .replace(/<span class="katex">/g, '<span v-pre class="katex">')
  //   // }

  //   },
  //   toc: { includeLevel: [1,2,3,4,5] }

  // },
  themeConfig: {
    repo: 'ByteWebMonitor/byte-monitor-docs',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    // algolia: {
    //   apiKey: 'c57105e511faa5558547599f120ceeba',
    //   indexName: '古月闻星'
    // },
    nav: [
      { text: '主页', link: '/' },
      {
        text: 'byte-monitor-jssdk',
        link: '/byte-monitor-jssdk/index',
        activeMatch: '^/byte-monitor-jssdk/'
      },
      {
        text: 'byte-monitor-server-api',
        link: 'byte-monitor-server-api/index'
      },      
      {
        text: 'byte-monitor-admin',
        link: 'byte-monitor-admin/index'
      },
      {
        text: 'organization',
        link: 'https://github.com/ByteWebMonitor'
      }
    ],
    sidebar: {
      '/byte-monitor-jssdk/': byte_monitor_jssdk(),
      '/byte-monitor-server-api/': byte_monitor_server_api(),
      '/byte-monitor-admin/': byte_monitor_admin()
    }
  }
}

function byte_monitor_jssdk() {
  return [
    {
      text: '前端监控调研',
      children: [
        { text: '调研', link: '/byte-monitor-jssdk/survey' }
    ]
    }
  ]
}

function byte_monitor_server_api() {
  return [
    {
      text: '技术选型',
      children: [
        { text: '', link: '/weekly/20210808' }
    ]
    }
  ]
}
function byte_monitor_admin() {
  return [
    {
      text: 'byte_monitor_admin',
      children: [
        { text: '', link: '/weekly/20210808' }
    ]
    }
  ]
}
