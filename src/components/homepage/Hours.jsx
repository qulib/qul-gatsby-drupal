import React from 'react'
import { Link } from 'gatsby'
import PeopleCounterWidget from './PeopleCounterWidget.jsx'

function Hours() {
  return (
    <section className="hours">
      <h2 className="section-title">Today's Hours</h2>

      <section className="todays-hours">
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

      <PeopleCounterWidget />
    </section>
  )
}

export default Hours
