import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { formatDate } from '../library/functions.js'
import Layout, { siteTitle } from '../components/Layout.jsx'
import Breadcrumbs from '../components/global/Breadcrumbs.jsx'
import AskUsWidget from '../components/homepage/AskUsWidget.jsx'

function NewsEventTemplate({ data }) {
  const post = data.nodeNewsEvents
  // console.log('p is:', post)

  // options event
  const eventInfo = []
  if (post.field_event_date) {
    eventInfo.push(<span key="1">{formatDate(post.field_event_date)}</span>)
  }

  if (post.field_event_time) {
    eventInfo.push(<span key="2">{post.field_event_time}</span>)
  }

  if (post.field_event_location) {
    eventInfo.push(<span key="3">{post.field_event_location}</span>)
  }

  if (eventInfo.length !== 0) {
    eventInfo.unshift(<h2 key="0">Event Information</h2>)
  }

  let imageCaption = ''
  if (post.field_image_caption) {
    imageCaption = post.field_image_caption
  }

  return (
    <Layout>
      <Helmet>
        <title>
          {siteTitle} - {post.title}
        </title>
      </Helmet>
      <Breadcrumbs />
      <div className="news-event-page">
        <main className="content">
          <header>
            <h1>{post.title}</h1>
            <span className="post-date">{formatDate(post.created)}</span>

            <figure>
              <Img
                className="post-image"
                fluid={
                  post.relationships.field_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={post.field_featured_image.alt}
              />
              <figcaption>{imageCaption}</figcaption>
            </figure>

            <section className="event-information">{eventInfo}</section>
          </header>

          <section
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.body.processed }}
          />
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
        }
      }
    }
  }
`
