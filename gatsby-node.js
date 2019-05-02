// check out https://github.com/gatsbyjs/gatsby/blob/master/examples/using-wordpress/gatsby-node.js

const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allNodeAlbum {
        nodes {
          drupal_internal__nid
          field_slug
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  /* one of these for each content type */
  const { allNodeAlbum } = result.data

  /* templates */
  const albumTemplate = path.resolve(`./src/templates/album.jsx`)

  allNodeAlbum.nodes.forEach(node => {
    createPage({
      path: `/album/${node.field_slug}`,
      component: slash(albumTemplate),
      context: {
        id: node.drupal_internal__nid,
      },
    })
  })
}
