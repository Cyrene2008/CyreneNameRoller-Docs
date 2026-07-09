---
title: FAQ
description: CyreneNameRoller frequently asked questions
---

# FAQ

## Installation & Startup

### Q: The app won't start, what should I do?

**Windows**:
1. Check if [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) is missing
2. Run as administrator
3. Check if antivirus software is blocking the app

**macOS**:
1. Allow the app in System Settings → Privacy & Security
2. Right-click the app, select "Open"
3. Check Gatekeeper settings

**Linux**:
1. Ensure execution permissions: `chmod +x CyreneNameRoller.AppImage`
2. Check if necessary libraries are missing
3. Try running with `--no-sandbox` parameter

### Q: The app shows black screen after startup?

**Solutions**:
1. Check if graphics driver is up to date
2. Disable "blur effects" in settings
3. Try reinstalling the app
4. Check system logs for error messages

### Q: How to update to the latest version?

**Automatic Update**:
1. App checks for updates on startup
2. New version notification appears
3. Click "Update Now" to update

**Manual Update**:
1. Visit [GitHub Releases](https://github.com/Cyrene2008/CyreneNameRoller/releases)
2. Download latest version
3. Overwrite install (data will be preserved)

## Data & Backup

### Q: Where is data stored?

**Windows**:
```
%APPDATA%/CyreneNameRoller/
```

**macOS**:
```
~/Library/Application Support/CyreneNameRoller/
```

**Linux**:
```
~/.config/CyreneNameRoller/
```

### Q: How to backup data?

**Method 1: In-app Export**
1. Go to **Settings** page
2. Click **Export Data**
3. Choose save location

**Method 2: Manual Backup**
1. Close the app
2. Copy data directory
3. Save to secure location

### Q: How to restore data?

**Method 1: In-app Import**
1. Go to **Settings** page
2. Click **Import Data**
3. Select backup file
4. Confirm import

**Method 2: Manual Restore**
1. Close the app
2. Copy backup folder to data directory
3. Restart the app

### Q: Data is lost, what should I do?

**Auto Recovery**:
App uses dual-write persistence, usually auto-recovery:
1. Restart the app
2. Check if data auto-recovered

**Manual Recovery**:
1. Check auto backup directory (`backups/`)
2. Try to restore recent backup

**If still not recovered**:
1. Check if there are manual backups
2. Check GitHub Issues for help

## Feature Usage

### Q: What does the balance algorithm do exactly?

**A**: Balance algorithm ensures fair rolling:

- **Problem**: Traditional random rolling may let some people be picked consecutively, others "sit out" for long periods
- **Solution**: People picked fewer times get higher probability next round
- **Effect**: In the long run, everyone's pick count is more balanced

For details, see [Balance Algorithm](/en/guide/balance-algorithm.md).

### Q: How to disable the balance algorithm?

**Steps**:
1. Go to **Settings** page
2. Find **Balance Algorithm** section
3. Turn off **Enable Balance Algorithm** switch
4. Save settings

**Use Cases**:
- Fair lottery (pure random needed)
- Testing features
- Scenarios where fairness doesn't matter

### Q: Will card flip history be lost?

**A**: No!

- Card flip history is preserved when switching lists
- History is auto-saved after closing the app
- Only manual "collect" clears history

### Q: How to batch import lists?

**Method 1: Text File**
1. Prepare text file with one name per line
2. Go to **Lists Management** page
3. Click **Import**
4. Select file
5. Confirm import

**Method 2: Copy Paste**
1. Copy lists from other sources
2. Paste in list editor
3. Auto-detect and split lines

### Q: What is whitelist?

**A**: Whitelist is a special list of people **not affected by balance algorithm**:

- Whitelist people always have equal probability
- Even if drawn multiple times, probability won't change
- Suitable for special roles requiring fairness

**Use Cases**:
- Teacher rolling (teacher shouldn't be balanced)
- Game host (host shouldn't be balanced)
- Special roles requiring fairness

## Performance Issues

### Q: Rolling is laggy, what should I do?

**Solutions**:
1. **Disable rainbow animation**: In settings
2. **Disable particle effects**: In performance settings
3. **Disable blur effects**: In performance settings
4. **Reduce animation speed**: In performance settings
5. **Reduce UI scale**: In interface settings

### Q: App uses too much memory?

**Possible causes**:
- Too many draw records, statistics占用内存
- Too many visual effects enabled

**Solutions**:
1. Regularly clear draw records
2. Disable unnecessary visual effects
3. Restart app to free memory

### Q: Startup is slow?

**Solutions**:
1. Check if there are too many historical records
2. Clear unnecessary data
3. Check if disk space is sufficient
4. Disable auto update check

## Errors & Exceptions

### Q: "Password incorrect" error?

**A**: Password protection is for sensitive operations:

- If password is set, need to enter password to:
  - Clear data
  - Delete lists
  - Batch delete people
- If password is forgotten:
  - Reset password (need identity verification)
  - Manually delete password hash from config file

### Q: Import failed, what to do?

**Possible causes**:
1. File format incorrect
2. File corrupted
3. Version incompatibility

**Solutions**:
1. Confirm file is `.cyrene` or `.json` format
2. Try opening file with text editor, check format
3. Export backup file, compare format
4. Provide file content in GitHub Issues for help

### Q: Export failed, what to do?

**Possible causes**:
1. Insufficient disk space
2. No write permissions
3. Path doesn't exist

**Solutions**:
1. Check disk space
2. Choose location with write permissions
3. Ensure path exists

## Development & Contribution

### Q: How to build from source?

**Steps**:
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

# Build production version
pnpm electron:build
```

### Q: How to contribute code?

1. Fork the project
2. Create branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'feat: add some feature'`
4. Push branch: `git push origin feature/your-feature`
5. Submit Pull Request

### Q: How to report bugs?

1. Visit [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues)
2. Click "New Issue"
3. Fill bug report template:
   - Problem description
   - Reproduction steps
   - Expected behavior
   - Actual behavior
   - Environment info (OS, app version)
4. Submit Issue

### Q: How to suggest new features?

1. Visit [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues)
2. Click "New Issue"
3. Select "Feature request" template
4. Fill feature suggestion:
   - Feature description
   - Use cases
   - Expected effects
5. Submit Issue

## Other Questions

### Q: Does it support multiple languages?

**A**: Yes!

- Current support: Chinese, English
- Planned support: Japanese, Korean, etc.
- Welcome to contribute translations!

### Q: Does it support mobile devices?

**A**: Not currently.

CyreneNameRoller is a desktop app built on Electron. Web version is planned to support mobile access in the future.

### Q: Is it open source?

**A**: Yes!

This project is licensed under GPL-3.0. See [LICENSE](https://github.com/Cyrene2008/CyreneNameRoller/blob/main/LICENSE) file.

### Q: How to contact the author?

- GitHub: [Cyrene2008](https://github.com/Cyrene2008)
- Email: See GitHub profile
- Website: 昔涟.cn

### Q: Is technical support provided?

**A**: Yes!

- Check [documentation](/)
- Search [GitHub Issues](https://github.com/Cyrene2008/CyreneNameRoller/issues)
- Submit new Issue
- Email author

### Q: How to sponsor the project?

Thank you for your support!

- GitHub Sponsors (if enabled)
- Contact author directly for sponsorship
- Code contribution is also a form of sponsorship

## Still can't solve the problem?

If you can't find an answer in the documentation, you can:

1. **Search GitHub Issues**: Someone might have encountered similar problems
2. **Submit a new Issue**: Describe your problem in detail
3. **Email the author**: Directly seek help
4. **View the source code**: If you have development skills, you can directly examine the source code

We will respond to your questions as soon as possible!

## License

This documentation is licensed under **CC BY-NC-SA 4.0**. See [LICENSE](https://creativecommons.org/licenses/by-nc-sa/4.0/) for details.