import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'

const title = "About Us"

const HelpServicesPage = () => (
    <Layout>

        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Breadcrumbs />
        <div id="about-us-page">

            <main className="content">

                <h1>{title}</h1>
                <p>hot blurb!</p>

                <section className="four-columns">

                    <section>
                        <h2>Overview</h2>
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
                        <h2>Our Vision</h2>
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
                        <h2>Our People</h2>
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
                        <h2>Support Us</h2>
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

export default HelpServicesPage