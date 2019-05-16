import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
// import Img from 'gatsby-image'

import Layout from '../components/Layout.jsx'

// add error checking to data assignments

class StaffTemplate extends Component {
  render() {
    const post = this.props.data.nodeStaff
    console.log(post)

    return (
      <Layout>
        <h1>{post.title}</h1>
        <div className="staff-container">
          <img
            src={
              post.relationships.field_headshot.localFile.childImageSharp.resize.src
            }
            alt={post.title + 'headshot'}
          />
          <span className="staff-metadata">
            <p>Job Title: {post.field_job_title}</p>
            <p>Office: {post.field_office}</p>
            <p>
              Email:{' '}
              <a href={'mailto:' + post.field_email}>{post.field_email}</a>
            </p>
            <p>Telephone: {post.field_telephone}</p>
          </span>
        </div>
        <button className="btn-primary"><Link to="/about-us/staff-directory">Staff Directory</Link></button>
      </Layout>
    )
  }
}

export default StaffTemplate

export const staffQuery = graphql`
  query($id: Int!) {
    nodeStaff(drupal_internal__nid: { eq: $id }) {
      drupal_id
      field_slug
      title
      field_job_title
      field_first_name
      field_last_name
      field_email
      field_telephone
      field_office
      relationships {
        field_headshot {
          localFile {
            childImageSharp {
              resize(width: 200, height: 200) {
                src
              }
            }
          }
        }
        field_subject_specialization {
          name
        }
      }
    }
  }
`
