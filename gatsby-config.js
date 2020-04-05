const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const siteMetadata = {
  title: `Characters from Password`,
  description: `Pick Characters from Password`,
  image: `/default-site-image.jpg`,
  siteUrl: `https://cfromp.xyz`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@spences10`,
  authorName: `Scott Spence`,
  favicon: `./static/favicon.svg`,
  backgroundColor: `#f7f0eb`,
  themeColor: `#a2466c`,
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `work sans\:400,500,700`,
          `arvo\:400,700`,
          `space mono\:400,700`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: `C.from.P`,
        start_url: `/`,
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        display: `standalone`,
        icon: siteMetadata.favicon,
      },
    },
    {
      resolve: `gatsby-plugin-fathom`,
      options: {
        siteId: process.env.GATSBY_FATHOM_TRACKING_ID_CFROMP,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
