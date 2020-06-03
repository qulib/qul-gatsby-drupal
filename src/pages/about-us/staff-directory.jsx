import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Input, Select } from 'antd'
import Layout, { siteTitle } from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'

const { Search } = Input
const { Option } = Select
const pageTitle = 'Staff Directory'

function StaffDirectoryPage({ data }) {
  const [subject, setSubject] = useState('')
  const [unit, setUnit] = useState('')
  const [search, setSearch] = useState('')

  console.log(data)

  // name search filter
  // let filteredStaff = data.allNodeStaffProfile.edges.filter(edge => {
  //   return edge.node.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  // })
  let filteredStaff = data.allNodeStaffProfile.edges

  // console.log('fs: ', filteredStaff)

  const displayItems = items => {
    // console.log('i: ', items)
    if (items.length > 0) {
      // console.log('yep')
      const itemsToDisplay = []
      items.map(item => {
        console.log('item: ', item)
        itemsToDisplay.push(
          <div>
            <Img
              fluid={
                item.node.relationships.field_headshot.localFile.childImageSharp
                  .fluid
              }
              alt={item.node.title}
            />
            <p>{item.node.field_phone}</p>
            <p>{item.node.title}</p>
            <p>{item.node.field_jo}</p>
            <p>{item.node.field_phone}</p>
          </div>
        )
      })
      return itemsToDisplay
    } else {
      return 'No items found'
    }
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
                allowClear
              >
                {/* {subjects} */}
              </Select>
            </section>

            <section className="unit-filter">
              <Select
                placeholder="Unit"
                style={{ width: '100%' }}
                onChange={value => setUnit(value)}
                allowClear
              >
                {/* {units} */}
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

        <main className="staff-list">{displayItems(filteredStaff)}</main>
      </div>
    </Layout>
  )
}

export default StaffDirectoryPage

export const pageQuery = graphql`
  query StaffDirectoryPageQuery {
    allNodeStaffProfile(sort: { fields: title, order: ASC }) {
      totalCount
      edges {
        node {
          title
          path {
            alias
          }
          field_jo
          field_phone
          field_last_name
          field_first_name
          field_email
          field_headshot {
            alt
          }
          drupal_internal__nid
          relationships {
            field_headshot {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 100, maxHeight: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            field_subjects {
              name
              drupal_internal__tid
            }
          }
        }
      }
    }
  }
`
