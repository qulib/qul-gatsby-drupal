import React from 'react'
import { Link } from 'gatsby'
import { Progress } from 'antd';

const PeopleCounterWidget = () => (
  <section className="people-counter">
    <Progress type="circle" percent={75} />
    <Link to="/test-page">
      Stauffer Library Capacity
    </Link>
  </section>
)

export default PeopleCounterWidget
