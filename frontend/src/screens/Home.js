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

function Home() {
  return (
    <>
        <div className='box multi-gradient '>
            <div className='glass-box'>
                <HomeHero/>
            </div>
        </div>
        <TextContent
            img="/images/creatives/home-text-1.png"
            subHeading="About Us"
            heading="Crafting Digital "
            headingAfterBr="Excellence Together"
            paragraph="At Creative Fusion, we specialize in delivering top-notch digital media solutions that empower businesses to thrive online. With a passionate team of experts, we blend creativity and technology to bring your ideas to life, ensuring your digital presence is both powerful and engaging."
            btn={true}
            btnText="Learn More"
            shiftRow={false}
        />

        <div className='box multi-4-gradient '>
            <div className='glass-box'>
                <MyServices/>

                <div style={{height:"40px"}}></div>
                <LatestProject/>

                <ServiceCard/>

                <TrustedPartner/>
            </div>
        </div>

        <TextContent
            img="/images/creatives/home-text-2.png"
            subHeading=""
            heading="Showcasing Success"
            headingAfterBr=" Across B2B & B2C "
            headingAfterBrmore="Industries"
            paragraph="Creative Fusion takes pride in our diverse portfolio, serving both B2B and B2C clients across various industries. Our expertise spans from professional sports to healthcare, and from real estate to technology, demonstrating our ability to adapt and excel in different fields."
            btn={false}
            btnText=""
            shiftRow={true}
            listData={["Professional Sports","Automotive" ,"Construction" ,"Technology","Healthcare","E-Commerce" ,"Hospitality","Finance" ,"Real Estate","Retail" ,"Education","Legal"]}
                 
        />

        <div className='box multi-gradient '>
            <div className='glass-box'>
               <BlogCard/>
            </div>
        </div>

        <Testimonials/>

        <div className='box multi-gradient '>
            <div className='glass-box'>
               <Contactform/>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Home