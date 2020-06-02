import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout, { siteTitle } from '../../components/Layout.jsx'

const pageTitle = 'Search'

function SearchPage() {
  return (
    <Layout>
      <Helmet>
        <title>
          {siteTitle} - {pageTitle}
        </title>
      </Helmet>

      <div id="search-page">
        <main className="content">
          <h1>{pageTitle}</h1>

          <section className="three-columns">
            <section>
              <h2>Search Tools</h2>
              <ul>
                <li>
                  <Link>Omni</Link>
                </li>
                <li>
                  <Link>Databases</Link>
                </li>
                <li>
                  <Link>Journals</Link>
                </li>
                <li>
                  <Link>QSpace</Link>
                </li>
                <li>
                  <Link>Archives (AtoM)</Link>
                </li>
                <li>
                  <Link>Google Scholar</Link>
                </li>
                <li>
                  <Link>Other Library Catalogues</Link>
                </li>
              </ul>
            </section>
            <section>
              <h2>Types of Information</h2>
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
              <h2>Subjects & Courses</h2>
              <ul>
                <li>Research by Subject</li>
                <li>Research by Course</li>
                <li>Course Reserves (eReserves)</li>
                <li>Exams & Syllabi</li>
              </ul>
            </section>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default SearchPage
