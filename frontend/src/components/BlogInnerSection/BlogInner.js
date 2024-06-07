import React from 'react';
import './BlogInner.css';
import Header from '../Header/Header';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import SubblogSection from '../SubBlogSections/SubblogSection';
import './SubBlogPosting.css'
import Footer from '../../screens/Footer';

function BlogInner() {
  return (
    <>
    <div className="box multi-gradient blog-inner">
        <Header />
      <div className="headset">
        <button className='blog-btn'>Technology</button>
        <h6>ByCreativeFusion</h6>
        <h6>March 15, 2024</h6>
      </div>
      <div className="main-heading">
        <h1 className='blog-head'>Top Web Design Trends 2024</h1>
      </div>
      <div className="image-container">
        <img src="images/creatives/blogbanner.png" alt="Centered" />
      </div>
      <div className="subheading-container">
      <h2 className='upperheading-h2'>Laudantium perferendis ad vel consequator dolorem deleniti</h2>
          <p className='upperpara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  </p>
      
        <div className="subheading-content">
          <h2 className='heading-h2'>Laudantium perferendis ad vel consequator dolorem deleniti</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
        </div>

        <p className='para-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, so thats the reason that why we are eligible</p>
      </div>

      <div className="subheading-work">
          <h2 className='heading-h2'>Laudantium perferendis ad vel consequator dolorem deleniti</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
      </div>

      {/* New section with horizontal lines, text, and social media icons */}
     
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
        <hr className="divider" />
      </div>
      <SubblogSection />
      
      <div>
      </div>
      <Footer />
    
    </>

  );
}

export default BlogInner;
