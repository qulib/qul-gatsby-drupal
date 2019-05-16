import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout.jsx'

class Home extends React.Component {
  render() {
    const allAlbums = this.props.data.allNodeAlbum;

    return (
      <Layout>
        <h2>Albums</h2>
        <ul>
        {allAlbums.nodes.map(node => (
          <li key={node.drupal_id}>
            <div className="album-card">
              <span className="album-title">
                <Link to={'/album/' + node.field_slug}>{node.title}</Link>
              </span>
              <br />
              <span className="album-desc">{node.body.summary}</span>
            </div>
          </li>
        ))}
        </ul>
        <Link to="/albums">See All Albums</Link>
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