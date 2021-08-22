/**
 * 获取中英文状态下的状态栏名称与跳转链接
 * @param Language 传入语言
 */
function nav_generator(Language = "en/") {
  return [
    { text: Language ? "home" : "首页", link: Language ? "/en/" : "/" },
    {
      text: "byte-monitor-jssdk", //如果需要中英文 可参照其它text的配置方式
      link: `${Language}byte-monitor-jssdk/introduction`,
    },
    {
      text: "byte-monitor-server-api",
      link: `/${Language}byte-monitor-server-api/introduction`,
    },
    {
      text: "byte-monitor-admin",
      link: `/${Language}byte-monitor-admin/introduction`,
    },
    {
      text: Language ? "More" : "更多",
      items: [
        {
          text: "byte-vitepress-cli",
          link: `/${Language}byte-vitepress-cli/introduction`,
        },
        {
          text: "feishu-monitor-robot",
          link: `/${Language}feishu-monitor-robot/introduction`,
        },
        {
          text: "byte-monitor-bot",
          link: `/${Language}byte-monitor-bot/introduction`,
        },
      ],
    },

    {
      text: Language ? "Organization" : "组织",
      link: "https://github.com/ByteWebMonitor",
    },
  ];
}

/**
 * 获取中英文状态下的jssdk文档侧边栏
 * @param Language 传入语言
 */
function byte_monitor_jssdk(Language = "en/") {
  //text配置，前者为英文状态显示，后者为中文显示
  //link配置，中英文对应文件夹中的对应文件名要相同，如/byte-monitor-jssdk/introduction 和 /en/byte-monitor-jssdk/introduction
  let basePath = `/${Language}byte-monitor-jssdk`;
  return [
    //第一层级
    {
      text: Language ? "Guide" : "指南",
      children: [
        {
          text: Language ? "Introduction" : "介绍",
          link: `${basePath}/introduction`,
        },
        {
          text: Language ? "Survey" : "调研",
          link: `${basePath}/survey`,
        },
      ],
    },
    //第二层级
    {
      text: Language ? "Insight" : "深入",
      children: [
        {
          text: Language ? "Second Layer" : "第二层配置",
          link: `/${Language}byte-monitor-jssdk/second`,
        },
      ],
    },
  ];
}

/**
 * 获取中英文状态下的api文档侧边栏
 * @param Language 传入语言
 */
function byte_monitor_server_api(Language = "en/") {
  let basePath = `/${Language}byte-monitor-server-api`;
  return [
    {
      text: Language ? "API" : "指南",
      children: [
        {
          text: Language ? "Introduction" : "介绍",
          link: `${basePath}/introduction`,
        },
        {
          text: Language ? "API" : "API",
          link: `${basePath}/api`,
        },
      ],
    },
  ];
}

/**
 * 获取中英文状态下的admin文档侧边栏
 * @param Language 传入语言
 */
function byte_monitor_admin(Language = "en/") {
  let basePath = `/${Language}byte-monitor-admin`;
  return [
    {
      text: Language ? "admin" : "管理员",
      children: [
        {
          text: Language ? "Introduction" : "介绍",
          link: `${basePath}/introduction`,
        },
      ],
    },
  ];
}

/**
 * 获取中英文状态下的admin文档侧边栏
 * @param Language 传入语言
 */
function byte_vitepress_cli(Language = "en/") {
  let basePath = `/${Language}byte-vitepress-cli`;
  return [
    {
      text: Language ? "CLI" : "脚手架",
      children: [
        {
          text: Language ? "Introduction" : "介绍",
          link: `${basePath}/introduction`,
        },
      ],
    },
  ];
}

/**
 * 获取中英文状态下的admin文档侧边栏
 * @param Language 传入语言
 */
function feishu_monitor_robot(Language = "en/") {
  let basePath = `/${Language}feishu-monitor-robot`;
  return [
    {
      text: Language ? "Robot" : "机器人",
      children: [
        {
          text: Language ? "Introduction" : "介绍",
          link: `${basePath}/introduction`,
        },
      ],
    },
  ];
}

/**
 * 获取中英文状态下的admin文档侧边栏
 * @param Language 传入语言
 */
function byte_monitor_bot(Language = "en/") {
  let basePath = `/${Language}byte-monitor-bot`;
  return [
    {
      text: Language ? "Bot" : "自动推送",
      children: [
        {
          text: Language ? "Introduction" : "介绍",
          link: `${basePath}/introduction`,
        },
      ],
    },
  ];
}
module.exports = {
  nav_generator,
  byte_monitor_jssdk,
  byte_monitor_server_api,
  byte_monitor_admin,
  byte_vitepress_cli,
  feishu_monitor_robot,
  byte_monitor_bot,
};
