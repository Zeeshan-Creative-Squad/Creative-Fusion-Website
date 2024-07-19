import React from 'react'
import "./AboutHero.css"
import Header from '../Header/Header'

function AboutHero() {
  return (
    <div className='AboutHero-container d-flex flex-column'>
        <Header/> 
        <div className='container mt-auto'>

            <div className='row align-items-center gy-4'>
                <div className='col-lg-6'>
                    <div className='text-content text-center text-lg-start'>
                        <h1 className='body-heading my-3' >Crafting Digital Excellence  <span className='color-yellow'>Together</span> </h1>
                        
                        <p className='body-paragraph mx-auto mx-lg-0'>At Creative Fusion, we specialize in delivering top-notch digital media solutions that empower businesses to thrive online. With a passionate team of experts, we blend creativity and technology to bring your ideas to life, ensuring your digital presence is both powerful and engaging.</p>
                        <button className='genral-btn btn-red mt-4' onClick={() => window.location.href = 'tel:+1234567890'}>Let's Connect</button>
                    </div>
                </div>

                <div className='col-lg-6 img-container' style={{position:"relative"}}>
                    <img src='/images/creatives/about-hero-img-1.png' className='img-fluid home-hero-img img-1' alt='abstract art'  />
                    {/* <img src='/images/creatives/home-hero-img-2.png' className='img-fluid home-hero-img img-2' alt='person '  /> */}
                </div>

            </div>

        </div>
    </div>
  )
}

export default AboutHero