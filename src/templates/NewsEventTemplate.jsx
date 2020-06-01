import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import { Link } from 'gatsby'
import Layout from '../components/Layout.jsx'
import Breadcrumbs from '../components/global/Breadcrumbs.jsx'
import AskUsWidget from '../components/homepage/AskUsWidget.jsx'

function NewsEventTemplate({ data }) {
  const post = data.nodeNewsEvents

  return (
    <Layout>
      <Helmet>
        <title>QUL - {post.title}</title>
      </Helmet>
      <Breadcrumbs />
      <div className="news-event-page">
        <main className="content">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
        </main>

        <aside className="sidebar">
          <section className="ask-us-box">
            <h2>Ask Us</h2>
            <p>
              For help locating resources, using the library, or to request a
              research consultation, try our Ask Us service.
            </p>

            <AskUsWidget />
          </section>

          {/* if sidebar content exists in Drupal node, then optionally display here */}
        </aside>
      </div>
    </Layout>
  )
}

export default NewsEventTemplate

export const pageQuery = graphql`
  query($id: Int!) {
    nodeNewsEvents(drupal_internal__nid: { eq: $id }) {
      title
      body {
        processed
      }
    }
  }
`
