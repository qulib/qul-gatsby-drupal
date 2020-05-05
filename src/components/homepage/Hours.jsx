import React from "react"
import AnalogClock from 'analog-clock-react';

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
    <section className="clock"><AnalogClock {...options} className="qul-clock"/></section>
    <section className="todays-hours">todays-hours</section>
    <section className="people-counter">people-counter</section>
  </section>
)

export default Hours