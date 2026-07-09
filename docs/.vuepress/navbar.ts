/**
 * Navbar 配置文件
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '开始使用', link: '/guide/getting-started' },
  { text: '功能介绍', link: '/guide/features' },
  { text: '平衡算法', link: '/guide/balance-algorithm' },
  { text: '配置选项', link: '/guide/configuration' },
  { text: '常见问题', link: '/guide/faq' },
  { text: '开发指南', link: '/guide/development' },
  { text: '更新日志', link: '/changelog' },
  { text: '博客', link: '/blog/' },
  { text: '示例', link: '/demo/README.md' },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Getting Started', link: '/en/guide/getting-started' },
  { text: 'Features', link: '/en/guide/features' },
  { text: 'Balance Algorithm', link: '/en/guide/balance-algorithm' },
  { text: 'Configuration', link: '/en/guide/configuration' },
  { text: 'FAQ', link: '/en/guide/faq' },
  { text: 'Development', link: '/en/guide/development' },
  { text: 'Changelog', link: '/en/changelog' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Demo', link: '/en/demo/README.md' },
])