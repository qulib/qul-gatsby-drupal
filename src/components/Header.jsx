import React from "react"
import { Link } from "gatsby"
import QULlogo from "../images/qul-logo.svg"

const Header = () => (
  <header id="site-header">
    <Link to="/" title="Home">
      <img id="qul-logo" src={QULlogo} alt="Queen's University Library" />
    </Link>
  </header>
)

export default Header
