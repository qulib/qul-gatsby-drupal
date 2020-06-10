import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { siteTitle } from '../components/Layout.jsx'
// import Banner from '../components/homepage/Banner.jsx'
import OmniWidget from '../components/homepage/OmniWidget.jsx'
import HoursLinks from '../components/homepage/HoursLinks.jsx'
import NewsEvents from '../components/homepage/NewsEvents.jsx'
import FeaturedSlider from '../components/homepage/FeaturedSlider.jsx'
import AskUsWidget from '../components/global/AskUsWidget.jsx'
import 'typeface-open-sans'
import '../styles/style.scss'

function Home({ data }) {
  return (
    <div id="site">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>{siteTitle}</title>
      </Helmet>
      <Header />
      <div id="home" className="container">
        <h1>Home</h1>
        {/* <Banner /> */}
        <section className="omni-ask-us">
          <OmniWidget />
          <AskUsWidget />
        </section>
        <HoursLinks />
        <NewsEvents data={data.allNodeNewsEvents} />
        <FeaturedSlider />
      </div>
      <Footer />
    </div>
  )
}

export default Home

export const query = graphql`
  query Homepage {
    site {
      siteMetadata {
        title
      }
    }
    allNodeNewsEvents(
      filter: { field_promote_to_homepage: { eq: true } }
      limit: 6
      sort: { fields: created, order: DESC }
    ) {
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
  }
`
