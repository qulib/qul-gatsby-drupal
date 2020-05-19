const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    /* basic page */
    const pageTemplate = path.resolve(`./src/templates/basic-page-template.jsx`)

    return graphql(`
      {
        pages: allNodePage {
          edges {
            node {
              drupal_internal__nid
              path {
                alias
              }
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) {
            throw result.errors
        }

        result.data.pages.edges.forEach(({ node }) => {
          createPage({
            path: node.path.alias,
            component: pageTemplate,
            context: {
              id: node.drupal_internal__nid
            },
          })
        })
    })
}
