---
title: 常见问题
description: Cyreneの随机点名器常见问题解答
---

# 常见问题

## 基本问题

### Q: Cyreneの随机点名器是什么？
A: Cyreneの随机点名器是一款基于 Vue 3 + Electron 的随机点名桌面应用，采用 Windows 11 Fluent Design 设计语言，支持随机点名、翻牌点名、数据管理等功能。

### Q: 支持哪些操作系统？
A: 目前主要支持 Windows 10/11 操作系统。macOS 和 Linux 支持处于实验阶段。

### Q: 如何下载和安装？
A: 您可以从 [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases) 页面下载最新版本，解压后即可使用，无需安装。

### Q: 需要联网使用吗？
A: 不需要。所有数据处理在本地完成，无需网络连接。

## 功能问题

### Q: 如何添加名单？
A: 在数据管理界面，点击"名单管理"，然后点击"添加名单"按钮，输入名单名称和学生姓名即可。

### Q: 如何导入名单？
A: 在名单管理界面，点击"导入"按钮，选择文本文件（每行一个姓名）即可批量导入。

### Q: 平衡算法是什么？
A: 平衡算法确保长期来看每个学生被抽中的次数基本相同。被抽中次数越少，下次被抽中的概率越高。

### Q: 如何备份数据？
A: 在设置界面，您可以配置自动备份功能，或者手动导出名单和记录。

### Q: 数据存储在哪里？
A: 数据默认存储在应用程序目录下的 data 文件夹中。您可以在设置中更改存储位置。

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
A: 应用程序支持自动更新。您也可以手动下载最新版本覆盖安装。

## 开发问题

### Q: 如何参与开发？
A: 请参考 [贡献指南](/doc/resources/contribute) 了解如何参与项目开发。

### Q: 使用什么技术栈？
A: 前端使用 Vue 3 + Vite，桌面端使用 Electron，状态管理使用 Pinia，路由使用 Vue Router。

### Q: 如何构建项目？
A: 克隆仓库后，运行 `npm install` 安装依赖，然后运行 `npm run dev` 启动开发服务器，或运行 `npm run electron:build` 构建 Electron 客户端。

## 其他问题

### Q: 如何报告 bug？
A: 请在 [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) 页面创建新的 Issue，详细描述问题。

### Q: 如何提出功能建议？
A: 请在 [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) 页面创建新的 Issue，描述您的建议。

### Q: 如何联系开发者？
A: 您可以通过 GitHub Issues 或 Pull Requests 与我们联系。

### Q: 项目使用什么许可证？
A: 项目使用 GPL-3.0 许可证。