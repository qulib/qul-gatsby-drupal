import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'

const title = "Locations & Hours"

const LocationsPage = () => (
    <Layout>

        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Breadcrumbs />
        <div id="locations-page">

            <main className="content">

                <h1>{title}</h1>
                <p>hot blurb!</p>

                <section className="equal-columns">

                    <section>
                        <h2>Locations</h2>
                        <ul>
                            <li>
                                <Link to="/">All Locations & Hours</Link>
                            </li>
                            <li>
                                <Link to="/">Stauffer Library</Link>
                            </li>
                            <li>
                                <Link to="/">Douglas Library</Link>
                            </li>
                            <li>
                                <Link to="/">Bracken Health Sciences Library</Link>
                            </li>
                            <li>
                                <Link to="/">Education Library</Link>
                            </li>
                            <li>
                                <Link to="/">Jordan Special Collections</Link>
                            </li>
                            <li>
                                <Link to="/">Lederman Law Library</Link>
                            </li>
                            <li>
                                <Link to="/">University Archives</Link>
                            </li>
                        </ul>

                    </section>
                    <section>
                        <h2>About our Locations</h2>
                        <ul>
                            <li>
                                <Link>
                                    one
                               </Link>
                            </li>
                            <li>
                                <Link>
                                    two
                               </Link>
                            </li>
                            <li>
                                <Link>
                                    three
                               </Link>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Technology</h2>
                        <ul>
                            <li>
                                <Link>
                                    one
                               </Link>
                            </li>
                            <li>
                                <Link>
                                    two
                               </Link>
                            </li>
                            <li>
                                <Link>
                                    three
                               </Link>
                            </li>
                        </ul>
                    </section>

                </section>
            </main>
        </div>
    </Layout>
)

export default LocationsPage