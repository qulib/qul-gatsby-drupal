import React from "react"
import { Link } from 'gatsby'
import AnalogClock from 'analog-clock-react';
import PeopleCounterWidget from './PeopleCounterWidget.jsx'

let options = {
  width: "120px",
  border: false,
  borderColor: "#406486",
  baseColor: "#fff",
  centerColor: "#406486",
  handColors: {
    second: "#b81237",
    minute: "#002f5e",
    hour: "#febe10"
  }
};

const Hours = () => (
  <section className="hours">
    <section className="clock"><AnalogClock {...options} className="qul-clock" /></section>

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
      <button><Link to="/">All Locations & Hours</Link></button>
    </section>

    <PeopleCounterWidget />
  </section>
)

export default Hours