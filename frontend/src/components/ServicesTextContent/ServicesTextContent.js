import React from 'react'
import "./ServicesTextContent.css"
import { useNavigate } from 'react-router-dom'

function ServicesTextContent({
    img="",
    headingNumber="000",
    subHeading="",
    heading="",
    headingYellow,
    paragraph,
    btn=false,
    btnText,
    shiftRow=false,
    listData=null,
    transparentBg=false
}) {

    const navigate = useNavigate();

  return (
    <div className={`ServicesTextContent-container  py-5`}
        style={transparentBg ? {backgroundColor: "transparent" } : {backgroundColor: "#101010"}}
    >
        <div className='container my-xxl-5 my-4'>
            <div className={`main row align-items-center gy-3 ${shiftRow && "flex-row-reverse"} my-xxl-5`}>
                <div className='img-container col-lg-5 px-4'>
                    <img src={img} className='img-fluid' alt='text content ' />
                </div>

                <div className='text-content col-lg-6 text-center text-lg-start'>
                    {subHeading && <h6 className='color-red sub-heading mb-3'>{subHeading} _______</h6>}
                    <div className='d-flex gap-3 align-items-center'>

                        <div className='number-container text-center'>
                            <h2 className='color-white  font-bebus m-0'>
                                {headingNumber}
                            </h2>
                        </div>

                        <h3 className='font-bebus body-heading color-white m-0' >
                            {heading}{headingYellow&&<span className='color-yellow'>{headingYellow}</span>}
                        </h3>

                    </div>
                    <p className='body-paragraph content my-4' style={{lineHeight:"2"}}>{paragraph}</p>


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
                   
                   <div className='line-seprator my-3'></div>

                   <div className='d-flex align-items-center gap-3'>
                        <button className=' btn-transparent' onClick={()=>{navigate("/servicesinner")}}>Ui/Ux Design</button>
                        <button className=' btn-transparent' onClick={()=>{navigate("/servicesinner")}}>Web Development</button>
                        <button className=' btn-transparent' onClick={()=>{navigate("/servicesinner")}}>Ui/Ux Design</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesTextContent