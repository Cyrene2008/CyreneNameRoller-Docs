---
title: 开发指南
description: CyreneNameRoller 开发文档
createTime: 2026/07/09 15:49:22
permalink: /guide/a2l3kv44/
---

# 开发指南

## 开发环境搭建

### 前置要求
- Node.js: ^20.19.0 || >=22.0.0
- pnpm: >=8.0.0（推荐）或 npm
- Git: 任意版本

### 克隆仓库
```bash
git clone https://github.com/Cyrene2008/CyreneNameRoller.git
cd CyreneNameRoller
```

### 安装依赖
```bash
# 推荐使用 pnpm
pnpm install

# 或使用 npm
npm install
```

## 项目结构

```
CyreneNameRoller/
├── electron/              # Electron 主进程代码
│   ├── main.js           # 主进程入口
│   └── preload.js        # 预加载脚本（IPC 桥接）
├── src/
│   ├── assets/           # 静态资源
│   │   ├── variables.css # CSS 变量
│   │   ├── global.css    # 全局样式
│   │   └── fonts/        # 字体文件
│   ├── components/       # Vue 组件
│   │   ├── layout/       # 布局组件
│   │   ├── Fluent*.vue   # Fluent UI 组件
│   │   └── BalanceEditor.vue # 平衡曲线编辑器
│   ├── stores/           # Pinia 状态管理
│   │   ├── settings.js   # 设置 store
│   │   ├── statistics.js # 统计 store
│   │   └── records.js    # 记录 store
│   ├── utils/            # 工具函数
│   │   ├── balance.js    # 平衡算法
│   │   ├── i18n.js       # 国际化
│   │   ├── version.js    # 版本信息
│   │   ├── safeStorage.js # 安全存储
│   │   └── dataBridge.js # 数据桥接
│   ├── views/            # 页面组件
│   │   ├── RollerView.vue    # 随机点名页
│   │   ├── CardView.vue      # 翻牌点名页
│   │   ├── StatisticsView.vue # 统计页
│   │   ├── RecordsView.vue   # 记录页
│   │   ├── ListsView.vue     # 名单管理页
│   │   ├── SettingsView.vue  # 设置页
│   │   └── AboutView.vue     # 关于页
│   ├── router/           # 路由配置
│   │   └── index.js
│   ├── App.vue           # 根组件
│   └── main.js           # Vue 入口
├── public/               # 公共资源
│   ├── *.png             # 图标
│   ├── names.json        # 默认名单
│   └── up.json           # 更新日志
├── scripts/              # 构建脚本
│   └── activate-fuses.js # Electron Fuses 激活
├── package.json          # 项目配置
├── vite.config.js        # Vite 配置
└── LICENSE               # GPL-3.0 许可证
```

## 开发命令

```bash
# 启动 Web 开发服务器
pnpm dev

# 启动 Electron 开发环境
pnpm electron:dev

# 构建 Web 应用
pnpm build

# 构建 Electron 客户端
pnpm electron:build

# 预览构建结果
pnpm preview
```

## 技术栈详解

### 核心框架
- **Vue 3**：渐进式 JavaScript 框架
- **Vite**：新一代前端构建工具
- **Electron**：跨平台桌面应用框架

### 状态管理
- **Pinia**：Vue 3 官方推荐的状态管理库
  - `settings.js`：用户设置
  - `statistics.js`：统计数据
  - `records.js`：抽取记录

### 路由
- **Vue Router**：官方路由管理器
  - Hash 模式：兼容性更好
  - 懒加载：提升性能

### 图标库
- **@iconify/vue**：统一的图标组件
- **@iconify-json/fluent**：Fluent UI 图标集

### 样式
- **CSS 变量**：主题切换和响应式设计
- **自定义组件**：Fluent Design 风格的 UI 组件

## 核心功能实现

### 平衡算法
位置：`src/utils/balance.js`

核心函数：
- `computeBoostPercent()`：计算提升百分比
- `interpolateQuadratic()`：二次插值
- `normalizeSettings()`：规范化设置

详细说明请参考 [平衡算法](/guide/balance-algorithm.md)。

### 数据持久化
位置：`src/utils/dataBridge.js`

双写机制：
- **localStorage**：快速访问，自动恢复
- **Electron FS**：持久存储，应用重启后保留

### IPC 通信
位置：`electron/main.js` 和 `electron/preload.js`

主进程提供的 API：
- `window.electronAPI.loadData()`
- `window.electronAPI.saveData()`
- `window.electronAPI.minimize()`
- `window.electronAPI.maximize()`
- `window.electronAPI.close()`

## 组件开发

### Fluent UI 组件
所有 Fluent UI 组件都遵循统一的设计规范：

```vue
<template>
  <div class="fluent-component">
    <!-- 组件内容 -->
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.fluent-component {
  /* 组件样式 */
}
</style>
```

### 新增页面组件
1. 在 `src/views/` 创建新组件
2. 在 `src/router/index.js` 添加路由
3. 在 `src/components/layout/NavigationDock.vue` 添加导航项

### Store 开发
使用 Pinia 定义 store：

```javascript
import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
```

## 构建与发布

### 构建 Web 应用
```bash
pnpm build
```
输出：`dist/` 目录

### 构建 Electron 应用
```bash
pnpm electron:build
```
输出：`release/` 目录

### 激活 Electron Fuses
```bash
node scripts/activate-fuses.js
```
加固 Electron 应用，提高安全性。

### 发布流程
1. 更新 `package.json` 中的版本号
2. 更新 `public/up.json` 中的更新日志
3. 提交代码并打 tag：
   ```bash
   git add .
   git commit -m "Release 26.1.0"
   git tag v26.1.0
   git push origin main
   git push origin v26.1.0
   ```
4. 在 GitHub Releases 创建 Release
5. 上传构建产物

## 国际化（i18n）

位置：`src/utils/i18n.js`

当前支持：
- 中文（zh）
- English（en）

添加新语言：
1. 在 `i18n.js` 添加翻译
2. 在组件中使用：`i18n('key')`

## 性能优化

### 懒加载
路由使用懒加载，按需加载页面组件：
```javascript
component: () => import('../views/RollerView.vue')
```

### 代码分割
Vite 自动进行代码分割，提升加载速度。

### 缓存策略
- 静态资源缓存
- localStorage 缓存设置
- Electron FS 缓存数据

## 调试

### 开发者工具
按 `F12` 或 `Ctrl/Cmd + Shift + I` 打开开发者工具。

### 日志输出
使用 `console.log()` 输出日志，注意生产环境关闭。

### Electron 调试
主进程日志在终端输出，渲染进程日志在开发者工具中输出。

## 贡献指南

### 代码风格
- 使用 ESLint 检查代码风格
- 遵循 Vue 3 风格指南
- 使用 Prettier 格式化代码

### 提交规范
遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

```
<type>(<scope>): <subject>

<body>

<footer>
```

类型：
- `feat`：新功能
- `fix`：Bug 修复
- `docs`：文档更新
- `style`：代码格式
- `refactor`：重构
- `test`：测试
- `chore`：构建/工具

### Pull Request 流程
1. Fork 项目
2. 创建分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'feat: add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 Pull Request

### 代码审查
- 确保 CI 通过
- 至少一位维护者审查
- 解决所有审查意见

## 常见开发问题

### Q: 如何调试主进程？
A: 在 `electron/main.js` 中使用 `console.log()`，日志会输出到终端。

### Q: 如何调试渲染进程？
A: 按 `F12` 打开开发者工具。

### Q: 如何测试 IPC 通信？
A: 在开发者工具的 Console 中测试：
```javascript
window.electronAPI.loadData('settings')
```

### Q: 如何构建特定平台的安装包？
A: 在 `package.json` 中修改 `build` 配置，然后运行 `pnpm electron:build`。

## 相关资源

- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [Electron 文档](https://www.electronjs.org/docs)
- [Pinia 文档](https://pinia.vuejs.org/)
- [Vue Router 文档](https://router.vuejs.org/)
- [Fluent Design 指南](https://learn.microsoft.com/en-us/windows/apps/design/)

## 获取帮助

- 查看 [文档](/)
- 搜索 [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues)
- 提交新 Issue
- 邮件联系作者

## 许可证

本文档采用 **CC BY-NC-SA 4.0**（署名-非商业性使用-相同方式共享 4.0 国际）许可证。详见 [LICENSE](https://creativecommons.org/licenses/by-nc-sa/4.0/) 文件。

感谢你的贡献！ 🎉