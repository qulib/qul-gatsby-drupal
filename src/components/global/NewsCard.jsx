import React from 'react'
import { Link } from "gatsby"

const NewsCard = () => (
  <Link to="/" className="news-card">
    <img src="https://loremflickr.com/400/200/bird" alt="alt goes here" />
    <footer>
      <h2>Card title</h2>
    </footer>
  </Link>
)

export default NewsCard