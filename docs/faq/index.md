---
title: 常见问题
description: Cyreneの随机点名器常见问题解答
---

# 常见问题

## 基本问题

### Q: Cyreneの随机点名器是什么？
A: Cyreneの随机点名器是一款基于 Vue 3 + Vite 的随机点名应用，提供 Tauri、Electron 和浏览器版本，支持随机点名、翻牌点名、小组抽取和数据管理。

### Q: 支持哪些操作系统？
A: 目前主要支持 Windows 10/11 操作系统。macOS 和 Linux 支持处于实验阶段。

### Q: 如何下载和安装？
A: 您可以从 [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases) 下载 Tauri 或 Electron 的 Windows `.exe` 安装包，运行安装程序并按提示完成安装。

### Q: 需要联网使用吗？
A: 不需要。所有数据处理在本地完成，无需网络连接。

## 功能问题

### Q: 如何添加名单？
A: 在数据管理界面，点击"名单管理"，然后点击"添加名单"按钮，输入名单名称和学生姓名即可。

### Q: 如何导入名单？
A: 在名单管理界面，点击"导入"按钮，选择文本文件（每行一个姓名）即可批量导入。

### Q: 平衡算法是什么？
A: 当前公平算法以绝对次数极差 2 为固定软目标。每次抽取都根据历史计数重新计算概率，次数较少者更容易被抽中，但所有候选者始终保留非零概率，所以极差 2 不是瞬时硬上限。

### Q: 如何备份数据？
A: 在设置界面，您可以配置自动备份功能，或者手动导出名单和记录。

### Q: 数据存储在哪里？
A: Tauri 将数据写入系统应用数据目录下的 JSON 文件；Electron 使用 electron-store 保存到用户数据目录；浏览器版使用 localStorage。当前设置页不提供自定义存储路径。

## 技术问题

### Q: 应用程序启动缓慢怎么办？
A: 尝试以下方法：
1. 关闭其他占用系统资源的程序
2. 在设置中禁用硬件加速
3. 调整 UI 缩放比例

### Q: 界面显示异常怎么办？
A: 尝试以下方法：
1. 调整 UI 缩放比例
2. 切换深色/浅色模式
3. 更新显卡驱动程序

### Q: 数据丢失了怎么办？
A: 尝试以下方法：
1. 检查是否有自动备份
2. 查看是否有导出的名单备份
3. 在抽取记录中查找历史数据

### Q: 如何更新应用程序？
A: Electron 和 Tauri 会在设置页检查更新，由原生层下载并校验安装包后自动启动。也可以从 GitHub Releases 手动下载安装。

## 开发问题

### Q: 如何参与开发？
A: 请参考 [贡献指南](/doc/resources/contribute) 了解如何参与项目开发。

### Q: 使用什么技术栈？
A: 前端使用 Vue 3 + Vite，桌面端同时支持 Tauri 2 和 Electron，状态管理使用 Pinia，路由使用 Vue Router。

### Q: 如何构建项目？
A: 克隆仓库后运行 `npm install`。使用 `npm run dev` 启动开发服务器，`npm run electron:build` 构建 Electron，`npm run tauri:build` 构建 Tauri。

## 其他问题

### Q: 如何报告 bug？
A: 请在 [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) 页面创建新的 Issue，详细描述问题。

### Q: 如何提出功能建议？
A: 请在 [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) 页面创建新的 Issue，描述您的建议。

### Q: 如何联系开发者？
A: 您可以通过 GitHub Issues 或 Pull Requests 与我们联系。

### Q: 项目使用什么许可证？
A: 项目使用 GPL-3.0 许可证。
