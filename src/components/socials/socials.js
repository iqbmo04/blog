import * as React from 'react'
// import { Link } from 'gatsby'
import { FaYoutube, FaGithub, FaLinkedin, FaBlog, FaTwitter} from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs' 
import { IconContext } from "react-icons";

import './socials.css'

const Socials = () => {  
    return (
      <section id="socials">
        <div className='container socials__container'>
            <div className="socials__container-item">
                <a target="_blank" rel="noreferrer" href='https://www.youtube.com/channel/UCJ7uLE5xaKA7qScKSX5Z_mw'>
                    <IconContext.Provider value={{ className: "socials__content-icon", size: 70 }}>
                        <>
                            <FaYoutube />
                        </>
                    </IconContext.Provider>
                    <h3>YouTube</h3>
                </a>
            </div>
            <div className="socials__container-item">
                <a target="_blank" rel="noreferrer" href='https://github.com/mechdeveloper'> 
                    <IconContext.Provider value={{ className: "socials__content-icon", size: 70 }}>
                        <>
                            <FaGithub />
                        </>
                    </IconContext.Provider>
                    <h3>Github</h3>
                </a>
            </div>
            <div className="socials__container-item">
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/baghelashish/'>
                    <IconContext.Provider value={{ className: "socials__content-icon", size: 70 }}>
                        <>
                            <FaLinkedin />
                        </>
                    </IconContext.Provider>
                    <h3>LinkedIn</h3>
                </a>
            </div>
            <div className="socials__container-item">
                <a target="_blank" rel="noreferrer" href={`/blog`}>
                    <IconContext.Provider value={{ className: "socials__content-icon", size: 70 }}>
                        <>
                            <FaBlog />
                        </>
                    </IconContext.Provider>
                    <h3>Technical Blogs</h3>
                </a>
            </div>
            <div className="socials__container-item">
                <a target="_blank" rel="noreferrer" href='https://medium.com/@mechdeveloper'>
                    <IconContext.Provider value={{ className: "socials__content-icon", size: 70 }}>
                        <>
                            <BsMedium />
                        </>
                    </IconContext.Provider>
                    <h3>Medium</h3>
                </a>
            </div>
            <div className="socials__container-item">
                <a target="_blank" rel="noreferrer" href='https://twitter.com/mechDeveloper1'>
                    <IconContext.Provider value={{ className: "socials__content-icon", size: 70 }}>
                        <>
                            <FaTwitter />
                        </>
                    </IconContext.Provider>
                    <h3>Twitter</h3>
                </a>
            </div>
        </div>  
      </section>
    )
  }

export default Socials