import * as React from 'react'
import ProfileImage from '../../images/profile.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

import './about.css'

const About = () => {  
    return (
      <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
          <div className='about__profile'> 
            <div className='about__profile-image'>
              <img src={ProfileImage} alt="About Profile Pic"/>
            </div>
          </div>
          <div className='about__content'>

            {/* <div className='about__cards'>

              <article className='about__card'>
                <FaAward className='about__card-icon' />
                <h5>Experience</h5>
                <small>8+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__card-icon' />
                <h5>Clients</h5>
                <small>Major Financial Services</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__card-icon' />
                <h5>Projects</h5>
                <small>DevOps | Cloud | Modern-Apps</small>
              </article>

            </div> */}

            <p>
              Digital technologies professional, passionate, curious and learning about modern technologies. 
              Currently working on DevOps, Automation, Migration and Modernization of existing business applications and IT processes with cloud first approach for a giant financial services client in Europe.
            </p>

            <a target="_blank" href="https://twitter.com/mechDeveloper1" className='btn btn-primary'>Connect</a>
            
          </div>
        </div>
      </section>
    )
  }

export default About