import * as React from 'react'
import {
    BsLinkedin, 
    BsGithub,
    BsYoutube, 
    BsMedium, 
    BsTwitter,
    // BsDribbble
} from 'react-icons/bs'


const Socials = () => {  
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/baghelashish/"                 target="_blank" rel="noreferrer" aria-label="linkedin"><BsLinkedin/></a>
            <a href="https://github.com/mechdeveloper"                          target="_blank" rel="noreferrer" aria-label="github"><BsGithub /></a>
            <a href="https://www.youtube.com/channel/UCJ7uLE5xaKA7qScKSX5Z_mw"  target="_blank" rel="noreferrer" aria-label="YouTube"><BsYoutube /></a>
            <a href="https://twitter.com/mechDeveloper1"                        target="_blank" rel="noreferrer" aria-label="Twitter"><BsTwitter /></a>
            <a href="https://medium.com/@mechdeveloper"                         target="_blank" rel="noreferrer" aria-label="Medium"><BsMedium /></a>
            {/* <a href="https://dribbble.com/mechdeveloper"                        target="_blank" rel="noreferrer" aria-label="Dribble"><BsDribbble /></a> */}
        </div>
    )
  }

export default Socials