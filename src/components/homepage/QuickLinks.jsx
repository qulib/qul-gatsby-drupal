import React from 'react'
import { Link } from 'gatsby'

function QuickLinks() {
  return (
    <section className="quick-links">
      <h2 className="section-title">Quick Links</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Group Study Rooms</Link>
          </li>
          <li>
            <Link to="/">Borrowing</Link>
          </li>
          <li>
            <Link to="/">Print, Scan, Copy</Link>
          </li>
          <li>
            <Link to="/">Interlibrary Loan</Link>
          </li>
          <li>
            <Link to="/">Copyright & Fair Dealing</Link>
          </li>
          <li>
            <Link to="/">Research by Subject</Link>
          </li>
          <li>
            <Link to="/">Citing Sources</Link>
          </li>
          <li>
            <Link to="/">Rare Books & Special Collections</Link>
          </li>
          <li>
            <Link to="/">Research Data Management</Link>
          </li>
          <li>
            <Link to="/">Scholarly Publishing</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default QuickLinks
