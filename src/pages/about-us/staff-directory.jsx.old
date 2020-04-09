import React from 'react'
import { graphql, Link } from 'gatsby'
import { Input } from 'antd'
import Layout from '../../components/Layout.jsx'

class StaffDir extends React.Component {
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
    let filteredStaff = data.allNodeStaff.nodes.filter(node => {
      return (
        node.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      )
    })

    let resultString = filteredStaff.length === 1 ? 'result' : 'results'

    return (
      <Layout>
        <h1>Staff Directory</h1>
        <div className="filters" action="/">
          <div className="filter-actions">
            <label htmlFor="filter-search">Search:</label>
            {/* <input
              type="text"
              e
              id="filter-search"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            /> */}
            <Input id="filter-search" allowClear value={this.state.search} onChange={this.updateSearch.bind(this)}/>
          </div>
          <div className="filter-results">
            {filteredStaff.length} {resultString} found
          </div>
        </div>

        <ul>
          {filteredStaff.map(node => (
            <li key={node.drupal_id}>
              <div className="staff-card">
                <Link to={'/staff/' + node.field_slug}>{node.title}</Link>
                <br />
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default StaffDir

export const query = graphql`
  {
    allNodeStaff(sort: { fields: [title] }) {
      nodes {
        drupal_id
        title
        field_slug
        field_last_name
        field_first_name
        field_job_title
        field_email
        field_telephone
      }
    }
  }
`
