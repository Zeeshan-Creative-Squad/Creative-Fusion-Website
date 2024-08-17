import React, { useState, useEffect } from 'react';
import "./OurTeam.css";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/parallax';

const Team = [
    {
        Img: "/images/creatives/team-1.png",
        name: "Abdul Mouid",
        title: "Design Lead"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Haris Chandio",
        title: "Brand Manager"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Muhammad Zeeshan",
        title: "Mern Stack Developer"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Humaira Naz",
        title: "SEO Executive"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Hunain Khatri",
        title: "SEO Manager"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Haris Younus ",
        title: "Social Media Executive"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Safeer Choudhry",
        title: "Social Media Manager"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Owais Ahsen ",
        title: "Graphic Designer"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Alisha Bashir",
        title: "SEO Executive"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Saad Sabhee",
        title: "Web Developer"
    },
    {
        Img: "/images/creatives/team-1.png",
        name: "Muhammad Anas",
        title: "Senior PPC Specialist"
    },
    // Add more team members here if needed
];

function OurTeam() {
    const [loading, setLoading] = useState(true);
    const [serviceOptions, setServiceOptions] = useState([]);

    useEffect(() => {
        // Example API call
        fetch('/get_all_enum_services')
            .then(response => response.json())
            .then(data => {
                setServiceOptions(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='OurTeam-container py-5'>
            <div className='container my-4'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 d-lg-none'>
                        <div className='text-content'>
                            <h3 className='body-heading mb-3'>Meet The Faces Behind Creative Fusion</h3>
                            <p className='body-paragraph mb-5' style={{ lineHeight: "2.2" }}>
                                At Creative Fusion, our team is our greatest asset. Comprised of talented individuals with diverse backgrounds and expertise, we are united by a shared passion for creativity and innovation.
                            </p>
                            <p className='body-paragraph mb-5' style={{ lineHeight: "2.2" }}>
                                From designers to developers, marketers to strategists, each member of our team brings unique skills and perspectives to the table, allowing us to deliver unparalleled digital solutions that exceed expectations. Get to know the faces behind Creative Fusion and let us bring your vision to life.
                            </p>
                        </div>
                    </div>

                    {/* Mobile View Swiper */}
                    <Swiper
                        spaceBetween={10}
                        navigation
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Navigation, Autoplay, Parallax]}
                        observer={true}
                        observeParents={true}
                        parallax={true}
                        breakpoints={{
                            280: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="testimonials-list py-5 mt-2 d-lg-none"
                        id="testimonial-cards-slider"
                    >
                        {Team.map(({ Img, title, name }) => (
                            <SwiperSlide key={title} className="swiper-slide-div">
                                <div className='team-card text-center'>
                                    <img src={Img} className='img-fluid' alt={name} />
                                    <h5 className='body-paragraph mt-3' style={{ fontWeight: "bold", fontSize: "1.7rem" }}>{name}</h5>
                                    <p className='body-paragraph'>{title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Desktop View Swiper */}
                    <div className='col-lg-12 d-none d-lg-block text-center'>
                        <div className='text-content'>
                            <h3 className='body-heading mb-3'>Meet The Faces Behind Creative Fusion</h3>
                            <p className='body-paragraph' style={{ lineHeight: "2.2" }}>
                                At Creative Fusion, our team is our greatest asset. Comprised of talented individuals with diverse backgrounds and expertise, we are united by a shared passion for creativity and innovation. From designers to developers, marketers to strategists, each member of our team brings unique skills and perspectives to the table, allowing us to deliver unparalleled digital solutions that exceed expectations. Get to know the faces behind Creative Fusion and let us bring your vision to life.
                            </p>
                            {/* <p className='body-paragraph' style={{ lineHeight: "2.2" }}>
                                
                            </p> */}
                        </div>
                    </div>

                    {/* Another Swiper for Desktop View */}
                    <Swiper
                        spaceBetween={10}
                        navigation
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        modules={[Navigation, Autoplay, Parallax]}
                        observer={true}
                        observeParents={true}
                        parallax={true}
                        breakpoints={{
                            280: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="testimonials-list py-5 mt-2 d-none d-lg-block"
                        id="testimonial-cards-slider"
                    >
                        {Team.map(({ Img, title, name }) => (
                            <SwiperSlide key={title} className="swiper-slide-div">
                                <div className='team-card text-center'>
                                    <img src={Img} className='img-fluid' alt={name} />
                                    <h5 className='body-paragraph mt-3' style={{ fontWeight: "bold", fontSize: "1.7rem" }}>{name}</h5>
                                    <p className='body-paragraph'>{title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>
    );
}

export default OurTeam;
