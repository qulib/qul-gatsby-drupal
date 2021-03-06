import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import ReactHtmlParser from 'react-html-parser'
import Layout from '../components/Layout.jsx'
import AskUsWidget from '../components/global/AskUsWidget.jsx'

// add error checking to data assignments
export default function BasicPageTemplate({ data, pageContext }) {
  const node = data.nodePage
  const files = data.allFileFile

  function parseHTML(html) {
    const options = {
      transform,
    }

    function transform(node, index) {
      // console.log('node is: ', node)
      // replace img with local Gasby Img
      if (node.type === 'tag' && node.name === 'img') {
        // console.log('node is: ', node)
        let uuid = node.attribs['data-entity-uuid']

        // find the matching image in all the files
        // idea: instead of pulling all files in here, you could make a component with static query matching the drupal ID
        return files.edges.map(edge => {
          if (edge.node.drupal_id === uuid) {
            return (
              <Img
                key={index}
                fluid={edge.node.localFile.childImageSharp.fluid}
                alt={node.attribs['alt']}
              />
            )
          }

          return undefined
        })
      }

      // should do one for PDF, doc, etc.
    }

    return ReactHtmlParser(html, options)
  }

  return (
    <Layout pageTitle={node.title} breadcrumbs={pageContext.breadcrumb.crumbs}>
      <div className="basic-page">
        <main className="content">
          <h1>{node.title}</h1>
          <div>{parseHTML(node.body.processed)}</div>
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
    nodePage(drupal_internal__nid: { eq: $id }) {
      title
      body {
        processed
      }
    }
    allFileFile(filter: { filemime: { ne: "application/pdf" } }) {
      edges {
        node {
          drupal_id
          localFile {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
