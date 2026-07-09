---
title: Getting Started
description: How to get started with Cyrene's Name Roller
---

# Getting Started

## System Requirements

### Tauri Version (Recommended)

- **Operating System**: Windows 10 version 1803+ / Windows 11
- **WebView2 Runtime**: Pre-installed on Windows 10 1803+ and Windows 11. For older systems, manually install [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
- **Screen Resolution**: Minimum 1200×900
- **Memory**: At least 4GB RAM
- **Storage**: At least 50MB available space

### Electron Version

- **Operating System**: Windows 10/11 (64-bit)
- **Screen Resolution**: Minimum 1200×900
- **Memory**: At least 4GB RAM
- **Storage**: At least 150MB available space
- **No additional runtime required**, Electron bundles Chromium

## Download and Install

### Option 1: Download Tauri Version (Recommended)

1. **Download Latest Version**
   - Download `CyreneNameRoller-Tauri` installer from [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases)

2. **Run Installer**
   - Double-click the `.exe` installer and follow the prompts
   - If WebView2 is missing, click the prompt link to download and install automatically

### Option 2: Download Electron Version

1. **Download Latest Version**
   - Download `CyreneNameRoller` installer from [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases)

2. **Run Installer**
   - Double-click the `.exe` installer and follow the prompts
   - No additional dependencies required, ready to use out of the box

### Option 3: Online Version (No Installation)

Visit [web点名器.昔涟.cn](https://web点名器.昔涟.cn) to use directly in your browser, no download required.

### Option 4: Build from Source (Developers)

1. **Clone Repository**
   ```bash
   git clone https://github.com/Cyrene2008/CyreneNameRoller.git
   cd CyreneNameRoller
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build Electron Client**
   ```bash
   npm run electron:build
   ```
   Build output is in the `release/` directory.

## First Launch

When you first launch Cyrene's Name Roller, you'll see the main interface. The application automatically loads the default list, and you can immediately start using the random name picking feature.

## Basic Operations

### Random Name Picking
1. Click the "Random Name" tab in the main interface
2. Select mode: Single or Multiple
3. Click the "Start" button to randomly pick
4. View results with rainbow name animation

### Card Flip Name Picking
1. Click the "Card Flip" tab in the main interface
2. Set the number of people to pick
3. Click the "One-click Multiple" button
4. View 3D card flip animation effects

### Data Management
1. Click the "Data Management" tab in the main interface
2. View pick count statistics and probability distribution
3. Manage pick records: name, list, source, time
4. Support list management: CRUD, batch delete, import/export

### Personalization Settings
1. Click the "Settings" tab in the main interface
2. Adjust UI scaling (75%-200%)
3. Set name font size
4. Switch dark/light mode
5. Switch Chinese/English interface

## Frequently Asked Questions

If you encounter any issues, please check the [FAQ](/en/faq/) page or visit [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) for help.