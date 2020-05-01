import React from "react"
import { FiSearch } from 'react-icons/fi';

const SiteSearch = () => (
  <nav id="site-search">
    <FiSearch />
    <input type="text" placeholder="Search" />
  </nav>
)

export default SiteSearch