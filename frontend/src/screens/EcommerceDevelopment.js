import React from 'react';
import ServicesInnerHero from '../components/ServicesInnerHero/ServicesInnerHero';
import GivingShape from '../components/GivingShape/GivingShape';
import GratefulPartner from '../components/GratefulPartner/GratefulPartner';
import TextContent from '../components/TextContent/TextContent';
import Footer from './Footer'

function EcommerceDevelopment() {
  return (
    <>
        <div className='box multi-gradient '>
            <div className='glass-box'>

                <ServicesInnerHero 
                Heading="E-Commerce" 
                yellowHeading="Development" 
                Para="Step into the world of E-commerce Development with us, where we collaborate to create a powerful and seamless online shopping experience. From platform selection to custom development and optimization, we're here for you." 
                heroBannerImg="/images/creatives/Ecommerce-Hero.webp"/>
            </div>
        </div>

        <GivingShape 
        Heading="Creating a User-Friendly Online Store" 
        ShapeHeadingOne="Discovery & Strategy" 
        Discovery="We dive deep into your business objectives, target audience, and market trends to unearth insights that shape the foundation of your e-commerce strategy." 
        Design="Our talented team crafts visually appealing, user-friendly e-commerce sites that are optimized for performance and scalability, ensuring a seamless shopping experience for your customers." 
        Optimization="From strategic launches to continuous optimization, we ensure your store reaches its full potential." 
        ShapeHeadingTwo="Design & Development" 
        ShapeHeadingThree="Launch & Optimization" />

        <div className='box multi-gradient '>
            <div className='glass-box'>
                <GratefulPartner/>
            </div>
        </div>

        <TextContent
            img="/images/creatives/Ecommerce-One.webp"
            subHeading=""
            heading="Custom E-commerce Solutions"
            paragraph="Your e-commerce site is more than just a platform; it's a crucial part of your sales strategy. Through our custom e-commerce solutions, we work closely with you to create a site that reflects your brand's personality and meets your business needs.  "
            btn={true}
            btnText="Contact Us"
            shiftRow={true}
                 
        />
        
        <div className='box multi-gradient '>
            <div className='glass-box'>
                
            <TextContent
                img="/images/creatives/Ecommerce-Two.webp"
                subHeading=""
                heading="Innovative E-commerce Techniques"
                paragraph="Our innovative e-commerce techniques are customized to meet your specific needs and objectives. Whether you need a comprehensive online store, a mobile commerce solution, or seamless integration with existing systems, our team brings your ideas to life with creativity and precision. "
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

export default EcommerceDevelopment;