import React from 'react'
import "./ServicesInnerHero.css"
import Header from '../Header/Header'


function ServicesInnerHero() {
  return (
    <>
    <div className='ServicesInnerHero-container d-flex flex-column'>
        <Header/> 
        <div className='container mt-auto'>

            <div className='row serviceinner-content align-items-center gy-4'>
                <div className='col-lg-6'>
                    <div className='text-content text-center text-lg-start'>
                    <h1 className='body-heading my-3' >Let's Create Something  <br></br> <span className='color-yellow'>Extraordinary</span> </h1>
                        
                        <p className='body-paragraph my-3' style={{color:"#eaebeb"}}>Step into the world of Design & Branding with us, where we'll collaborate to define and refine your brand's identity. From logos to visual storytelling, we're here to empower your brand to stand out in the digital world.</p>
                        <button className='genral-btn btn-red mt-4'>Get In Touch</button>
                    </div>
                </div>

                <div className='col-lg-6 img-container d-xxl-block text-xxl-center d-flex align-items-center justify-content-center'>
                    <img src='/images/creatives/services-inner-hero-img-1.png' className='img-fluid services-inner-hero-img img-1 ' alt='connection art'  />
                    {/* <img src='/images/creatives/home-hero-img-2.png' className='img-fluid home-hero-img img-2' alt='person '  /> */}
                </div>

            </div>

        </div>
    </div>
    
    </>
  )
}

export default ServicesInnerHero;