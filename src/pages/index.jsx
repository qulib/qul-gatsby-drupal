import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class Home extends Component {
  render() {
    const data = this.props.data;

    return (
      <Layout>
        <p>Hello World</p>
      </Layout>
    )
  }
}

export default Home

// export const pageQuery = graphql`
// {
  
// }
// `