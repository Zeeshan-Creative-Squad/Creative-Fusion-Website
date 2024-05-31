import React from 'react'
import "./TextCaseContent.css"

function TextCaseContent({
    subHeading = "",
    heading = "",
    headingright = "",
    headingYellow,
    paragraph,
    btn = false,
    btnText,
    shiftRow = false,
    listData = null,
    reviewContent = false,
    stat = false,
    transparentBg = false
}) {
    return (
        <div className='TextCaseContent-container'
            style={transparentBg ? { backgroundColor: "transparent" } : { backgroundColor: "#101010" }}
        >
            <div className='container my-4'>
                <div className={`main row align-items-center gy-3 ${shiftRow && "flex-row-reverse"}`}>
                    <div className='img-container col-lg-6 px-4'>
                        <h3 className='font-bebus cont-head' style={{ color: "white", fontWeight: "900", fontSize: "50px" }}>
                            {headingright}<br className='d-none d-lg-block '></br>
                        </h3>
                        {
                            listData &&
                            <div className='row'>
                                {listData.map((ele, index) => {
                                    return (
                                        <div key={index} className='col-12'> {/* Change col-lg-6 to col-12 to take full width */}
                                            <div className="d-flex align-items-center my-2 icon-list gap-2">
                                                <img src="/images/icons/list-card-bullets.png" alt="icon" className="list-bullet" />
                                                <p className="body-paragraph my-0 list-para">{ele}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        }
                        {btn && <button className='genral-btn btn-red mt-2'>{btnText}</button>}
                        {
                            reviewContent &&
                            <div>
                                <div className='d-flex gap-3 align-items-center '>
                                    <img src='/images/creatives/about-text-content-1.png' alt='person ' />

                                    <div>
                                        <p className='sub-heading color-red mb-0'>Salman Baig</p>
                                        <p className='body-paragraph mb-3'>Founder, CEO</p>
                                        <div className='d-flex gap-2'>
                                            <img src='/images/icons/rc-x-icon.svg' alt='social icon' />
                                            <img src='/images/icons/rc-insta-icon.svg' alt='social icon' />
                                            <img src='/images/icons/rc-fb-icon.svg' alt='social icon' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        }
                        {
                            stat &&
                            <img src="/images/icons/about-text-2-stats.png" alt='stat ' className='img-fluid' />
                        }
                    </div>

                    <div className='text-content col-lg-6 text-center text-lg-start'>
                       
                        <h3 className='font-bebus body-heading' style={{ color: "white", fontWeight: "900", fontSize: "50px" }}>
                            {heading}<br className='d-none d-lg-block'></br>
                        </h3>

                        <p className='body-paragraph my-4' style={{ lineHeight: "2.1", width: "580px" }}>{paragraph}</p>





                        {btn && <button className='genral-btn btn-red mt-2'>{btnText}</button>}
                        {
                            reviewContent &&
                            <div>
                                <div className='d-flex gap-3 align-items-center '>
                                    <img src='/images/creatives/about-text-content-1.png' alt='person ' />

                                    <div>
                                        <p className='sub-heading color-red mb-0'>Salman Baig</p>
                                        <p className='body-paragraph mb-3'>Founder, CEO</p>
                                        <div className='d-flex gap-2'>
                                            <img src='/images/icons/rc-x-icon.svg' alt='social icon' />
                                            <img src='/images/icons/rc-insta-icon.svg' alt='social icon' />
                                            <img src='/images/icons/rc-fb-icon.svg' alt='social icon' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextCaseContent;