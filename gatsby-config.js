const themeConfig = require(`./theme-config`)

module.exports = {
  siteMetadata: {
    siteTitle: `charlotteresnick.dev`,
    siteTitleAlt: `Charlotte Resnick - Hello!`,
    siteHeadline: `a blog about my journey to software engineer`,
    siteUrl: `https://www.charlotteresnick.dev`,
    siteDescription: `A site for my thoughts and musings`,
    siteLanguage: `en`,
    siteImage: `/images/banner.png`,
    author: `@cresnick`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content/posts",
        path: "content/posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content/pages",
        path: "content/pages",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-meta-redirect`,
  ].filter(Boolean),
}
