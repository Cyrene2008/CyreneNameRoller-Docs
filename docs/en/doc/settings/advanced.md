---
title: Advanced Settings
description: Advanced settings and technical details for Cyrene's Name Roller
---

# Advanced Settings

## Data Storage Architecture

The application automatically selects the storage method based on the runtime environment:

### Tauri Version

Data is stored as independent JSON files in the `data/` directory, read and written through the Rust backend. Storage keys include:

- `settings`: User settings
- `lists`: List data
- `currentListId`: Currently selected list ID
- `statistics`: Statistics data
- `records`: Extraction records
- `balance`: Balance algorithm configuration
- `password`: Password hash
- `cardTrayHistory`: Card flip tray history
- `cardUsedNames`: Card flip used names
- `cardSettings`: Card flip settings

### Electron Version

Uses the `electron-store` package for data persistence, stored in the user data directory.

### Browser Version (Online)

Uses `localStorage` for data storage, saved in the browser locally.

## List Management Advanced Features

### Whitelist Mechanism

The system has a built-in non-editable whitelist:

- **Content**: `Again!` (English) / `再来一次` (Chinese)
- **Purpose**: Whitelist members are protected from batch deletion
- **Display**: Shown with special markers in the list management page

### List Import/Export

#### List Export

- **Format**: `.json` file
- **Content**: Single list data (name + member list)
- **Location**: List management page
- **No password verification required**

#### List Import

- **Format**: `.json` file
- **Location**: List management page
- **No password verification required**
- **Note**: Import adds as a new list, does not affect existing lists

## Card Flip Advanced Configuration

### Card Count

Configurable number of cards in card flip mode, affecting the number of cards dealt each time.

### Quick Draw Count

Configuration for the number of picks in the one-click multiple function.

### Tray History Persistence

Card flip mode's tray history and used names are automatically persisted, allowing recovery of the previous state after closing and reopening the application.

## Balance Algorithm Technical Details

### Algorithm Principle

The balance algorithm works through the following steps:

1. **Calculate Deficit**: For each student, calculate `deficit = expected pick count - actual pick count`
2. **Probability Boost Calculation**: Find the corresponding probability boost percentage on the balance curve based on the deficit value
3. **Weighted Random**: Use the boosted probability for weighted random selection

### Interpolation Method

Uses Fritsch-Carlson monotone Hermite cubic interpolation for smooth transitions between 3 control points, ensuring the curve is monotonically increasing.

### Default Control Points

| Control Point | X (Deficit) | Y (Probability Boost%) |
|---------------|-------------|------------------------|
| Point 1       | 0.3         | 150%                   |
| Point 2       | 1.5         | 420%                   |
| Point 3       | 2.4         | 800%                   |

### Parameter Description

- `factor` (13.3): Base weight factor
- `maxThreshold` (3): Maximum deficit threshold
- `maxBoostPercent` (1200%): Maximum probability boost cap

## Data Operation Security

### Password Protection Mechanism

- **Hash Algorithm**: SHA-256
- **Storage Method**: Only stores hash value, not plaintext password
- **Protected Scope**: Data export, data import, clear records, clear all
- **Not Protected**: List editing, settings modification, daily use

### Data Import Notes

- Import will **overwrite** all current data
- Manual **restart** required after import
- Recommended to export current data as backup before importing

## Performance Optimization Tips

### Low-Performance Devices

On low-performance devices, it is recommended to disable the following effects for smoother operation:

- Acrylic blur effect
- Shadow effects
- Transition animations

### Large Lists

When a list contains many members:

- Balance algorithm computation time increases accordingly
- Statistics page rendering may slow down
- Recommended to keep the number of members per list reasonable