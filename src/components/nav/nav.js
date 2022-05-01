import * as React from 'react'
import {
  AiOutlineHome, 
  AiOutlineUser
} from 'react-icons/ai'

import {
  BiBook, 
  BiMessageSquareDetail
} from 'react-icons/bi'

import {RiServiceLine} from 'react-icons/ri'
import './nav.css'

import { useState } from 'react'

const Nav = () => { 
    const [activeNav, setActiveNav] = useState('#home');
    return (
      <nav>
        <a href="#home"       onClick={() => setActiveNav('#home')}       className={activeNav === '#home' ? 'active': ''}        aria-label="home"><AiOutlineHome/></a>
        <a href="#about"      onClick={() => setActiveNav('#about')}      className={activeNav === '#about' ? 'active': ''}       aria-label="about"><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}  aria-label="experience"><BiBook/></a>
        {/* <a href="#services"   onClick={() => setActiveNav('#services')}   className={activeNav === '#services' ? 'active': ''}    aria-label="services"><RiServiceLine/></a> */}
        <a href="#contact"    onClick={() => setActiveNav('#contact')}    className={activeNav === '#contact' ? 'active': ''}     aria-label="contact"><BiMessageSquareDetail/></a>
      </nav>
    )
  }

export default Nav