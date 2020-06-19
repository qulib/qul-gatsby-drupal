import React from 'react'
// import { graphql, Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.jsx'
import AskUsWidget from '../components/global/AskUsWidget.jsx'

export default function SubjectTemplate({ data, pageContext }) {
  const node = data.taxonomyTermSubjects

  return (
    <Layout pageTitle={node.name} breadcrumbs={pageContext.breadcrumb.crumbs}>
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
