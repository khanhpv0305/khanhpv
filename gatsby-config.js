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
        path: `${__dirname}/src`,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.GATSBY_API_BASE_URL,
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        auth: {
          jwt_user: process.env.GATSBY_JWT_USER,
          jwt_pass: process.env.GATSBY_JWT_PASSWORD,
        },
        excludedRoutes: [
          '**/pages',
          '**/types',
          '**/users',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'KhanhJs',
        short_name: 'KhanhJs',
        start_url: '/',
        background_color: 'green',
        theme_color: 'green',
        display: 'standalone',
        icon: 'src/images/react.webp',
      },
    },
    'gatsby-plugin-offline',
  ],
}
