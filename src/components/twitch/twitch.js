import * as React from 'react'
import './twitch.css'

const Twitch = () => {  
    return (
      <section id="twitch">
        <h2>Twitch</h2>
        <div className='container twitch__container'>
            <div className='twitch__container-player'>
                <iframe 
                  title="Twitch player" 
                  src="https://player.twitch.tv?channel=ashishsinghbaghel&parent=techhackswithash.com&parent=127.0.0.1" 
                  allowFullScreen
                  >
                </iframe>
            </div>
            
            <div className='twitch__container-content'>
                <p>Hang out with me on my Twitch Streams. Join me in my journey exploring the technical world. Drop a follow and get notified when I am online. Join the live chat and be a part of the community.</p>
            </div>

        </div>
      </section>
    )
  }

export default Twitch