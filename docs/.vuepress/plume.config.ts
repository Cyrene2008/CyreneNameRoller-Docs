/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import { enCollections, zhCollections } from './collections'
import { enNavbar, zhNavbar } from './navbar'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/Cyrene2008/CyreneNameRoller-Docs' },
  ],

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: true,

  /**
   * 站点页脚
   */
  footer: {
    message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    copyright: 'Licensed under <a rel="noopener noreferrer" target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>',
  },

  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/theme/#profile
       */
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'CyreneNameRoller',
        description: 'CyreneNameRoller 应用文档',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      collections: zhCollections,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
    '/en/': {
      /**
       * @see https://theme-plume.vuejs.press/config/theme/#profile
       */
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'CyreneNameRoller',
        description: 'CyreneNameRoller Documentation',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      collections: enCollections,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
  },

  /**
   * 博客配置（已迁移到 collections 系统）
   * @see https://theme-plume.vuejs.press/config/theme/#blog
   */
  // blog: {},

  /**
   * 评论配置
   * @see https://theme-plume.vuejs.press/guide/features/comment/
   */
  // comment: {
  //   provider: 'giscus',
  //   options: {
  //     repo: '',
  //     repoId: '',
  //     category: '',
  //     categoryId: '',
  //     mapping: 'pathname',
  //     strict: false,
  //     reactionsEnabled: true,
  //     lazyLoading: true,
  //   },
  // },

  /**
   * 编辑链接
   * @see https://theme-plume.vuejs.press/config/theme/#editlink
   */
  // editLink: true,
  // docsRepo: 'Cyrene2008/CyreneNameRoller-Docs',
  // docsDir: 'docs',
  // docsBranch: 'main',
  // editLinkText: '编辑此页',

  /**
   * 最后更新
   * @see https://theme-plume.vuejs.press/config/theme/#lastupdated
   */
  // lastUpdated: true,
  // lastUpdatedText: '最后更新',
  // contributors: true,
  // contributorsText: '贡献者',

  /**
   * 代码高亮
   * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
   */
  // codeHighlighter: {
  //   twoslash: true, // 启用 twoslash
  //   whitespace: true, // 启用 空格/Tab 高亮
  //   lineNumbers: true, // 启用行号
  // },

  /**
   * 阅读时间
   * @see https://theme-plume.vuejs.press/config/theme/#readingtime
   */
  // readingTime: true,

  /**
   * 文章信息
   * @see https://theme-plume.vuejs.press/config/theme/#article
   */
  // article: true,

  /**
   * 侧边栏 @see https://theme-plume.vuejs.press/config/theme/#sidebar
   */
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 上一页 下一页
   * @see https://theme-plume.vuejs.press/config/theme/#nav
   */
  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接

  /**
   * 外链图标
   * @see https://theme-plume.vuejs.press/config/theme/#externalLinkIcon
   */
  // externalLinkIcon: true,

  /**
   * 非禁用主题配色
   * @see https://theme-plume.vuejs.press/config/theme/#themeColorPresets
   */
  // themeColorPresets: ['default', 'green', 'blue'],

  /**
   * 主题色
   * @see https://theme-plume.vuejs.press/config/theme/#themeColor
   */
  // themeColor: '#3eaf7c',

  /**
   * 过渡动画
   * @see https://theme-plume.vuejs.press/config/theme/#transition
   */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },
})