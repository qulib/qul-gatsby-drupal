import React from 'react'
import { Link } from 'gatsby'

function FooterMenu() {
  return (
    <nav id="footer-menu">
      <section>
        <h2>Locations</h2>
        <ul>
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
        <h2>Search Tools</h2>
        <ul>
          <li>
            <Link to="/">Omni</Link>
          </li>
          <li>
            <Link to="/">Databases</Link>
          </li>
          <li>
            <Link to="/">Journals</Link>
          </li>
          <li>
            <Link to="/">QSpace</Link>
          </li>
          <li>
            <Link to="/">AtoM (Archives)</Link>
          </li>
        </ul>
      </section>

      <ul className="buttons">
        <Link className="button" to="/">
          Support Your Library
        </Link>

        <Link className="button" to="/about-us/staff-directory">
          Staff Directory
        </Link>

        <Link className="button" to="/">
          Accessibility
        </Link>

        <Link className="button" to="/">
          Privacy
        </Link>
      </ul>
    </nav>
  )
}

export default FooterMenu
