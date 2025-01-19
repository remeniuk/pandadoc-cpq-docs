// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PandaDoc CPQ Docs',
  tagline: 'Guides, How-tos, References, and More for PandaDoc CPQ',
  favicon: 'img/favicon.ico',

  url: 'https://remeniuk.github.io', // Replace <username> with your GitHub username
  baseUrl: '/pandadoc-cpq-docs/', // Replace <repo> with your repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  organizationName: 'remeniuk', // Replace with your GitHub username
  projectName: 'pandadoc-cpq-docs', // Replace with your repository name

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Sidebar configuration
          routeBasePath: '/', // Serve docs directly at the root URL
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'for CPQ',
        logo: {
          alt: 'PandaDoc Logo',
          src: 'img/logo.png', // Adjusted path
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar', // Sidebar for documentation
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/video-guides', // This is a direct page, not a sidebar
            label: 'Video Guides',
            position: 'left',
          },            
          {
            type: 'docSidebar',
            sidebarId: 'releaseNotesSidebar', // Sidebar for release notes
            position: 'left',
            label: 'Release Notes',
          },        
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} PandaDoc, Inc. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['javascript', 'python'],
      },
    }),
};

export default config;
