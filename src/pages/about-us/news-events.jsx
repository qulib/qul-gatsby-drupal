import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Input, Select, Pagination } from 'antd'
import Layout, { siteTitle } from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'
import NewsCard from '../../components/global/NewsCard.jsx'

const { Search } = Input
const { Option } = Select
const pageTitle = 'News & Events'
const cardsPerPage = 6

function AllNewsEventsPage({ data }) {
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

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
  const categories = []
  data.allTaxonomyTermNewsEventsCategory.edges.forEach(({ node }) => {
    categories.push(
      <Option key={node.drupal_internal__tid} value={node.drupal_internal__tid}>
        {node.name}
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

  // pagination
  const pagedNewsEvents = paginate(filteredNewsEvents)

  const displayItems = items => {
    if (items.length > 0) {
      const itemsToDisplay = []
      items.map(item => {
        itemsToDisplay.push(
          <NewsCard
            key={item.node.drupal_internal__nid.toString()}
            node={item.node}
          />
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

      <header className="full-width-header">
        <h1>{pageTitle}</h1>

        <section className="filters">
          <section className="category-filter">
            <Select
              placeholder="Category"
              style={{ width: '100%' }}
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

        <section className="filter-results">
          <Pagination
            total={filteredNewsEvents.length}
            current={page}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            pageSize={cardsPerPage}
            className="pagination"
            onChange={page => setPage(page)}
          />
        </section>
      </header>

      <main className="news-events-page">
        <section className="news-grid">{displayItems(pagedNewsEvents)}</section>
      </main>
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
