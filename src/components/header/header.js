import * as React from 'react'
// import Cta from './cta/cta'
// import Socials from './socials/socials'
// import { StaticImage } from 'gatsby-plugin-image'
import './header.css'

const Header = () => {  
    return (
      <header id='home'>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Ashish Singh Baghel</h1>
          <h5 className="text-light">Cloud & DevOps Consultant</h5>
          {/* <Cta />
          <Socials /> */}

          {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
        </div>
      </header>
    )
  }

export default Header