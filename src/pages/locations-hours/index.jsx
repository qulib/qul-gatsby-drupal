import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'

const pageTitle = 'Locations & Hours'

export default function LocationsPage({ data, pageContext }) {
  return (
    <Layout pageTitle={pageTitle} breadcrumbs={pageContext.breadcrumb.crumbs}>
      <div className="main-menu-page">
        <main className="content">
          <h1>{pageTitle}</h1>

          <section className="three-columns">
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
              <h2>Technology</h2>
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
