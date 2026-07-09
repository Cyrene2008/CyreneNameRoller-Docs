---
title: 快速开始
description: 从零开始使用 CyreneNameRoller
---

# 快速开始

## 安装要求

### 系统要求
- **操作系统**：Windows 10/11（推荐）、macOS、Linux
- **Node.js**：^20.19.0 || >=22.0.0
- **包管理器**：pnpm（推荐）或 npm

### 开发环境
如果你计划从源码构建或贡献代码，需要安装 Node.js 开发环境。

```bash
# 检查 Node.js 版本
node --version  # 应该是 v20.19.0 或更高

# 安装 pnpm（推荐）
npm install -g pnpm
```

## 获取应用

### 方式一：下载预构建版本
推荐直接下载预构建的安装包，无需编译，即装即用。

1. 访问 [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases)
2. 下载对应操作系统的安装包：
   - Windows：`.exe` 安装程序
   - macOS：`.dmg` 磁盘镜像
   - Linux：`.AppImage` 便携应用

### 方式二：从源码构建
如果你需要自定义功能或参与开发，可以从源码构建。

```bash
# 克隆仓库
git clone https://github.com/Cyrene2008/CyreneNameRoller.git
cd CyreneNameRoller

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 在另一个终端启动 Electron
pnpm electron:dev
```

## 首次使用

### 1. 创建名单
打开应用后，进入 **名单管理** 页面，创建你的第一个名单：

1. 点击 **新建名单** 按钮
2. 输入名单名称（如"班级"、"小组"）
3. 添加人员姓名
4. 保存名单

### 2. 开始点名
切换到 **随机点名** 或 **翻牌点名** 页面：

1. 选择刚才创建的名单
2. 设置抽取人数（默认 1 人）
3. 点击 **开始** 按钮
4. 观察抽取结果

### 3. 查看统计
进入 **统计** 页面，查看：

- 每个人的抽取次数
- 原始概率（1/N）
- 平衡概率（考虑平衡算法后的实际概率）

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

## 构建产物

运行 `pnpm electron:build` 后，安装包会生成在 `release/` 目录：

- Windows：`CyreneNameRoller Setup 26.0.0.exe`
- macOS：`CyreneNameRoller-26.0.0.dmg`
- Linux：`CyreneNameRoller-26.0.0.AppImage`

## 常见问题

### 应用无法启动
- Windows：检查是否缺少 Visual C++ Redistributable
- macOS：在"系统设置"中允许运行来自未验证开发者的应用
- Linux：确保已安装必要的依赖库

### 数据丢失
应用采用双写机制，数据通常会自动恢复。如果仍有问题，可以：

1. 检查应用数据目录
2. 使用导入功能恢复备份数据
3. 查看本地存储的数据

### 性能问题
- 如果点名卡顿，尝试关闭彩虹动画或粒子效果
- 禁用平衡算法可以提高性能
- 调整 UI 缩放比例

## 下一步

- 了解[平衡算法](/guide/balance-algorithm.md)的原理
- 查看[配置选项](/guide/configuration.md)自定义应用
- 阅读[更新日志](/changelog.md)了解最新功能

## 许可证

本文档采用 **CC BY-NC-SA 4.0**（署名-非商业性使用-相同方式共享 4.0 国际）许可证。详见 [LICENSE](https://creativecommons.org/licenses/by-nc-sa/4.0/) 文件。