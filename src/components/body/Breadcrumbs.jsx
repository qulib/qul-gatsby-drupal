import React from 'react'
import { Link } from 'gatsby'

const Breadcrumbs = () => (
  <nav id="site-breadcrumbs" aria-label="Breadcrumb">
    <ol>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/" aria-current="page">
          This Page
        </Link>
      </li>
    </ol>
  </nav>
)

export default Breadcrumbs
