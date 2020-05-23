const _ = require('lodash')
const path = require(`path`)
// const slash = require(`slash`)
const { paginate } = require('gatsby-awesome-pagination')

// see https://github.com/GatsbyCentral/gatsby-starter-wordpress/blob/master/gatsby-node.js
// const getOnlyPublished = edges =>
//   _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

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
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pageTemplate = path.resolve(`./src/templates/basic-page-template.jsx`)

    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.path.alias,
        component: pageTemplate,
        context: {
          id: node.drupal_internal__nid
        },
      })
    })
  }).then(() => {
    return graphql(`
      {
        newsEvents: allNodeNewsEvents {
          edges {
            node {
              body {
                processed
              }
              drupal_internal__nid
              title
              path {
                alias
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const newsEventsTemplate = path.resolve(`./src/templates/news-event-template.jsx`)

      result.data.newsEvents.edges.forEach(({ node }) => {
        createPage({
          path: node.path.alias,
          component: newsEventsTemplate,
          context: {
            id: node.drupal_internal__nid
          },
        })
      })
    })
  })
}
