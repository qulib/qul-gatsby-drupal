const path = require(`path`)
const slash = require(`slash`)

/* templates */
const albumTemplate = path.resolve(`./src/templates/album-template.jsx`)
const staffTemplate = path.resolve(`./src/templates/staff-template.jsx`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allNodeAlbum {
        nodes {
          drupal_internal__nid
          field_slug
        }
      }
      allNodeStaff {
        nodes {
          drupal_internal__nid
          field_slug
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    /* albums */
    result.data.allNodeAlbum.nodes.forEach(node => {
      createPage({
        path: `/album/${node.field_slug}`,
        component: slash(albumTemplate),
        context: {
          id: node.drupal_internal__nid,
        },
      })
    })

    /* staff */
    result.data.allNodeStaff.nodes.forEach(node => {
      createPage({
        path: `/staff/${node.field_slug}`,
        component: slash(staffTemplate),
        context: {
          id: node.drupal_internal__nid,
        },
      })
    })
  })
}
