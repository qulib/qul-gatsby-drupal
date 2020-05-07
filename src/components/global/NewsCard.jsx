import React from 'react'
import { Link } from "gatsby"

const NewsCard = () => (
  <Link to="/" className="news-card">
    <img src="https://source.unsplash.com/300x300/?gear" alt="image alt goes here"/>
    <h2>Card title</h2>
    <h3>May 7, 2020</h3>
  </Link>
)

export default NewsCard
