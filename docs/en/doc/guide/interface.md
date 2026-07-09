---
title: Interface Introduction
description: Introduction to Cyrene's Name Roller interface layout and features
---

# Interface Introduction

Cyrene's Name Roller uses Windows 11 Fluent Design language, with a clean and modern interface that is intuitive to use. This document will introduce the various interface components of the software in detail.

## Main Interface Layout

The main interface uses a left navigation bar design, containing the following main parts:

### 1. Left Navigation Bar

The navigation bar is located on the left side of the window, containing the following page entries:

- **Random Name**: Core random picking functionality
- **Card Flip**: 3D card flip animation name picking
- **Statistics**: View pick counts and probability distribution
- **Records**: View historical pick records
- **List Management**: Manage lists and members
- **Settings**: Personalization configuration options
- **About**: Application information

The navigation bar supports collapse/expand toggle, showing only icons when collapsed.

### 2. Custom Title Bar

The application uses a custom title bar (no system title bar), containing:

- Application name display
- Window control buttons: Minimize, Maximize/Restore, Close

### 3. Main Content Area

Displays different function interfaces based on the selected page. Page switching includes slide transition animations (can be disabled in settings).

## Function Page Details

### Random Name Page

Core random picking functionality:

- **Mode Toggle**: Single mode / Multiple mode
- **Count Adjustment**: In multiple mode, set the number of people to pick (2 to list size limit)
- **No Repeat**: Toggle control whether the same person can be picked multiple times
- **English Mode**: Switch between Chinese name/English name display
- **List Selection**: Dropdown menu to select different lists
- **Start Button**: Start random picking
- **Result Display Area**: Display picking results, supports gradient name animation and scale emphasis animation

### Card Flip Page

Card flip name picking with 3D animation:

- **English Mode**: Switch between Chinese name/English name display
- **List Selection**: Dropdown menu to select different lists
- **Shuffle Button**: Deal cards, place cards face down
- **Quick Pick**: One-click complete shuffle + flip
- **Reset Button**: Clear card face, start over
- **Card Area**: Display cards, click to flip and view results
- **Card History**: Bottom area displays flipped card records

### Statistics Page

Data statistics and visualization:

- **Total Pick Count**: Total picks across all lists
- **Candidate Count**: Total number of people in current list
- **Statistics List**:
  - Each student's name
  - Pick count
  - Original probability
  - Balanced probability (displayed when balance algorithm is enabled)
  - Sorted descending by pick count

### Records Page

View historical pick records:

- **Record List**: Display all pick records
- **Record Fields**:
  - Time: Pick time (friendly format display)
  - Name: Picked student's name
  - List: List name
  - Source: "Random Name" or "Card Flip"
- **Record Limit**: Maximum 500 records saved

### List Management Page

List and member management:

- **List Switching**: Left sidebar displays all lists, click to switch
- **Add List**: Create new lists
- **List Operations**: Rename, delete
- **Member List**: Display all members in current list
- **Add Member**: Enter Chinese name and English name
- **Edit Member**: Modify member information
- **Delete Member**: Single delete or batch delete
- **Batch Operations**: Select all, batch delete (10-second undo protection)
- **Import/Export**: Import/export list as `.json` file
- **Whitelist Marking**: Whitelist members display special markers, cannot be deleted

### Settings Page

Personalization configuration options, divided into the following sections:

- **Basic Settings**: Language switch, dark mode
- **Theme & Display**: Name color mode, UI scaling, name font size
- **Performance Settings**: Acrylic blur, shadow effects, transition animations
- **Data Management**: Enable data statistics, data operation password, data export/import/clear
- **Balance Algorithm**: Enable toggle, curve editor
- **Update Log**: Version update history

### About Page

Display basic application information:

- Application name and version
- Application description
- Author information (Cyrene2008)
- GitHub repository link
- License information (GPL v3.0)
- Copyright notice
- ICP filing number

## UI Components

The application uses custom Fluent Design components:

- **FluentButton**: Button component, supports primary/secondary/subtle/danger variants, sm/md/lg sizes
- **FluentCard**: Frosted glass card container
- **FluentIcon**: Fluent icons based on @iconify/vue
- **FluentInput**: Input field, supports prefix/suffix slots
- **FluentModal**: Modal dialog, supports persistent mode
- **FluentSelect**: Dropdown selector
- **FluentToast**: Bottom-right notification, supports action buttons
- **FluentToggle**: Toggle switch
- **BalanceEditor**: Balance curve editor, Canvas rendering, draggable control points

## Interface Operation Tips

### Random Name Picking Operations

1. **Quick Picking**: Click the "Start" button directly in the random name interface
2. **Multiple Mode**: Switch to multiple mode and set the number of people to pick
3. **Switch Lists**: Select different lists from the list selection dropdown
4. **No Repeat**: Enable to ensure each person is picked only once

### Card Flip Name Picking Operations

1. **Manual Flip**: Click "Shuffle" to deal cards, click cards one by one to flip
2. **Quick Pick**: Click "Quick Pick" button for one-click completion
3. **Switch Lists**: Select different lists from the list selection dropdown
4. **Reset Cards**: Click "Reset" button to clear the card face

### Data Management Operations

1. **View Statistics**: View pick counts and probabilities in the statistics page
2. **View Records**: View historical records in the records page
3. **Manage Lists**: Perform list CRUD operations in the list management page
4. **Import/Export**: Use import/export functions to backup list data