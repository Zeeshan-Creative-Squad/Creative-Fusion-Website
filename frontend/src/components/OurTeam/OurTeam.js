import React from 'react'
import "./OurTeam.css"

function OurTeam() {
  return (
    <div className='OurTeam-container py-5'>
        <div className='container my-4'>
            <div className='row align-items-center'>
            <div className='col-lg-6 d-lg-none'>
                    <div className='text-content'>
                        <h3 className='body-heading mb-3'>Meet The Faces Behind Creative Fusion</h3>
                        <p className='body-paragraph mb-5' style={{lineHeight:"2.2"}}>At Creative Fusion, our team is our greatest asset. Comprised of talented individuals with diverse backgrounds and expertise, we are united by a shared passion for creativity and innovation. </p>
                        <p className='body-paragraph mb-5' style={{lineHeight:"2.2"}}>From designers to developers, marketers to strategists, each member of our team brings unique skills and perspectives to the table, allowing us to deliver unparalleled digital solutions that exceed expectations. Get to know the faces behind Creative Fusion and let us bring your vision to life. </p>

                    </div>

                </div>
                <div className='col-lg-3 col-sm-6'>
                    <div className='team-card text-center'>
                        <img src='/images/creatives/team-1.png' className='img-fluid' alt='team member'/>
                        <h5 className='body-paragraph mt-3' style={{ fontWeight: "bold", fontSize: "1.7rem" }}>Abdul Mouid</h5>

                        <p className='body-paragraph'>Design Lead</p>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-6'>
                    <div className='team-card text-center'>
                        <img src='/images/creatives/team-2.png' className='img-fluid' alt='team member'/>
                        <h5 className='body-paragraph mt-3' style={{fontWeight:"bold", fontSize: "1.7rem"}}>Haris Chandio</h5>
                        <p className='body-paragraph'>Content Writer</p>
                    </div>
                </div>

                <div className='col-lg-6 d-none d-lg-block'>
                    <div className='text-content'>
                        <h3 className='body-heading mb-3'>Meet The Faces Behind Creative Fusion</h3>
                        <p className='body-paragraph mb-5' style={{lineHeight:"2.2"}}>At Creative Fusion, our team is our greatest asset. Comprised of talented individuals with diverse backgrounds and expertise, we are united by a shared passion for creativity and innovation. </p>
                        <p className='body-paragraph mb-5' style={{lineHeight:"2.2"}}>From designers to developers, marketers to strategists, each member of our team brings unique skills and perspectives to the table, allowing us to deliver unparalleled digital solutions that exceed expectations. Get to know the faces behind Creative Fusion and let us bring your vision to life. </p>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default OurTeam