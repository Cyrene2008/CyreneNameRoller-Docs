# Cyrene's Name Roller Documentation

This repository contains the official documentation for [Cyreneの随机点名器](https://github.com/Cyrene2008/CyreneNameRoller), a random name picking desktop application built with Vue 3 + Electron.

## About

Cyreneの随机点名器 is a feature-rich random name picking desktop application that supports:

- **Random Name Picking**: Single/multiple modes, no repeat picking, balanced algorithm
- **Card Flip Name Picking**: 3D card flip animation, one-click multiple picking
- **Data Management**: Statistics, pick records, list management, import/export
- **Personalization**: UI scaling, theme switching, language switching
- **Modern Interface**: Windows 11 Fluent Design language
- **Cross-Platform**: Windows 10/11 support, experimental macOS/Linux support

## Documentation

This documentation is built with [VuePress](https://vuepress.vuejs.org/) and the [Plume Theme](https://github.com/pengzhanbo/vuepress-theme-plume).

### Available Languages

- [English](/en/) - English documentation
- [中文](/) - Chinese documentation

### Documentation Structure

```
docs/
├── doc/
│   ├── guide/          # User guides
│   │   ├── start.md
│   │   ├── interface.md
│   │   └── features.md
│   ├── settings/       # Settings documentation
│   │   ├── basic.md
│   │   └── advanced.md
│   └── resources/      # Additional resources
│       └── contribute.md
├── en/                 # English version
│   └── doc/
│       ├── guide/
│       ├── settings/
│       └── resources/
└── faq/                # Frequently asked questions
```

## Building the Documentation

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone this repository:
```bash
git clone https://github.com/Cyrene2008/CyreneNameRoller-Docs.git
cd CyreneNameRoller-Docs
```

2. Install dependencies:
```bash
pnpm install
```

### Development

To run the documentation locally in development mode:

```bash
pnpm docs:dev
```

The documentation will be available at `http://localhost:8080`

### Build

To build the documentation for production:

```bash
pnpm docs:build
```

The built files will be in the `docs/.vuepress/dist` directory.

### Preview Built Documentation

To preview the built documentation:

```bash
pnpm docs:preview
```

## Project Links

- **Main Project**: [Cyreneの随机点名器](https://github.com/Cyrene2008/CyreneNameRoller)
- **Documentation**: [This Repository](https://github.com/Cyrene2008/CyreneNameRoller-Docs)

## License

This documentation is licensed under the same license as the main project. Please refer to the [LICENSE](https://github.com/Cyrene2008/CyreneNameRoller/blob/main/LICENSE) file for details.

## Contributing

Contributions to the documentation are welcome! Please refer to the [Contribution Guide](/en/doc/resources/contribute.md) for more information on how to contribute.

## Support

If you encounter any issues with the documentation or have questions, please:

1. Check the [FAQ](/en/faq/) section
2. Open an issue in the [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller-Docs/issues)
3. Visit the [main project's issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) for application-related questions

## Acknowledgments

This documentation project is built upon:

- [VuePress](https://vuepress.vuejs.org/) - Vue-powered static site generator
- [VuePress Theme Plume](https://github.com/pengzhanbo/vuepress-theme-plume) - Modern documentation theme

---

**Note**: This repository contains only the documentation. For the actual application, please visit the [main project repository](https://github.com/Cyrene2008/CyreneNameRoller).