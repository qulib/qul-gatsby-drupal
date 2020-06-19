import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'

const pageTitle = 'Ask Us'

export default function AskUsPage({ data, pageContext }) {
  return (
    <Layout pageTitle={pageTitle} breadcrumbs={pageContext.breadcrumb.crumbs}>
      <div id="ask-us-page">
        <main className="content">
          <h1>{pageTitle}</h1>
        </main>
      </div>
    </Layout>
  )
}
