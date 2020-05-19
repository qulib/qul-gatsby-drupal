import React from "react"
import { Link } from "gatsby"

const MainMenu = () => (
  <nav id="main-menu">
    <ul><li><Link to="/search">Search</Link></li>
      <li><Link to="/help-services">Help & Services</Link></li>
      <li><Link to="/locations-hours">Locations & Hours</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
    </ul>
  </nav>
)

export default MainMenu