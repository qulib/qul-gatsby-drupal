import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Input, Select } from 'antd'
import { useLocation } from '@reach/router'
import queryString from 'query-string'
import { parseParam } from '../../library/functions.js'
import Layout, { siteTitle } from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'
import StaffListing from '../../components/global/StaffListing.jsx'

const { Search } = Input
const { Option } = Select
const pageTitle = 'Staff Directory'

function displayStaff(items) {
  if (items.length > 0) {
    return items.map(item => {
      return (
        <StaffListing
          key={item.node.drupal_internal__nid.toString()}
          node={item.node}
        />
      )
    })
  } else {
    return 'No staff found'
  }
}

function StaffDirectoryPage({ data }) {
  const location = useLocation()
  const locationSearchParams = queryString.parse(location.search)

  // get subject either from Link state or URL query parameter
  const subjectParam = () => {
    if (location.state && location.state.subject) {
      return location.state.subject
    } else if (locationSearchParams.subject) {
      return locationSearchParams.subject
    } else {
      return undefined
    }
  }

  // get unit either from Link state or URL query parameter
  const unitParam = () => {
    if (location.state && location.state.unit) {
      return location.state.unit
    } else if (locationSearchParams.unit) {
      return locationSearchParams.unit
    } else {
      return undefined
    }
  }

  // console.log('location ', location)
  // console.log('subject param  ', subjectParam())
  // console.log('unit param  ', unitParam())

  const [subject, setSubject] = useState(parseParam(subjectParam()))
  const [unit, setUnit] = useState(parseParam(unitParam()))
  const [search, setSearch] = useState('')

  // create subject filter
  const subjects = data.allTaxonomyTermSubjects.edges.map(edge => {
    return (
      <Option
        key={edge.node.drupal_internal__tid}
        value={edge.node.drupal_internal__tid}
      >
        {edge.node.name}
      </Option>
    )
  })

  // create unit filter
  const units = data.allTaxonomyTermUnits.edges.map(edge => {
    return (
      <Option
        key={edge.node.drupal_internal__tid}
        value={edge.node.drupal_internal__tid}
      >
        {edge.node.name}
      </Option>
    )
  })

  // title (full name) search filter
  let filteredStaff = data.allNodeStaffProfile.edges.filter(edge => {
    return edge.node.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  })

  // subject filter
  if (subject) {
    filteredStaff = filteredStaff.filter(item => {
      return item.node.relationships.field_subjects
        .map(({ drupal_internal__tid }) => drupal_internal__tid)
        .includes(subject)
    })
  }

  // unit filter
  if (unit) {
    filteredStaff = filteredStaff.filter(item => {
      return item.node.relationships.field_units
        .map(({ drupal_internal__tid }) => drupal_internal__tid)
        .includes(unit)
    })
  }

  return (
    <Layout>
      <Helmet>
        <title>
          {siteTitle} - {pageTitle}
        </title>
      </Helmet>

      <Breadcrumbs />

      <div className="staff-directory-page">
        <header className="full-width-header">
          <h1>{pageTitle}</h1>

          <section className="filters">
            <section className="subject-filter">
              <Select
                placeholder="Subject"
                style={{ width: '100%' }}
                onChange={value => setSubject(value)}
                value={subject}
                allowClear
              >
                {subjects}
              </Select>
            </section>

            <section className="unit-filter">
              <Select
                placeholder="Unit"
                style={{ width: '100%' }}
                onChange={value => setUnit(value)}
                value={unit}
                allowClear
              >
                {units}
              </Select>
            </section>

            <section className="search-filter">
              <Search
                placeholder="Name"
                allowClear
                enterButton
                onChange={e => setSearch(e.target.value)}
                onSearch={value => setSearch(value)}
              />
            </section>
          </section>
        </header>

        <main className="staff-list">
          <ul>{displayStaff(filteredStaff)}</ul>
        </main>
      </div>
    </Layout>
  )
}

export default StaffDirectoryPage

export const pageQuery = graphql`
  query StaffDirectoryPageQuery {
    allNodeStaffProfile(sort: { fields: title, order: DESC }) {
      totalCount
      edges {
        node {
          title
          path {
            alias
          }
          field_phone
          field_last_name
          field_first_name
          field_email
          field_job_title
          field_headshot {
            alt
          }
          drupal_internal__nid
          relationships {
            field_headshot {
              localFile {
                childImageSharp {
                  fixed(width: 100, quality: 90) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            field_subjects {
              name
              drupal_internal__tid
            }
            field_units {
              name
              drupal_internal__tid
            }
          }
        }
      }
    }
    allTaxonomyTermSubjects {
      edges {
        node {
          name
          drupal_internal__tid
        }
      }
    }
    allTaxonomyTermUnits {
      edges {
        node {
          name
          drupal_internal__tid
        }
      }
    }
  }
`
