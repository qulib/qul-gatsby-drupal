import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout, { siteTitle } from '../../components/Layout.jsx'

const pageTitle = 'Help & Services'

function HelpServicesPage() {
  return (
    <Layout>
      <Helmet>
        <title>
          {siteTitle} - {pageTitle}
        </title>
      </Helmet>

      <div id="help-services-page">
        <main className="content">
          <h1>{pageTitle}</h1>
          <p>hot blurb!</p>

          <section className="three-columns">
            <section>
              <h2>Help</h2>
              <ul>
                <li>
                  <Link>one</Link>
                </li>
                <li>
                  <Link>two</Link>
                </li>
                <li>
                  <Link>three</Link>
                </li>
              </ul>
            </section>
            <section>
              <h2>Using the Library</h2>
              <ul>
                <li>
                  <Link>one</Link>
                </li>
                <li>
                  <Link>two</Link>
                </li>
                <li>
                  <Link>three</Link>
                </li>
              </ul>
            </section>
            <section>
              <h2>Teaching & Research</h2>
              <ul>
                <li>
                  <Link>one</Link>
                </li>
                <li>
                  <Link>two</Link>
                </li>
                <li>
                  <Link>three</Link>
                </li>
              </ul>
            </section>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default HelpServicesPage
