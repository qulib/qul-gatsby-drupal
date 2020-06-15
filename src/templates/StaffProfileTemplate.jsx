import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout, { siteTitle } from '../components/Layout.jsx'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import AskUsWidget from '../components/global/AskUsWidget.jsx'
import { MdEmail } from 'react-icons/md'
import { FaPhone, FaFilePdf, FaMapMarkerAlt } from 'react-icons/fa'

function Headshot({ image }) {
  if (image) {
    return (
      <Img className="headshot" fluid={image.localFile.childImageSharp.fluid} />
    )
  } else {
    return ''
  }
}

function Office({ building, room }) {
  if (building && room) {
    return (
      <p className="office">
        <FaMapMarkerAlt className="inline-svg" />
        <span>
          {building}
          <br />
          {room}
        </span>
      </p>
    )
  } else if (building) {
    return (
      <p className="office">
        <FaMapMarkerAlt className="inline-svg" />
        <span>{building}</span>
      </p>
    )
  } else {
    return ''
  }
}

function Bio({ bio }) {
  if (bio) {
    return (
      <section className="bio">
        <p dangerouslySetInnerHTML={{ __html: bio.processed }} />
      </section>
    )
  } else {
    return ''
  }
}

function Units({ units }) {
  const unitListItems = units.map(unit => {
    return (
      <li key={unit.drupal_internal__tid}>
        <Link
          to="/about-us/staff-directory"
          state={{ unit: unit.drupal_internal__tid }}
        >
          {unit.name}
        </Link>
      </li>
    )
  })
  return (
    <section className="units">
      <h2>Units</h2>
      <ul>{unitListItems}</ul>
    </section>
  )
}

function Subjects({ subjects }) {
  if (subjects.length > 0) {
    const subjectListItems = subjects.map(subject => {
      return (
        <li key={subject.drupal_internal__tid}>
          <Link
            to="/about-us/staff-directory"
            state={{ subject: subject.drupal_internal__tid }}
          >
            {subject.name}
          </Link>
        </li>
      )
    })
    return (
      <section className="subjects">
        <h2>Subjects</h2>
        <ul>{subjectListItems}</ul>
      </section>
    )
  } else {
    return ''
  }
}

function CV({ cv }) {
  if (cv) {
    const fileSize = (cv.localFile.size / 1000).toPrecision(3)
    return (
      <section className="cv">
        <h2>CV</h2>
        <ul>
          <li>
            <a href={cv.localFile.publicURL}>
              {cv.localFile.name}
              <FaFilePdf className="inline-svg" download />
            </a>{' '}
            ({fileSize} KB)
          </li>
        </ul>
      </section>
    )
  } else {
    return ''
  }
}

function StaffProfileTemplate({ data, pageContext }) {
  // console.log('data is: ', data)
  const node = data.nodeStaffProfile

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
      <div className="staff-profile-page">
        <main className="content">
          <h1>{node.title}</h1>

          <section className="contact">
            <Headshot image={node.relationships.field_headshot} />

            <p className="job-title">{node.field_job_title}</p>
            <p>
              <a href={'mailto:' + node.field_email}>
                <MdEmail className="inline-svg" />
                {node.field_email}
              </a>
            </p>
            <p>
              <FaPhone className="inline-svg" />
              {node.field_phone}
            </p>

            {/* if office */}
            <Office
              building={node.field_location_building}
              room={node.field_location_room}
            />
            {/* <p>

              {node.field_phone}
            </p> */}
          </section>
          <section className="text">
            <Bio bio={node.field_bio} />
            <Units units={node.relationships.field_units} />
            <Subjects subjects={node.relationships.field_subjects} />
            <CV cv={node.relationships.field_cv} />
          </section>
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
      field_location_building
      field_location_room
      field_headshot {
        alt
      }
      relationships {
        field_cv {
          localFile {
            size
            name
            publicURL
          }
        }
        field_headshot {
          localFile {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300, quality: 80) {
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
