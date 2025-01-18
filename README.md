# PandaDoc CPQ Documentation Portal

This repository contains the official documentation for PandaDoc CPQ, built using [Docusaurus](https://docusaurus.io/).

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or later) - [Download here](https://nodejs.org/)
- **Yarn** (preferred) or npm
- **Git** (to manage versions and deployments)

### Installation
Clone the repository and install dependencies:
```sh
git clone https://github.com/your-org/pandadoc-cpq-docs.git
cd pandadoc-cpq-docs
yarn install  # or npm install
```

### Running Locally
To preview the documentation in development mode:
```sh
yarn start  # or npm run start
```
This will start a local server at `http://localhost:3000/` with hot-reloading.

## 📤 Deployment to GitHub Pages

This project is set up to deploy to **GitHub Pages**. Follow these steps to publish updates:

### 1. Build the Static Site
Run:
```sh
yarn build  # or npm run build
```
This will generate a `build/` folder containing the static files.

### 2. Deploy to GitHub Pages
If you’re deploying to `gh-pages` branch on GitHub, run:
```sh
GIT_USER=<your-github-username> yarn deploy  # or npm run deploy
```
Make sure you have permission to push changes to the repository.

#### 📌 Important Notes:
- Your repository should have **GitHub Pages** enabled under **Settings > Pages**.
- The `homepage` field in `docusaurus.config.js` should match your GitHub Pages URL:
  ```js
  module.exports = {
    url: 'https://your-org.github.io',
    baseUrl: '/pandadoc-cpq-docs/',
  };
  ```

## 🛠 Customization

### Editing Content
- **Docs:** Modify Markdown files in `docs/`
- **Sidebars:** Edit `sidebars.js`
- **Homepage:** Customize `src/pages/index.js`
- **Theme & Layout:** Modify `src/theme/` components

### Adding a New Page
Create a new Markdown file in `docs/`:
```sh
echo "# New Page Title" > docs/new-page.md
```
Then, update `sidebars.js` to include the page in the navigation.

## ❓ Troubleshooting

### Common Issues:
- **Build Fails on Deployment**  
  Make sure your repository has a valid `baseUrl` set in `docusaurus.config.js`.

- **Changes Not Appearing**  
  Clear cache and restart:
  ```sh
  yarn start --clean
  ```

## 🎯 Contribution Guide

1. Fork the repository.
2. Create a new branch (`feature/my-update`).
3. Commit your changes.
4. Open a pull request.

---

Happy documenting! ✍️🚀
