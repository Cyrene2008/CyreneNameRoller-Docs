---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    hero:
      name: CyreneNameRoller
      tagline: 基于 Vue 3 + Electron 的随机点名桌面应用
      text: 支持随机点名、翻牌点名、智能平衡算法、数据统计等丰富功能，采用 Windows 11 Fluent Design 设计语言。
      actions:
        -
          theme: brand
          text: 快速开始
          link: /guide/getting-started
        -
          theme: alt
          text: 功能介绍
          link: /guide/features
        -
          theme: alt
          text: GitHub
          link: https://github.com/Cyrene2008/CyreneNameRoller
  -
    type: features
    features:
      -
        title: 🎲 随机点名
        details: 支持多人模式、禁止重复、平衡算法加权概率
      -
        title: 🃏 翻牌点名
        details: 3D 翻转动画、一键多抽、收牌历史持久化
      -
        title: 📊 数据统计
        details: 实时统计抽取次数、原始概率、平衡概率
      -
        title: 📋 名单管理
        details: CRUD、批量删除、导入导出、白名单功能
      -
        title: 🔒 数据安全
        details: 密码保护关键操作、数据导出/导入/清除
      -
        title: 🎨 个性化设置
        details: 深色模式、UI 缩放、字体大小调整、多语言
  -
    type: markdown
    content: |
      ## 快速开始

      \```bash
      git clone https://github.com/Cyrene2008/CyreneNameRoller.git
      cd CyreneNameRoller
      pnpm install
      pnpm dev
      pnpm electron:dev
      \```

      完整安装和配置指南请查看 [开始使用](/guide/getting-started) 文档。

      ---

      📖 [项目介绍](/guide/intro) · [平衡算法](/guide/balance-algorithm) · [配置选项](/guide/configuration) · [常见问题](/guide/faq) · [更新日志](/changelog)