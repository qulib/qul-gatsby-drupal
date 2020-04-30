import React from 'react'

import Layout from '../components/Layout.jsx'

class BulmaTest extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="title is-2">Level 2 heading</h2>
              <p className="content">Cool content. Using Bulma!</p>
            </div>
            <div className="column is-four-fifths">
              <h2 className="title is-2">Level 2 heading</h2>
              <p className="content">This column is cool too!</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BulmaTest
