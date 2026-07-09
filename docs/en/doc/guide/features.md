---
title: Features Guide
description: Detailed features introduction of Cyrene's Name Roller
---

# Features Guide

Cyrene's Name Roller is a feature-rich random name picking desktop application that supports multiple picking modes and data management features. This document will introduce all features in detail.

## Random Name Picking Feature

### Basic Random Picking

- **Single Mode**: Pick one student at a time
- **Multiple Mode**: Pick multiple students at a time (configurable count, minimum 2)
- **No Repeat**: Pick without replacement, ensuring each person is picked only once per list
- **Balanced Algorithm**: Fewer picks result in higher probability, ensuring fairness

### Gradient Name Animation

Picking results display with rainbow gradient colors, vibrant and lively. The gradient is defined in CSS as a linear gradient of multiple colors with a 32-second cycling animation, creating smooth visual effects.

### Result Emphasis Animation

After each pick, the result name appears with a scale animation from `scale(4)` to `scale(1)`, enhancing visual impact.

### List Switching

Supports multiple lists with real-time switching in the random name picking interface.

### Operation Flow

1. Select a list (optional)
2. Choose mode (Single/Multiple)
3. If multiple mode, configure the number of people to pick
4. Click the "Start" button
5. View picking results
6. Repeat operations or switch lists

## Card Flip Name Picking Feature

### 3D Card Flip

- **Card Animation**: 3D flip effect (`rotateY(180deg)`), excellent visual experience
- **One-click Multiple**: Automatic shuffle + flip, easy to operate
- **Custom Count**: Set the number of people to pick at once
- **Card History**: Save each picking card record

### Operation Flow

1. Set the number of people to pick
2. Choose operation method:
   - **Manual Mode**: Click "Shuffle" to deal cards, click cards one by one to flip
   - **Quick Draw**: Click "Quick Pick" button to automatically complete shuffle + flip
3. View picking results
4. View card history

### Card Management

- **Real-time Switching**: Support switching lists during picking
- **History Persistence**: Card history and used names are automatically saved, recoverable after closing
- **Reset Function**: Clear current card face, start over

## Data Management Feature

### Data Statistics

- **Pick Count**: Count picks for each list
- **Candidate Count**: Total number of people in current list
- **Probability Distribution**: Display pick probability for each student
- **Balanced Probability**: When balance algorithm is enabled, display both original and balanced probabilities
- **Sorting**: Descending by pick count

### Pick Records

- **Detailed Records**: Name, list, source, time for each pick
- **Source Marking**: Distinguish between "Random Name" and "Card Flip" sources
- **Time Formatting**: Display friendly time format
- **Record Limit**: Maximum 500 records saved

### List Management

#### Basic Operations
- **Create List**: Create new lists
- **Rename List**: Modify list name
- **Delete List**: Delete unnecessary lists

#### Member Management
- **Add Member**: Support Chinese name and English name
- **Edit Member**: Modify member's Chinese and English names
- **Delete Member**: Remove member from list
- **Batch Delete**: Support select all and batch delete (10-second undo protection)

#### Whitelist Mechanism
- Built-in whitelist member "Again!" / "再来一次"
- Whitelist members are protected from batch deletion
- Whitelist cannot be edited by users

#### Import/Export
- **Export List**: Export single list as `.json` file
- **Import List**: Import list from `.json` file (adds as new list)
- **No password verification required**

## Personalization Settings

### Interface Customization

- **UI Scaling**: Adjust interface size (75% - 200%) to adapt to different screens
- **Name Font Size**: Adjust the display size of names in picking results (0.75x - 2.0x)
- **Dark Mode**: Dark/light theme switching
- **Language Switch**: Chinese / English

### Name Color

- **Gradient Mode** (default): Rainbow gradient color display for names
- **Custom Solid Color**: Customize name color for light and dark modes separately

### Performance Optimization

- **Acrylic Blur**: Enable/disable background frosted glass effect
- **Shadow Effects**: Enable/disable element shadows
- **Transition Animations**: Enable/disable page switching animations

### Data Security

- **Enable Data Statistics**: Control whether to record extraction statistics
- **Data Operation Password**: Set password to protect sensitive operations like data export, import, and clearing
- **Password Encryption**: SHA-256 hash storage, irreversible

## Technical Features

### Multi-Platform Support

- **Tauri Version**: Lightweight, based on system WebView, small installation package
- **Electron Version**: Good compatibility, built-in Chromium
- **Online Version**: Use directly in browser, no installation required

### Design Language

- **Fluent Design**: Uses Windows 11 design language, clean and modern interface
- **Custom Components**: FluentButton, FluentCard, FluentModal, and other custom UI components
- **Responsive Layout**: Supports different screen sizes

### Data Persistence

- **Tauri**: Stored as JSON files through Rust backend
- **Electron**: Uses electron-store
- **Browser**: Uses localStorage
- **Data Export**: Support full data export as `.cyrene` file

## Common Use Cases

### Classroom Teaching

- **Random Questioning**: Randomly select students to answer questions
- **Group Activities**: Randomly divide groups for group activities
- **Classroom Interaction**: Increase classroom fun and participation

### Meeting Activities

- **Random Speaking**: Randomly select speakers
- **Lottery Activities**: Used for lottery or random selection
- **Group Discussions**: Randomly divide groups for discussions

### Personal Use

- **Decision Assistance**: Help make random decisions
- **Game Entertainment**: Used for games or entertainment activities
- **Daily Use**: Any scenario requiring random selection