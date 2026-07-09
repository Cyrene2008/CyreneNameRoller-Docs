---
title: Configuration Options
description: Detailed explanation of CyreneNameRoller configuration options
---

# Configuration Options

CyreneNameRoller provides rich configuration options to meet different scenario needs.

## Interface Settings

### UI Scale
- **Range**: 75% - 200%
- **Default**: 100%
- **Description**: Adjust overall interface size, adapt to different resolution displays
- **Recommendations**:
  - High resolution displays (4K): 125% - 150%
  - Standard displays (1080p): 100%
  - Small screens: 90% - 100%

### Font Size
- **Range**: 1x - 3x
- **Default**: 1x
- **Description**: Adjust font size of display results
- **Recommendations**:
  - Projection presentation: 2x - 3x
  - Personal use: 1x - 1.5x

### Dark Mode
- **Options**: On / Off
- **Default**: Off
- **Description**: Switch between dark/light themes
- **Tip**: Can follow system settings for auto-switching

## Language Settings

### Interface Language
- **Options**: Chinese / English
- **Default**: Chinese
- **Description**: Switch interface display language
- **Note**: After switching language, name display language in lists won't change

### English Mode
- **Options**: Chinese / English
- **Default**: Chinese
- **Description**: Display Chinese or English names when rolling
- **Location**: Top right corner of random roller page

## Rolling Settings

### Random Roller

#### Draw Count
- **Range**: 1 - 100
- **Default**: 1
- **Description**: Number of people to draw at once

#### Forbid Duplicates
- **Options**: On / Off
- **Default**: On
- **Description**:
  - On: No replacement after drawing, must reset before drawing again
  - Off: Can draw the same person repeatedly

#### Rainbow Animation
- **Options**: On / Off
- **Default**: On
- **Description**: Whether to display rainbow gradient animation for results
- **Performance Tip**: Can slightly improve performance when disabled

### Card Flip Mode

#### Auto Flip
- **Options**: On / Off
- **Default**: Off
- **Description**: Auto flip cards after dealing, or manual click to flip

#### Deal Animation Speed
- **Options**: Fast / Medium / Slow
- **Default**: Medium
- **Description**: Adjust card dealing animation speed

## Balance Algorithm Settings

For details, see [Balance Algorithm](/en/guide/balance-algorithm.md).

### Enable Balance Algorithm
- **Options**: On / Off
- **Default**: On
- **Description**: Whether to enable smart balance functionality

### Balance Factor (factor)
- **Range**: 1 - 100
- **Default**: 13.3
- **Description**: Define denominator of theoretical threshold

### Maximum Threshold (maxThreshold)
- **Range**: 0 - 100
- **Default**: 3
- **Description**: After exceeding this value, probability will not increase

### Maximum Boost Percentage (maxBoostPercent)
- **Range**: 200 - 5000
- **Default**: 1200
- **Description**: Limit probability boost upper limit

### Balance Curve Points (points)
- **Quantity**: 3 adjustable points
- **Format**: `{x: number, y: number}`
- **Description**: Control Hermite interpolation curve shape

## Data Security Settings

### Password Protection
- **Function**: Set password for sensitive operations
- **Protected operations**:
  - Clear data
  - Delete lists
  - Batch delete people
- **Encryption**: SHA-256 hash
- **Description**: Password is not stored in plain text

### Auto Backup
- **Function**: Regular auto export data
- **Frequency**: Once daily
- **Location**: `backups/` folder in app data directory
- **Description**: Can customize backup retention days

## Performance Settings

### Particle Effects
- **Options**: On / Off
- **Default**: On
- **Description**: Whether to display particle effects when rolling
- **Performance Tip**: Can significantly improve performance when disabled

### Blur Effects
- **Options**: On / Off
- **Default**: On
- **Description**: Whether to enable acrylic material blur effects
- **Performance Tip**: Can improve performance, but reduce visual effects

### Animation Speed
- **Range**: 50% - 200%
- **Default**: 100%
- **Description**: Globally adjust all animation speeds

## Advanced Settings

### Debug Mode
- **Options**: On / Off
- **Default**: Off
- **Description**: Enable developer tools for debugging
- **Warning**: For developers only

### Log Level
- **Options**: Error / Warn / Info / Debug
- **Default**: Info
- **Description**: Control console output log detail level

### Disable Update Check
- **Options**: On / Off
- **Default**: Off
- **Description**: Disable automatic update check

## Configuration File Location

### Windows
```
%APPDATA%/CyreneNameRoller/settings.json
```

### macOS
```
~/Library/Application Support/CyreneNameRoller/settings.json
```

### Linux
```
~/.config/CyreneNameRoller/settings.json
```

### Configuration File Structure
```json
{
  "appearance": {
    "darkMode": false,
    "uiScale": 100,
    "fontSize": 1
  },
  "language": {
    "lang": "zh",
    "displayLang": "zh"
  },
  "balance": {
    "enabled": true,
    "factor": 13.3,
    "maxThreshold": 3,
    "maxBoostPercent": 1200,
    "points": [
      { "x": 0.3, "y": 150 },
      { "x": 1.5, "y": 420 },
      { "x": 2.4, "y": 800 }
    ]
  },
  "performance": {
    "particles": true,
    "blur": true,
    "animationSpeed": 100
  },
  "security": {
    "passwordHash": "",
    "autoBackup": true,
    "backupDays": 7
  }
}
```

## Reset Configuration

If configuration issues arise, you can restore default settings in the **Settings** page:

1. Go to **Settings**
2. Scroll to the bottom
3. Click **Restore Default Settings**
4. Enter password (if set)
5. Confirm operation

**Note**: This action cannot be undone!

## Import/Export Configuration

Support import and export configuration files for easy settings sync between devices:

### Export Configuration
1. Go to **Settings** page
2. Click **Export Configuration**
3. Choose save location

### Import Configuration
1. Go to **Settings** page
2. Click **Import Configuration**
3. Select configuration file
4. Confirm import

## Common Configuration Scenarios

### Classroom Rolling (Recommended)
```json
{
  "balance": {
    "enabled": true,
    "factor": 13.3,
    "maxThreshold": 3,
    "maxBoostPercent": 1200
  },
  "appearance": {
    "fontSize": 2,
    "uiScale": 100
  }
}
```

### Team Game (Aggressive Balance)
```json
{
  "balance": {
    "enabled": true,
    "factor": 8,
    "maxThreshold": 5,
    "maxBoostPercent": 2000,
    "points": [
      { "x": 0.2, "y": 250 },
      { "x": 0.8, "y": 600 },
      { "x": 1.5, "y": 1200 }
    ]
  }
}
```

### Fair Lottery (No Balance)
```json
{
  "balance": {
    "enabled": false
  },
  "appearance": {
    "fontSize": 3
  }
}
```

### Low Performance Devices
```json
{
  "performance": {
    "particles": false,
    "blur": false,
    "animationSpeed": 150
  }
}
```

## License

This documentation is licensed under **CC BY-NC-SA 4.0**. See [LICENSE](https://creativecommons.org/licenses/by-nc-sa/4.0/) for details.