import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

function NewsCard({ node }) {
  // const data = node
  // console.log(node)

  return (
    <Link to={node.path.alias} className="news-card">
      <Img
        fluid={
          node.relationships.field_featured_image.localFile.childImageSharp
            .fluid
        }
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
