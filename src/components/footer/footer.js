import * as React from 'react'
import { BsLinkedin, BsGithub, BsYoutube, BsTwitter, BsMedium } from 'react-icons/bs'
import './footer.css'

const Footer = () => {  
    return (
      <footer>
        <a href='#home' className='footer__logo'>Ashish Singh Baghel</a>

        <ul className='permalinks'>
          {/* <li> <a href='#home'> Home </a> </li> */}
          {/* <li> <a href='#about'> About </a> </li> */}
          {/* <li> <a href='#experience'> Experience </a> </li> */}
          {/* <li> <a href='#services'> Services </a> </li> */}
          {/* <li> <a href='#portfolio'> Portfolio </a> </li> */}
          {/* <li> <a href='#testimonials'> Testimonials </a> </li> */}
          {/* <li> <a href='#contact'> Contact </a> </li> */}
        </ul>
        <div className='footer__socials'>
          <a href='https://www.linkedin.com/in/baghelashish/'> <BsLinkedin /> </a>
          <a href='https://github.com/mechdeveloper'> <BsGithub /> </a>
          <a href='https://www.youtube.com/channel/UCJ7uLE5xaKA7qScKSX5Z_mw'> <BsYoutube />  </a>
          <a href='https://twitter.com/mechDeveloper1'> <BsTwitter /> </a>
          <a href='https://medium.com/@mechdeveloper'> <BsMedium /> </a>
        </div>
        
        <div className='footer__copyright'>
          <small>&copy; Ashish Singh Baghel. All rights reserved.</small>
        </div>

      </footer>
    )
  }

export default Footer