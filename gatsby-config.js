module.exports = {
  siteMetadata: {
    title: 'Evolve Pvt Ltd',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-plugin-sass`,
      {
          resolve: `gatsby-plugin-favicon`,
          options: {
              logo: "./src/favicon.png",
              injectHTML: true,
              icons: {
                  android: true,
                  appleIcon: true,
                  appleStartup: true,
                  coast: false,
                  favicons: true,
                  firefox: true,
                  twitter: false,
                  yandex: false,
                  windows: false
              }
          }
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `data`,
              path: `${__dirname}/src/data/`,
          },
      },
      `gatsby-transformer-json`
  ],
};
