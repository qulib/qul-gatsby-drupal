import React from "react"
import { Link } from "gatsby"

const MainMenu = () => (
  <nav id="main-menu">
    <ul><li><Link to="/">Search</Link></li>
      <li><Link to="/">Help & Services</Link></li>
      <li><Link to="/">Locations & Hours</Link></li>
      <li><Link to="/">About Us</Link></li>
    </ul>
  </nav>
)

export default MainMenu
