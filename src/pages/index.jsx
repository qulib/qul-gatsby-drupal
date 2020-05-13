import React from 'react'
import Helmet from 'react-helmet'
// import { graphql } from 'gatsby'

import Layout from '../components/Layout.jsx'
// import Banner from '../components/homepage/Banner.jsx'
import OmniWidget from '../components/homepage/OmniWidget.jsx'
import AskUsWidget from '../components/homepage/AskUsWidget.jsx'
import Hours from '../components/homepage/Hours.jsx'
import QuickLinks from '../components/homepage/QuickLinks.jsx'
import NewsEvents from '../components/homepage/NewsEvents.jsx'
import FeaturedSlider from '../components/homepage/FeaturedSlider.jsx'

class Home extends React.Component {
  render() {
    // const allPages = this.props.data.allNodePage

    return (
      <Layout>
        <div id="home" className="container">
          <Helmet>
            <title>QUL - Home</title>
          </Helmet>
          <h1>Home</h1>
          {/* <Banner /> */}
          <section className="omni-ask-us">
            <OmniWidget />
            <AskUsWidget />
          </section>
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

// export const query = graphql`
//   query allNodePage {
//     allNodePage {
//       totalCount
//       edges {
//         node {
//           title
//           path {
//             alias
//           }
//           drupal_internal__nid
//         }
//       }
//     }
//   }
// `
