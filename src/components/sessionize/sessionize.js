import * as React from 'react'
import './sessionize.css'

const Sessionize = () => {  
    return (
        <section id="sessionize">
            <h2>
                <a target="_blank" rel="noreferrer" href='https://sessionize.com/ashishsinghbaghel'>My Speaker Profile (Sessionize)</a>
            </h2>
            <div className='container sessionize__container'>
                <div className='upcoming__sessions'>

                </div>
                <div className='delivered__sessions'>
                    <div className='delivered__sessions_session'>
                        <h3>Containers as a Development Environment by Ashish Singh Baghel</h3>
                        <h4>Date Aug 24, 2022</h4>
                        <div className='youtube__container-player'>
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/xZlRLRH7y-8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sessionize
