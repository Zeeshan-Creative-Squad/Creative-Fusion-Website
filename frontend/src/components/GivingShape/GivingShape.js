import React from 'react'
import "./GivingShape.css"

function GivingShape() {
  return (
    <div className='GivingShape-container py-5'>
        <div className='container my-xxl-5 my-4'>
            <div className={`main row align-items-center gy-3 my-xxl-5`}>
               

                <div className='text-content col-lg-5 text-center text-lg-start'>
                    
                    <div className='d-flex gap-3 align-items-center'>

                        
                        <h3 className='font-bebus body-heading color-white mb-4' >
                            Giving shape to your idea, product and brand
                        </h3>

                    </div>
                    <button className='genral-btn btn-red mt-2'>Contact Us</button>
                   
                   
                </div>
                <div className='img-container col-lg-7 px-4'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='content-section px-3'>
                                <img src='/images/icons/gs-icon-1.png' alt='service icon'/>
                                <h6 className='color-white mt-4 '>Discovery & Ideation</h6>
                                <p className='body-paragraph my-3'>We dive deep into your goals, audience, and market to unearth insights to shape your project..</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='content-section px-3'>
                                <img src='/images/icons/gs-icon-2.png' alt='service icon'/>
                                <h6 className='color-white mt-4 '>Design & Development</h6>
                                <p className='body-paragraph my-3'>Our talented team crafts visually stunning designs and bring them to life with seamless development.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='content-section px-3'>
                                <img src='/images/icons/gs-icon-3.png' alt='service icon'/>
                                <h6 className='color-white mt-4 '>Launch & Optimization</h6>
                                <p className='body-paragraph my-3'>From strategic launches to continuous optimization, we ensure your project reaches its full potential.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default GivingShape