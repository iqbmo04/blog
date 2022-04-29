import * as React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {  
    return (
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>ashish.sbaghel@outlook.com</h5>
              <a href='mailto:ashish.sbaghel@outlook.com'>Send a message</a>
            </article>

            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Ashish Singh Baghel</h5>
              <a href='https://m.me/mechdeveloper'>Send a message</a>
            </article>

            {/* <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>Message on WhatsApp</h5>
              <a href='https://api.whatsapp.com/send?phone=+91XXXXXXXXXX'>Send a message</a>
            </article> */}
          </div>

          {/* <form action="" className='contact__form'>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder="Your eMail" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form> */}
        </div>

      </section>
    )
  }

export default Contact