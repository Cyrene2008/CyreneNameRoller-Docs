---
title: Project Introduction
description: CyreneNameRoller - A random name picker desktop app built with Vue 3 + Electron
---

# Project Introduction

**CyreneNameRoller** is a fully-featured random name picker desktop application, built with Vue 3 + Electron, featuring Windows 11 Fluent Design and smooth user experience.

## Core Features

### 🎲 Random Roller
- **Multi-player mode**: Support for multiple people at once, suitable for classroom activities and team games
- **Forbid duplicates**: Uses no-replacement sampling to ensure fair chances for everyone
- **Balance algorithm**: Built-in smart weighted algorithm, the fewer times someone is picked, the higher their probability next time
- **Rainbow name animation**: Stunning rainbow gradient effects when displaying results
- **English Mode**: Support for Chinese/English switching, internationalization friendly

### 🃏 Card Flip Mode
- **3D flip animation**: Smooth 3D visual effects when cards flip
- **Quick multi-draw**: Support for batch drawing, auto shuffle + flip
- **Persistent card history**: Card flip history auto-saved, not lost when switching lists
- **Real-time list switching**: Switch different lists anytime while maintaining flip state

### 📊 Data Management
- **Data statistics**: Real-time display of pick count, raw probability, balanced probability
- **Extraction records**: Complete record of each draw's name, list, source, and time
- **List management**: Support for CRUD, batch delete (10-second undo), import/export
- **Data security**: SHA-256 password protection for key operations, data export/import/clear functionality

### 🎨 Personalization
- **UI scaling**: Support for 75%-200% scaling to adapt to different monitors
- **Font size**: Adjustable font size for display results
- **Theme switching**: Free switching between dark/light modes
- **Multi-language**: Chinese/English interface switching

## Tech Stack

- **Core framework**: Vue 3 + Vite + Electron
- **State management**: Pinia
- **Routing**: Vue Router (Hash mode)
- **Icon library**: @iconify/vue (Fluent UI Icons)
- **Styling**: CSS variables + custom component library
- **Data persistence**: Electron file system + localStorage dual-write

## Project Highlights

### Smart Balance Algorithm
CyreneNameRoller uses a balance system based on Fritsch-Carlson monotone cubic Hermite interpolation to ensure fair name picking:

- People picked fewer times have higher probability next round
- Support for custom balance curves to meet different scenario needs
- Visual curve editor for intuitive parameter adjustment

### Dual Persistence
Electron file system + localStorage dual-write mechanism ensures data safety:

- Automatic recovery on application crash
- Support for data export backup
- Password protection for sensitive operations

### Modern Design
Following Windows 11 Fluent Design language:

- Acrylic material effect
- Reveal highlight
- Smooth animation transitions
- Responsive layout

## Version History

Current version: **26.0.0** (2026-07-09)

The latest version is fully refactored based on Vue 3 + Vite + Electron, with significantly improved performance and experience. See the [changelog](/en/changelog) for more information.

## License

This documentation is licensed under **CC BY-NC-SA 4.0**. See [LICENSE](https://creativecommons.org/licenses/by-nc-sa/4.0/) for details.