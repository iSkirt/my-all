module.exports = {
  base: "/", // 这是部署到 github 路径
  title: "My All",
  description: "my all",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/gakki.ico" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  // 默认主题配置
  themeConfig: {
    // 导航栏logo
    logo: "gakki-02.jpg",
    // 页面滚动效果
    themeConfig: {
      smoothScroll: true
    },
    // 最后更新时间
    lastUpdated: "Last Updated",
    nav: [
      { text: "指南", link: "/guide/" },
      {
        text: "前端",
        link: "/front/"
      },
      {
        text: "计算机",
        link: "/computer/"
      },
      {
        text: "GitHub",
        link: "https://github.com/xilinxia/my-all"
      }
    ],
    // 多个侧边栏
    sidebar: {
      "/front/": [
        ["", "前端"],
        {
          title: "html",
          children: [
            {
              title: "html",
              children: [
                {
                  title: "html",
                  path: "html/html/html"
                }
              ]
            },
            {
              title: "html5",
              children: [
                {
                  title: "html5",
                  path: "html/html5/html5"
                }
              ]
            }
          ]
        }
      ],
      "/computer/": [
        ["", "计算机"],
        {
          title: "计算机网络基础",
          children: [
            {
              title: "TCP三次握手和四次挥手",
              path: "network-basic/tcp34"
            }
          ]
        }
      ]
    }
  }
};
