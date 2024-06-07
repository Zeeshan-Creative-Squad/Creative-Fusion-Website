import React from 'react'
import "./HomeHero.css"
import Header from '../Header/Header'

function HomeHero() {
  return (
    <div className='HomeHero-container d-flex flex-column'>
        <Header/> 
        <div className='container mt-auto'>
            

            <div className='row align-items-center gy-4'>
                <div className='col-lg-5'>
                    <div className='text-content'>
                    <h1 className='body-heading text-center text-lg-start my-4'>Welcome to <span className='line-break'> Creative Fusion</span></h1>
                        <h6 className='body-paragraph my-4' style={{fontSize:"26px"}}>Your Trusted Partner For <span className='color-yellow'>Digital Media Solutions</span></h6>
                        <p className='body-paragraph my-3'>At Creative Fusion, we bring your digital dreams to life. Whether you're a budding entrepreneur or a seasoned business owner, we have the perfect solution to elevate your online presence. Dive into our world of innovative digital media solutions and see how we can transform your brand.</p>
                        <button className='genral-btn btn-red mt-4'>Let's Connect</button>
                    </div>
                </div>

                <div className='col-lg-6 img-container' style={{position:"relative"}}>
                    <img src='/images/creatives/home-hero-img-1.png' className='img-fluid home-hero-img img-1' alt='abstract art'  />
                    <img src='/images/creatives/home-hero-img-2.png' className='img-fluid home-hero-img img-2' alt='person '  />
                </div>

            </div>

        </div>
    </div>
  )
}

export default HomeHero