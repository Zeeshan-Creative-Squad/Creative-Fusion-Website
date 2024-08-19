import React from 'react';
import ServicesInnerHero from '../components/ServicesInnerHero/ServicesInnerHero';
import GivingShape from '../components/GivingShape/GivingShape';
import GratefulPartner from '../components/GratefulPartner/GratefulPartner';
import TextContent from '../components/TextContent/TextContent';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function DesignAndBranding() {
    const navigate = useNavigate();
    return (
        <>
         <Helmet>
      <title>Top Branding & Logo Design Service Agency in Karachi - Pakistan</title>
      <meta name="description" content="Discover the top branding service agency in Pakistan. We offer expert logo design services for small businesses in Karachi to elevate your brand's identity online." />
    </Helmet>
            <div className='box multi-gradient '>
                <div className='glass-box'>

                    <ServicesInnerHero
                        Heading="Design &"
                        yellowHeading="Branding"
                        Para="Step into the world of Design & Branding with us, where we collaborate to define and refine your brand's identity. From logos to visual storytelling, we're here to empower your brand to stand out in the digital world."
                        heroBannerImg="/images/creatives/Branding-Hero.webp" />
                </div>
            </div>



            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <GivingShape
                        Heading="Giving Shape to Your Idea, Product, and Brand"
                        ShapeHeadingOne="Discovery & Ideation"
                        Discovery="We dive deep into your goals, audience, and market to unearth insights to shape your project."
                        Design="Our talented team crafts visually stunning designs and bring them to life with seamless development."
                        Optimization="From strategic launches to continuous optimization, we ensure your project reaches its full potential."
                        ShapeHeadingTwo="Design & Development"
                        ShapeHeadingThree="Launch & Optimization" />
                </div>
            </div>

            <TextContent
                img="/images/creatives/Branding-Bottom.webp"
                subHeading=""
                heading="Brand Identity Development"
                paragraph="Your brand is more than just a logo; it's the essence of your business. Through our brand identity development process, we work closely with you to define your brand's personality, values, and visual identity. From logo design to color palettes and typography, we create a cohesive brand identity."
                btn={true}
                btnText="Contact Us"
                shiftRow={true}

            />

            <div className='box multi-gradient '>
                <div className='glass-box'>

                    <TextContent
                        img="/images/creatives/Branding-Bottom-two.webp"
                        subHeading=""
                        heading="Creative Design Solutions"
                        paragraph="Our creative design solutions are customized to meet your specific needs and objectives. Whether you need a stunning website, eye-catching graphics, or engaging marketing materials, we bring your ideas to life with creativity and precision."
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

export default DesignAndBranding;