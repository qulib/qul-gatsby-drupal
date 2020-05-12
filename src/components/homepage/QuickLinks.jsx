import React from "react"
import { Link } from 'gatsby'

import LinkSymbol from '../../images/link-symbol-gold.svg'


const QuickLinks = () => (
  <nav className="quick-links">
    <section>
      <h2>Using the Library</h2>
      <ul>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Learning</h2>
      <ul>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Research</h2>
      <ul>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
        <li>
          <Link to="/">link</Link>
        </li>
      </ul>
    </section>
    <section className="link-symbol">
      <img src={LinkSymbol} width="200" height="200" alt="quick links section" />
    </section>
  </nav>
)

export default QuickLinks