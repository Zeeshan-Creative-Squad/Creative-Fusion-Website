import React from 'react';
import ServicesInnerHero from '../components/ServicesInnerHero/ServicesInnerHero';
import GivingShape from '../components/GivingShape/GivingShape';
import GratefulPartner from '../components/GratefulPartner/GratefulPartner';
import TextContent from '../components/TextContent/TextContent';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

function SearchEngineOptimization() {
    const navigate = useNavigate();
  return (
    <>
        <div className='box multi-gradient '>
            <div className='glass-box'>
                <ServicesInnerHero Heading="Search Engine" yellowHeading="Optimization" Para="Step into the world of SEO with us, where we collaborate to enhance your website's visibility on search engines. From keyword optimization to content creation and technical SEO, we're here for you. " heroBannerImg="/images/creatives/SEO-Hero-Services.webp"/>
            </div>
        </div>

        <GivingShape Heading="Elevating Your Website's Search Engine Performance" ShapeHeadingOne="Discovery & Strategy" Discovery="We dive deep into your business objectives, target audience, and competitive landscape to unearth insights that shape your project." Design="Our talented team optimizes your website's structure, enhances its content, and implement targeted keywords to improve search engine rankings and user experience." Optimization="From monitoring keyword performance to refining strategies, we ensure your website maintains its competitive edge." ShapeHeadingTwo="Optimization & Content Creation" ShapeHeadingThree="Analysis & Continuous Improvement" />

        <div className='box multi-gradient '>
            <div className='glass-box'>
                <GratefulPartner/>
            </div>
        </div>

        <TextContent
            img="/images/creatives/SEO-One.webp"
            subHeading=""
            heading="Comprehensive SEO Solutions"
            paragraph="Your SEO strategy is more than just keywords; it's a holistic approach to improving your online presence. Through our comprehensive SEO solutions, we work closely with you to optimize your website for search engines and enhance its overall performance. "
            btn={true}
            btnText="Contact Us"
            shiftRow={true}
                 
        />
        
        <div className='box multi-gradient '>
            <div className='glass-box'>
                
            <TextContent
                img="/images/creatives/SEo-Two.webp"
                subHeading=""
                heading="Innovative SEO Techniques"
                paragraph="Our innovative SEO techniques are customized to meet your specific needs and objectives. Whether you need local SEO, content marketing, or link building, our team brings your ideas to life with creativity and precision. "
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

export default SearchEngineOptimization;