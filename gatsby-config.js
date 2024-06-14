module.exports = {
  siteMetadata: {
    title: `Astraload perf team`,
    description:
      `Meet the crew who can scale your single page application 
      to handle millions of monthly users`,
    author: `astraload team`,
    siteUrl: "https://astraload.com",
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://astraload.com",
        sitemap: "https://astraload.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: [
          "css",
          "html",
          "js",
          "svg",
          "woff2",
          "woff",
          "ttf",
          "eot",
        ],
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "astra-crew",
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        disableAutoprefixing: true,
        disableMinification: false,
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
  ],
}
