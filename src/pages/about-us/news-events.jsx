import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Input, Select, Pagination } from 'antd';
import Layout from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'
import NewsCard from '../../components/global/NewsCard.jsx'

const pageTitle = "News & Events"
const { Option } = Select;
const { Search } = Input;


function categoryChange(value) {
  console.log(`selected ${value}`);
}

class AllNewsEventsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      // category: '',
      search: ''
    }
  }

  // updateSearch(event) {
  //   this.setState({ search: event.target.value })
  // }

  render() {
    const data = this.props.data
    console.log("data:", data)
    const siteTitle = data.site.siteMetadata.title

    // categories filter
    const categories = [];
    data.allTaxonomyTermNewsEventsCategory.edges.forEach(({ node }) => {
      categories.push(<Option value={node.drupal_internal__tid}>{node.name}</Option>);
    })

    // let filteredStaff = data.allNodeStaff.nodes.filter(node => {
    //   return (
    //     node.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    //   )
    // })

    // let resultString = filteredStaff.length === 1 ? 'result' : 'results'

    return (
      <Layout>
        <div id="site-body" className="container">
          <Helmet>
            <title>{siteTitle} - {pageTitle}</title>

          </Helmet>

          <Breadcrumbs />

          <header className="full-width-header">
            <h1>{pageTitle}</h1>

            <section className="filters">

              <Pagination
                total={data.allNodeNewsEvents.totalCount}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                showSizeChanger={false}
                pageSize={9}
                className="pagination"
              />

              <section className="category-filter">
                <Select
                  placeholder="Category"
                  mode="multiple"
                  style={{ width: '100%' }}
                  onChange={categoryChange}
                >
                  {categories}
                </Select>
              </section>

              <section className="search-filter">
                <Search
                  placeholder="Title"
                  onSearch={value => console.log(value)}
                  enterButton
                  allowClear
                />
              </section>

            </section>

          </header>

          <main className="news-events-page">

            <section className="news-grid">
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
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
  site {
    siteMetadata {
      title
    }
  }
  allNodeNewsEvents {
    totalCount
    edges {
      node {
        title
        promote
        path {
          alias
        }
        field_event_time
        field_event_location
        field_event_date
        drupal_id
        drupal_internal__nid
        created
        body {
          processed
        }
        relationships {
          field_featured_image {
            localFile {
              relativePath
            }
            drupal_id
            drupal_internal__fid
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