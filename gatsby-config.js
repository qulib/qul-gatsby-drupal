const lessToJson = require('less-to-json')

module.exports = {
  siteMetadata: {
    title: `QUL`,
    siteUrl: `https://library.queensu.ca`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        crumbLabelUpdates: [
          {
            pathname: '/help-services',
            crumbLabel: 'Help & Services',
          },
        ],
      },
    },
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
