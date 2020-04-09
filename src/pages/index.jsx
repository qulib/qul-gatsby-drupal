import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout.jsx'

class Home extends React.Component {
  render() {
    // const allAlbums = this.props.data.allNodeAlbum;

    const allPages = this.props.data.allNodePage;

    // { data.allNodeCoffee.edges.map(({ node }) => (
    //   <div>
    //     <h3>{ node.title }</h3>
    //     <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
    //   </div>
    // ))}

    return (
      <Layout>
        <h2>Pages</h2>
        <ul>
          {allPages.edges.map(({ node }) => (
            <li key={node.drupal_internal__nid}><Link to={node.path.alias}>{node.title}</Link></li>
          ))}
        </ul>

        <h2>About Us</h2>
        <ul>
          <li><Link to="/about-us/staff-directory">Staff Directory</Link></li>
        </ul>
      </Layout>
    )
  }
}

export default Home

export const query = graphql`
  query allNodePage {
    allNodePage {
      totalCount
      edges {
        node {
          title
          path {
            alias
          }
          drupal_internal__nid
        }
      }
    }
  }
`