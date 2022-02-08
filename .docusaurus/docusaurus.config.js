export default {
  "title": "Developer Documentation",
  "tagline": "1Kosmos BlockID Developer Portal",
  "url": "https://pedantic-meitner-0011.netlify.app",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "1kosmos",
  "projectName": "devx_frontend",
  "onDuplicateRoutes": "warn",
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/ifrench/devx-content/older/netlify3/netlify/sidebars.js"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/1KBlockID/devx_frontend/tree/develop/blog/"
        },
        "theme": {
          "customCss": "/Users/ifrench/devx-content/older/netlify3/netlify/src/css/custom.css"
        }
      }
    ]
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/icon?family=Material+Icons"
  ],
  "plugins": [
    "docusaurus-node-polyfills",
    "/Users/ifrench/devx-content/older/netlify3/netlify/src/docuplugin.js"
  ],
  "themeConfig": {
    "navbar": {
      "title": "Developer",
      "logo": {
        "alt": "BlockID Logo",
        "src": "img/1klogo.svg"
      },
      "hideOnScroll": false,
      "items": []
    },
    "footer": {
      "style": "light",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Home",
              "to": "/docs/uwl"
            }
          ]
        }
      ],
      "copyright": "© 2022 1Kosmos Inc., All Rights Reserved. | Privacy Policy | Cookie Policy"
    },
    "prism": {
      "additionalLanguages": [
        "php",
        "java"
      ],
      "theme": {
        "plain": {
          "color": "#d6deeb",
          "backgroundColor": "#011627"
        },
        "styles": [
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(162, 191, 252)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgba(239, 83, 80, 0.56)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "inserted",
              "attr-name"
            ],
            "style": {
              "color": "rgb(173, 219, 103)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(99, 119, 119)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "url"
            ],
            "style": {
              "color": "rgb(173, 219, 103)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(214, 222, 235)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "selector",
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(255, 203, 139)"
            }
          },
          {
            "types": [
              "tag",
              "operator",
              "keyword"
            ],
            "style": {
              "color": "rgb(127, 219, 202)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "property"
            ],
            "style": {
              "color": "rgb(128, 203, 196)"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
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
      }
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    },
    "liveCodeBlock": {
      "playgroundPosition": "bottom"
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "customFields": {},
  "titleDelimiter": "|",
  "noIndex": false
};