import React from "react"
import { Link } from "gatsby"

import NewsCard from '../global/NewsCard.jsx'


const NewsEvents = () => (
  <section className="news-events">
    <section className="news-grid">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </section>
    <button><Link to="/">More News & Events</Link></button>
  </section>

)

export default NewsEvents