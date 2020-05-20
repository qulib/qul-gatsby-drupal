import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'

const title = "All Locations & Hours"

const AllLocationsPage = () => (
    <Layout>

        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Breadcrumbs />
        <div id="all-locations-hours-page">

            <main className="content">

                <h1>{title}</h1>
                <p>Google Map</p>
                <p>LibCal hours</p>

            </main>
        </div>
    </Layout>
)

export default AllLocationsPage