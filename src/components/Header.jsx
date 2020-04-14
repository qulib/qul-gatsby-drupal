import React from "react"
import { Link } from "gatsby"
import QULlogo from "../images/qul-logo.svg"
import Menu from './Menu'

const Header = () => (
  <header id="site-header">
    <section className="container">
      <Link id="qul-logo" to="/" title="Home">
        <img  src={QULlogo} alt="Queen's University Library" />
      </Link>
      <Menu />
    </section>

  </header>
)

export default Header
