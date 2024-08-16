import React from 'react';
import ServicesInnerHero from '../components/ServicesInnerHero/ServicesInnerHero';
import GivingShape from '../components/GivingShape/GivingShape';
import GratefulPartner from '../components/GratefulPartner/GratefulPartner';
import TextContent from '../components/TextContent/TextContent';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

function SocialMediaMarketing() {
    const navigate = useNavigate();
  return (
    <>
        <div className='box multi-gradient '>
            <div className='glass-box'>
                <ServicesInnerHero Heading="Social Media" yellowHeading="Marketing" Para="Step into the world of Social Media Marketing with us, where we collaborate to enhance your brand's presence across various social media platforms. From content creation to community management, we do it all. " heroBannerImg="/images/creatives/Social-Media-Marketing-Hero.png"/>
            </div>
        </div>

        <GivingShape Heading="Building a Strong Social Media Presence" ShapeHeadingOne="Discovery & Strategy" Discovery="We dive deep into your brand's identity, audience, and market to unearth insights that shape your project." Design="Our talented team crafts engaging, relevant content and manage your social media accounts, ensuring consistent and meaningful interactions with your audience." Optimization="From monitoring engagement metrics to refining strategies, we ensure your campaigns reach their full potential." ShapeHeadingTwo="Content Creation & Management" ShapeHeadingThree="Analysis & Optimization" />

        <div className='box multi-gradient '>
            <div className='glass-box'>
                <GratefulPartner/>
            </div>
        </div>

        <TextContent
            img="/images/creatives/Social-Media-Marketing-One.png"
            subHeading=""
            heading="Customized Social Media Strategies"
            paragraph="Your social media presence is more than just posts; it's a vital part of your brand's communication strategy. Through our customized social media strategies, we work closely with you to create content that reflects your brand's personality and values. "
            btn={true}
            btnText="Contact Us"
            shiftRow={true}
                 
        />
        
        <div className='box multi-gradient '>
            <div className='glass-box'>
                
            <TextContent
                img="/images/creatives/Social-Media-Marketing-Two.png"
                subHeading=""
                heading="Creative Social Media Solutions"
                paragraph="Our creative social media solutions are customized to meet your specific needs and objectives. Whether you need engaging posts, eye-catching graphics, or impactful social media campaigns, our team brings your ideas to life with creativity and precision. "
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

export default SocialMediaMarketing;