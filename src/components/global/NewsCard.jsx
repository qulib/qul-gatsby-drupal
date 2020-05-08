import React from 'react'
import { Link } from "gatsby"

const NewsCard = () => (
  <Link to="/" className="news-card">
    <img src="https://loremflickr.com/300/200/impressionist" alt="image alt goes here" />
    <footer>
      <h2>Card title</h2>
      <h3>May 7, 2020</h3>
    </footer>
  </Link>
)

export default NewsCard
