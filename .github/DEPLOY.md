# GitHub Pages 部署指南

## 自动部署

本项目已配置 GitHub Actions 自动部署到 GitHub Pages。

### 触发条件

1. **自动触发**：
   - 推送到 `main` 分支时自动部署
   - 手动触发部署

2. **手动触发**：
   - 在 GitHub Actions 页面点击 "Run workflow"
   - 选择 `deploy-simple` 工作流

### 部署流程

1. **代码检出**：获取最新代码
2. **环境设置**：Node.js 20 + pnpm
3. **依赖安装**：安装项目依赖
4. **文档构建**：使用 VuePress 构建文档
5. **上传产物**：上传到 GitHub Pages
6. **部署**：部署到 GitHub Pages

### 部署地址

部署完成后，文档将在以下地址可用：
- `https://Cyrene2008.github.io/CyreneNameRoller-Docs/`

## 手动部署

如果需要手动触发部署：

1. 打开 GitHub Actions 页面
2. 选择 `deploy-simple` 工作流
3. 点击 "Run workflow"
4. 等待构建完成

## 部署配置

### 工作流文件

- `.github/workflows/deploy-simple.yml` - 简化部署工作流
- `.github/workflows/deploy-pages.yml` - 完整部署工作流
- `.github/workflows/test.yml` - 测试工作流

### 构建配置

- **构建命令**：`pnpm docs:build`
- **输出目录**：`docs/.vuepress/dist`
- **Node.js 版本**：20
- **包管理器**：pnpm

## 注意事项

1. **构建时间**：通常需要 2-5 分钟
2. **缓存**：Node.js 和 pnpm 会使用缓存加速构建
3. **权限**：需要仓库的 `pages` 写权限
4. **域名**：默认使用 `github.io` 域名

## 故障排除

### 构建失败

1. 检查 Node.js 版本是否为 20
2. 确认 pnpm 版本为 8
3. 检查依赖是否正确安装
4. 查看构建日志了解具体错误

### 部署失败

1. 检查 GitHub Pages 设置是否正确
2. 确认输出目录存在
3. 检查文件权限
4. 查看 Actions 日志

## 自定义域名

如果需要使用自定义域名：

1. 在仓库设置中配置 Pages
2. 添加自定义域名
3. 创建 `docs/CNAME` 文件（可选）

## 环境变量

如果需要环境变量，可以在仓库设置中添加：
- `NODE_OPTIONS`: Node.js 选项
- `VUEPRESS_BASE`: 部署基础路径