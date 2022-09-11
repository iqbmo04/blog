import * as React from 'react'
import { Link } from 'gatsby'
import './nav.css'

const Nav = () => { 
    return (
      <nav>
        <Link to="/about" >About</Link>
        <Link to="/events" >Events</Link>
        <Link to="/blog" >Blog</Link>
        <Link to="/" >Home</Link>
      </nav>
    )
  }

export default Nav