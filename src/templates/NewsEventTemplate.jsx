import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { formatDate } from '../library/functions.js'
import Layout, { siteTitle } from '../components/Layout.jsx'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import AskUsWidget from '../components/global/AskUsWidget.jsx'

function Categories({ categories }) {
  if (categories.length > 0) {
    const categoryListItems = categories.map(category => {
      return (
        <li key={category.drupal_internal__tid}>
          <Link
            to="/about-us/news-events"
            state={{ category: category.drupal_internal__tid }}
          >
            {category.name}
          </Link>
        </li>
      )
    })
    return (
      <section className="categories">
        <h2>Categories</h2>
        <ul>{categoryListItems}</ul>
      </section>
    )
  } else {
    return ''
  }
}

function NewsEventTemplate({ data, pageContext }) {
  const node = data.nodeNewsEvents

  // options for events
  const eventInfo = []
  if (node.field_event_date) {
    eventInfo.push(<span key="1">{formatDate(node.field_event_date)}</span>)
  }

  if (node.field_event_time) {
    eventInfo.push(<span key="2">{node.field_event_time}</span>)
  }

  if (node.field_event_location) {
    eventInfo.push(<span key="3">{node.field_event_location}</span>)
  }

  if (eventInfo.length !== 0) {
    eventInfo.unshift(<h2 key="0">Event Information</h2>)
  }

  let imageCaption = node.field_image_caption ? node.field_image_caption : ''

  return (
    <Layout>
      <Helmet>
        <title>
          {siteTitle} - {node.title}
        </title>
      </Helmet>
      <Breadcrumb
        crumbs={pageContext.breadcrumb.crumbs}
        crumbLabel={node.title}
      />
      <div className="news-event-page">
        <main className="content">
          <header>
            <h1>{node.title}</h1>
            <span className="post-date">{formatDate(node.created)}</span>

            <figure>
              <Img
                className="post-image"
                fluid={
                  node.relationships.field_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={node.field_featured_image.alt}
              />
              <figcaption>{imageCaption}</figcaption>
            </figure>

            <section className="event-information">{eventInfo}</section>
          </header>

          <section
            className="post-body"
            dangerouslySetInnerHTML={{ __html: node.body.processed }}
          />

          <Categories categories={node.relationships.field_category} />
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
      created
      field_event_date
      field_event_location
      field_event_time
      field_image_caption
      body {
        processed
      }
      field_featured_image {
        alt
      }
      relationships {
        field_featured_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        field_category {
          drupal_internal__tid
          name
        }
      }
    }
  }
`
