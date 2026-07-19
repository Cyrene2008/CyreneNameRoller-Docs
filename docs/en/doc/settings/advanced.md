---
title: Advanced Settings
description: Advanced settings and technical details for Cyrene's Name Roller
---

# Advanced Settings

## Data Storage Architecture

The application automatically selects the storage method based on the runtime environment:

### Tauri Version

Data is stored as independent JSON files under the Tauri app-data directory's `data/` subdirectory and is read and written through the Rust backend. This is not the installation directory. Storage keys include:

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

The current algorithm identifier is `cyrenenameroller-balance/v3`, with a stable module path at `src/utils/cyrene-balance.js`. It works through the following steps:

1. **Expected-count error**: Compare each regular member's actual count with the current average expected count
2. **Adaptive negative feedback**: Raise weights below expectation and lower weights above expectation, with stronger recovery as the current gap grows
3. **Project the next state**: Simulate the absolute gap after selecting each candidate and apply a moderate penalty when moving beyond target 2
4. **Probability guards**: Keep every probability above zero and cap a single candidate at 30% when at least four candidates remain
5. **Secure randomness**: Prefer Web Crypto before performing weighted selection

### Fairness Boundary

- Absolute gap `2` is a fixed soft target for classroom use, not a hard mathematical upper bound
- A strict never-above-2 guarantee would require setting some candidates to zero probability, conflicting with the requirement that everyone always has a chance
- In seeded simulations, 13 candidates over 100,000 picks finish with a gap of 1-2, while transient states can briefly be higher
- Users can only enable or disable fairness; sensitivity, curves, ratios, and gap targets are not editable

### Multi-Pick State Updates

- **With replacement**: The requested count is not limited by list size. Temporary counts update after every position, so a repeated candidate already reflects the previous result.
- **Without replacement**: The count is limited to available candidates. Each pick updates temporary counts, is removed from the current batch pool, and triggers a fresh calculation for the remaining candidates.

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
