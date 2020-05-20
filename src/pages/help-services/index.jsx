import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'
import Breadcrumbs from '../../components/global/Breadcrumbs.jsx'

const title = "Help & Services"

const HelpServicesPage = () => (
    <Layout>

        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Breadcrumbs />
        <div id="locations-page">

            <main className="content">

                <h1>{title}</h1>
                <p>hot blurb!</p>

                <section className="three-columns">

                    <section>
                        <h2>Help</h2>
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
                        <h2>Using the Library</h2>
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
                        <h2>Teaching & Research</h2>
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