import React from 'react'
import { Input } from 'antd'

const { Search } = Input

function SiteSearch() {
  return (
    <nav id="site-search">
      <Search
        placeholder="Search our site"
        onSearch={value => console.log(value)}
        enterButton
        allowClear
      />
    </nav>
  )
}

export default SiteSearch
