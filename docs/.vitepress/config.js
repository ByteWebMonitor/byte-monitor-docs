const {
  nav_generator,
  byte_monitor_jssdk,
  byte_monitor_server_api,
  byte_monitor_admin,
  byte_vitepress_cli,
  feishu_monitor_robot,
  byte_monitor_bot
  
} = require("./barConfig");
module.exports = {
  title: "ByteWebMonitor",
  description: "闻星",
  themeConfig: {
    repo: "ByteWebMonitor/byte-monitor-docs",
    docsDir: "docs",
    editLinks: true,
    docsBranch: "master",
    locales: {
      //中文
      "/": {
        lang: "zh-CN",
        // 编辑链接文字
        editLinkText: "在 GitHub 上编辑此页",
        // 更新时间文字
        lastUpdated: "最后更新于",
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
        nav: nav_generator((Language = "")),
        sidebar: {
          "/byte-monitor-jssdk/": byte_monitor_jssdk((Language = "")),
          "/byte-monitor-server-api/": byte_monitor_server_api((Language = "")),
          "/byte-monitor-admin/": byte_monitor_admin((Language = "")),
          "/byte-vitepress-cli/": byte_vitepress_cli((Language = "")),
          "/feishu-monitor-robot/": feishu_monitor_robot((Language = "")),
          "/byte-monitor-bot/": byte_monitor_bot((Language = "")),
        },
      },
      //English
      "/en/": {
        lang: "en-US",
        // 编辑链接文字
        editLinkText: "Edit this page on GitHub",
        // 更新时间文字
        lastUpdated: "Last Updated",
        // 多语言下拉菜单的标题
        selectText: "Language",
        // 该语言在下拉菜单中的标签
        label: "English",
        nav: nav_generator(),
        sidebar: {
          "/en/byte-monitor-jssdk/": byte_monitor_jssdk(),
          "/en/byte-monitor-server-api/": byte_monitor_server_api(),
          "/en/byte-monitor-admin/": byte_monitor_admin(),
          "/en/byte-vitepress-cli/": byte_vitepress_cli(),
          "/en/feishu-monitor-robot/": feishu_monitor_robot(),
          "/en/bute-monitor-bot/": byte_monitor_bot(),
        },
      },
    },
  },
};
