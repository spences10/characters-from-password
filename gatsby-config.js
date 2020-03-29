module.exports = {
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
  ],
};
