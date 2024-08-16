import React from 'react';
import ServicesInnerHero from '../components/ServicesInnerHero/ServicesInnerHero';
import GivingShape from '../components/GivingShape/GivingShape';
import GratefulPartner from '../components/GratefulPartner/GratefulPartner';
import TextContent from '../components/TextContent/TextContent';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

function WebDevelopmentServices() {
    const navigate = useNavigate();
    return (
        <>
            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <ServicesInnerHero Heading="Web" yellowHeading="Development" Para="Step into the world of Web Development with us, where we collaborate to create a powerful online presence for your brand. From responsive websites to dynamic web applications, we're here for you. " heroBannerImg="/images/creatives/Web-Development-Hero.png" />
                </div>
            </div>

            <GivingShape Heading="Building the Foundation of Your Online Success" Discovery="We dive deep into your goals, audience, and market to unearth insights that shapes the foundation of your project." Design="Our team crafts visually stunning, user-friendly websites and web applications, ensuring your project is on point." Optimization="From strategic launches to continuous optimization, we ensure your web project reaches its full potential." ShapeHeadingOne="Discovery & Ideation" ShapeHeadingTwo="Design & Development"
                ShapeHeadingThree="Launch & Optimization" />

            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <GratefulPartner />
                </div>
            </div>

            <TextContent
                img="/images/creatives/Web-Development-Bottom.png"
                subHeading=""
                heading="Custom Web Development Solutions"
                paragraph="Your website is more than just an online presence; it's the digital face of your business. Through our custom web development process, we work closely with you to create a website that reflects your brand's personality, values, and goals. From responsive design to seamless navigation, we make it all happen. "
                btn={true}
                btnText="Contact Us"
                shiftRow={true}

            />

            <div className='box multi-gradient '>
                <div className='glass-box'>

                    <TextContent
                        img="/images/creatives/Web-Development-Bottom-two.png"
                        subHeading=""
                        heading="Innovative Web Design Solutions"
                        paragraph="Our innovative web design solutions are customized to meet your specific needs and objectives. Whether you need a sleek corporate site, a dynamic e-commerce platform, or an engaging web application, our team brings your ideas to life with creativity and precision.  "
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

export default WebDevelopmentServices;