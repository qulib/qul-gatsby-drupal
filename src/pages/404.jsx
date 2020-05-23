import React from 'react'
import Helmet from 'react-helmet'
// import { graphql } from 'gatsby'

import Layout from '../components/Layout.jsx'

class Page404 extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>QUL - 404</title>
        </Helmet>
        <h1>404</h1>
      </Layout>
    )
  }
}

export default Page404