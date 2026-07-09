# CyreneNameRoller-Docs

CyreneNameRoller 官方文档站点，基于 [VuePress](https://vuepress.vuejs.org/) 和 [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume) 构建。

## 📄 许可证

本项目采用 **CC BY-NC-SA 4.0**（署名-非商业性使用-相同方式共享 4.0 国际）许可证。

### 许可证说明

- **署名 (BY)**：你必须给予原作者署名，提供指向许可证的链接，同时标明是否（对原始作品）作了修改。
- **非商业性使用 (NC)**：你可以自由地共享、修改本作品，但不得用于商业目的。
- **相同方式共享 (SA)**：如果你对本作品进行修改、转换，或依据本作品创作新作品，你必须基于相同的许可证条款分发你创作的新作品。

### 完整许可证文本

详见 [LICENSE](./LICENSE) 文件。

## 🌐 在线文档

- **中文文档**: [https://点名器.昔涟.cn](https://点名器.昔涟.cn)
- **GitHub**: [https://github.com/Cyrene2008/CyreneNameRoller-Docs](https://github.com/Cyrene2008/CyreneNameRoller-Docs)

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
# 启动开发服务器
pnpm docs:dev

# 或使用热重载
pnpm docs:dev-clean
```

### 构建

```bash
# 构建生产版本
pnpm docs:build

# 预览构建结果
pnpm docs:preview
```

## 📂 项目结构

```
CyreneNameRoller-Docs/
├── docs/
│   ├── .vuepress/         # VuePress 配置
│   │   ├── config.ts      # 主配置
│   │   ├── plume.config.ts # Plume 主题配置
│   │   ├── navbar.ts      # 导航栏配置
│   │   └── client.ts      # 客户端配置
│   ├── doc/               # 中文文档
│   │   ├── guide/         # 指南
│   │   ├── settings/      # 设置
│   │   └── resources/     # 资源
│   ├── en/                # 英文文档
│   ├── faq/               # 常见问题
│   └── index.md           # 首页
├── .github/workflows/     # GitHub Actions
├── LICENSE                # CC BY-NC-SA 4.0 许可证
├── package.json           # 项目配置
└── README.md              # 本文件
```

## 📚 文档内容

### 指南（Guide）
- [开始使用](docs/doc/guide/start.md)
- [界面介绍](docs/doc/guide/interface.md)
- [功能指南](docs/doc/guide/features.md)

### 设置（Settings）
- [基本设置](docs/doc/settings/basic.md)
- [高级设置](docs/doc/settings/advanced.md)

### 资源（Resources）
- [贡献指南](docs/doc/resources/contribute.md)

### 其他
- [常见问题](docs/faq/index.md)

## 🤝 贡献指南

欢迎贡献文档！请遵循以下步骤：

1. Fork 本仓库
2. 创建分支：`git checkout -b docs/some-feature`
3. 提交更改：`git commit -m 'docs: add some feature'`
4. 推送分支：`git push origin docs/some-feature`
5. 提交 Pull Request

### 文档规范

- 使用清晰简洁的语言
- 提供示例代码和截图
- 保持中英文同步更新
- 遵循现有的文档结构
- 尊重原作者的署名

### 版权声明

当你贡献文档时，你同意：
- 你的贡献将按照 CC BY-NC-SA 4.0 许可证发布
- 你的贡献必须非商业性使用
- 如果你修改了现有内容，必须保持相同的许可证
- 你必须在修改的文档中添加适当的署名

## 🛠 技术栈

- **VuePress 2.0.0-rc.26**: 静态站点生成器
- **vuepress-theme-plume 1.0.0-rc.190**: 文档主题
- **Vite**: 构建工具
- **pnpm**: 包管理器

## 📮 反馈与支持

- 提交 Issue: [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller-Docs/issues)
- 联系作者: 见 GitHub 主页

## 🔗 相关链接

- [CyreneNameRoller 主项目](https://github.com/Cyrene2008/CyreneNameRoller)
- [线上版本](https://web点名器.昔涟.cn)
- [VuePress 官方文档](https://vuepress.vuejs.org/)
- [Plume 主题文档](https://theme-plume.vuejs.press/)
- [Creative Commons 许可证](https://creativecommons.org/licenses/by-nc-sa/4.0/)

---

*Made with ❤️ by LeafS825 & Cyrene2008 · Licensed under CC BY-NC-SA 4.0*