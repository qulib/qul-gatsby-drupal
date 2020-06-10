import React from 'react'
import { Link } from 'gatsby'
import PeopleCounterWidget from './PeopleCounterWidget.jsx'

function Hours() {
  return (
    <section className="hours-links">
      <PeopleCounterWidget />

      <section className="todays-hours">
        <h2 className="section-title">Today's Hours</h2>
        <ul>
          <li>
            <Link to="/">Stauffer Library</Link>
            <span>10:00am - 11:00pm</span>
          </li>
          <li>
            <Link to="/">Douglas Library</Link>
            <span>10:00am - 11:00pm</span>
          </li>
          <li>
            <Link to="/">Bracken Health Sciences Library</Link>
            <span>10:00am - 11:00pm</span>
          </li>
          <li>
            <Link to="/">Education Library</Link>
            <span>9:00am - 11:00pm</span>
          </li>
          <li>
            <Link to="/">Jordan Special Collections</Link>
            <span>10:00am - 11:00pm</span>
          </li>
          <li>
            <Link to="/">Lederman Law Library</Link>
            <span>10:00am - 11:00pm</span>
          </li>
          <li>
            <Link to="/">University Archives</Link>
            <span>10:00am - 11:00pm</span>
          </li>
          <li>
            <Link to="/">Watson Hall LINQ</Link>
            <span>9:00am - 8:00pm</span>
          </li>
        </ul>

        <Link className="button" to="/locations-hours/all">
          All Locations & Hours
        </Link>
      </section>
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
    </section>
  )
}

export default Hours
