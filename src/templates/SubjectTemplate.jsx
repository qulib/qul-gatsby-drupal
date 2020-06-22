import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout.jsx'
import AskUsWidget from '../components/global/AskUsWidget.jsx'
import { Collapse } from 'antd'

const { Panel } = Collapse

export default function SubjectTemplate({ data, pageContext }) {
  const node = data.taxonomyTermSubjects

  return (
    <Layout pageTitle={node.name} breadcrumbs={pageContext.breadcrumb.crumbs}>
      <div className="subject-page">
        <main className="content">
          <h1>{node.name}</h1>
          <section
            dangerouslySetInnerHTML={{ __html: node.description.processed }}
          />
          <Accordians node={node} />
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

function Accordians(node) {
  // console.log('node: ', node)
  const panel = []

  if (node.node.field_guides) {
    panel.push(
      <Panel header={<h2>Guides</h2>} key="1">
        <p
          dangerouslySetInnerHTML={{
            __html: node.node.field_guides.processed,
          }}
        />
      </Panel>
    )
  }

  if (node.node.field_subject_databases) {
    panel.push(
      <Panel header={<h2>Databases</h2>} key="2">
        <p
          dangerouslySetInnerHTML={{
            __html: node.node.field_subject_databases.processed,
          }}
        />
      </Panel>
    )
  }

  if (node.node.field_subject_journals) {
    panel.push(
      <Panel header={<h2>Journals</h2>} key="3">
        <p
          dangerouslySetInnerHTML={{
            __html: node.node.field_subject_journals.processed,
          }}
        />
      </Panel>
    )
  }

  if (node.node.field_subject_collections) {
    panel.push(
      <Panel header={<h2>Featured Collections</h2>} key="4">
        <p
          dangerouslySetInnerHTML={{
            __html: node.node.field_subject_collections.processed,
          }}
        />
      </Panel>
    )
  }

  return (
    <Collapse
      bordered={false}
      expandIconPosition="right"
      defaultActiveKey={['1']}
    >
      {panel}
    </Collapse>
  )
}

export const pageQuery = graphql`
  query($id: Int!) {
    taxonomyTermSubjects(drupal_internal__tid: { eq: $id }) {
      name
      path {
        alias
      }
      description {
        processed
      }
      field_guides {
        processed
      }
      field_subject_databases {
        processed
      }
      field_subject_journals {
        processed
      }
      field_subject_collections {
        processed
      }
      relationships {
        field_news_events_category {
          drupal_internal__tid
        }
        node__staff_profile {
          title
          path {
            alias
          }
        }
      }
    }
  }
`
