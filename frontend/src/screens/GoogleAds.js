import React from 'react';
import ServicesInnerHero from '../components/ServicesInnerHero/ServicesInnerHero';
import GivingShape from '../components/GivingShape/GivingShape';
import GratefulPartner from '../components/GratefulPartner/GratefulPartner';
import TextContent from '../components/TextContent/TextContent';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

function GoogleAds() {
    const navigate = useNavigate();
  return (
    <>
        <div className='box multi-gradient '>
            <div className='glass-box'>
                <ServicesInnerHero Heading="Google" yellowHeading="Ads" Para="Step into the world of Google Ads with us, where we collaborate to create high-impact advertising campaigns. From keyword research to ad creation and optimization, we're here to ensure your brand reaches its target audience effectively." heroBannerImg="/images/creatives/GoogleAds-Hero.webp"/>
            </div>
        </div>

        <GivingShape Heading="Maximizing Your Ad Spend for Optimal Results" ShapeHeadingOne="Discovery & Strategy" Discovery="WWe dive deep into your business objectives, target audience, and competitive landscape to unearth insights that shape your project. " Design="Our talented team crafts compelling ads and manage your campaigns, ensuring they are optimized for maximum performance and ROI." Optimization="From monitoring ad performance to refining strategies, we ensure your campaigns reach their full potential." ShapeHeadingTwo="Ad Creation & Management" ShapeHeadingThree="Analysis & Optimization" />

        <div className='box multi-gradient '>
            <div className='glass-box'>
                <GratefulPartner/>
            </div>
        </div>

        <TextContent
            img="/images/creatives/GoogleAds-One.webp"
            subHeading=""
            heading="Targeted Advertising Solutions"
            paragraph="Your Google Ads campaigns are more than just advertisements; they are a crucial part of your marketing strategy. Through our targeted advertising solutions, we work closely with you to create ads that resonate with your target audience and drive meaningful results. "
            btn={true}
            btnText="Contact Us"
            shiftRow={true}
                 
        />
        
        <div className='box multi-gradient '>
            <div className='glass-box'>
                
            <TextContent
                img="/images/creatives/GoogleAds-One.webp"
                subHeading=""
                heading="Innovative Ad Campaigns"
                paragraph="Our innovative ad campaigns are customized to meet your specific needs and objectives. Whether you need search ads, display ads, or remarketing campaigns, our team brings your ideas to life with creativity and precision. "
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

export default GoogleAds;