---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    forceDark: true
    effect: lightning
    hero:
      name: CyreneNameRoller
      tagline: 基于 Vue 3 + Electron 的随机点名桌面应用
      text: |
        CyreneNameRoller 是一个功能完善的随机点名桌面应用，
        采用 Windows 11 Fluent Design 设计语言，提供流畅的用户体验。

        支持 **随机点名**、**翻牌点名**、**智能平衡算法**、**数据统计** 等丰富功能。
      actions:
        -
          theme: brand
          text: 快速开始
          link: /guide/getting-started
        -
          theme: alt
          text: 查看功能
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
      ## 核心特性

      ### 🎯 智能平衡算法
      采用 **Fritsch-Carlson 单调三次 Hermite 插值算法**，确保点名公平性：
      - 被抽中次数越少的人，下次概率越高
      - 可视化曲线编辑器，直观调整算法参数
      - 满足不同场景的平衡需求

      ### 💾 数据双保险
      Electron 文件系统 + localStorage 双写机制：
      - 应用意外崩溃时自动恢复数据
      - 支持数据导出备份
      - 密码保护敏感操作

      ### 🎨 Fluent Design
      遵循 Windows 11 设计语言：
      - 亚克力材质效果
      - 光照效果
      - 流畅动画过渡
      - 响应式布局

      ## 快速开始

      \```bash
      # 克隆仓库
      git clone https://github.com/Cyrene2008/CyreneNameRoller.git
      cd CyreneNameRoller

      # 安装依赖
      pnpm install

      # 启动开发环境
      pnpm dev
      pnpm electron:dev

      # 构建 Electron 客户端
      pnpm electron:build
      \```

      ## 技术栈

      - **Vue 3** + **Vite** + **Electron**
      - **Pinia** 状态管理
      - **Vue Router** 路由（Hash 模式）
      - **@iconify/vue** (Fluent UI Icons)
      - **CSS 变量** + 自定义组件库

      ## 许可证

      [GPL-3.0](https://github.com/Cyrene2008/CyreneNameRoller/blob/main/LICENSE) - 详见 LICENSE 文件

      ## 支持

      - [GitHub](https://github.com/Cyrene2008/CyreneNameRoller)
      - [更新日志](/changelog)
      - [常见问题](/guide/faq)
      - [开发指南](/guide/development)