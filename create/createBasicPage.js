const { resolve } = require(`path`)
// const chunk = require(`lodash/chunk`)
const basicPageTemplate = path.resolve(`./src/templates/basic-page-template.jsx`)

module.exports = async ({ actions, graphql }) => {

  const result = await graphql(`
    query {
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
  `)

  await Promise.all(
    // await actions.
    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.path.alias,
        component: basicPageTemplate,
        context: {
          id: node.drupal_internal__nid
        },
      })
    })
  )
}