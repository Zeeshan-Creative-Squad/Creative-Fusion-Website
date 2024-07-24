import React from 'react';
import ServicesInnerHero from '../components/ServicesInnerHero/ServicesInnerHero';
import GivingShape from '../components/GivingShape/GivingShape';
import GratefulPartner from '../components/GratefulPartner/GratefulPartner';
import TextContent from '../components/TextContent/TextContent';
import Footer from './Footer'

function PerformanceMarketing() {
  return (
    <>
        <div className='box multi-gradient '>
            <div className='glass-box'>
                <ServicesInnerHero Heading="Performance" yellowHeading="Marketing" Para="Step into the world of Performance Marketing with us, where we collaborate to drive measurable results for your brand. From data-driven strategies to ROI-focused campaigns, we're here for you. " heroBannerImg="/images/creatives/Performance-Hero.png"/>
            </div>
        </div>

        <GivingShape 
        Heading="Maximizing Your Marketing Performance" 
        ShapeHeadingOne="Discovery & Strategy" 
        Discovery="We dive deep into your business objectives, target audience, and competitive landscape to unearth insights that shape the foundation of your performance marketing strategy." 
        Design="Our talented team develops targeted campaigns, manage them meticulously, and optimize for maximum performance and ROI." 
        Optimization="From monitoring key performance indicators to refining strategies, we ensure your campaigns reach their full potential." ShapeHeadingTwo="Campaign Creation & Management" 
        ShapeHeadingThree="Analysis & Optimization" />

        <div className='box multi-gradient '>
            <div className='glass-box'>
                <GratefulPartner/>
            </div>
        </div>

        <TextContent
            img="/images/creatives/Performance-One.webp"
            subHeading=""
            heading="Data-Driven Marketing Solutions"
            paragraph="Your performance marketing campaigns are more than just ads; they are a crucial part of your business growth strategy. Through our data-driven marketing solutions, we work closely with you to create campaigns that resonate with your target audience and drive meaningful results. "
            btn={true}
            btnText="Contact Us"
            shiftRow={true}
                 
        />
        
        <div className='box multi-gradient '>
            <div className='glass-box'>
                
            <TextContent
                img="/images/creatives/Performance-Two.webp"
                subHeading=""
                heading="Innovative Marketing Techniques"
                paragraph="Our innovative marketing techniques are customized to meet your specific needs and objectives. Whether you need pay-per-click advertising, affiliate marketing, or programmatic advertising, our team brings your ideas to life with creativity and precision. "
                btn={true}
                btnText="Contact Us"
                shiftRow={false}
                transparentBg={true}
                    
            />
            <div className='container py-5 text-center'>
                <h3 className='body-heading ' style={{textTransform:"capitalize",fontSize:"58px"}}>Let's👋work <br className='d-none d-lg-block'></br>together.</h3>

                <button className='genral-btn btn-red my-5'>Get A Custom Proposal</button>
            </div>
            </div>
        </div>
<Footer />
    </>
  )
}

export default PerformanceMarketing;