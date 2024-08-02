import React from 'react'
import "./OurTeam.css";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Team = [
    {
        Img: "/images/creatives/team-1.png",
        name: "Abdul Mouid",
        title: "Design Lead"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Haris Chandio",
        title: "Content Writter"
    },

    // Add more team members here if needed
];

function OurTeam() {
    return (
        <div className='OurTeam-container py-5'>
            <div className='container my-4'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 d-lg-none'>
                        <div className='text-content'>
                            <h3 className='body-heading mb-3'>Meet The Faces Behind Creative Fusion</h3>
                            <p className='body-paragraph mb-5' style={{ lineHeight: "2.2" }}>At Creative Fusion, our team is our greatest asset. Comprised of talented individuals with diverse backgrounds and expertise, we are united by a shared passion for creativity and innovation. </p>
                            <p className='body-paragraph mb-5' style={{ lineHeight: "2.2" }}>From designers to developers, marketers to strategists, each member of our team brings unique skills and perspectives to the table, allowing us to deliver unparalleled digital solutions that exceed expectations. Get to know the faces behind Creative Fusion and let us bring your vision to life. </p>

                        </div>

                    </div>
                    <Swiper
                        spaceBetween={0}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}
                        modules={[Navigation, Autoplay, Parallax]}
                        observer={true}
                        observeParents={true}
                        parallax={true}
                        breakpoints={{
                            280: {
                                slidesPerView: 1,
                            },
                            1450: {
                                slidesPerView: 3,
                            }
                        }}
                        className="testimonials-list py-5 mt-2 d-lg-none"
                        id="testimonial-cards-slider"
                    >
                        {Team.map(({ Img, title, name }) => (
    <SwiperSlide key={title} className="px-3 px-sm-0 swiper-slide-div">
        <div className='col-lg-3 col-sm-6 d-lg-none d-md-block'>
            <div className='team-card text-center'>
                <img src={Img} className='img-fluid' alt='team member' />
                <h5 className='body-paragraph mt-3' style={{ fontWeight: "bold", fontSize: "1.7rem" }}>{name}</h5>
                <p className='body-paragraph'>{title}</p>
            </div>
        </div>
    </SwiperSlide>
))}

                    </Swiper>

                  

                    <div className='col-lg-6 d-none d-lg-block'>

                        <div className='text-content'>
                            <h3 className='body-heading mb-3'>Meet The Faces Behind Creative Fusion</h3>
                            <p className='body-paragraph mb-5' style={{ lineHeight: "2.2" }}>At Creative Fusion, our team is our greatest asset. Comprised of talented individuals with diverse backgrounds and expertise, we are united by a shared passion for creativity and innovation. </p>
                            <p className='body-paragraph mb-5' style={{ lineHeight: "2.2" }}>From designers to developers, marketers to strategists, each member of our team brings unique skills and perspectives to the table, allowing us to deliver unparalleled digital solutions that exceed expectations. Get to know the faces behind Creative Fusion and let us bring your vision to life. </p>

                        </div>

                    </div>
                    {Team.map(({ Img, title, name }) => (
                    <div key={title} className='col-lg-3 col-sm-6 d-lg-block d-none'>
            <div className='team-card text-center'>
                <img src={Img} className='img-fluid' alt='team member' />
                <h5 className='body-paragraph mt-3' style={{ fontWeight: "bold", fontSize: "1.7rem" }}>{name}</h5>
                <p className='body-paragraph'>{title}</p>
            </div>
        </div>
        ))}

                </div>

            </div>
        </div>
    )
}

export default OurTeam