/**
 * Collections 配置文件
 */

import { defineCollection, defineCollections } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhGuide = defineCollection({
  type: 'doc',
  dir: 'guide',
  linkPrefix: '/guide',
  title: '指南',
  sidebar: [
    '',
    'getting-started',
    'features',
    'balance-algorithm',
    'configuration',
    'faq',
    'development',
  ],
})

const zhBlog = defineCollection({
  type: 'post',
  dir: 'blog',
  title: 'Blog',
  link: '/blog/',
  pagination: 10,
  tags: true,
  archives: true,
})

const zhDemo = defineCollection({
  type: 'doc',
  dir: 'demo',
  linkPrefix: '/demo',
  title: '示例',
  sidebar: [''],
})

/* =================== locale: en ======================= */

const enGuide = defineCollection({
  type: 'doc',
  dir: 'en/guide',
  linkPrefix: '/en/guide',
  title: 'Guide',
  sidebar: [
    '',
    'getting-started',
    'features',
    'balance-algorithm',
    'configuration',
    'faq',
    'development',
  ],
})

const enBlog = defineCollection({
  type: 'post',
  dir: 'en/blog',
  title: 'Blog',
  link: '/en/blog/',
  pagination: 10,
  tags: true,
  archives: true,
})

const enDemo = defineCollection({
  type: 'doc',
  dir: 'en/demo',
  linkPrefix: '/en/demo',
  title: 'Demo',
  sidebar: [''],
})

/* =================== exports ======================= */

export const zhCollections = defineCollections([zhGuide, zhBlog, zhDemo])

export const enCollections = defineCollections([enGuide, enBlog, enDemo])