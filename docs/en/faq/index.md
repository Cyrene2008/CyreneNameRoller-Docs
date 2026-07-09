---
title: Frequently Asked Questions
description: Frequently asked questions about Cyrene's Name Roller
---

# Frequently Asked Questions

## Basic Questions

### Q: What is Cyrene's Name Roller?
A: Cyrene's Name Roller is a random name picking desktop application based on Vue 3 + Electron, using Windows 11 Fluent Design language, supporting random name picking, card flip name picking, data management, and other features.

### Q: What operating systems are supported?
A: Currently mainly supports Windows 10/11 operating systems. macOS and Linux support is experimental.

### Q: How to download and install?
A: You can download the latest version from the [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases) page, extract and use immediately, no installation required.

### Q: Does it require internet connection to use?
A: No. All data processing is completed locally, no network connection required.

## Feature Questions

### Q: How to add a list?
A: In the data management interface, click "List Management", then click "Add List" button, enter list name and student names.

### Q: How to import a list?
A: In the list management interface, click "Import" button, select a text file (one name per line) to batch import.

### Q: What is the balanced algorithm?
A: The balanced algorithm ensures that over time, each student is picked roughly the same number of times. Fewer picks result in higher probability.

### Q: How to backup data?
A: In the settings interface, you can configure automatic backup function, or manually export lists and records.

### Q: Where is data stored?
A: Data is stored by default in the data folder in the application directory. You can change the storage location in settings.

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
A: The application supports automatic updates. You can also manually download the latest version and overwrite the installation.

## Development Questions

### Q: How to participate in development?
A: Please refer to the [Contribution Guide](/en/doc/resources/contribute) to learn how to participate in project development.

### Q: What technology stack is used?
A: Frontend uses Vue 3 + Vite, desktop uses Electron, state management uses Pinia, routing uses Vue Router.

### Q: How to build the project?
A: After cloning the repository, run `npm install` to install dependencies, then run `npm run dev` to start the development server, or run `npm run electron:build` to build the Electron client.

## Other Questions

### Q: How to report a bug?
A: Please create a new Issue on the [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) page, describing the problem in detail.

### Q: How to suggest a feature?
A: Please create a new Issue on the [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues) page, describing your suggestion.

### Q: How to contact the developers?
A: You can contact us through GitHub Issues or Pull Requests.

### Q: What license does the project use?
A: The project uses the GPL-3.0 license.