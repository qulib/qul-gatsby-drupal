import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import HomepageLayout from '../components/HomepageLayout.jsx'
// import Banner from '../components/homepage/Banner.jsx'
import OmniWidget from '../components/homepage/OmniWidget.jsx'
import AskUsWidget from '../components/homepage/AskUsWidget.jsx'
import Hours from '../components/homepage/Hours.jsx'
import QuickLinks from '../components/homepage/QuickLinks.jsx'
import NewsEvents from '../components/homepage/NewsEvents.jsx'
import FeaturedSlider from '../components/homepage/FeaturedSlider.jsx'

const pageTitle = 'Home'

class Home extends React.Component {
  render() {
    const data = this.props.data
    const siteTitle = data.site.siteMetadata.title
    const newsEventsData = data.allNodeNewsEvents
    // console.log(newsEventsData)

    return (
      <HomepageLayout>
        <Helmet>
          <title>{siteTitle} - {pageTitle}</title>
        </Helmet>
        <h1>Home</h1>
        {/* <Banner /> */}
        <section className="omni-ask-us">
          <OmniWidget />
          <AskUsWidget />
        </section>
        <Hours />
        <QuickLinks />
        <NewsEvents data={newsEventsData} />
        <FeaturedSlider />
      </HomepageLayout>
    )
  }
}

export default Home



export const query = graphql`
query Homepage {
  site {
    siteMetadata {
      title
    }
  }
  allNodeNewsEvents(filter: {field_promote_to_homepage: {eq: true}}, limit: 6, sort: {fields: created, order: DESC}) {
    edges {
      node {
        title
        promote
        path {
          alias
        }
        drupal_internal__nid
        created
        relationships {
          field_featured_image {
            localFile {
              childImageSharp {
                resize(width: 400, height: 200, cropFocus: CENTER) {
                  src
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
}
`