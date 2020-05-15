import React from "react"
import { Link } from "gatsby"

import NewsCard from '../global/NewsCard.jsx'


const NewsEvents = () => (
  <section className="news-events">
    <h2 className="section-title">News & Events</h2>
    <section className="news-grid">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </section>
    <button><Link to="/about-us/news-events">All News & Events</Link></button>
  </section>

)

export default NewsEvents