import React from 'react'
import { Link } from 'gatsby'
import AnalogClock from 'analog-clock-react'
import PeopleCounterWidget from './PeopleCounterWidget.jsx'

let clockOptions = {
  width: '120px',
  border: false,
  borderColor: '#406486',
  baseColor: '#fff',
  centerColor: '#406486',
  handColors: {
    second: '#b81237',
    minute: '#002f5e',
    hour: '#febe10',
  },
}

function Hours() {
  return (
    <section className="hours">
      <section className="clock">
        <AnalogClock {...clockOptions} className="qul-clock" />
      </section>

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
        </ul>
        <button>
          <Link to="/locations-hours/all">All Locations & Hours</Link>
        </button>
      </section>

      <PeopleCounterWidget />
    </section>
  )
}

export default Hours
