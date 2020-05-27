import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import Img from "gatsby-image"

class NewsCard extends React.Component {

  render() {
    const data = this.props.node

    return (
      <Link to={data.path.alias} className="news-card">

        {/* <img
          src={data.relationships.field_featured_image.localFile.childImageSharp.resize.src}
          alt={data.field_featured_image.alt}
        /> */}

        <Img fluid={data.relationships.field_featured_image.localFile.childImageSharp.fluid} />

        <footer>
          <h2 dangerouslySetInnerHTML={{ __html: data.title }} />
        </footer>
      </Link>
    )
  }
}

NewsCard.propTypes = {
  alias: PropTypes.string
};

export default NewsCard