import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout.jsx'

const pageTitle = 'About Us'

export default function AboutUsPage({ data, pageContext }) {
  return (
    <Layout pageTitle={pageTitle} breadcrumbs={pageContext.breadcrumb.crumbs}>
      <div className="main-menu-page">
        <main className="content">
          <h1>{pageTitle}</h1>

          <section className="four-columns">
            <section>
              <h2>Overview</h2>
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
              <h2>Our Vision</h2>
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
              <h2>Our People</h2>
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
              <h2>Support Us</h2>
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
