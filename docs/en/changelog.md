---
title: Changelog
description: CyreneNameRoller version history
---

# Changelog

## [26.0.0] - 2026-07-09

### Refactor & Performance
- 🚀 New architecture: Full rewrite with Vue 3 + Vite + Electron, standalone local app
- 🚀 Dual-write persistence: Electron FS + localStorage, auto-recovery on crash
- 🎨 Fluent Design (Win11) with left Dock navigation

### Core Features
- 🎲 Random roller: multi-player, forbid duplicates (no replacement), weighted balance
- 🃏 Card mode: quick multi-draw, persistent card history across list switches
- 📐 Fritsch-Carlson monotone cubic Hermite interpolation + draggable curve editor

### Data Security
- 🔒 List CRUD, batch delete (10s undo), import/export lists
- 🔒 Password-protected data operations, full export/import/clear

### Records & Statistics
- 📊 Extraction records: name, list, source, timestamp
- 📈 Statistics: pick count, raw probability, balanced probability

### UI & Display
- 🌗 Dark mode, UI scale (75%-200%), name font size adjustment
- 🌐 i18n: Chinese/English switch in settings

---

## [2.0.5 Amphoreus] - 2026-05-08

### Codename: Amphoreus

- ✨ Visual: minor visual and interaction improvements
- ⚡ Performance: smoother default theme roller
- 🆕 Feature: custom name lists support

---

## [2.0.0 Amphoreus] - 2026-04-11

### Codename: Amphoreus

- 🎉 Major update: complete visual and interaction overhaul
- 🆕 Tunnel theme released!
- 🎨 Brand new UI design
- ⚡ Significant performance improvements

---

## [1.x series] - 2025-2026

Early versions with basic functionality:
- Basic random rolling
- Card flip mode
- Simple list management
- Basic statistics

---

## Versioning

### Version Format
`MAJOR.MINOR.PATCH`

- **MAJOR**: Major architectural changes or breaking updates
- **MINOR**: New features added, backward compatible
- **PATCH**: Bug fixes and minor improvements

### Version Codenames
Starting from 2.0.0, each version has a codename:

- **Amphoreus**: Greek amphora, symbolizing container and possibilities
- Future versions will use mythological or literary symbolic names

---

## Get Older Versions

If you need to download older versions:

1. Visit [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases)
2. Select the version tag
3. Download the corresponding installer

**Note**: Older versions may have security vulnerabilities or compatibility issues. Always use the latest version.

---

## Planned Features

### 26.1.0 (Planned)
- [ ] Web version release
- [ ] More language support (Japanese, Korean)
- [ ] Cloud sync
- [ ] Mobile adaptation

### 27.0.0 (Planned)
- [ ] AI-assisted rolling
- [ ] Custom themes
- [ ] Plugin system
- [ ] API开放

Feel free to suggest your ideas on [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues)!