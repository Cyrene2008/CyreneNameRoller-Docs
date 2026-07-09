---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    forceDark: true
    effect: lightning
    hero:
      name: CyreneNameRoller
      tagline: A random name picker desktop app built with Vue 3 + Electron
      text: |
        CyreneNameRoller is a fully-featured random name picker desktop application,
        featuring Windows 11 Fluent Design and smooth user experience.

        Supports **random roller**, **card flip mode**, **smart balance algorithm**, **data statistics**, and more.
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
      ## Core Features

      ### 🎯 Smart Balance Algorithm
      Uses **Fritsch-Carlson monotone cubic Hermite interpolation** for fairness:
      - Fewer picks = higher probability next round
      - Visual curve editor for intuitive parameter adjustment
      - Meets different scenarios' balance needs

      ### 💾 Dual Persistence
      Electron file system + localStorage dual-write:
      - Auto-recovery on crash
      - Data export/backup support
      - Password-protected sensitive operations

      ### 🎨 Fluent Design
      Windows 11 design language:
      - Acrylic material effect
      - Reveal highlight
      - Smooth animations
      - Responsive layout

      ## Quick Start

      \```bash
      # Clone repository
      git clone https://github.com/Cyrene2008/CyreneNameRoller.git
      cd CyreneNameRoller

      # Install dependencies
      pnpm install

      # Start development environment
      pnpm dev
      pnpm electron:dev

      # Build Electron client
      pnpm electron:build
      \```

      ## Tech Stack

      - **Vue 3** + **Vite** + **Electron**
      - **Pinia** state management
      - **Vue Router** (Hash mode)
      - **@iconify/vue** (Fluent UI Icons)
      - **CSS variables** + custom component library

      ## License

      This documentation is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

      **You are free to:**

      - **Share** — copy and redistribute the material in any medium or format
      - **Adapt** — remix, transform, and build upon the material

      **Under the following terms:**

      - **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made
      - **NonCommercial** — You may not use the material for commercial purposes
      - **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license

      ## Support

      - [GitHub](https://github.com/Cyrene2008/CyreneNameRoller)
      - [Changelog](/en/changelog)
      - [FAQ](/en/guide/faq)
      - [Development Guide](/en/guide/development)