import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
// import Img from 'gatsby-image'

import Layout from '../components/Layout.jsx'

// add error checking to data assignments

class PageTemplate extends Component {
  render() {
    const post = this.props.data.nodePage
    // console.log(post)

    return (
      <Layout>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: Int!) {
    nodePage(drupal_internal__nid: { eq: $id }) {
      title
      body {
        processed
      }
    }
  }
`