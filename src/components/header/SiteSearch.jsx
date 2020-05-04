import React from 'react'
import { Input } from 'antd'
import { FaSearch } from 'react-icons/fa'

const SiteSearch = () => (
  <nav id="site-search">
    <Input size="large" placeholder="site search" prefix={<FaSearch />} />
  </nav>
)

export default SiteSearch
