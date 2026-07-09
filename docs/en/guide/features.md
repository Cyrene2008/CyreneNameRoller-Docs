---
title: Features
description:深入了解 CyreneNameRoller 的各项功能
---

# Features

## Random Roller

### Basic Operations
1. **Select List**: Choose the list from dropdown
2. **Set Count**: Adjust number of people to draw (1-100)
3. **Start**: Click "Start" to begin rolling
4. **View Result**: Wait for animation to finish

### Advanced Options

#### English Mode
Toggle between Chinese and English names:
- Results display corresponding language names
- If someone only has a Chinese name, it shows in English mode
- Vice versa

#### Multi-player Mode
Draw multiple people at once:
- Set draw count directly
- Click "Roll Again" without resetting for cumulative draws

#### Forbid Duplicates
- **On**: No replacement after drawing, must reset before drawing again
- **Off**: Can draw the same person repeatedly

### Animation Effects
Multiple animation stages when displaying results:

1. **Rolling Phase**: Names scroll quickly
2. **Deceleration Phase**: Scrolling speed gradually slows
3. **Final Result**: Shows final drawn name
4. **Rainbow Animation**: Rainbow gradient effect (can be disabled)

### Reset Options
- **Reset List**: Clear current draw records, restore initial state
- **Reset All**: Clear all draw records, including statistics

## Card Flip Mode

### Dealing Process
1. **Select List**: Choose the list to draw from
2. **Set Count**: Set number of cards to deal
3. **Deal**: Click "Deal" button
4. **Flip**: Click card to flip

### Deal Animation
Cards fly in from random directions with rotation and scale effects:
- Deal speed adjustable in settings
- Auto-flip or manual flip option

### Card History
- Automatically recorded after flipping
- History persists when switching lists
- Can manually clear history

### Batch Operations
- **Quick Multi-draw**: Deal multiple cards at once
- **Auto Shuffle**: Auto-shuffles before each deal
- **Collect & Reset**: One-click collect cards and reset state

## List Management

### Create List
1. Go to **Lists Management**
2. Click **New List**
3. Enter list name
4. Add people

### Add People
Three methods supported:

#### Manual Entry
Add people one by one:
1. Enter Chinese name
2. Enter English name (optional)
3. Click add button

#### Batch Import
Import from text file:
1. Prepare text file, one name per line
2. Click **Import**
3. Select file
4. Confirm import

#### Copy from Other List
Copy people from existing lists:
1. Select source list
2. Select people to copy
3. Click copy
4. Paste into target list

### Edit People
- Click person row to enter edit mode
- Modify Chinese or English name
- Save changes

### Delete People
Two deletion methods:

#### Single Delete
1. Click delete button on person row
2. Confirm deletion
3. Deletion successful

#### Batch Delete
1. Select people to delete
2. Click **Batch Delete**
3. Confirm deletion
4. **Undo within 10 seconds**

### Whitelist
Whitelist is a special list of people **not affected by balance algorithm**:
- Whitelist people always have equal probability
- Even if drawn multiple times, probability won't change
- Suitable for special roles requiring fairness

### Import/Export Lists
Support `.cyrene` format list files:

#### Export
1. Select list to export
2. Click **Export**
3. Choose save location
4. Export successful

#### Import
1. Click **Import**
2. Select `.cyrene` file
3. Confirm import
4. Import successful

## Statistics

### Metrics

#### Pick Count
Total times each person was drawn.

#### Raw Probability
Theoretical probability without balance algorithm:
```
Raw Probability = 1 / Total People
```

#### Balanced Probability
Actual probability with balance algorithm:
```
Balanced Probability = Raw Probability × (100 + Boost Percent) / 100
```

### Sorting & Filtering
- Sort by pick count
- Sort by raw probability
- Sort by balanced probability
- Filter by name

### Data Visualization
Statistics page provides intuitive visualizations:
- Bar chart showing pick count distribution
- Pie chart showing draw ratio
- Line chart showing probability changes

## Records

### Record Content
Each draw records:
- **Name**: The drawn person's name
- **List**: Name of the list used
- **Source**: Random Roller / Card Flip
- **Time**: Specific time of draw

### View Records
- Filter by **time**
- Filter by **list**
- Filter by **source**
- Search by name

### Export Records
Support export to CSV or JSON:
1. Click **Export Records**
2. Select format (CSV/JSON)
3. Choose save location
4. Export successful

### Clear Records
1. Click **Clear Records**
2. Enter password (if set)
3. Confirm clear
4. Records cleared

## Settings

### Appearance Settings
- Dark mode toggle
- UI scale adjustment
- Font size adjustment

### Performance Settings
- Particle effects toggle
- Blur effects toggle
- Animation speed adjustment

### Balance Algorithm Settings
For details, see [Balance Algorithm](/en/guide/balance-algorithm.md).

### Data Management
- Data export
- Data import
- Data clear

### Changelog
View app update history and version information.

## About

### App Info
- App Name: CyreneNameRoller
- Current Version: 26.0.0
- License: GPL-3.0

### Author Info
- Author: Cyrene2008
- GitHub: [Cyrene2008](https://github.com/Cyrene2008)
- Website: 昔涟.cn

### Feedback & Support
- GitHub Issues: [Submit Issue](https://github.com/Cyrene2008/CyreneNameRoller/issues)
- Email: See GitHub profile

### Open Source License
This project is licensed under GPL-3.0. See [LICENSE](https://github.com/Cyrene2008/CyreneNameRoller/blob/main/LICENSE) file.

## Keyboard Shortcuts

### Global Shortcuts
| Key | Action |
|-----|--------|
| `Ctrl/Cmd + ,` | Open Settings |
| `Ctrl/Cmd + L` | Open Lists Management |
| `Ctrl/Cmd + S` | Open Statistics |
| `Ctrl/Cmd + R` | Open Records |
| `Ctrl/Cmd + ?` | Open About |

### Random Roller Shortcuts
| Key | Action |
|-----|--------|
| `Space` | Start/Stop |
| `Ctrl/Cmd + R` | Reset |
| `Ctrl/Cmd + E` | Toggle English Mode |

### Card Flip Shortcuts
| Key | Action |
|-----|--------|
| `Space` | Deal |
| `Ctrl/Cmd + R` | Reset |
| `Ctrl/Cmd + C` | Collect |

## Advanced Tips

### Quick List Switch
- Use dropdown in roller page for quick switching
- Drawing state persists after switching

### Batch Drawing
- Set draw count then draw continuously
- Suitable for drawing multiple people at once

### History Backtrack
- Records support time-based backtrack
- Convenient for reviewing historical draws

### Data Backup
- Regularly export data backups
- Avoid accidental data loss

### Performance Optimization
- Disabling rainbow animation and particle effects improves performance
- On low-performance devices, consider disabling blur effects