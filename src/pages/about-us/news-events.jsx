import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Input, Select, Pagination } from 'antd'
import Layout, { siteTitle } from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'
import NewsCard from '../../components/global/NewsCard.jsx'
// import { node } from 'prop-types'

const { Search } = Input
const { Option } = Select
const pageTitle = 'News & Events'
const cardsPerPage = 6

class AllNewsEventsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      category: '',
      search: '',
      page: '1'
    }
    this.updateSearchPress = this.updateSearchPress.bind(this)
    this.updateSearchEnter = this.updateSearchEnter.bind(this)
    this.updateCategory = this.updateCategory.bind(this)
    this.updatePage = this.updatePage.bind(this)
    this.paginate = this.paginate.bind(this)
  }

  updateSearchPress(value) {
    this.setState({ 
      search: value,
      page: '1'
    })
    // console.log(value)
  }

  updateSearchEnter(event) {
    this.setState({ 
      search: event.target.value,
      page: '1'
    })
  }

  updateCategory(value) {
    this.setState({ category: value })
  }

  updatePage(value) {
    this.setState({ page: value })
  }

  paginate(pages) {
    const begin = (this.state.page - 1) * cardsPerPage
    // check for overflow at end
    const end = begin + cardsPerPage < pages.length ? begin + cardsPerPage : pages.length 
    return pages.slice(begin, end)
  }

  render() {
    const data = this.props.data
    let filteredNewsEvents = data.allNodeNewsEvents.edges //unfiltered

    // create category filter
    const categories = []
    data.allTaxonomyTermNewsEventsCategory.edges.forEach(({ node }) => {
      categories.push(
        <Option
          key={node.drupal_internal__tid}
          value={node.drupal_internal__tid}
        >
          {node.name}
        </Option>
      )
    })

    // title search filter
    filteredNewsEvents = filteredNewsEvents.filter(edge => {
      return (
        edge.node.title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      )
    })

    // category filter
    if (this.state.category) {
      // console.log(filteredNewsEvents)
      console.log('cat is: ', this.state.category)

      // filteredNewsEvents.map(({ node }) => console.log({ node }))

      // console.log(node.relationships.field_category)

      // filteredNewsEvents.filter(node => node.relationships.field_category.drupal_internal__tid === this.state.category)

      // close ! see" https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e/8217584#8217584

      // if (filteredNewsEvents.some(e => e.Name === this.state.category)) {
      //   /* vendors contains the element we're looking for */
      // }
    }

    //pagination
    const pagedNewsEvents = this.paginate(filteredNewsEvents)

    return (
      <Layout>
        <div id="site-body" className="container">
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
                  onChange={this.updateCategory}
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
                  value={this.state.search}
                  onChange={e => this.updateSearchEnter(e)}
                  onSearch={value => this.updateSearchPress(value)}
                />
              </section>
            </section>

            <section className="filter-results">
              {/* <span>{filteredNewsEvents.length} items</span> */}
              <Pagination
                defaultCurrent='1'
                total={filteredNewsEvents.length}
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} of ${total} items`
                }
                showSizeChanger={false}
                pageSize={cardsPerPage}
                className="pagination"
                onChange={(page, pageSize) =>
                  // console.log({page},":",{pageSize})
                  this.updatePage(page)
                }
              />
            </section>
          </header>

          <main className="news-events-page">
            <section className="news-grid">
              {pagedNewsEvents.map(({ node }) => (
                <NewsCard
                  key={node.drupal_internal__nid.toString()}
                  node={node}
                />
              ))}
            </section>
          </main>
        </div>
      </Layout>
    )
  }
}

export default AllNewsEventsPage

export const pageQuery = graphql`
  query AllNewsEventsPage {
    allNodeNewsEvents {
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
