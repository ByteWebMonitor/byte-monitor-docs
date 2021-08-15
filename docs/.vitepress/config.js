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

                // 文档搜索插件
                // algolia: {
                //     apiKey: 'c57105e511faa5558547599f120ceeba',
                //     indexName: '古月闻星'
                // },

                nav: nav_generator(),
                sidebar: {
                    "/byte-monitor-jssdk/": byte_monitor_jssdk(),
                    "/byte-monitor-server-api/": byte_monitor_server_api(),
                    "/byte-monitor-admin/": byte_monitor_admin(),
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
                nav: nav_generator("en/"),
                sidebar: {
                    "/en/byte-monitor-jssdk/": byte_monitor_jssdk("en/"),
                    "/en/byte-monitor-server-api/": byte_monitor_server_api("en/"),
                    "/en/byte-monitor-admin/": byte_monitor_admin("en/"),
                },
            },
        },
    },
};

function nav_generator(Language) {
    if (!Language) Language = ""; //转化无传入参数undefined的情况
    return [
        { text: Language.length > 0 ? "home" : "首页", link: "/" },
        {
            text: "byte-monitor-jssdk",
            link: `${Language}byte-monitor-jssdk/test`, //这里用index路径进入文档，不会根据标题等级自动生成侧边栏列表
            activeMatch: `^/${Language}byte-monitor-jssdk/`,
        },
        {
            text: "byte-monitor-server-api",
            link: `/${Language}byte-monitor-server-api/index`,
        },
        {
            text: "byte-monitor-admin",
            link: `/${Language}byte-monitor-admin/index`,
        },
        {
            text: "organization",
            link: "https://github.com/ByteWebMonitor",
        },
    ];
}

function byte_monitor_jssdk(Language) {
    if (!Language) Language = ""; //转化无传入参数undefined的情况
    return [{
        text: Language.length > 0 ? "First Layer" : "第一层",

        //侧边栏子页生成，同时根据文件内容自动生成子页列表
        children: [{
                text: Language.length > 0 ? "Child1" : "子1",
                link: `/${Language}byte-monitor-jssdk/test`,
            },
            {
                text: Language.length > 0 ? "Child2" : "子2",
                link: `/${Language}byte-monitor-jssdk/survey`,
            },
        ],
    }, ];
}

function byte_monitor_server_api() {
    //暂时没改，根据实际情况再进行改动
    return [{
        text: "技术选型",
        children: [{ text: "test", link: "/weekly/20210808" }],
    }, ];
}

function byte_monitor_admin() {
    //暂时没改，根据实际情况再进行改动
    return [{
        text: "byte_monitor_admin",
        children: [{ text: "test", link: "/weekly/20210808" }],
    }, ];
}