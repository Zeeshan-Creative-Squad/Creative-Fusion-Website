import React from 'react'
import "./ServicesHero.css"
import Header from '../Header/Header'

function ServicesHero() {
  return (
    <div className='ServicesHero-container d-flex flex-column'>
  <Header/> 
  <div className='container mt-auto'>
    <div className='row align-items-center gy-4'>
      <div className='col-lg-6'>
        <div className='text-content text-center text-lg-start'>
        <h1 className='body-heading text-center text-lg-start my-3' >Elevate Your Digital Presence with <br></br> <span className='color-yellow'> Our Creative Solutions</span> </h1>
          <p className='body-paragraph services-para' style={{ color: "#eaebeb" }}>
          We offer a range of innovative digital solutions designed to help your business thrive online. From branding to web development, e-commerce to application development, our team is here to turn your digital dreams into reality. Let's explore how we can elevate your digital presence together.
          </p>
          <button className='service-btn'>Let's Connect</button>
                    </div>
                </div>

                <div className='col-lg-5 img-container d-xxl-block text-xxl-center d-flex align-items-center justify-content-center'>
                    <img src='/images/creatives/services-hero-img-1.png' className='img-fluid services-hero-img img-1 ' alt='bulb art'  />
                    {/* <img src='/images/creatives/home-hero-img-2.png' className='img-fluid home-hero-img img-2' alt='person '  /> */}
                </div>

            </div>

        </div>
    </div>
  )
}

export default ServicesHero