import React from 'react'
import { Link } from "gatsby"

const NewsCard = () => (
  <Link to="/" className="news-card">
    <img src="https://source.unsplash.com/300x300/?beautiful" alt="image alt goes here" />
    <footer>
      <h2>Card title</h2>
      <h3>May 7, 2020</h3>
    </footer>
  </Link>
)

export default NewsCard
