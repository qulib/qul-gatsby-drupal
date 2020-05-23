import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import { Link } from 'gatsby'
import Layout from '../components/Layout.jsx'
import Breadcrumbs from '../components/global/Breadcrumbs.jsx'
// import AskUsWidget from '../components/homepage/AskUsWidget.jsx'

// add error checking to data assignments

class NewsEventTemplate extends React.Component {
  render() {
    const post = this.props.data.nodeNewsEvents
    // console.log(post)

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
        </div>

      </Layout>
    )
  }
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