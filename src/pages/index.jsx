import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout.jsx'

class Home extends React.Component {
  render() {
    const allAlbums = this.props.data.allNodeAlbum;

    return (
      <Layout>
        <h1>Home</h1>
        <p>
          This page lists the first few random instance of various content
          types.
        </p>
        <h2>Albums</h2>
        <ul>
        {allAlbums.nodes.map(node => (
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
        <Link to="albums">See All Albums</Link>
      </Layout>
    )
  }
}

export default Home

export const query = graphql`
  {
    allNodeAlbum(limit: 3) {
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
