import React from 'react'
import { Link } from 'gatsby'
import { Progress } from 'antd';

const PeopleCounterWidget = () => (
  <section className="people-counter">
    <Progress type="circle" strokeWidth="10" percent={65} />
    <Link to="/test-page">
      Stauffer Library Capacity
    </Link>
  </section>
)

export default PeopleCounterWidget
