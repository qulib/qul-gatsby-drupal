import React from 'react'
import Helmet from 'react-helmet'
import Header from './header/Header'
import Footer from './footer/Footer'
import 'typeface-open-sans'
import '../styles/style.scss'

export const siteTitle = "Ween's Universal Libary"

export default ({ children }) => (
  <div id="site">
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </Helmet>
    <Header />
    <div id="site-body" className="container">
      {children}
    </div>
    <Footer />
  </div>
)
