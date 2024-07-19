import React from 'react'
import "./TrustedPartner.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const companyData =[
    "/images/icons/partner-logo-1.svg",
    "/images/icons/partner-logo-2.svg",
    "/images/icons/partner-logo-1.svg",
    "/images/icons/partner-logo-2.svg",
    "/images/icons/partner-logo-1.svg",
    "/images/icons/partner-logo-2.svg",
    "/images/icons/partner-logo-1.svg",
    "/images/icons/partner-logo-2.svg",

]

function TrustedPartner() {
  return (
    <div className='TrustedPartner-container py-5'>
        <div className='container my-3 mb-5'>
            <div className='text-content text-center '>
                <h3 className='body-heading'>Collaborating with the Best in the Industry</h3>
                <p className='body-paragraph my-4'>At Creative Fusion, we believe in the power of collaboration.  </p>

            </div>

            <div className='partner-logo-carasoul mt-5'>
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

export default TrustedPartner