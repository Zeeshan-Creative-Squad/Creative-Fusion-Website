import React from 'react'
import ServicesInnerHero from '../components/ServicesInnerHero/ServicesInnerHero'
import GivingShape from '../components/GivingShape/GivingShape'
import GratefulPartner from '../components/GratefulPartner/GratefulPartner'
import TextContent from '../components/TextContent/TextContent'
import Footer from './Footer'

function ServciesInner() {
  return (
    <>
        <div className='box multi-gradient '>
            <div className='glass-box'>
                <ServicesInnerHero/>
            </div>
        </div>

        <GivingShape/>

        <div className='box multi-gradient '>
            <div className='glass-box'>
                <GratefulPartner/>
            </div>
        </div>

        <TextContent
            img="/images/creatives/services-inner-text-1.png"
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
                img="/images/creatives/services-inner-text-2.png"
                subHeading=""
                heading="Creative Design Solutions"
                paragraph="Our creative design solutions are customized to meet your specific needs and objectives. Whether you need a stunning website, eye-catching graphics, or engaging marketing materials, we bring your ideas to life with creativity and precision. "
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

export default ServciesInner