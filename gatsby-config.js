const lessToJson = require('less-to-json')
const breadcrumbPaths = require('./breadcrumbPaths.js')

module.exports = {
  siteMetadata: {
    title: `QUL`,
    siteUrl: `https://library.queensu.ca`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'https://dev-qul-test.pantheonsite.io/',
        apiBase: 'jsonapi',
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // in case we want to query local data
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-json`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: lessToJson('src/styles/antd-theme/qul-antd-theme.less'),
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        crumbLabelUpdates: breadcrumbPaths.crumbLabelUpdates,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'QUL Gatsby Drupal',
        short_name: 'QUL Gatsby Drupal',
        start_url: '/',
        background_color: '#406486',
        theme_color: '#00305e',
        display: 'minimal-ui',
        icon: 'src/images/qul-squares.png',
      },
    },
  ],
}
