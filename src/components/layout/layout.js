import * as React from 'react'
import Header from '../header/header'
import Nav from '../nav/nav'
import Footer from '../footer/footer'
// import { 
//   // Link, 
//   useStaticQuery, 
//   graphql 
// } from 'gatsby'

import './layout.css'

const Layout = ({ pageTitle, children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata{
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className='layout'>
      <Nav />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout