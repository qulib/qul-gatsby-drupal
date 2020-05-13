import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import { Link } from 'gatsby'
import Layout from '../components/Layout.jsx'
import Breadcrumbs from '../components/global/Breadcrumbs.jsx'

// add error checking to data assignments

export default class NewsEventTemplate extends Component {
  render() {
    // const post = this.props.data.nodePage
    // console.log(post)

    return (
      <Layout>
        <div id="site-body" className="container">
          <Helmet>
            <title>QUL - page title</title>
          </Helmet>
          <Breadcrumbs />

          <section className="news-event-page">

            <main className="content">
              <h1>All News & Events</h1>
              {/* <div dangerouslySetInnerHTML={{ __html: post.body.processed }} /> */}
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

              <section>
                <h2>All News & Events</h2>
                <p>
                  Read the latest news and learn about upcoming events.
                </p>

                <button>All News & Events</button>
              </section>

              {/* if sidebar content exists in Drupal node, then optionally display here */}

            </aside>
          </section>
        </div>
      </Layout>
    )
  }
}

// export const pageQuery = graphql`
// query AllNewsEvents {
//   allNodeNewsEvents {
//     totalCount
//     edges {
//       node {
//         title
//         promote
//         path {
//           alias
//         }
//         field_event_time
//         field_event_location
//         field_event_date
//         drupal_id
//         drupal_internal__nid
//         created
//         body {
//           processed
//         }
//         relationships {
//           field_featured_image {
//             uri {
//               url
//             }
//             localFile {
//               relativePath
//             }
//             drupal_id
//             drupal_internal__fid
//           }
//         }
//         field_featured_image {
//           alt
//         }
//       }
//     }
//   }
// }
// `
