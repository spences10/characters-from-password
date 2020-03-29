const siteMetadata = {
  title: `Characters from Password`,
  description: `Pick Characters from Password`,
  image: `/default-site-image.jpg`,
  siteUrl: `https://cfromp.scottspence.me`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@spences10`,
  authorName: `Scott Spence`,
  favicon: `./static/favicon.svg`,
  backgroundColor: `#f7f0eb`,
  themeColor: `#a2466c`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:400,500,700`,
          `roboto\:400,700`,
          `tillium web\:400,700`,
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
    `gatsby-plugin-offline`,
  ],
};
