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
      allTaxonomyTermSubjects {
        edges {
          node {
            path {
              alias
            }
            drupal_internal__tid
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
    createPage({
      path: edge.node.path.alias,
      component: require.resolve(`./src/templates/BasicPageTemplate.jsx`),
      context: {
        id: edge.node.drupal_internal__nid,
      },
    })
  })

  // news and events
  results.data.allNodeNewsEvents.edges.forEach(edge => {
    createPage({
      path: edge.node.path.alias,
      component: require.resolve(`./src/templates/NewsEventTemplate.jsx`),
      context: {
        id: edge.node.drupal_internal__nid,
      },
    })
  })

  // staff profiles
  results.data.allNodeStaffProfile.edges.forEach(edge => {
    createPage({
      path: edge.node.path.alias,
      component: require.resolve(`./src/templates/StaffProfileTemplate.jsx`),
      context: {
        id: edge.node.drupal_internal__nid,
      },
    })
  })

  // subject pages
  results.data.allTaxonomyTermSubjects.edges.forEach(edge => {
    createPage({
      path: edge.node.path.alias,
      component: require.resolve(`./src/templates/SubjectTemplate.jsx`),
      context: {
        id: edge.node.drupal_internal__tid,
      },
    })
  })
}
