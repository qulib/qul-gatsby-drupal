import React from 'react'
import { Input } from 'antd'
// import { FaSearch } from 'react-icons/fa'

const { Search } = Input;

const SiteSearch = () => (
  <nav id="site-search">
    <Search
      placeholder="Search our site"
      onSearch={value => console.log(value)}
      enterButton
      allowClear
      // style={{ width: 200 }}
    />
  </nav>
)

export default SiteSearch
