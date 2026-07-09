---
title: Contribution Guide
description: How to contribute to the Cyrene's Name Roller project
---

# Contribution Guide

Thank you for your interest and support in the Cyrene's Name Roller project! We welcome and appreciate various forms of contributions, including code submissions, documentation improvements, bug reports, and feature suggestions.

## Code of Conduct

All contributors participating in this project should遵守 the following code of conduct:

- **Respect Others**: Respect all contributors regardless of their experience level, gender, gender identity and expression, sexual orientation, disability, appearance, race, age, religion, or nationality
- **Inclusive and Friendly**: Create a friendly, inclusive environment that welcomes contributors from all backgrounds
- **Professional Attitude**: Treat others with professionalism and accept constructive criticism
- **Focus on Project**: Focus on what is best for the project, not personal disagreements

## How to Contribute

### Report Bugs

If you发现了 a bug, you can report it through the following steps:

1. **Search Existing Issues**: First check if someone has already reported the same issue
2. **Create New Issue**: If no related Issue is found, create a new Issue
3. **Describe Problem in Detail**: Provide the following information:
   - Software version
   - Operating system version
   - Detailed problem description
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Relevant screenshots or error messages
   - Possible solutions (if any)

### Suggest Features

If you have feature suggestions, you can提出 them through the following steps:

1. **Search Existing Issues**: First check if someone has already提出 the same suggestion
2. **Create New Issue**: If no related Issue is found, create a new Issue
3. **Describe Suggestion in Detail**: Provide the following information:
   - Suggested feature description
   - Why this feature is needed
   - Expected behavior of the feature
   - Possible implementation方案 (if any)

### Submit Code

If you want to submit code contributions, please follow these steps:

1. **Fork Repository**: Fork the project repository to your own account on GitHub
2. **Clone Repository**: Clone the Forked repository to local
   ```bash
   git clone https://github.com/your-username/CyreneNameRoller.git
   cd CyreneNameRoller
   ```
3. **Create Branch**: Create a new branch to develop your feature or fix
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-fix-name
   ```
4. **Install Dependencies**: Install project dependencies
   ```bash
   npm install
   ```
5. **Develop Code**: Implement your feature or fix
6. **Test Code**: Ensure your code works properly
   ```bash
   npm run dev
   ```
7. **Commit Changes**: Commit your changes
   ```bash
   git add .
   git commit -m "Describe your changes"
   ```
8. **Push to GitHub**: Push your branch to GitHub
   ```bash
   git push origin feature/your-feature-name
   ```
9. **Create Pull Request**: Create a Pull Request on GitHub describing your changes

### Improve Documentation

If you want to improve documentation, you can follow these steps:

1. **Fork Repository**: Fork the project repository to your own account on GitHub
2. **Clone Repository**: Clone the Forked repository to local
3. **Create Branch**: Create a new branch to modify documentation
4. **Modify Documentation**: Improve or add documentation content
5. **Commit Changes**: Commit your changes
6. **Push to GitHub**: Push your branch to GitHub
7. **Create Pull Request**: Create a Pull Request on GitHub describing your changes

## Development Environment Setup

### System Requirements

- **Operating System**: Windows 10/11 (64-bit)
- **Node.js**: 18 or higher
- **npm**: 9 or higher
- **Git**: For version control

### Install Dependencies

1. **Clone Repository**
   ```bash
   git clone https://github.com/Cyrene2008/CyreneNameRoller.git
   cd CyreneNameRoller
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build Electron Client**
   ```bash
   npm run electron:build
   ```

### Development Tools

The following development tools are recommended:

- **IDE**: Visual Studio Code
- **Browser**: Chrome (for debugging Electron applications)
- **Version Control**: Git

### Testing

Before submitting code, please run tests to ensure your changes don't break existing functionality:

```bash
npm run dev
```

## Code Standards

### Naming Conventions

- **Files and Directories**: Use lowercase letters, separate words with hyphens
- **Component Names**: Use PascalCase
- **Functions and Variables**: Use camelCase
- **Constants**: Use uppercase letters, separate words with underscores
- **CSS Class Names**: Separate with hyphens

### Code Style

- **Indentation**: Use 2 spaces for indentation
- **Blank Lines**: Use blank lines appropriately to separate different code blocks
- **Comments**: Add comments to complex code to explain functionality and logic
- **Docstrings**: Add docstrings to functions, classes, and modules

### Commit Message Convention

Commit messages should follow this format:

```
type(scope): description

Detailed description (optional)

Reference related Issue (if any)
```

**Types** include:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (doesn't affect functionality)
- `refactor`: Code refactoring (no new features or bug fixes)
- `perf`: Performance optimization
- `test`: Add or modify tests
- `chore`: Build or dependency changes

**Scope** is optional, specifying the scope of changes, for example:
- `ui`: User interface
- `core`: Core functionality
- `random`: Random name picking feature
- `flip`: Card flip name picking feature
- `data`: Data management feature

**Description** is a brief description of the changes,不超过 50 characters.

**Detailed description** is a detailed explanation of the changes, optional.

**Reference related Issue** refers to referencing the GitHub Issue related to the changes, for example: `Closes #123`.

## Release Process

### Version Number Convention

The project uses Semantic Versioning:

- **Major Version**: Incremented when making incompatible API changes
- **Minor Version**: Incremented when adding backward-compatible new features
- **Patch Version**: Incremented when making backward-compatible bug fixes

### Release Steps

1. **Update Version Number**: Update version number in `package.json`
2. **Update CHANGELOG**: Update CHANGELOG.md file,记录本次发布的更改
3. **Run Tests**: Ensure all tests pass
4. **Build Release**: Build Electron application
   ```bash
   npm run electron:build
   ```
5. **Create GitHub Release**: Create a new Release on GitHub, upload built installation packages

## Contributor Guide

### Become a Contributor

Anyone can become a contributor to Cyrene's Name Roller, regardless of your experience level. We welcome:

- **Code Contributions**: Fix bugs, add new features
- **Documentation Contributions**: Improve documentation, add examples
- **Test Contributions**: Write test cases
- **Community Contributions**: Answer questions, help other users

### Contributor Code of Conduct

As contributors, we expect you to:

- **Respect Others**: Respect all contributors and users
- **Professional Attitude**: Treat work with professionalism
- **Active Communication**: Respond promptly to relevant Issues and Pull Requests
- **Continuous Learning**: Continuously learn and improve your skills

### Contributor Recognition

We highly value the work of all contributors and recognize contributors through the following ways:

- **Contributor List**: List all contributors in README.md
- **GitHub Contribution Graph**: Display contributions through GitHub's contribution graph
- **Release Notes**: Thank contributors in Release notes

## Frequently Asked Questions

### Q: I'm a beginner, how do I start contributing?
A: You can start from the following方面:
   - Fix simple bugs
   - Improve documentation
   - Answer other users' questions
   - Add tests to the project

### Q: How do I get the latest information about the project?
A: You can get the latest project information through the following ways:
   - Follow GitHub repository activity
   - Subscribe to project Issues and Pull Requests
   - Join the project's discussion group (if available)

### Q: What process should I follow to contribute code?
A: Please refer to the "Submit Code" section in this guide and follow the process to submit your code contributions.

### Q: How do I communicate with project maintainers?
A: You can communicate with project maintainers through the following ways:
   - GitHub Issues and Pull Requests
   - Project discussion group (if available)
   - Email (if provided)

### Q: What should I do if my contribution is rejected?
A: If your contribution is rejected, don't be discouraged. Maintainers will provide specific reasons, and you can improve based on feedback and submit again.

## Contact Information

- **GitHub Repository**: https://github.com/Cyrene2008/CyreneNameRoller
- **Issue Tracker**: https://github.com/Cyrene2008/CyreneNameRoller/issues
- **Pull Requests**: https://github.com/Cyrene2008/CyreneNameRoller/pulls

## License

Cyrene's Name Roller uses the GPL-3.0 license. For details, please查看 [LICENSE](https://github.com/Cyrene2008/CyreneNameRoller/blob/main/LICENSE) file.

---

Thank you for your interest and support in the Cyrene's Name Roller project! We look forward to your contributions to make this project even better.