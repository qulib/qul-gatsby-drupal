import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout.jsx'

class Home extends Component {
  render() {
    // const data = this.props.data;

    return (
      <Layout>
        <h2>Albums</h2>
        <p>List the first few albums randomly</p>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <Link to="albums">See All Albums</Link>
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
