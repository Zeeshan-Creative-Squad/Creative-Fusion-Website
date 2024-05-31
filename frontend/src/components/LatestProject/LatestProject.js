import React from 'react'
import "./LatestProject.css"

function CardBox({
    img,
    title="",
    catagory="",
    content="",

}) {
    return(
        
        <div className='CardBox-container p-5 my-xxl-5 my-4'>
            <div className='row align-items-center m-xxl-4'>
                <div className='col-lg-6'>
                    <img src={img} alt='case study thumbnail' className='img-fluid card-thumb'/>
                </div>

                <div className='col-lg-6'>

                    <div className='text-content'>
                        <h3 className='body-heading '>{title}</h3>
                        <p className='body-paragraph my-5' >{content}</p>

                        <p className='anchor color-red'>Read Full Case Study <img src='/images/icons/arrow-right.svg' alt='arrow design'/></p>
                    </div>

                </div>

            </div>

            <div className='row mt-5'>
                <div className='col-lg-6'>
                    
                    {/* <p className='body-paragraph color-yellow' style={{color:"#f58e09"}}>{catagory}</p> */}
                </div>

                <div className='col-lg-6'>
                    
                </div>
            </div>

        </div>
    )
}

function LatestProject() {
  return (
    <div className='box multi-gradient '>
    <div className='LatestProject-container'>
        <div className='container project-main'>
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <h3 className='body-heading'>Latest Projects</h3>
                </div>
                <div className='col-lg-6 text-center text-lg-end'>
                    <button className='genral-btn btn-red'>Our Case Studies</button>

                </div>
                
            </div>
            

            <CardBox
                img={"/images/creatives/case-study-card-1.png"}
                title="Di- Coin Crypto Dashboard Design"
                catagory="Charu Immigration"
                content="Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, quis viverra ornare, eros dolor et interdum nulla"
            />
            </div>

        </div>
    </div>
  )
}

export default LatestProject