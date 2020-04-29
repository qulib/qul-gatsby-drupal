import React from 'react'
import Helmet from 'react-helmet'

import Header from './header/Header'
import Footer from './footer/Footer'

import 'typeface-open-sans'
import '../styles/style.scss'

export default ({ children }) => (
  <div id="site">
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
    </Helmet>
    <Header />
    {children}
    <Footer />
  </div>
)
