import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout.jsx'
import HomepageBanner from '../components/homepage/HomepageBanner.jsx'
import OmniWidget from '../components/homepage/OmniWidget.jsx'
import AskUsWidget from '../components/homepage/AskUsWidget.jsx'
import Hours from '../components/homepage/Hours.jsx'
import QuickLinks from '../components/homepage/QuickLinks.jsx'
import NewsEvents from '../components/homepage/NewsEvents.jsx'
import FeaturedSlider from '../components/homepage/FeaturedSlider.jsx'




class Home extends React.Component {
  render() {
    const allPages = this.props.data.allNodePage

    return (
      <Layout>
        <div id="site-body" className="home container">
          <Helmet>
            <title>Queen's Univesity Library - Home</title>
          </Helmet>
          <HomepageBanner />
          <OmniWidget />
          <AskUsWidget />
          <Hours />
          <QuickLinks />
          <NewsEvents />
          <FeaturedSlider />
        </div>
      </Layout>
    )
  }
}

export default Home

export const query = graphql`
  query allNodePage {
    allNodePage {
      totalCount
      edges {
        node {
          title
          path {
            alias
          }
          drupal_internal__nid
        }
      }
    }
  }
`
