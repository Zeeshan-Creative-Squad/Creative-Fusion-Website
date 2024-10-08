import React from 'react'
import "./TextContentWork.css"

function TextContentWork({
    img="",
    imgg="",
    subHeading="",
    heading="",
    headingAfterBr="",
    headingAfterBrmore="",
    headingYellow,
    paragraph,
    btn=false,
    btnText,
    shiftRow=false,
    listData=null,
    reviewContent=false,
    stat=false,
    transparentBg=false
}) {
  return (
    <div className='TextContent-containers'
    style={transparentBg ? {backgroundColor: "transparent" } : {backgroundColor: "#101010"}}
    >
        <div className='container my-4'>
            <div className={`main row align-items-center gy-3 ${shiftRow && "flex-row-reverse"}`}>
                <div className='img-container col-lg-6 px-4'>
                    <img src={imgg} className='img-fluid' alt='text content ' />
                    {/* <img src={imgg} className='img-fluid imgg-style' alt='text content ' /> */}
                </div>

                <div className='text-content col-lg-6 text-center text-lg-start'>
                    {subHeading && <h6 className='color-red sub-heading mb-3'>{subHeading} _______</h6>}
                    <h3 className='font-bebus body-heading' style={{color:"white", fontWeight: "900", fontSize: "50px"}}>
                        {heading}<br className='d-none d-lg-block'></br>
                        {headingAfterBr}{headingYellow&&<span className='color-yellow'>{headingYellow}</span>}
                        {headingAfterBrmore}{headingYellow&&<span className='color-yellow'>{headingYellow}</span>}
                    </h3>
                    <p
        className='body-paragraph my-4'
        style={{ lineHeight: '2.1', width: '580px' }}
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />


                    {
                        listData &&
                        <div className='row'>
                            {listData.map((ele)=>{
                                return(
                                    <div className='col-lg-6'>
                                        <div class="d-flex align-items-center  my-2 icon-list gap-2 " ><img src="/images/icons/list-card-bullets.png" alt="icon" class="list-bullet"/><p class="body-paragraph my-0 list-para">{ele}</p></div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                    

                    {btn && <button className='genral-btn btn-red mt-2'>{btnText}</button>}
                    {
                        reviewContent &&
                        <div>
                            <div className='d-flex gap-3 align-items-center '>
                                <img src='/images/creatives/about-text-content-1.png' alt='person '/>

                                <div>
                                    <p className='sub-heading color-red mb-0'>Salman Baig</p>
                                    <p className='body-paragraph mb-3'>Founder, CEO</p>
                                    <div className='d-flex gap-2'>
                                        <img src='/images/icons/rc-x-icon.svg' alt='social icon'/>
                                        <img src='/images/icons/rc-insta-icon.svg' alt='social icon'/>
                                        <img src='/images/icons/rc-fb-icon.svg' alt='social icon'/>
                                    </div>
                                </div>

                             </div>   
                        </div>
                    }

                    {
                        stat &&
                        <img src="/images/icons/about-text-2-stats.png" alt='stat ' className='img-fluid'/>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TextContentWork