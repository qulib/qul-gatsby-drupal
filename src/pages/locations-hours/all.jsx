import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import Layout, { siteTitle } from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'

const pageTitle = 'All Locations & Hours'

function AllLocationsPage() {
  return (
    <Layout>
      <Helmet>
        <title>
          {siteTitle} - {pageTitle}
        </title>
      </Helmet>
      <Breadcrumbs />
      <div id="all-locations-hours-page">
        <main className="content">
          <h1>{pageTitle}</h1>
          <p>Google Map</p>
          <p>LibCal hours</p>
        </main>
      </div>
    </Layout>
  )
}

export default AllLocationsPage
