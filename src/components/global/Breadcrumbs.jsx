import React from 'react'
import { Link } from 'gatsby'
import { Breadcrumb } from 'antd'

function Breadcrumbs() {
  return (
    <Breadcrumb id="site-breadcrumbs" aria-label="Breadcrumb">
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/" aria-current="page">
          This Page
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrumbs
