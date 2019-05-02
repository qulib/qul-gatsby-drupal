import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/Layout.jsx'

const AlbumTemplate = ({ data }) => (
  <Layout>
    <p>Hello I'm an album</p>
  </Layout>
)

export default AlbumTemplate

// export const query = graphql`

// `
