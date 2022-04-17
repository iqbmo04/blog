import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Ashish Singh Baghel's Profile pic"
        src="../images/profile.png"
      />   
    </Layout>
  )
}

export default IndexPage