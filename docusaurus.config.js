// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
 // Plausible Analytics snippet
 // Source = https://plausible.io/docs/docusaurus-integration
  scripts: [{src: 'https://glossar.platinus.at/js/plausible.js', defer: true, 'data-domain': 'glossar.platinus.at'}],

themes: [
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
  // `hashed` is recommended as long-term-cache of index file is possible.
      hashed: true,
      // For Docs using Chinese, The `language` is recommended to set to:
      language: ["de", "en"],
    },  ],  ],
// Mehrsprachigkeit
    i18n: {
   defaultLocale: 'de',
   locales: ['de', 'en'],
   localeConfigs: {
     de: {
       htmlLang: 'de-DE',
       direction: 'ltr',
     },
     // You can omit a locale (e.g. fr) if you don't need to override the defaults
     en: {
       htmlLang: 'en-GB',
       direction: 'ltr',
     },
   },
 },

/** @type {import('@docusaurus/types').Config} */
// const config = {
  title: 'Glossar',
  tagline: 'platinus-Glossar - Die Grundlage für eine gemeinsame Begriffswelt',
  url: 'https://glossar.platinus.at',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'platinus', // Usually your GitHub org/user name.
  projectName: 'platinus-Glossar', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
    //      path: 'docs',
    //      sidebarPath: 'sidebars.js',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
           editUrl: 'https://github.com/chris-tipotsch-platinus/glossar.platinus.at/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/chris-tipotsch-platinus/glossar.platinus.at/',
        },
        pages: {},
        sitemap: {},
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
        title: 'platinus-GLOSSAR',
        logo: {
          alt: 'platinus-Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
                    type: 'docSidebar',
                    position: 'left',
                    sidebarId: 'Sidebar10',
                    label: 'Begriffe',
          },

          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/chris-tipotsch-platinus/glossar.platinus.at',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },


      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ressourcen',
            items: [
              {
                label: 'platinus.GLOSSAR',
                to: '/docs/Begriffe-Home',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Website',
                href: 'https://www.platinus.at',
              },
              {
                label: 'HUB',
                href: 'https://HUB.platinus.at',
              },
              {
                label: 'CHAT',
                href: 'https://CHAT.platinus.at',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog zu Glossar',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/chris-tipotsch-platinus/glossar.platinus.at',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} by platinus Consulting.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
