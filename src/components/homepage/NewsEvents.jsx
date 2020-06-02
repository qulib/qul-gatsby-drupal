import React from 'react'
import { Link } from 'gatsby'
import NewsCard from '../global/NewsCard.jsx'

function NewsEvents({ data }) {
  return (
    <section className="news-events">
      <h2 className="section-title">News & Events</h2>
      <section className="news-grid">
        {data.edges.map(({ node }) => (
          <NewsCard key={node.drupal_internal__nid.toString()} node={node} />
        ))}
      </section>
      <button>
        <Link to="/about-us/news-events">All News & Events</Link>
      </button>
    </section>
  )
}

export default NewsEvents
