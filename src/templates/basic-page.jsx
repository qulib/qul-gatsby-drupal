import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import { Link } from 'gatsby'
import AskUsWidget from '../components/homepage/AskUsWidget.jsx'

import Layout from '../components/Layout.jsx'
import Breadcrumbs from '../components/global/Breadcrumbs.jsx'

// add error checking to data assignments

class PageTemplate extends Component {
  render() {
    const post = this.props.data.nodePage
    // console.log(post)

    return (
      <Layout>
        <div id="site-body" className="container">
          <Helmet>
            <title>QUL - {post.title}</title>
          </Helmet>
          <Breadcrumbs />

          <section className="basic-page">

            <main className="content">
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
            </main>

            <aside className="sidebar">

              <section className="ask-us-box">
                <h2>Ask Us</h2>
                <p>
                  For help locating resources, using the library, or to request
                  a research consultation, try our Ask Us service.
                </p>

                <AskUsWidget />
              </section>

              {/* if sidebar content exists in Drupal node, then optionally display here */}

            </aside>
          </section>
        </div>
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
