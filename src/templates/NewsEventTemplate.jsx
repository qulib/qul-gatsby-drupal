import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import { Link } from 'gatsby'
import Layout from '../components/Layout.jsx'
import Breadcrumbs from '../components/global/Breadcrumbs.jsx'
import AskUsWidget from '../components/homepage/AskUsWidget.jsx'

function formatDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
}

const MetaItem = (title, text) => {
  return (
    <p>
      <span>{title}: </span>
      {text}
    </p>
  )
}

function NewsEventTemplate({ data }) {
  const post = data.nodeNewsEvents
  console.log('p is:', post)

  const meta = []
  if (post.field_event_date) {
    const title = 'Date'
    meta.push(MetaItem(title, formatDate(post.field_event_date)))
  }

  if (post.field_event_time) {
    const title = 'Time'
    meta.push(MetaItem(title, post.field_event_time))
  }

  if (post.field_event_location) {
    const title = 'Location'
    meta.push(MetaItem(title, post.field_event_location))
  }

  if (meta.length !== 0) {
    meta.unshift(<h2>Event Information</h2>)
  }

  return (
    <Layout>
      <Helmet>
        <title>QUL - {post.title}</title>
      </Helmet>
      <Breadcrumbs />
      <div className="news-event-page">
        <main className="content">
          <header>
            <h1>{post.title}</h1>
            <span className="posted-date">{formatDate(post.created)}</span>
            <section className="image-and-meta">
              <Img
                fluid={
                  post.relationships.field_featured_image.localFile
                    .childImageSharp.fluid
                }
              />
              <section className="meta">{meta}</section>
            </section>
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
      body {
        processed
      }
      created
      field_event_date(difference: "")
      field_event_location
      field_event_time
      field_featured_image {
        alt
      }
      relationships {
        field_featured_image {
          localFile {
            childImageSharp {
              fluid {
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
