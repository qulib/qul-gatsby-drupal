import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout.jsx'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
    }
  }

  updateSearch(event) {
    this.setState({ search: event.target.value })
  }

  render() {
    const data = this.props.data
    let filteredAlbums = data.allNodeAlbum.nodes.filter(node => {
      return (
        node.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      )
    })

    return (
      <Layout>
        <h1>Albums</h1>
        <div className="filters" action="/">
          <div className="filter-actions">
            <label htmlFor="filter-search">Search:</label>
            <input
              type="text"
              id="filter-search"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </div>
          <div className="filter-results">
            {filteredAlbums.length} results found
          </div>
        </div>

        <ul>
          {filteredAlbums.map(node => (
            <li key={node.drupal_id}>
              <div className="album-card">
                <span className="album-title">
                  <Link to={'/album/' + node.field_slug}>{node.title}</Link>
                </span>
                <br />
                <span className="album-desc">{node.body.summary}</span>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default Home

export const query = graphql`
  {
    allNodeAlbum(sort: { fields: [title] }) {
      nodes {
        drupal_id
        title
        field_slug
        field_artist
        body {
          summary
        }
      }
    }
  }
`
