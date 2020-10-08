const settings = {
  "name": "kreditdebit-frontity",
  "state": {
    "frontity": {
      "url": "https://kreditdebit.com",
      "title": "KreditDebit",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            [
              "Start",
              "/"
            ],
            [
              "Privatlån",
              "/samla-lan/"
            ],
            [
              "Finansinsitut",
              "/finansinsitut/"
            ],
            [
              "Låna pengar",
              "/lana-pengar/"
            ],
            [
              "Om oss",
              "/om-oss/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://wp.kreditdebit.com/wp-json",
          "homepage": "/homepage",
          "postsPage": "/artiklar",
          postTypes: [
            {
              type: "prp_reviews", // type slug
              endpoint: "prp_reviews", // REST API endpoint
              archive: "/finansinsitut" // link where this custom posts are listed
            }
          ],         
          taxonomies: [
            {
              taxonomy: "samla-lan", // taxonomy slug
              endpoint: "prp_reviews_tax", // REST API endpoint
              postTypeEndpoint: "prp_reviews", // endpoint from which posts from this taxonomy are fetched
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"    
    ]
};

export default settings;
