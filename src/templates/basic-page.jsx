import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
// import Img from 'gatsby-image'

import Layout from '../components/Layout.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'

// add error checking to data assignments

class PageTemplate extends Component {
  render() {
    const post = this.props.data.nodePage
    // console.log(post)

    return (
      <Layout>
        <div id="site-body" className="container">
          <Helmet>
            <title>Queen's Univesity Library - {post.title}</title>
          </Helmet>
          <Breadcrumbs />

          <main id="site-main">
            <article className="content">
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
            </article>

            <aside className="sidebar">
              <section>
                <h2>Ask Us</h2>
                <p>
                  For help locating resources, using the library, or to request
                  a research consultation, try our Ask Us service.
                </p>
                <button>Button</button>
              </section>
            </aside>
          </main>
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
