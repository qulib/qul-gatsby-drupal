import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'

const pageTitle = 'Help & Services'

export default function HelpServicesPage({ data, pageContext }) {
  return (
    <Layout pageTitle={pageTitle} breadcrumbs={pageContext.breadcrumb.crumbs}>
      <div className="main-menu-page">
        <main className="content">
          <h1>{pageTitle}</h1>
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
