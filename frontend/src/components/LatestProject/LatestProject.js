import React from 'react'
import "./LatestProject.css"
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";




function CardBox({
    img,
    title="",
    catagory="",
    content="",

}) {
    return(
        
        <div className='CardBox-container my-xxl-5 my-4'>
            <div className='row align-items-center m-xxl-4'>
                <div className='col-lg-6'>
                    <img src={img} alt='case study thumbnail' className='img-fluid card-thumb'/>
                </div>

                <div className='col-lg-6'>

                    <div className='text-content'>
                        <h3 className='body-heading-under'>{title}</h3>
                        <p className='body-paragraph boxtext my-5' >{content}</p>

                        <p className='anchor color-red'>Read Full Case Study <img src='/images/icons/arrow-right.svg' alt='arrow design'/></p>
                    </div>

                </div>

            </div>

            <div className='row mt-5'>
                <div className='col-lg-6'>
                    
                    {/* <p className='body-paragraph color-yellow' style={{color:"#f58e09"}}>{catagory}</p> */}
                </div>

                <div className='col-lg-6'>
                    
                </div>
            </div>

        </div>
    )
}

function LatestProject() {
  return (
    <div className=''>
    <div className='LatestProject-container'>
        <div className='container project-main'>
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                <div className='col-lg-6 text-center d-lg-none mb-5'>
                <Link to="/casestudies">
      <button className='genral-btn btn-red text-center d-none d-lg-block'>Our Case Studies</button>
    </Link>
    </div>
                    <h3 className='body-heading'>Latest Projects</h3>
                </div>
                <div className='col-lg-6 text-center text-lg-end'>
                <Link to="/casestudies">
      <button className='genral-btn btn-red d-lg-inline d-none'>Our Case Studies</button>
    </Link>
                    <br></br>
                    <br></br>

                </div>
                
            </div>
            

            <Swiper
    spaceBetween={10}
    autoplay={{
    delay: 1500,
    disableOnInteraction: false,
    }}
    loop={true}
    modules={[Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide>
      <CardBox
        img="/images/creatives/case-study-card-1.png"
        title="Di- Coin Crypto Dashboard Design"
        catagory="Charu Immigration"
        content="Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, quis viverra ornare, eros dolor et interdum nulla"
      />
    </SwiperSlide>
    <SwiperSlide>
      <CardBox
        img="/images/creatives/case-study-card-1.png"
        title="Di- Coin Crypto Dashboard Design"
        catagory="Charu Immigration"
        content="Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, quis viverra ornare, eros dolor et interdum nulla"
      />
    </SwiperSlide>
    {/* Add more SwiperSlide components as needed */}
  </Swiper>

            </div>

        </div>
    </div>
  )
}

export default LatestProject