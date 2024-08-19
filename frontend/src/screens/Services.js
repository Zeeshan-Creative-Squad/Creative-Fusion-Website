import React from 'react'
import ServicesHero from '../components/ServicesHero/ServicesHero'
import ServicesTextContent from '../components/ServicesTextContent/ServicesTextContent'
import Contactform from '../components/Contact Form/Contactform'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

function Services() {
    return (
        <>
            <Helmet>
                <title>Creative Digital Solutions - Top Marketing Agency in Karachi</title>
                <meta name="description" content="Elevate your brand with the best digital marketing agency in Karachi. We offer expert services in SEO, Google Ads, web development, and more to help your business thrive." />
            </Helmet>
            <div>
                <div className='box multi-gradient'>
                    <div className='glass-box'>
                        <ServicesHero />
                    </div>
                </div>

                <ServicesTextContent
                    img="/images/creatives/services-text-1.png"
                    subHeading=""
                    heading="Web Development"
                    headingYellow=""
                    paragraph="Our websites are built to impress and perform. We design and develop fast, secure, and user-friendly websites customized to meet your business goals."
                    btn={false}
                    btnText=""
                    shiftRow={true}
                    listData={null}
                    reviewContent={false}
                    headingNumber="001"
                    button="Web Development"
                />

                <div className='box multi-gradient'>
                    <div className='glass-box'>
                        <ServicesTextContent
                            img="/images/creatives/services-text-2.png"
                            subHeading=""
                            heading="Social Media Marketing"
                            headingYellow=""
                            paragraph="Reach the full potential of social media with our customized marketing strategies. From content creation to audience engagement, we'll help you build a strong presence across platforms."
                            btn={false}
                            btnText=""
                            shiftRow={false}
                            listData={null}
                            reviewContent={false}
                            headingNumber="002"
                            transparentBg={true}
                            button="Social Media Marketing"
                        />
                    </div>
                </div>

                <ServicesTextContent
                    img="/images/creatives/services-text-3.png"
                    subHeading=""
                    heading="Google Ads"
                    headingYellow=""
                    paragraph="Maximize your online visibility and drive targeted traffic with our Google Ads expertise. Our team crafts strategic campaigns to ensure your ads reach the right audience at the right time."
                    btn={false}
                    btnText=""
                    shiftRow={true}
                    listData={null}
                    reviewContent={false}
                    headingNumber="003"
                    button="Google Ads"
                />

                <div className='box multi-gradient '>
                    <div className='glass-box'>
                        <ServicesTextContent
                            img="/images/creatives/services-text-4.png"
                            subHeading=""
                            heading="Search Engine Optimization"
                            headingYellow=""
                            paragraph="Increase your website's visibility and rank higher on search engine results pages with our SEO services. From keyword research to on-page optimization, we'll help you climb the ranks and attract organic traffic."
                            btn={false}
                            btnText=""
                            shiftRow={false}
                            listData={null}
                            reviewContent={false}
                            headingNumber="004"
                            transparentBg={true}
                            button="Search Engine Optimization"
                        />
                    </div>
                </div>

                <ServicesTextContent
                    img="/images/creatives/services-text-5.png"
                    subHeading=""
                    heading="Design & Branding"
                    headingYellow=""
                    paragraph="We create memorable brands that resonate with your audience. From logo design to complete brand identities, our team crafts visuals that tell your unique story."
                    btn={false}
                    btnText=""
                    shiftRow={true}
                    listData={null}
                    reviewContent={false}
                    headingNumber="005"
                    button="Design & Branding"
                />

                <div className='box multi-gradient '>
                    <div className='glass-box'>
                        <ServicesTextContent
                            img="/images/creatives/services-text-6.png"
                            subHeading=""
                            heading="Performance Marketing"
                            headingYellow=""
                            paragraph="Achieve measurable results with our performance marketing solutions. Whether it's lead generation or sales conversion, we use data-driven strategies to optimize your campaigns and maximize ROI."
                            btn={false}
                            btnText=""
                            shiftRow={false}
                            listData={null}
                            reviewContent={false}
                            headingNumber="006"
                            transparentBg={true}
                            button="Performance Marketing"
                        />
                    </div>
                </div>

                <ServicesTextContent
                    img="/images/creatives/services-text-7.png"
                    subHeading=""
                    heading="Ui/Ux Designing"
                    headingYellow=""
                    paragraph="Enhance user satisfaction with our expert UI/UX design. We create intuitive interfaces that ensure your digital products are a joy to use."
                    btn={false}
                    btnText=""
                    shiftRow={true}
                    listData={null}
                    reviewContent={false}
                    headingNumber="007"
                    button="UI UX Designing"
                />
                <div className='box multi-gradient'>
                    <div className='glass-box'>
                        <ServicesTextContent
                            img="/images/creatives/Ecommerce-Hero.webp"
                            subHeading=""
                            heading="E-commerce Development"
                            headingYellow=""
                            paragraph="Our team helps you level up your E-commerce store just the way you like it."
                            btn={false}
                            btnText=""
                            shiftRow={true}
                            listData={null}
                            reviewContent={false}
                            headingNumber="007"
                            transparentBg={true}
                            button="E-commerce Development"
                        />
                    </div>
                </div>
                <ServicesTextContent
                    img="/images/creatives/Application-Hero.webp"
                    subHeading=""
                    heading="Application Development"
                    headingYellow=""
                    paragraph="we provide best applications development services worldwide"
                    btn={false}
                    btnText=""
                    shiftRow={true}
                    listData={null}
                    reviewContent={false}
                    headingNumber="007"
                    button="Application development"
                />
                <div className='box multi-gradient '>
                    <div className='glass-box'>
                        <Contactform />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services