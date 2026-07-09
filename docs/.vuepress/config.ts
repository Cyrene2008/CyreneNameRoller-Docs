import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

import { zhNavbar, enNavbar } from './navbar'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Cyreneの随机点名器',
      description: '基于 Vue 3 + Tauri/Electron 的随机点名桌面应用，采用 Windows 11 Fluent Design 设计语言',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/Cyrene.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Cyreneの随机点名器',
  description: '基于 Vue 3 + Tauri/Electron 的随机点名桌面应用，采用 Windows 11 Fluent Design 设计语言',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Cyrene\'s Name Roller',
      description: 'A random name picker desktop app based on Vue 3 + Tauri/Electron with Windows 11 Fluent Design',
    },
  },



  theme: plumeTheme({
    hostname: 'https://点名器.昔涟.cn/',

    docsRepo: 'https://github.com/Cyrene2008/CyreneNameRoller-Docs',
    docsDir: 'docs',
    docsBranch: 'main',

    llmstxt: true,
    contributors: {
      mode: 'block',
      avatar: 'github',
      contributors: [
        {
          name: '星海昔涟',
          avatar: 'https://github.com/Cyrene2008.png',
          email: 'admin@昔涟.cn',
          url: 'https://github.com/Cyrene2008',
        },
        {
          name: '叶背影',
          avatar: 'https://github.com/LeafS825.png',
          email: 'leafshadow52@outlook.com',
          url: 'https://github.com/LeafS825',
        }
      ],
    },
    changelog: true,

    cache: 'filesystem',

    autoFrontmatter: {
      permalink: false,
    },

    search: {
      provider: 'local',
    },

    markdown: {
      icon: { provider: 'iconify', size: '1.5rem' },
      table: {
        align: 'center',
      },
      field: true,
    },



    locales: {
      '/': {
        nav: zhNavbar,
        sidebar: {
          '/doc/': [
            {
              text: '指南',
              link: '/doc/guide/start',
              items: [
                { text: '开始使用', link: '/doc/guide/start' },
                { text: '界面介绍', link: '/doc/guide/interface' },
                { text: '功能指南', link: '/doc/guide/features' },
              ],
            },
            {
              text: '设置',
              link: '/doc/settings/basic',
              items: [
                { text: '基本设置', link: '/doc/settings/basic' },
                { text: '高级设置', link: '/doc/settings/advanced' },
              ],
            },
            {
              text: '资源',
              link: '/doc/resources/contribute',
              items: [
                { text: '贡献指南', link: '/doc/resources/contribute' },
              ],
            },
          ],
        },
      },
      '/en/': {
        nav: enNavbar,
        sidebar: {
          '/doc/': [
            {
              text: 'Guide',
              link: '/doc/guide/start',
              items: [
                { text: 'Getting Started', link: '/doc/guide/start' },
                { text: 'Interface', link: '/doc/guide/interface' },
                { text: 'Features Guide', link: '/doc/guide/features' },
              ],
            },
            {
              text: 'Settings',
              link: '/doc/settings/basic',
              items: [
                { text: 'Basic Settings', link: '/doc/settings/basic' },
                { text: 'Advanced Settings', link: '/doc/settings/advanced' },
              ],
            },
            {
              text: 'Resources',
              link: '/doc/resources/contribute',
              items: [
                { text: 'Contribution Guide', link: '/doc/resources/contribute' },
              ],
            },
          ],
        },
      },
    },
  }),
})