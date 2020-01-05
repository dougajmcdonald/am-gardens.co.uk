module.exports = {
  siteMetadata: {
    title: `AM Gardens`,
    author: `@dougajmcdonald`,
    description: `AM Gardens - Professional, reliable garden services in and around Bristol.`,
    url: `https://www.am-gardens.co.uk`, // No trailing slash allowed!
    image: `/logo.png`, // Path to your image you placed in the 'static' folder
    twitterUsername: `@dougajmcdonald`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-images`,
        path: `${__dirname}/content/assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AM Gardens`,
        short_name: `AM Gardens`,
        start_url: `/`,
        background_color: `#459A6E`,
        theme_color: `#459A6E`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-plugin-react-helmet`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              wrapperStyle:
                "margin-left: 0!important; margin-right: 0!important;"
            }
          }
        ]
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-155318584-1`
      }
    }
  ]
}
