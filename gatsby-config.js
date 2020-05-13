const lessToJson = require('less-to-json')

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
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
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'https://dev-qul-test.pantheonsite.io/',
        apiBase: 'jsonapi',
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

    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "UA-88346038-1",
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true
    //   }
    // },

    'gatsby-plugin-offline',
  ],
}
