import React from 'react'
import "./ServiceCard.css"
import { useNavigate } from 'react-router-dom'

const cardData = [
    {
        img:'/images/icons/card-icon.svg',
        title:"Staging Planning",
        content:"We start with a thorough planning phase, where we understand your vision, set goals, and create a roadmap for your project. This ensures a clear and structured path to success.",
        link:"#",
    },
    {
        img:'/images/icons/card-icon.svg',
        title:"Content Creation",
        content:"Our talented team crafts engaging and relevant content that resonates with your audience. From text to visuals, we ensure every piece aligns with your brand's voice and message.",
        link:"#",
    },
    {
        img:'/images/icons/card-icon.svg',
        title:"Performance Marketing",
        content:"We drive traffic and engagement through targeted performance marketing strategies. Our campaigns are designed to reach the right audience and achieve measurable results.",
        link:"#",
    },
    {
        img:'/images/icons/card-icon.svg',
        title:"Analytics",
        content:"We believe in data-driven decisions. Our team continuously monitors your project’s performance, providing detailed analytics to track progress and identify areas for improvement.",
        link:"#",
    },
    {
        img:'/images/icons/card-icon.svg',
        title:"Optimization",
        content:"We refine and enhance your digital assets based on analytical insights. This ongoing process ensures your online presence remains effective and competitive.",
        link:"#",
    },
]

function ServiceCardBox({
    img='/images/icons/card-icon.svg',
    title="",
    content="",
    link=""

})
{
    const navigate = useNavigate()
    return(
        <div className='service-card text-center'>
            <img src={img} alt='card icon' className='img-fluid mb-4 mb-xxl-5'/>
            <h5 className='body-heading' style={{fontSize:"24px"}}>{title}</h5>
            <p className='body-paragraph my-4'>{content}</p>
            <p 
            className='service-card-anchor color-yellow'
            onClick={()=>{navigate(link)}}
            >
                Read More 
                <img src='/images/icons/arrow-right-yellow.svg' alt='arrow right '/>
            </p>
        </div>
    )
}

function ServiceCard() {
  return (
    <div className='ServiceCard-container py-5'>
        <div className='container my-3 my-xl-5'>
            <div className='text-content text-center'>
                <h3 className='body-heading'>Transforming Ideas into Digital Realities</h3>
                <p className='body-paragraph my-4'>At Creative Fusion, we follow an orderly full-cycle development process to ensure your online presence is both impactful and inspiring. <br></br>Discover our comprehensive approach to bringing your digital projects to life.</p>
            </div>

            <div className='row  pt-5 justify-content-center gy-5'>
                {
                    cardData.map((ele)=>{
                        return(
                            <div className='col-lg-4'>
                                <ServiceCardBox
                                    img={ele.img}
                                    title={ele.title}
                                    content={ele.content}
                                    link={ele.link}
                                />
                            </div>
                        )
                    })
                }
               

            </div>

        </div>
    </div>

  )
}

export default ServiceCard