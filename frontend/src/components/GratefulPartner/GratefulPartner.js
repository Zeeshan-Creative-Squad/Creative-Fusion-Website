import React from 'react'
import "./GratefulPartner.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const companyData =[
    "/images/icons/grateful-icon-1.png",
    "/images/icons/grateful-icon-2.png",
    "/images/icons/grateful-icon-3.png",
    "/images/icons/grateful-icon-4.png",
    "/images/icons/grateful-icon-5.png",
    "/images/icons/grateful-icon-6.png",

    
    "/images/icons/grateful-icon-1.png",
    "/images/icons/grateful-icon-2.png",
    "/images/icons/grateful-icon-3.png",
    "/images/icons/grateful-icon-4.png",
    "/images/icons/grateful-icon-5.png",
    "/images/icons/grateful-icon-6.png",

]

function GratefulPartner() {
  return (
    <div className='GratefulPartner-container py-5'>
        <div className='container my-5'>
            <div className='text-content text-center mb-5'>
                <h3 className='body-heading '>We are grateful for the <br className='d-none d-xl-block'></br>opportunity to work alongside top-tier brands.</h3>
                
            </div>

            <div className='pt-5 '>
            <Swiper
                    spaceBetween={10}
                    autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        200:{
                        slidesPerView: 1,
                        },
                        550: {
                        slidesPerView: 2,
                        },
                        800: {
                        slidesPerView: 3,
                        },
                        1000: {
                        slidesPerView: 4,
                        },
                        1400: {
                        slidesPerView: 5,
                        },
                        1600: {
                        slidesPerView: 6,
                        },
                    }}
                    className={`mx-auto py-3`}
                    >
                        {
                            companyData.map((ele)=>{
                                return(
                                    <SwiperSlide>
                                        <img src={ele}  alt="partner company logo" className='icons'/>
                                    </SwiperSlide>
                                )
                            })
                        }
                        
                </Swiper>
            </div>

        </div>
    </div>
  )
}

export default GratefulPartner