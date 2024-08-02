import React from 'react';
import './BlogInner.css';
import Header from '../Header/Header';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import SubblogSection from '../SubBlogSections/SubblogSection';
import BlogPosting from '../BlogsMain/BlogPosting';
import './SubBlogPosting.css'
import Footer from '../../screens/Footer';


function BlogInner({text, blogContent, date, Heading}) {
 
  
  return (
    <>
    <div className="box multi-gradient blog-inner">
    {/* <div className='container'> */}
       
    <div className='container'>
      <div className="headset">
        <button className='blog-btn'>Technology</button>
        <h6>ByCreativeFusion</h6>
        <h6>{date}</h6>
      </div>
      <div className="main-heading">
        <h1 className='blog-head'>{Heading}</h1>
      </div>
      {/* <div className="image-container">
        <img src="images/creatives/blogbanner.png" alt="Centered" />
      </div> */}
      {/* <div className='blog-rest-content container'> */}
      <div className="subheading-container">
      <div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
      {blogContent.map((item) => (
        <>
          <h2 className="head-h2" style={{textTransform:"capatalize"}}>{item.heading}</h2>
          <div className={`para_main my-3`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
        </>
      ))}
      
        <div className="subheading-content">
        <div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
      {blogContent.map((item) => (
        <>
          <h2 className="head-h2" style={{textTransform:"capatalize"}}>{item.heading}</h2>
          <div className={`para_main my-3`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
        </>
      ))}
        </div>

        <div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
      {blogContent.map((item) => (
        <>
          <h2 className="head-h2" style={{textTransform:"capatalize"}}>{item.heading}</h2>
          <div className={`para_main my-3`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
        </>
      ))}
      

     
      {/* </div> */}

      
     
        <hr className="divider" />
        <div className="blog-content">
          <p className="footer-text">Share this post:</p>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
        <hr className="divider d-none d-lg-block" />
      </div>
      </div>
      </div>
   
      {/* <SubblogSection /> */}
      <BlogPosting heading="Latest Blogs" button="More Blogs"/>
     
      
      <div>
      </div>
      
     
      <Footer />
    
    </>

  );
}

export default BlogInner;
