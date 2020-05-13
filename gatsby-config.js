module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "QUL Gatsby Drupal",
        short_name: "QUL Gatsby Drupal",
        start_url: "/",
        background_color: "#406486",
        theme_color: "#00305e",
        display: "minimal-ui",
        icon: "src/images/qul-squares.png",
      }
    },
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'https://dev-qul-test.pantheonsite.io/',
        apiBase: 'jsonapi',
      },
    },

    {
      resolve: 'gatsby-plugin-antd'
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
    
    "gatsby-plugin-offline"
  ]
}