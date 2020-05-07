import React from 'react'
import { Input } from 'antd'
// import { FaSearch } from 'react-icons/fa'

const { Search } = Input;

const SiteSearch = () => (
  <nav id="site-search">
    {/* <Input size="large" placeholder="site search" prefix={<FaSearch />} enterButton/> */}
    <Search placeholder="Search our site" onSearch={value => console.log(value)} enterButton allowClear/>
  </nav>
)

export default SiteSearch
