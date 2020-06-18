import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout, { siteTitle } from '../components/Layout.jsx'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import AskUsWidget from '../components/global/AskUsWidget.jsx'

// function Bio({ bio }) {
//   if (bio) {
//     return (
//       <section className="bio">
//         <p dangerouslySetInnerHTML={{ __html: bio.processed }} />
//       </section>
//     )
//   } else {
//     return ''
//   }
// }

function SubjectTemplate({ data, pageContext }) {
  // console.log('data is: ', data)
  const node = data.taxonomyTermSubjects

  return (
    <Layout>
      <Helmet>
        <title>
          {node.name} | {siteTitle}
        </title>
      </Helmet>
      <Breadcrumb
        crumbs={pageContext.breadcrumb.crumbs}
        crumbLabel={node.name}
      />
      <div className="subject-page">
        <main className="content">
          <h1>{node.name}</h1>
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

export default SubjectTemplate

export const pageQuery = graphql`
  query($id: Int!) {
    taxonomyTermSubjects(drupal_internal__tid: { eq: $id }) {
      name
      path {
        alias
      }
      relationships {
        node__staff_profile {
          title
          path {
            alias
          }
        }
        field_news_events_category {
          drupal_internal__tid
          name
        }
      }
      description {
        processed
      }
      field_guides {
        processed
      }
    }
  }
`
