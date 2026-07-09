---
title: Getting Started
description: Get started with CyreneNameRoller from scratch
---

# Getting Started

## Requirements

### System Requirements
- **OS**: Windows 10/11 (recommended), macOS, Linux
- **Node.js**: ^20.19.0 || >=22.0.0
- **Package Manager**: pnpm (recommended) or npm

### Development Environment
If you plan to build from source or contribute code:

```bash
# Check Node.js version
node --version  # Should be v20.19.0 or higher

# Install pnpm (recommended)
npm install -g pnpm
```

## Get the Application

### Method 1: Download Pre-built Version
Recommended for most users - no compilation needed.

1. Visit [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases)
2. Download the installer for your OS:
   - Windows: `.exe` installer
   - macOS: `.dmg` disk image
   - Linux: `.AppImage` portable app

### Method 2: Build from Source
For custom features or development:

```bash
# Clone repository
git clone https://github.com/Cyrene2008/CyreneNameRoller.git
cd CyreneNameRoller

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start Electron in another terminal
pnpm electron:dev
```

## First Use

### 1. Create a Name List
Open the app and go to **Lists Management**:

1. Click **New List**
2. Enter list name (e.g., "Class", "Group")
3. Add people
4. Save the list

### 2. Start Rolling
Switch to **Random Roller** or **Card Flip**:

1. Select the list you just created
2. Set the number of people to draw (default: 1)
3. Click **Start**
4. View the result

### 3. View Statistics
Go to **Statistics** to see:
- Pick count for each person
- Raw probability (1/N)
- Balanced probability (with balance algorithm)

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

## Build Outputs

After running `pnpm electron:build`, installers are in `release/`:

- Windows: `CyreneNameRoller Setup 26.0.0.exe`
- macOS: `CyreneNameRoller-26.0.0.dmg`
- Linux: `CyreneNameRoller-26.0.0.AppImage`

## Common Issues

### App won't start
- **Windows**: Check if Visual C++ Redistributable is missing
- **macOS**: Allow the app in System Settings
- **Linux**: Ensure necessary dependencies are installed

### Data loss
The app uses dual-write persistence, data usually auto-recovers. If issues persist:

1. Check the app data directory
2. Use import to restore backup
3. Check localStorage data

### Performance issues
- Try disabling rainbow animation or particle effects
- Disable balance algorithm for better performance
- Adjust UI scale

## Next Steps

- Learn about the [balance algorithm](/en/guide/balance-algorithm.md)
- Customize [configuration options](/en/guide/configuration.md)
- Read the [changelog](/en/changelog) for latest features

## License

This documentation is licensed under **CC BY-NC-SA 4.0**. See [LICENSE](https://creativecommons.org/licenses/by-nc-sa/4.0/) for details.