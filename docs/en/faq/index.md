---
title: Frequently Asked Questions
description: Frequently asked questions about Cyrene's Name Roller
---

# Frequently Asked Questions

## Basic Questions

### Q: What is Cyrene's Name Roller?
A: Cyrene's Name Roller is a Vue 3 + Vite random picker available for Tauri, Electron, and the browser, with random picking, card flip, group draw, and data management.

### Q: What operating systems are supported?
A: Currently mainly supports Windows 10/11 operating systems. macOS and Linux support is experimental.

### Q: How to download and install?
A: Download a Tauri or Electron Windows `.exe` installer from [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases), run it, and follow the installation prompts.

### Q: Does it require internet connection to use?
A: No. All data processing is completed locally, no network connection required.

## Feature Questions

### Q: How to add a list?
A: In the data management interface, click "List Management", then click "Add List" button, enter list name and student names.

### Q: How to import a list?
A: In the list management interface, click "Import" button, select a text file (one name per line) to batch import.

### Q: What is the balanced algorithm?
A: The current fairness algorithm uses a fixed absolute soft-gap target of 2. It recalculates probabilities from historical counts after every pick, favors lower-count candidates, and always keeps every candidate above zero probability, so 2 is not a hard transient limit.

### Q: How to backup data?
A: In the settings interface, you can configure automatic backup function, or manually export lists and records.

### Q: Where is data stored?
A: Tauri stores JSON files under the system app-data directory, Electron uses electron-store in its user-data directory, and the browser version uses localStorage. Settings currently does not expose a custom storage path.

## Technical Questions

### Q: What to do if the application starts slowly?
A: Try the following methods:
1. Close other programs that consume system resources
2. Disable hardware acceleration in settings
3. Adjust UI scaling ratio

### Q: What to do if the interface displays abnormally?
A: Try the following methods:
1. Adjust UI scaling ratio
2. Switch dark/light mode
3. Update graphics card drivers

### Q: What to do if data is lost?
A: Try the following methods:
1. Check if there are automatic backups
2. Check if there are exported list backups
3. Search for historical data in pick records

### Q: How to update the application?
A: Electron and Tauri check for updates in Settings, download and validate the installer natively, then launch it automatically. Manual installation from GitHub Releases remains available.

## Development Questions

### Q: How to participate in development?
A: Please refer to the [Contribution Guide](/en/doc/resources/contribute) to learn how to participate in project development.

### Q: What technology stack is used?
A: The frontend uses Vue 3 + Vite, desktop builds support both Tauri 2 and Electron, state management uses Pinia, and routing uses Vue Router.

### Q: How to build the project?
A: Run `npm install` after cloning. Use `npm run dev` for development, `npm run electron:build` for Electron, and `npm run tauri:build` for Tauri.

## Other Questions

### Q: How to report a bug?
A: Please create a new Issue on the [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) page, describing the problem in detail.

### Q: How to suggest a feature?
A: Please create a new Issue on the [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) page, describing your suggestion.

### Q: How to contact the developers?
A: You can contact us through GitHub Issues or Pull Requests.

### Q: What license does the project use?
A: The project uses the GPL-3.0 license.
