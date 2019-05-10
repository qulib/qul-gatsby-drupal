import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'

import 'typeface-open-sans'
import '../styles/style.scss'

const siteTitle = 'QUL Gatsby + Drupal'

export default ({ children }) => (
  <div id="site">
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
    </Helmet>
    <Header />
    <div id="main">{children}</div>
    <Footer />
  </div>
)
