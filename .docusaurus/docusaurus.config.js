/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "scripts": [
    {
      "src": "https://glossar.platinus.at/js/plausible.js",
      "defer": true,
      "data-domain": "glossar.platinus.at"
    }
  ],
  "themes": [
    [
      "/home/chris/GitHub/chris-tipotsch-platinus/glossar.platinus.at/node_modules/@easyops-cn/docusaurus-search-local/dist/server/server/index.js",
      {
        "hashed": true,
        "language": [
          "de",
          "en"
        ]
      }
    ]
  ],
  "i18n": {
    "defaultLocale": "de",
    "locales": [
      "de",
      "en"
    ],
    "localeConfigs": {
      "de": {
        "htmlLang": "de-DE",
        "direction": "ltr"
      },
      "en": {
        "htmlLang": "en-GB",
        "direction": "ltr"
      }
    }
  },
  "title": "Fachglossar",
  "tagline": "platinus-Fachglossar - Grundlage für eine gemeinsame Begriffswelt",
  "url": "https://glossar.platinus.at",
  "baseUrl": "/en/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "platinus",
  "projectName": "platinus-Glossar",
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/home/chris/GitHub/chris-tipotsch-platinus/glossar.platinus.at/sidebars.js",
          "editUrl": "https://github.com/chris-tipotsch-platinus/glossar.platinus.at/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/chris-tipotsch-platinus/glossar.platinus.at/"
        },
        "pages": {},
        "sitemap": {},
        "theme": {
          "customCss": "/home/chris/GitHub/chris-tipotsch-platinus/glossar.platinus.at/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "platinus-GLOSSAR",
      "logo": {
        "alt": "platinus-Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "docSidebar",
          "position": "left",
          "sidebarId": "Sidebar10",
          "label": "Fachbegriffe"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/chris-tipotsch-platinus/glossar.platinus.at",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Ressourcen",
          "items": [
            {
              "label": "platinus.GLOSSAR",
              "to": "/docs/Begriffe-Home"
            }
          ]
        },
        {
          "title": "Links",
          "items": [
            {
              "label": "Website",
              "href": "https://www.platinus.at"
            },
            {
              "label": "HUB",
              "href": "https://HUB.platinus.at"
            },
            {
              "label": "CHAT",
              "href": "https://CHAT.platinus.at"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog zu Glossar",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/chris-tipotsch-platinus/glossar.platinus.at"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 by Salzburg AG & platinus Consulting."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "hideableSidebar": false,
    "autoCollapseSidebarCategories": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};
