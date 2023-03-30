/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Bålpulken`,
    description: `Ta med deg bålet på tur!.`,
    author: `@pippidis`,
    siteUrl: `https://pippidis.no/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "no",
        langKeyForNull: "no",
        prefixDefault: false,
        useLangKeyLayout: false,
        pagesPaths: ["/src/pages"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-3QVSZHQ1RR',
        head: true
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
