import React from 'react';
import "./MyServices.css";
import { useNavigate } from 'react-router-dom';

const cardData = [
    {
        icon: "/images/icons/service-card-1.png",
        title: "Branding",
        content: "We create memorable brands that resonate with your audience. From logo design to complete brand identities.",
        link: "/design-and-branding",
    },
    {
        icon: "/images/icons/service-card-2.png",
        title: "Web Development",
        content: "Our websites are built to impress and perform. We design and develop fast, secure, and user-friendly websites.",
        link: "/web-development",
    },
    {
        icon: "/images/icons/service-card-3.png",
        title: "E-Commerce Development",
        content: "Our team helps you level up your E-commerce store just the way you like it.",
        link: "/ecommerce-development",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "Application Development",
        content: "We provide best applications development services worldwide.",
        link: "/application-development",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "Ui/Ux Development",
        content: "We create intuitive interfaces that ensure your digital products are a joy to use.",
        link: "/uiux-development",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "SEO",
        content: "We create intuitive interfaces that ensure your digital products are a joy to use.",
        link: "/search-engine-optimization",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "Google Ads",
        content: "We create intuitive interfaces that ensure your digital products are a joy to use.",
        link: "/google-ads",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "Social Media Marketing",
        content: "We create intuitive interfaces that ensure your digital products are a joy to use.",
        link: "/social-media-marketing",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "Performance Marketing",
        content: "We create intuitive interfaces that ensure your digital products are a joy to use.",
        link: "/performance-marketing",
    },
];

function ServiceCard({
    icon,
    title,
    content,
    link = "#"
}) {
    const navigate = useNavigate();

    return (
        <div className='service-card-container p-4 mb-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-9'>
                        {/* ${title === "Branding" ? "color-red" : "color-white"}`}  */}
                        <h3 className="card-title mb-3" style={{ textTransform: "uppercase", color: "white" }}>{title}</h3>
                        <p className='body-paragraph card-content my-1'>{content}</p>
                    </div>
                    <div className='col-lg-3 icon-container d-flex align-items-start'> {/* Change col-3 to col-lg-3 */}
                        <button className='card-btn d-flex align-items-center justify-content-center d-none d-lg-block' onClick={() => { navigate(link) }}>
                            <img className='img-fluid card-btn-img' alt='service icon' src="/images/icons/btn-navigation.svg" />
                        </button>
                        <p
                            className='service-card-anchor color-yellow d-lg-none d-md-block'
                            onClick={() => { navigate(link) }}
                        >
                            Read More
                            <img src='/images/icons/arrow-right-yellow.svg' alt='arrow right' style={{ width: "18px" }} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

function MyServices() {
    return (
        <div className='MyServices-container py-5'>
            <div className='container my-5 py-2 pt-xxl-5'>
                <div className='main row '>
                    <div className='text-content col-lg-6 text-center text-lg-start'>
                        <h3 className='body-heading'>
                            Elevating Your Digital Presence with Expertise
                        </h3>
                        <p className='body-paragraph my-5 mx-auto mx-lg-0 mb-5'>We offer a comprehensive range of digital media solutions designed to help your business shine online. Explore our services and discover how we can transform your digital world.</p>
                        <div className='row'>
                            <div className='achievements'>
                                <div className='col-lg-3 col-md-4'>
                                    <h3 className='color-yellow story-stuff'>1600+</h3>
                                    <p className='body-paragraph story-subheading'>Projects Done</p>
                                </div>
                                <div className='col-1 '>
                                    <div className='stat-border-right'></div>
                                </div>
                                <div className='col-lg-3 col-md-4'>
                                    <h3 className='color-yellow story-stuff'>99%</h3>
                                    <p className='body-paragraph story-subheading'>Successful Clients</p>
                                </div>
                                <div className='col-1 '>
                                    <div className='stat-border-right'></div>
                                </div>
                                <div className='col-lg-3 col-md-4'>
                                    <h3 className='color-yellow story-stuff'>5.0</h3>
                                    <p className='body-paragraph story-subheading'>Google Ratings</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='sliding-card col-md-6'> {/* Change col-6 to col-md-6 */}
                        <div className='card-sized-box'>
                            {cardData.map((ele, index) => ( // Add key prop to avoid React warning
                                <ServiceCard
                                    key={index} // Add key prop
                                    icon={ele.icon}
                                    title={ele.title}
                                    content={ele.content}
                                    link={ele.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MyServices