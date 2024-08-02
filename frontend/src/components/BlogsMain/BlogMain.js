import React from 'react';
import Header from '../Header/Header';
import Footer from '../../screens/Footer';
import "./BlogMain.css"
import BlogPosting from './BlogPosting';
import Pagination from '../Paginations/Pagination';
import LetsWork from '../LetsWorkTogether/letsWork';

function BlogMain() {
    return (
        <div className=' blogmain-container'>
            <Header />
            <div className='content-container d-flex flex-column align-items-center justify-content-center'>
                <div className='text-content text-center'>
                    <h1 className='body-heading my-3'>
                        Blogs & <span className='color-yellow'>Articles</span>
                    </h1>
                    <p className='body-paragraph my-3'>
                    Explore our collection of blogs and articles for valuable insights and inspiration on all things digital.
                    </p>
                </div>
            </div>
            <div className='image-section'>
                <img
                    src='images/creatives/blogbanner.png'
                    alt='Image Description'
                    className='small-image'

                />
                <div className='transparent-box'>
                    <button className="btn btn-primary">Technology</button>
                    <h2>The Power of Progressive</h2>
                    <h2>Web Apps</h2>
                    <div className='logo-container'>
                        <img src="/images/icons/danger.png" alt="Logo" className='logo-img' />
                        <h4 className='logo-text'>CreativeFusion | April 18, 2024</h4>
                    </div>
                </div>
            </div>
           
           <div>
            <BlogPosting heading={false}/>
            {/* <Pagination /> */}
            <LetsWork />
           </div>
           
            <Footer />
        </div>
    );
}

export default BlogMain;
