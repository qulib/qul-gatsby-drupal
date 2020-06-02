import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout.jsx'

function Page404() {
  return (
    <Layout>
      <Helmet>
        <title>QUL - 404</title>
      </Helmet>
      <h1>404</h1>
    </Layout>
  )
}

export default Page404
