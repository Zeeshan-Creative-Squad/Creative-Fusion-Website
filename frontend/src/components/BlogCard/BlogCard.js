import React from 'react'
import "./BlogCard.css"
import { Navigate, useNavigate } from 'react-router-dom'

function MainCard({
    img,
    date,
    titles,
    content,
    link
}) {
    const navigate = useNavigate();

    return (
        <div className='MainCard'>
            <img src={img} className='img-fluid' alt='blog thumbnail' />

            <p className='body-paragraph my-3 date color-red'>Design ___ {date}</p>

            <h3 className='titles color-white'>{titles}</h3>

            <p className='body-paragraph'>{content}</p>

            <p className='anchor color-yellow' onClick={() => { navigate(link) }}>
                Read Article
                <img src='/images/icons/arrow-right-yellow.svg' style={{ width: "40px", height: "22px" }} alt='arrow icon' />
            </p>
        </div>
    )
}

function SecondaryCard({
    img,
    date,
    title
}) {
    return (
        <div className='SecondaryCard mb-4'>
            <div className='row'>
                <div className='col-12 col-lg-5'>
                    <img src={img} alt='blog thumbnail' className='img-fluid image-of-secondaryCard' />
                </div>
                <div className='col-12 col-lg-7 design-date-content'>
                    <p className='body-paragraph mx-auto mb-2 date color-red'>Design ____
                    {date}</p>
                    <h3 className='title mx-auto color-white'>{title}</h3>
                </div>
            </div>
        </div>
    )
}

function BlogCard() {
  return (
        <div className='container'>
    <div className='BlogCard-container'>
            {/* <div className='main'> */}
                <div className='text-content'>
                    <div className='row gy-3'>
                        <div className='col-lg-6'>
                        <div className='col-lg-6 text-center text-lg-end d-none my-3 my-lg-0'>
                            <button className='genral-btn btn-red'>Our Blogs</button>
                        </div>
                            <h3 className='body-heading text-center text-lg-start font-bebus color-blue' >Insights and Inspiration for Your Digital Journey</h3>
                            <p className='body-paragraph text-center text-lg-start font-manrope'>Our content is designed to keep you informed and inspired.</p>
                        </div>
                        <div className='col-lg-6 text-center d-none d-lg-block text-lg-end my-3 my-lg-0'>
                            <button className='genral-btn btn-red'>Our Blogs</button>
                        </div>
                    </div>
                </div>

                <div className='row gy-3'>
                    <div className='col-lg-6'>
                        <MainCard
                            img="/images/creatives/blog-img-1.png"
                            date="Jan 30,2024"
                            titles="What is the right design tool to choose in 2024?"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elitl lacus enim"
                            link="#"
                        />

                    </div>

                    <div className='col-lg-6'>
                        <div className='d-flex flex-column secondary-card-div'>
                            <SecondaryCard
                                img="/images/creatives/side-blog-1.png"
                                date="Jan 30,2024"
                                title="Font sizes in Branding design: The complete guide to follow"
                            />
                            <SecondaryCard
                                img="/images/creatives/side-blog-2.png"
                                date="Jan 30,2024"
                                title="Font sizes in Branding design: The complete guide to follow"
                            />
                            <SecondaryCard
                                img="/images/creatives/side-blog-3.png"
                                date="Jan 30,2024"
                                title="Font sizes in Branding design: The complete guide to follow"
                            />
                        
                        </div>  
                    </div>

                </div>


            </div>


        </div>

    // </div>
  )
}

export default BlogCard;