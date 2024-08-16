import React from 'react';
import ServicesInnerHero from '../components/ServicesInnerHero/ServicesInnerHero';
import GivingShape from '../components/GivingShape/GivingShape';
import GratefulPartner from '../components/GratefulPartner/GratefulPartner';
import TextContent from '../components/TextContent/TextContent';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

function UIUXDevelopment() {
    const navigate = useNavigate();
  return (
    <>
        <div className='box multi-gradient '>
            <div className='glass-box'>
                <ServicesInnerHero Heading="UIUX" yellowHeading="Development" Para="Step into the world of UI/UX Development with us, where we collaborate to create intuitive and engaging user experiences. From user research to interface design and usability testing, we're here for you. " heroBannerImg="/images/creatives/UIUX-Hero.png"/>
            </div>
        </div>

        <GivingShape 
        Heading="Designing Seamless and Enjoyable User Journeys" 
        ShapeHeadingOne="Discovery & Research" 
        Discovery="We dive deep into your target audience, user behaviors, and market trends to unearth insights that shape the foundation of your UI/UX strategy." 
        Design="Our talented team crafts visually appealing, user-friendly interfaces and ensure seamless interactions, creating a cohesive and enjoyable user journey." 
        Optimization="From usability testing to iterative improvements, we ensure they meet the highest standards of usability and performance." 
        ShapeHeadingTwo="Design & Development" 
        ShapeHeadingThree="Testing & Optimization" />

        <div className='box multi-gradient '>
            <div className='glass-box'>
                <GratefulPartner/>
            </div>
        </div>

        <TextContent
            img="/images/creatives/UIUX-One.webp"
            subHeading=""
            heading="User-Centric Design Solutions"
            paragraph="Your UI/UX design is more than just aesthetics; it's about creating meaningful interactions and delightful experiences. Through our user-centric design solutions, we work closely with you to understand your users' needs and design interfaces that resonate with them. "
            btn={true}
            btnText="Contact Us"
            shiftRow={true}
                 
        />
        
        <div className='box multi-gradient '>
            <div className='glass-box'>
                
            <TextContent
                img="/images/creatives/UIUX-Two.webp"
                subHeading=""
                heading="Innovative UI/UX Techniques"
                paragraph="Our innovative UI/UX techniques are customized to meet your specific needs and objectives. Whether you need a responsive website, a mobile app interface, or a comprehensive user experience overhaul, our team brings your ideas to life with creativity and precision. "
                btn={true}
                btnText="Contact Us"
                shiftRow={false}
                transparentBg={true}
                    
            />
            <div className='container py-5 text-center'>
                <h3 className='body-heading ' style={{textTransform:"capitalize",fontSize:"58px"}}>Let's👋work <br className='d-none d-lg-block'></br>together.</h3>

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

export default UIUXDevelopment;