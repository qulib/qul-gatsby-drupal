import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'

const pageTitle = 'All Locations & Hours'

export default function AllLocationsPage({ data, pageContext }) {
  return (
    <Layout pageTitle={pageTitle} breadcrumbs={pageContext.breadcrumb.crumbs}>
      <div id="ask-us-page">
        <main className="content">
          <h1>{pageTitle}</h1>
          <p>Google Map</p>
          <p>LibCal hours</p>
        </main>
      </div>
    </Layout>
  )
}
