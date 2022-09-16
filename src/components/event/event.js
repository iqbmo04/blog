import * as React from 'react'
import './event.css'

const Event = () => {  
    return (
        <section id="sessionize">
            <h2>
                <a target="_blank" rel="noreferrer" href='https://sessionize.com/ashishsinghbaghel'>My Speaker Profile (Sessionize)</a>
            </h2>
            <div className='container sessionize__container'>
                <div className='upcoming__sessions'>
                    <h1>Upcoming Sesions</h1>
                    <div className='upcoming__sessions_session'>
                        <h3>Azure User Group Sweden</h3>
                        <h4>Date: Sept 24, 2022 12:00 PM CET</h4>
                        <div className='youtube__container-player'>
                            <iframe 
                                width="100%" 
                                height="100%"
                                src="https://www.youtube.com/embed/REDg2uIqDcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className='youtube__container-player'>
                            <iframe 
                                width="100%" 
                                height="100%"
                                src=" https://www.youtube.com/embed/E_PxX_SKc14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className='delivered__sessions'>
                    <h1>Delivered Sesions</h1>
                    <div className='delivered__sessions_session'>
                        <h3>Cloud Native and Kubernetes Oslo</h3>
                        <h4>Date: Aug 24, 2022</h4>
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

export default Event
