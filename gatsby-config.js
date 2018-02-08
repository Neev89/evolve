module.exports = {
  siteMetadata: {
    title: 'Evolve Pvt Ltd',
  },
  plugins: [
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
              name: `src`,
              path: `${__dirname}/src/`,
          },
      },
      {
          resolve: `gatsby-transformer-remark`,
          options: {
              plugins: [
                  {
                      resolve: `gatsby-remark-images`,
                      options: {
                          maxWidth: 590,
                      },
                  },
                  {
                      resolve: `gatsby-remark-responsive-iframe`,
                      options: {
                          wrapperStyle: `margin-bottom: 1.0725rem`,
                      },
                  },
                  "gatsby-remark-prismjs",
                  "gatsby-remark-copy-linked-files",
                  "gatsby-remark-smartypants",
              ],
          },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              //trackingId: `ADD YOUR TRACKING ID HERE`,
          },
      },
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-json`
  ],
};