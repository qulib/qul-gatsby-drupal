import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

function NewsCard({ node }) {
  console.log('news node: ', node)

  return (
    <Link to={node.path.alias} className="news-card">
      <Img
        fluid={
          node.relationships.field_featured_image.localFile.childImageSharp
            .fluid
        }
        alt={node.field_featured_image.alt}
      />
      <footer>
        <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
      </footer>
    </Link>
  )
}

NewsCard.propTypes = {
  alias: PropTypes.string,
}

export default NewsCard
