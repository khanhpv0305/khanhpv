require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: 'Khánh Phạm - Messy Blog',
    description: `Khanh's place to store stuffs`,
    author: `@khanhpv`,
  },
  plugins: [
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.GATSBY_API_BASE_URL,
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        auth: {
          jwt_user: process.env.GATSBY_JWT_USER,
          jwt_pass: process.env.GATSBY_JWT_PASSWORD,
        },
      },
    },
  ],
}
