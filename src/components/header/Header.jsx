import React from "react"
import { Link } from "gatsby"

import QULlogo from "../../images/qul-logo.svg"

import UserMenu from './UserMenu'
import SiteSearch from './SiteSearch'
import MainMenu from './MainMenu'

const Header = () => (
  <header id="site-header">
    <section className="container">
      <Link id="qul-logo" to="/" title="Home">
        <img src={QULlogo} alt="Queen's University Library" />
      </Link>
      <UserMenu />
      <SiteSearch />
      <MainMenu />
    </section>

  </header>
)

export default Header
