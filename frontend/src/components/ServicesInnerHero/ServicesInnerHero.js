import React from 'react'
import "./ServicesInnerHero.css"
import Header from '../Header/Header'


function ServicesInnerHero(props) {
  return (
    <>
    <Header/> 
    <div className='ServicesInnerHero-container d-flex flex-column'>
     <div className='container'>
        

            <div className='row serviceinner-content align-items-center gy-4'>
                <div className='col-lg-6'>
                    <div className='text-content text-center text-lg-start'>
                    <h1 className='body-heading my-2' >{props.Heading} <span className='color-yellow'>{props.yellowHeading}</span> </h1>
                        
                        <p className='body-paragraph my-2' style={{color:"#eaebeb"}}>{props.Para}</p>
                        <button className='genral-btn btn-red mt-4'>Get In Touch</button>
                    </div>
                </div>

                <div className='col-lg-6 img-container d-xxl-block text-xxl-center d-flex align-items-center justify-content-center'>
                <img 
                src={props.heroBannerImg} 
                className='img-fluid services-inner-hero-img img-1' 
                alt='connection art'  
            />
                    {/* <img src='/images/creatives/home-hero-img-2.png' className='img-fluid home-hero-img img-2' alt='person '  /> */}
                </div>

            </div>

        </div>
    </div>
    
    </>
  )
}

export default ServicesInnerHero;