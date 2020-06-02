import React from 'react'
import { Link } from 'gatsby'

function Banner() {
  return (
    <section className="banner">
      <h2>Banner Title</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <button>
        <Link to="/test-page">View Page</Link>
      </button>
    </section>
  )
}

export default Banner
