import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout.jsx'

class Home extends Component {
  render() {
    const data = this.props.data
    console.log(data)

    return (
      <Layout>
        <h1>Albums</h1>
        <p>There are currently {data.allNodeAlbum.nodes.length} albums </p>
        <ul>
          {data.allNodeAlbum.nodes.map(node => (
            <li key={node.drupal_id}>
              <div class="album-card">
                <span class="album-title">
                  <Link to={'album/' + node.field_slug}>{node.title}</Link>
                </span>
                <br />
                <span class="album-desc">{node.body.summary}</span>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default Home

export const query = graphql`
  {
    allNodeAlbum(sort: { fields: [title] }) {
      nodes {
        drupal_id
        title
        field_slug
        field_artist
        body {
          summary
        }
      }
    }
  }
`
