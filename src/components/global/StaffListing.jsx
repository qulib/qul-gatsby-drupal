import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { MdEmail } from 'react-icons/md'
import { FaPhone, FaUserAlt } from 'react-icons/fa'

function StaffListing({ node }) {
  // console.log(node)

  let headshot = <FaUserAlt className="headshot-placeholder" />
  if (node.relationships.field_headshot) {
    headshot = (
      <Img
        fixed={
          node.relationships.field_headshot.localFile.childImageSharp.fixed
        }
      />
    )
  }

  const displayUnit = units => {
    return units.map(unit => {
      return <span key={unit.name}>{unit.name}</span>
    })
  }

  return (
    <li key={node.drupal_internal__nid} className="staff-listing">
      {headshot}
      <section className="staff-info">
        <span className="full-name">
          {node.field_last_name}, {node.field_first_name}
        </span>
        <span className="job-title">{node.field_job_title}</span>
        <span>{displayUnit(node.relationships.field_units)}</span>
      </section>
      <section className="staff-contact">
        <ul>
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
      <section className="more-info">
        <button>
          <Link to="/">More Info</Link>
        </button>
      </section>
    </li>
  )
}

export default StaffListing
