import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'

const title = "Ask Us"

const AskUsPage = () => (
    <Layout>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Breadcrumbs />
        <div id="ask-us-page">
            <main className="content">
                <h1>{title}</h1>
            </main>
        </div>
    </Layout>
)

export default AskUsPage