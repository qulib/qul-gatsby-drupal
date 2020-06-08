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
      allNodeStaffProfile {
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
      component: require.resolve(`./src/templates/BasicPageTemplate.jsx`),
      context: {
        id: page.drupal_internal__nid,
      },
    })
  })

  // news and events
  results.data.allNodeNewsEvents.edges.forEach(edge => {
    const newsEvent = edge.node

    createPage({
      path: newsEvent.path.alias,
      component: require.resolve(`./src/templates/NewsEventTemplate.jsx`),
      context: {
        id: newsEvent.drupal_internal__nid,
      },
    })
  })

  // staff profiles
  results.data.allNodeStaffProfile.edges.forEach(edge => {
    const staffProfile = edge.node

    createPage({
      path: staffProfile.path.alias,
      component: require.resolve(`./src/templates/StaffProfileTemplate.jsx`),
      context: {
        id: staffProfile.drupal_internal__nid,
      },
    })
  })
}
