import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Layout, { siteTitle } from '../components/Layout.jsx'
import Breadcrumbs from '../components/global/Breadcrumbs.jsx'
import AskUsWidget from '../components/global/AskUsWidget.jsx'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
// import { FaUserAlt } from 'react-icons/fa'

function Headshot({ image }) {
  // console.log('image: ', image)
  if (image) {
    return <Img fluid={image} />
  } else {
    return ''
  }
}

// add error checking to data assignments
function StaffProfileTemplate({ data }) {
  console.log('data is: ', data)
  const node = data.nodeStaffProfile

  // const Headshot = () => {
  //   if (post.relationships.field_headshot) {
  //     return (
  //       <Img
  //         fixed={
  //           post.relationships.field_headshot.localFile.childImageSharp.fixed
  //         }
  //       />
  //     )
  //   } else {
  //     return <FaUserAlt className="headshot-placeholder" />
  //   }
  // }

  return (
    <Layout>
      <Helmet>
        <title>
          {siteTitle} - {node.title}
        </title>
      </Helmet>
      <Breadcrumbs />
      <div className="staff-profile-page">
        <main className="content">
          <h1>{node.title}</h1>
          <section className="headshot">
            <Headshot
              image={
                node.relationships.field_headshot.localFile.childImageSharp
                  .fluid
              }
            />
          </section>
          <section className="meta">
            <ul>
              <li>{node.field_job_title}</li>
              <li>
                <FaPhone />
                {node.field_phone}
              </li>
              <li>
                <a href={'mailto:' + node.field_email}>
                  <MdEmail />
                  {node.field_email}
                </a>
              </li>
            </ul>
          </section>
          <section className="bio">
            <p dangerouslySetInnerHTML={{ __html: node.field_bio.processed }} />
          </section>

          {/* <div dangerouslySetInnerHTML={{ __html: post.body.processed }} /> */}
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

export default StaffProfileTemplate

export const pageQuery = graphql`
  query($id: Int!) {
    nodeStaffProfile(drupal_internal__nid: { eq: $id }) {
      field_bio {
        processed
      }
      field_cv {
        description
      }
      title
      path {
        alias
      }
      field_phone
      field_email
      field_job_title
      field_headshot {
        alt
      }
      relationships {
        field_cv {
          localFile {
            size
            relativeDirectory
          }
        }
        field_headshot {
          localFile {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        field_subjects {
          drupal_internal__tid
          name
        }
        field_units {
          drupal_internal__tid
          name
        }
      }
    }
  }
`
