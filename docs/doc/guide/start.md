---
title: 开始使用
description: 如何开始使用 Cyreneの随机点名器
---

# 开始使用

## 系统要求

### Tauri 版本（推荐）

- **操作系统**：Windows 10 版本 1803 及以上 / Windows 11
- **WebView2 运行时**：Windows 10 1803+ 和 Windows 11 已预装，旧版系统需手动安装 [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
- **屏幕分辨率**：最低 1200×900
- **内存**：至少 4GB RAM
- **存储空间**：至少 50MB 可用空间

### Electron 版本

- **操作系统**：Windows 10/11（64位）
- **屏幕分辨率**：最低 1200×900
- **内存**：至少 4GB RAM
- **存储空间**：至少 150MB 可用空间
- **无需额外运行时**，Electron 已内置 Chromium

## 下载与安装

### 方案一：下载 Tauri 版本（推荐）

1. **下载最新版本**
   - 从 [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases) 页面下载 `CyreneNameRoller-Tauri` 安装包

2. **运行安装程序**
   - 双击 `.exe` 安装包，按提示完成安装
   - 如提示缺少 WebView2，点击提示中的链接自动下载安装

### 方案二：下载 Electron 版本

1. **下载最新版本**
   - 从 [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases) 页面下载 `CyreneNameRoller` 安装包

2. **运行安装程序**
   - 双击 `.exe` 安装包，按提示完成安装
   - 无需额外依赖，开箱即用

### 方案三：线上版本（无需安装）

直接访问 [web点名器.昔涟.cn](https://web点名器.昔涟.cn) 即可在浏览器中使用，无需下载安装。

### 方案四：从源代码编译（开发者）

1. **克隆仓库**
   ```bash
   git clone https://github.com/Cyrene2008/CyreneNameRoller.git
   cd CyreneNameRoller
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **运行开发服务器**
   ```bash
   npm run dev
   ```

4. **构建 Electron 客户端**
   ```bash
   npm run electron:build
   ```
   打包产物在 `release/` 目录下。

## 首次启动

当您首次启动 Cyreneの随机点名器时，您将看到主界面。应用会自动加载默认名单，您可以立即开始使用随机点名功能。

## 基本操作

### 随机点名
1. 在主界面点击 "随机点名" 选项卡
2. 选择模式：单人模式或多人模式
3. 点击 "开始" 按钮进行随机抽取
4. 查看结果，支持彩虹名称动画

### 翻牌点名
1. 在主界面点击 "翻牌点名" 选项卡
2. 选择抽取人数
3. 点击 "一键多抽" 按钮
4. 查看 3D 翻转卡牌动画效果

### 数据管理
1. 在主界面点击 "数据管理" 选项卡
2. 查看抽取次数、概率统计
3. 管理抽取记录：姓名、名单、来源、时间
4. 支持名单管理：增删改查、批量删除、导入导出

### 个性化设置
1. 在主界面点击 "设置" 选项卡
2. 调整 UI 缩放（75%-200%）
3. 设置名字字体大小
4. 切换深色/浅色模式
5. 切换中/英文界面

## 常见问题

如果您遇到任何问题，请查看 [常见问题](/faq/) 页面或访问 [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) 页面寻求帮助。