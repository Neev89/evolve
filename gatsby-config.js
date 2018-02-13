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
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: 'Evolve Pvt Ltd',
              short_name: "Evolve",
              background_color: "#f7f0eb",
              theme_color: "#a2466c",
              display: "minimal-ui",
              icons: [
                  {
                      // Everything in /static will be copied to an equivalent
                      // directory in /public during development and build, so
                      // assuming your favicons are in /static/favicons,
                      // you can reference them here
                      src: `/favicons/android-chrome-192x192.png`,
                      sizes: `192x192`,
                      type: `image/png`,
                  },
                  {
                      src: `/favicons/android-chrome-512x512.png`,
                      sizes: `512x512`,
                      type: `image/png`,
                  },
              ],
          },
      },
      `gatsby-plugin-offline`,
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
