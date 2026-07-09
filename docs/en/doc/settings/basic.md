---
title: Basic Settings
description: Basic settings options for Cyrene's Name Roller
---

# Basic Settings

This section introduces all configurable options for Cyrene's Name Roller. All settings are modified in the "Settings" page and take effect immediately.

## Basic Settings

### Language Switch

Switch the interface display language:

- **Chinese**: Default language
- **English**: English interface

Toggle: Click the language switch to toggle instantly, no restart required. Affects all interface text including menus, buttons, and prompts.

### Dark Mode

Switch between dark/light themes:

- **Light Mode**: Suitable for daytime or bright environments
- **Dark Mode**: Suitable for night or low-light environments

Toggle: Click the dark mode switch to toggle instantly.

## Theme & Display

### Name Color Mode

Control the display color of names in picking results:

- **Gradient Mode** (default): Names display with rainbow gradient colors, vibrant and lively
- **Custom Solid Color**: Use custom color to display names

When "Custom Solid Color" is selected, you can set separate colors for light and dark modes:

- **Light Mode Color**: Customize via color picker
- **Dark Mode Color**: Customize via color picker

### UI Scaling

Adjust the overall interface size to adapt to different screen resolutions:

- **Available Values**: 75%, 100% (default), 125%, 150%, 175%, 200%
- **Implementation**: CSS scaling, all interface elements scale proportionally

### Name Font Size

Adjust the display size of names in picking results:

- **Available Values**: 0.75x, 1.0x (default), 1.25x, 1.5x, 1.75x, 2.0x
- **Only Affects**: The name text size in the picking result area, not other interface elements

## Performance Settings

The following settings optimize runtime smoothness on low-performance devices:

### Acrylic Blur

Control the frosted glass blur effect on the interface background:

- **On**: Interface background displays Windows 11 style acrylic blur effect
- **Off**: Disable blur effect to improve smoothness on low-performance devices

### Shadow Effects

Control shadows on cards and buttons:

- **On**: Interface elements display shadow effects, enhancing depth
- **Off**: Disable shadow effects to reduce rendering load

### Transition Animations

Control page switching and element transition animations:

- **On**: Page switching displays slide transition animations
- **Off**: Disable transition animations, pages switch directly, improving response speed

## Data Management

### Enable Data Statistics

Control whether to record extraction statistics:

- **On** (default): Automatically record pick counts and probability distribution
- **Off**: Stop recording statistics, existing statistics are preserved but no longer updated

### Data Operation Password

Set a password to protect sensitive data operations:

- **Protected Operations**: Data export, data import, clear records, clear all data
- **Encryption Method**: Password stored as SHA-256 hash, irreversible
- **Three Modes**:
  - **Set Password**: Set password for the first time
  - **Change Password**: Verify old password first, then set new password
  - **Verify Password**: Verify when performing protected operations

### Data Export

Export all data as a `.cyrene` file (JSON format):

- **Contains**: Settings, lists, statistics, records, balance algorithm configuration, password hash
- **Requires password verification**

### Data Import

Import data from a `.cyrene` file:

- **Warning**: Import will overwrite all current data
- **Requires password verification**
- **Manual restart required after import**

### Clear Records

Clear all extraction records:

- **Requires password verification**
- **Does not affect** lists and statistics

### Clear All

Clear all data and restore default settings:

- **Requires password verification**
- **Irreversible**, please confirm before operation

## Balance Algorithm

### Enable Balance Algorithm

Control the fairness of random picking:

- **On**: Use balance algorithm, fewer picks result in higher probability
- **Off**: Completely random picking, same probability each time

### Curve Editor

Customize the probability adjustment curve of the balance algorithm:

- **Visual Editing**: Drag 3 control points on the Canvas to adjust curve shape
- **Algorithm**: Based on Fritsch-Carlson monotone Hermite cubic interpolation
- **How It Works**: Calculate each student's "deficit" (expected count - actual count), larger deficit means higher probability boost
- **Default Parameters**:
  - `factor`: 13.3
  - `maxThreshold`: 3
  - `maxBoostPercent`: 1200%
- **Statistics Display**: The statistics page displays both "Original Probability" and "Balanced Probability" columns

## Update Log

The bottom of the settings page displays the application's version update history, loaded from the `up.json` file.