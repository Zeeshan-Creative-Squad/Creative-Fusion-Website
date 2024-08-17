import React from 'react'
import AboutHero from '../components/AboutHero/AboutHero'
import TextContent from '../components/TextContent/TextContent'
import OurStory from '../components/OurStory/OurStory'
import OurTeam from '../components/OurTeam/OurTeam'
import Footer from './Footer'

function About() {
    return (
        <>
            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <AboutHero />
                </div>
            </div>

            <TextContent
                img="/images/creatives/about-text-1.png"
                subHeading=""
                heading="Meet Salman Baig, "
                headingAfterBr=" Founder of Creative Squad Inc"
                paragraph="As the founder of Creative Squad, I am passionate about helping businesses thrive in the digital world. With a background in technology and a keen eye for creativity, I established Creative Squad to provide innovative digital solutions customized to our clients' needs. <br><br> At Creative Squad, we believe in the power of collaboration and excellence. Our dedicated team works tirelessly to bring our clients' visions to life, ensuring every project is a success story. <br><br> With years of experience and a commitment to delivering exceptional results, Creative Squad is your trusted partner for all your digital needs. "
                btn={false}
                title='Salman Baig'
                designation="CEO of Creative Squad Inc."
                reviewContent={true}
                shiftRow={false}

            />

            <TextContent
                img="/images/creatives/about-text-1.png"
                subHeading=""
                heading="Meet Taha Sheikh, "
                headingAfterBr="  CEO of Creative Fusion (Pakistan & MENA Region) "
                paragraph="As the founder of Creative Fusion, I am passionate about helping businesses thrive in the digital world. With a background in technology and a keen eye for creativity, I established Creative Fusion to provide innovative digital solutions customized to our clients' needs. <br><br> At Creative Fusion, we believe in the power of collaboration and excellence. Our dedicated team works tirelessly to bring our clients' visions to life, ensuring every project is a success story. <br><br> With years of experience and a commitment to delivering exceptional results, Creative Fusion is your trusted partner for all your digital needs. "
                title="Taha Sheikh"
                designation="CEO of Creative Fusion."
                btn={false}
                reviewContent={true}
                shiftRow={true}
            />

            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <OurStory />
                </div>
            </div>


            <TextContent
                img="/images/creatives/about-text-2.png"
                subHeading=""
                heading="Our Performance Metrics"
                paragraph="At Creative Fusion, we pride ourselves on our commitment to transparency and accountability. Our performance metrics reflect our dedication to delivering results-driven digital solutions customized to each client's unique goals. "
                btn={false}
                stat={true}
                reviewContent={false}
                shiftRow={true}

            />

            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <OurTeam />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About