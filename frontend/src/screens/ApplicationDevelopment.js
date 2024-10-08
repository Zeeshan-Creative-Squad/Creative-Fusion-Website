import React from 'react';
import ServicesInnerHero from '../components/ServicesInnerHero/ServicesInnerHero';
import GivingShape from '../components/GivingShape/GivingShape';
import GratefulPartner from '../components/GratefulPartner/GratefulPartner';
import TextContent from '../components/TextContent/TextContent';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function EcommerceDevelopment() {
    const navigate = useNavigate();
    return (
        <>
        <Helmet>
      <title>Best Mobile App Development Services Company in Karachi & Pakistan</title>
      <meta name="description" content="Partner with the best mobile app development company in Karachi. We offer custom app solutions, from design to deployment, tailored to your needs." />
    </Helmet>
            <div className='box multi-gradient '>
                <div className='glass-box'>

                    <ServicesInnerHero
                        Heading="Application "
                        yellowHeading="Development"
                        Para="Step into the world of Application Development with us, where we collaborate to create innovative and scalable digital solutions. From initial concept to deployment and maintenance, we're here for you. "
                        heroBannerImg="/images/creatives/Application-Hero.webp" />
                </div>
            </div>

            <GivingShape
                Heading="Turning Ideas into Functional Applications"
                ShapeHeadingOne="Discovery & Planning"
                Discovery="We dive deep into your requirements, target audience, and market dynamics to unearth insights that shape the foundation of your application strategy."
                Design="Our talented team architects and develops custom applications that are intuitive, secure, and optimized for performance across platforms."
                Optimization="From beta testing to final launch, we ensure your application meets the highest standards of functionality, usability, and reliability."
                ShapeHeadingTwo="Design & Development"
                ShapeHeadingThree="Testing & Optimization" />

            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <GratefulPartner />
                </div>
            </div>

            <TextContent
                img="/images/creatives/Application-One.webp"
                subHeading=""
                heading="Custom Application Solutions"
                paragraph="Your application is more than just software; it's a digital solution tailored to meet specific needs and deliver tangible results. Through our custom application solutions, we work closely with you to understand your objectives and develop applications that align with your business goals.   "
                btn={true}
                btnText="Contact Us"
                shiftRow={true}

            />

            <div className='box multi-gradient '>
                <div className='glass-box'>

                    <TextContent
                        img="/images/creatives/Application-Two.webp"
                        subHeading=""
                        heading="Innovative Development Techniques"
                        paragraph="Our innovative development techniques are customized to meet your unique challenges and objectives. Whether you need cloud integration, IoT solutions, or AI-powered applications, our team leverages the latest technologies to build scalable and future-proof applications.  "
                        btn={true}
                        btnText="Contact Us"
                        shiftRow={false}
                        transparentBg={true}

                    />
                    <div className='container py-5 text-center'>
                        <h3 className='body-heading ' style={{ textTransform: "capitalize", fontSize: "58px" }}>Let's👋work <br className='d-none d-lg-block'></br>together.</h3>

                        <button onClick={() => {
                            navigate("/contact")
                        }} className='genral-btn btn-red my-5'>Get A Custom Proposal</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EcommerceDevelopment;