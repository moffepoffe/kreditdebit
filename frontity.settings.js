const settings = {
  "name": "kreditdebit-frontity",
  "state": {
    "frontity": {
      "url": "https://kreditdebit.com",
      "title": "KreditDebit",
      "description": "Jämför lån för dina behov online"
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
              "/privatlan"
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
          ]
        }
      }
    },
    {
      name: "@frontity/google-analytics",
      state: {
          googleAnalytics: {
              trackingId: 'G-KTDBJQ3SQ3'
          },
      },
  },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
    "frontity-contact-form-7"        
    ]   
};

export default settings;



