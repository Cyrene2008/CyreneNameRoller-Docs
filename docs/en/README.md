---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    hero:
      name: CyreneNameRoller
      tagline: A random name picker desktop app built with Vue 3 + Electron
      text: Supports random roller, card flip mode, smart balance algorithm, data statistics, and more. Built with Windows 11 Fluent Design.
      actions:
        -
          theme: brand
          text: Getting Started
          link: /en/guide/getting-started
        -
          theme: alt
          text: Features
          link: /en/guide/features
        -
          theme: alt
          text: GitHub
          link: https://github.com/Cyrene2008/CyreneNameRoller
  -
    type: features
    features:
      -
        title: 🎲 Random Roller
        details: Multi-player mode, forbid duplicates, weighted balance
      -
        title: 🃏 Card Flip Mode
        details: 3D flip animation, quick multi-draw, persistent card history
      -
        title: 📊 Statistics
        details: Real-time pick count, raw probability, balanced probability
      -
        title: 📋 List Management
        details: CRUD, batch delete, import/export, whitelist
      -
        title: 🔒 Data Security
        details: Password protection, export/import/clear operations
      -
        title: 🎨 Personalization
        details: Dark mode, UI scale, font size, multi-language
  -
    type: markdown
    content: |
      ## Quick Start

      \```bash
      git clone https://github.com/Cyrene2008/CyreneNameRoller.git
      cd CyreneNameRoller
      pnpm install
      pnpm dev
      pnpm electron:dev
      \```

      See [Getting Started](/en/guide/getting-started) for full installation and setup instructions.

      ---

      📖 [Introduction](/en/guide/intro) · [Balance Algorithm](/en/guide/balance-algorithm) · [Configuration](/en/guide/configuration) · [FAQ](/en/guide/faq) · [Changelog](/en/changelog)