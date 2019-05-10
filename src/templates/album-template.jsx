import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
// import Img from 'gatsby-image'

import Layout from '../components/Layout.jsx'

// add error checking to data assignments

class AlbumTemplate extends Component {
  render() {
    const post = this.props.data.nodeAlbum

    return (
      <Layout>
        <h1>{post.title}</h1>
        <div class="album-container">
          <img
            src={
              post.relationships.field_cover.localFile.childImageSharp.resize
                .src
            }
            alt={post.title + "cover"}
          />
          <span class="album-metadata">
            <p>Artist: {post.field_artist}</p>
            <p>Release Date: {post.field_release_date}</p>
            <p dangerouslySetInnerHTML={{ __html: post.body.processed }} />
          </span>
        </div>
        <Link to="albums">See All Albums</Link>
      </Layout>
    )
  }
}

export default AlbumTemplate

export const albumQuery = graphql`
  query($id: Int!) {
    nodeAlbum(drupal_internal__nid: { eq: $id }) {
      title
      field_release_date
      field_artist
      body {
        processed
      }
      relationships {
        field_cover {
          localFile {
            childImageSharp {
              resize(width: 300, height: 300) {
                src
              }
            }
          }
        }
      }
    }
  }
`
