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

This project is set up to deploy to **GitHub Pages** automatically using a GitHub Actions pipeline. Any commit pushed to the `main` branch will trigger a workflow that builds and updates the `gh-pages` branch with the latest documentation.

### 📌 Automatic Deployment Pipeline
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push to `main`.
- It installs dependencies, builds the static site, and pushes updates to the `gh-pages` branch.
- The latest documentation is automatically published to GitHub Pages.

### 1. Manual Build (Optional)
If you need to build the static site locally:
```sh
yarn build  # or npm run build
```
This will generate a `build/` folder containing the static files.

### 2. Manual Deployment (Optional)
If you need to manually deploy to GitHub Pages:
```sh
GIT_USER=<your-github-username> yarn deploy  # or npm run deploy
```
Make sure you have permission to push changes to the repository.

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
