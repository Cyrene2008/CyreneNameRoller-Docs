---
title: Development Guide
description: CyreneNameRoller development documentation
---

# Development Guide

## Development Environment Setup

### Prerequisites
- Node.js: ^20.19.0 || >=22.0.0
- pnpm: >=8.0.0 (recommended) or npm
- Git: Any version

### Clone Repository
```bash
git clone https://github.com/Cyrene2008/CyreneNameRoller.git
cd CyreneNameRoller
```

### Install Dependencies
```bash
# Recommended with pnpm
pnpm install

# Or use npm
npm install
```

## Project Structure

```
CyreneNameRoller/
├── electron/              # Electron main process code
│   ├── main.js           # Main process entry
│   └── preload.js        # Preload script (IPC bridge)
├── src/
│   ├── assets/           # Static resources
│   │   ├── variables.css # CSS variables
│   │   ├── global.css    # Global styles
│   │   └── fonts/        # Font files
│   ├── components/       # Vue components
│   │   ├── layout/       # Layout components
│   │   ├── Fluent*.vue   # Fluent UI components
│   │   └── BalanceEditor.vue # Balance curve editor
│   ├── stores/           # Pinia state management
│   │   ├── settings.js   # Settings store
│   │   ├── statistics.js # Statistics store
│   │   └── records.js    # Records store
│   ├── utils/            # Utility functions
│   │   ├── balance.js    # Balance algorithm
│   │   ├── i18n.js       # Internationalization
│   │   ├── version.js    # Version info
│   │   ├── safeStorage.js # Secure storage
│   │   └── dataBridge.js # Data bridge
│   ├── views/            # Page components
│   │   ├── RollerView.vue    # Random roller page
│   │   ├── CardView.vue      # Card flip page
│   │   ├── StatisticsView.vue # Statistics page
│   │   ├── RecordsView.vue   # Records page
│   │   ├── ListsView.vue     # Lists management page
│   │   ├── SettingsView.vue  # Settings page
│   │   └── AboutView.vue     # About page
│   ├── router/           # Router configuration
│   │   └── index.js
│   ├── App.vue           # Root component
│   └── main.js           # Vue entry
├── public/               # Public resources
│   ├── *.png             # Icons
│   ├── names.json        # Default names
│   └── up.json           # Update logs
├── scripts/              # Build scripts
│   └── activate-fuses.js # Electron Fuses activation
├── package.json          # Project configuration
├── vite.config.js        # Vite configuration
└── LICENSE               # GPL-3.0 License
```

## Development Commands

```bash
# Start web dev server
pnpm dev

# Start Electron dev environment
pnpm electron:dev

# Build web app
pnpm build

# Build Electron client
pnpm electron:build

# Preview build
pnpm preview
```

## Tech Stack Details

### Core Framework
- **Vue 3**: Progressive JavaScript framework
- **Vite**: Next-generation frontend build tool
- **Electron**: Cross-platform desktop app framework

### State Management
- **Pinia**: Vue 3 recommended state management library
  - `settings.js`: User settings
  - `statistics.js`: Statistics data
  - `records.js`: Draw records

### Routing
- **Vue Router**: Official router manager
  - Hash mode: Better compatibility
  - Lazy loading: Improved performance

### Icon Library
- **@iconify/vue**: Unified icon component
- **@iconify-json/fluent**: Fluent UI icon set

### Styling
- **CSS variables**: Theme switching and responsive design
- **Custom components**: Fluent Design style UI components

## Core Feature Implementation

### Balance Algorithm
Location: `src/utils/balance.js`

Core functions:
- `computeBoostPercent()`: Calculate boost percentage
- `interpolateQuadratic()`: Quadratic interpolation
- `normalizeSettings()`: Normalize settings

For details, see [Balance Algorithm](/en/guide/balance-algorithm.md).

### Data Persistence
Location: `src/utils/dataBridge.js`

Dual-write mechanism:
- **localStorage**: Fast access, auto-recovery
- **Electron FS**: Persistent storage, survives app restart

### IPC Communication
Location: `electron/main.js` and `electron/preload.js`

Main process APIs provided:
- `window.electronAPI.loadData()`
- `window.electronAPI.saveData()`
- `window.electronAPI.minimize()`
- `window.electronAPI.maximize()`
- `window.electronAPI.close()`

## Component Development

### Fluent UI Components
All Fluent UI components follow unified design standards:

```vue
<template>
  <div class="fluent-component">
    <!-- Component content -->
  </div>
</template>

<script setup>
// Component logic
</script>

<style scoped>
.fluent-component {
  /* Component styles */
}
</style>
```

### New Page Components
1. Create component in `src/views/`
2. Add route in `src/router/index.js`
3. Add navigation item in `src/components/layout/NavigationDock.vue`

### Store Development
Define stores using Pinia:

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

## Build & Release

### Build Web App
```bash
pnpm build
```
Output: `dist/` directory

### Build Electron App
```bash
pnpm electron:build
```
Output: `release/` directory

### Activate Electron Fuses
```bash
node scripts/activate-fuses.js
```
Secure Electron app, improve security.

### Release Process
1. Update version in `package.json`
2. Update `public/up.json` changelog
3. Commit code and tag:
   ```bash
   git add .
   git commit -m "Release 26.1.0"
   git tag v26.1.0
   git push origin main
   git push origin v26.1.0
   ```
4. Create Release in GitHub Releases
5. Upload build artifacts

## Internationalization (i18n)

Location: `src/utils/i18n.js`

Current support:
- Chinese (zh)
- English (en)

Add new languages:
1. Add translations in `i18n.js`
2. Use in components: `i18n('key')`

## Performance Optimization

### Lazy Loading
Routes use lazy loading, load page components on demand:
```javascript
component: () => import('../views/RollerView.vue')
```

### Code Splitting
Vite automatically performs code splitting, improves loading speed.

### Caching Strategy
- Static resource caching
- localStorage caching for settings
- Electron FS caching for data

## Debugging

### Developer Tools
Press `F12` or `Ctrl/Cmd + Shift + I` to open developer tools.

### Log Output
Use `console.log()` for logging, remember to disable in production.

### Electron Debugging
Main process logs output to terminal, render process logs in developer tools.

## Contribution Guidelines

### Code Style
- Use ESLint to check code style
- Follow Vue 3 style guide
- Use Prettier to format code

### Commit Convention
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation update
- `style`: Code formatting
- `refactor`: Refactoring
- `test`: Testing
- `chore`: Build/Tool

### Pull Request Process
1. Fork project
2. Create branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'feat: add some feature'`
4. Push branch: `git push origin feature/your-feature`
5. Submit Pull Request

### Code Review
- Ensure CI passes
- At least one maintainer review
- Resolve all review comments

## Common Development Issues

### Q: How to debug main process?
A: Use `console.log()` in `electron/main.js`, logs output to terminal.

### Q: How to debug render process?
A: Press `F12` to open developer tools.

### Q: How to test IPC communication?
A: Test in Console of developer tools:
```javascript
window.electronAPI.loadData('settings')
```

### Q: How to build platform-specific installers?
A: Modify `build` config in `package.json`, then run `pnpm electron:build`.

## Related Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Electron Documentation](https://www.electronjs.org/docs)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Fluent Design Guidelines](https://learn.microsoft.com/en-us/windows/apps/design/)

## Getting Help

- Check [documentation](/)
- Search [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues)
- Submit new Issue
- Email author

## License

This documentation is licensed under **CC BY-NC-SA 4.0**. See [LICENSE](https://creativecommons.org/licenses/by-nc-sa/4.0/) for details.

Thanks for your contributions! 🎉