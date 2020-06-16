import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { MdEmail } from 'react-icons/md'
import { FaPhone, FaUserAlt, FaArrowRight } from 'react-icons/fa'

function Headshot({ image, alt }) {
  if (image) {
    return (
      <Img
        className="headshot"
        fixed={image.localFile.childImageSharp.fixed}
        alt={alt}
      />
    )
  } else {
    return <FaUserAlt className="headshot-placeholder" />
  }
}

function Subjects({ subjects }) {
  if (subjects.length > 0) {
    const subjectListItems = subjects.map(subject => {
      return <li key={subject.drupal_internal__tid}>{subject.name}</li>
    })
    return (
      <section className="subjects">
        <span>Subjects: </span>
        <ul>{subjectListItems}</ul>
      </section>
    )
  } else {
    return ''
  }
}

function StaffListing({ node }) {
  console.log(node)

  const displayUnit = units => {
    return units.map(unit => {
      return <span key={unit.name}>{unit.name}</span>
    })
  }

  return (
    <li key={node.drupal_internal__nid} className="staff-listing">
      <section className="headshot">
        <Headshot
          image={node.relationships.field_headshot}
          alt={node.field_title}
        />
      </section>
      <section className="staff-info">
        <h2 className="full-name">
          {node.field_last_name}, {node.field_first_name}
        </h2>
        <span className="job-title">{node.field_job_title}</span>
        <span>{displayUnit(node.relationships.field_units)}</span>
        <Subjects subjects={node.relationships.field_subjects} />
      </section>

      <section className="contact">
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
        <Link className="button" to={node.path.alias}>
          More <FaArrowRight className="inline-svg" />
        </Link>
      </section>
    </li>
  )
}

export default StaffListing
