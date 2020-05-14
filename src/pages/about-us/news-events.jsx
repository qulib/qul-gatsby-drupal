import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
// import { Input } from 'antd'
import Layout from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'
import NewsCard from '../../components/global/NewsCard.jsx'

const pageTitle = "News & Events"

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
          <main className="content news-events-page">
            <h1>{pageTitle}</h1>
            <section className="filters">filters go here</section>
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
            <nav className="pagination">pagination goes here</nav>
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
