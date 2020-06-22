import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'

const pageTitle = 'Research by Subject'

export default function ResearchBySubjectPage({ data, pageContext }) {
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
