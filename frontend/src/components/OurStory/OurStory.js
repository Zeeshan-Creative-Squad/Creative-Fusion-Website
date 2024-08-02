import React from 'react'
import "./OurStory.css"

function OurStory() {
  return (
    <div className='OurStory-container py-5'>
        <div className='container my-4 my-xxl-5'>
            <div className='text-content'>
                <h3 className='body-heading'>Our Story, Our Journey</h3>
                <p className='body-paragraph my-4 mb-5'>At Creative Fusion, our journey began with a simple yet powerful idea: to merge creativity with technology and transform the digital world. Since our inception, we've walked on a remarkable journey, overcoming challenges and celebrating successes along the way. Driven by passion and fueled by innovation, Creative Fusion has evolved into a leading provider of digital media solutions, dedicated to helping businesses thrive in the ever-changing digital world. Join us as we continue to write the next chapter of our story together.</p>

            </div>
        <div className='row ranking'>
                        <div className='col-lg-3 col-md-1 row-ranking-under-section'>
                            <h3 className='color-yellow story-stuff'>84+</h3>
                            <p className='body-paragraph story-subheading'>Worldwide Clients</p>
                            <p className='body-paragraph'>In the tapestry of our organizational narrative,</p>

                        </div>
                        
                        <div className='col-1 '>
                            <div className='stat-border-right'></div>
                        </div>
                        <div className='col-lg-3 col-md-1 row-ranking-under-section'>
                            <h3 className='color-yellow story-stuff'>200+</h3>
                            <p className='body-paragraph story-subheading'>Realtime Projects</p>
                            <p className='body-paragraph'>In the tapestry of our organizational narrative,</p>
                        </div>
                        <div className='col-1 '>
                            <div className='stat-border-right'></div>
                        </div>
                        <div className='col-lg-3 col-md-1 row-ranking-under-section'>
                            <h3 className='color-yellow story-stuff'>64+</h3>
                            <p className='body-paragraph story-subheading' >Top-notch Reviews</p>
                            <p className='body-paragraph'>In the tapestry of our organizational narrative,</p>
                        </div>

                    </div>

        </div>
    </div>
  )
}

export default OurStory