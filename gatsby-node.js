exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allNodePage {
        edges {
          node {
            drupal_internal__nid
            path {
              alias
            }
          }
        }
      }
      allNodeNewsEvents {
        edges {
          node {
            path {
              alias
            }
            drupal_internal__nid
          }
        }
      }
    }
  `)

  if (results.errors) {
    results.errors.forEach(e => console.error(e.toString()))
    return Promise.reject(results.errors)
  }

  // basic pages
  results.data.allNodePage.edges.forEach(edge => {
    const page = edge.node

    createPage({
      path: page.path.alias,
      component: require.resolve(`./src/templates/basic-page-template.jsx`),
      context: {
        id: page.drupal_internal__nid
      },
    })
  })

  // news and events
  results.data.allNodeNewsEvents.edges.forEach(edge => {
    const newsEvent = edge.node

    createPage({
      path: newsEvent.path.alias,
      component: require.resolve(`./src/templates/news-event-template.jsx`),
      context: {
        id: newsEvent.drupal_internal__nid
      },
    })
  })
}