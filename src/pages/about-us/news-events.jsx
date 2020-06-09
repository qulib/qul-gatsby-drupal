import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import queryString from 'query-string'
import { parseParam } from '../../library/functions.js'
import { Input, Select, Pagination } from 'antd'
import Layout, { siteTitle } from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'
import NewsCard from '../../components/global/NewsCard.jsx'

const { Search } = Input
const { Option } = Select
const pageTitle = 'News & Events'
const cardsPerPage = 6

function AllNewsEventsPage({ data }) {
  const location = useLocation()
  const locationSearchParams = queryString.parse(location.search)

  // get subject either from Link state or URL query parameter
  const categoryParam = () => {
    if (location.state && location.state.category) {
      return location.state.category
    } else if (locationSearchParams.category) {
      return locationSearchParams.category
    } else {
      return undefined
    }
  }

  // should we add for page #?

  // console.log('location ', location)
  // console.log('cat param  ', categoryParam())

  const [category, setCategory] = useState(parseParam(categoryParam()))
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  // console.log('category  ', category)

  function updateSearch(value) {
    setSearch(value)
    setPage(1)
  }

  function updateCategory(value) {
    setCategory(value)
    setPage(1)
  }

  function paginate(pages) {
    const begin = (page - 1) * cardsPerPage
    // check for overflow at end
    const end =
      begin + cardsPerPage < pages.length ? begin + cardsPerPage : pages.length
    return pages.slice(begin, end)
  }

  // create category filter
  const categories = data.allTaxonomyTermNewsEventsCategory.edges.map(edge => {
    return (
      <Option
        key={edge.node.drupal_internal__tid}
        value={edge.node.drupal_internal__tid}
      >
        {edge.node.name}
      </Option>
    )
  })

  // title search filter
  let filteredNewsEvents = data.allNodeNewsEvents.edges.filter(edge => {
    return edge.node.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  })

  // category filter
  if (category) {
    filteredNewsEvents = filteredNewsEvents.filter(item => {
      return item.node.relationships.field_category
        .map(({ drupal_internal__tid }) => drupal_internal__tid)
        .includes(category)
    })
  }

  const displayItems = items => {
    if (items.length > 0) {
      return items.map(item => {
        return (
          <NewsCard
            key={item.node.drupal_internal__nid.toString()}
            node={item.node}
          />
        )
      })
    } else {
      return 'No items found'
    }
  }

  // create pagination widget
  const pagination = (
    <Pagination
      total={filteredNewsEvents.length}
      current={page}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      pageSize={cardsPerPage}
      className="pagination"
      onChange={page => setPage(page)}
    />
  )

  return (
    <Layout>
      <Helmet>
        <title>
          {siteTitle} - {pageTitle}
        </title>
      </Helmet>

      <Breadcrumbs />
      <div className="news-events-page">
        <header className="full-width-header">
          <section className="header-top">
            <h1>{pageTitle}</h1>
            {pagination}
          </section>

          <section className="filters">
            <section className="category-filter">
              <Select
                placeholder="Category"
                style={{ width: '100%' }}
                value={category}
                onChange={value => updateCategory(value)}
                allowClear
              >
                {categories}
              </Select>
            </section>

            <section className="search-filter">
              <Search
                placeholder="Title"
                allowClear
                enterButton
                onChange={e => updateSearch(e.target.value)}
                onSearch={value => updateSearch(value)}
              />
            </section>
          </section>
        </header>

        <main className="news-grid">
          {displayItems(paginate(filteredNewsEvents))}
        </main>
        <footer className="pagination-footer">{pagination}</footer>
      </div>
    </Layout>
  )
}

export default AllNewsEventsPage

export const pageQuery = graphql`
  query AllNewsEventsPage {
    allNodeNewsEvents(sort: { fields: created, order: DESC }) {
      totalCount
      edges {
        node {
          title
          path {
            alias
          }
          field_event_time
          field_event_location
          field_event_date
          drupal_internal__nid
          created
          relationships {
            field_category {
              drupal_internal__tid
            }
            field_featured_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          field_featured_image {
            alt
          }
        }
      }
    }
    allTaxonomyTermNewsEventsCategory {
      edges {
        node {
          drupal_internal__tid
          name
        }
      }
    }
  }
`
