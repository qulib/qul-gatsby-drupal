import React from 'react'
import { Link } from 'gatsby'
import { Progress } from 'antd';

import { capacity } from "../../data/capacity.json"

const PeopleCounterWidget = () => (
  <section className="people-counter">
    <Progress type="circle" strokeWidth="10" percent={capacity} />
    <Link to="/test-page">
      Stauffer Library Capacity
    </Link>
  </section>
)

export default PeopleCounterWidget
