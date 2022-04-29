import * as React from 'react'
import Layout from '../components/layout/layout'
import About from '../components/about/about'
import Experience from '../components/experience/experience'
import Services from '../components/services/services'
import Portfolio from '../components/portfolio/portfolio'
import Testimonials from '../components/testimonials/testimonials'
import Contact from '../components/contact/contact'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <About />
      <Experience />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Contact />
    </Layout>
  )
}

export default IndexPage