import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import TextContent from '../components/TextContent/TextContent'
import MyServices from '../components/MyServices/MyServices'
import LatestProject from '../components/LatestProject/LatestProject'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import TrustedPartner from '../components/TrustedPartner/TrustedPartner'
import BlogCard from '../components/BlogCard/BlogCard'
import Testimonials from '../components/Testimonials/Testimonials'
import Contactform from '../components/Contact Form/Contactform'
import Footer from './Footer'
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                <title>Top Digital Marketing Services Agency in Pakistan
                </title>
                <meta name="description" content="Top Digital Marketing Services Agency in Pakistan. Creative Fusion is your go-to digital marketing agency near you, offering expert solutions to elevate your brand.
" />
            </Helmet>
            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <HomeHero />
                </div>
            </div>
            <TextContent
                img="/images/creatives/Mask-Group-107.webp"
                subHeading="About Us"
                heading="Crafting Digital "
                headingAfterBr="Excellence Together"
                paragraph="We specialize in delivering best digital media solutions that empower businesses to thrive online. With a passionate team of experts, we blend creativity and technology to bring your ideas to life."
                btn={true}
                btnText="Learn More"
                shiftRow={false}
            />

            <MyServices />
            <LatestProject />
            <ServiceCard />
            <TrustedPartner />

            <TextContent
                img="/images/creatives/home-text-2.png"
                subHeading=""
                heading="Showcasing Success"
                headingAfterBr=" Across B2B & B2C "
                headingAfterBrmore="Industries"
                paragraph="Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,"
                btn={false}
                btnText=""
                shiftRow={true}
                listData={["Professional Sports", "Automotive", "Construction", "Technology", "Healthcare", "E-Commerce", "Hospitality", "Finance", "Real Estate", "Retail", "Education", "Legal"]}
            />

            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <BlogCard />
                </div>
            </div>

            <Testimonials />

            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <Contactform />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;