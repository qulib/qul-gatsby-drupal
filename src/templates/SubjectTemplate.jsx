import React from 'react'
// import { graphql, Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.jsx'
import AskUsWidget from '../components/global/AskUsWidget.jsx'
import { Collapse } from 'antd'

const { Panel } = Collapse

export default function SubjectTemplate({ data, pageContext }) {
  const node = data.taxonomyTermSubjects
  console.log('node: ', node)

  return (
    <Layout pageTitle={node.name} breadcrumbs={pageContext.breadcrumb.crumbs}>
      <div className="subject-page">
        <main className="content">
          <h1>{node.name}</h1>
          <section
            dangerouslySetInnerHTML={{ __html: node.description.processed }}
          />
          <Collapse
            bordered={false}
            expandIconPosition="right"
            defaultActiveKey={['1']}
          >
            <Panel header={<h2>Guides</h2>} key="1">
              <p
                dangerouslySetInnerHTML={{
                  __html: node.field_guides.processed,
                }}
              />
            </Panel>
            {/* optional DBs and Journals */}
          </Collapse>
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

function Databases({ text }) {
  if (text) {
    return (
      <Panel header="Databases" key="2">
        <p dangerouslySetInnerHTML={{ __html: text.processed }} />
      </Panel>
    )
  } else {
    return ''
  }
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
