import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import Layout, { siteTitle } from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'

const pageTitle = 'Ask Us'

function AskUsPage() {
  return (
    <Layout>
      <Helmet>
        <title>
          {siteTitle} - {pageTitle}
        </title>
      </Helmet>
      <Breadcrumbs />
      <div id="ask-us-page">
        <main className="content">
          <h1>{pageTitle}</h1>
        </main>
      </div>
    </Layout>
  )
}

export default AskUsPage
