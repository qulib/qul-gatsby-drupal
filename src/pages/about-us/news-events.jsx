import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Input, Select, Pagination } from 'antd';
import Layout from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'
import NewsCard from '../../components/global/NewsCard.jsx'

const pageTitle = "News & Events"
const { Option } = Select;
const { Search } = Input;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

export default class AllNewsAndEvents extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
    }
  }

  updateSearch(event) {
    this.setState({ search: event.target.value })
  }

  render() {

    // const data = this.props.data
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
            <title>QUL - {pageTitle}</title>
          </Helmet>

          <Breadcrumbs />

          <header className="full-width-header">
            <h1>{pageTitle}</h1>

            <section className="filters">

              <Pagination
                total={220}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                showSizeChanger={false}
                pageSize={9}
              />

              <section>
                <label for="news-event-category">Category</label>
                <Select
                  name="news-event-category"
                  showSearch
                  placeholder="type or select"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </section>

              <section>
                <label for="news-event-category">Title</label>
                <Search
                  placeholder=""
                  onSearch={value => console.log(value)}
                  enterButton allowClear
                  style={{ width: 200 }}
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

            {/* <nav className="pagination">




            </nav> */}

          </main>


        </div>
      </Layout>
    )
  }
}


export const pageQuery = graphql`
query AllNewsEvents {
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
            uri {
              url
            }
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
}
`
