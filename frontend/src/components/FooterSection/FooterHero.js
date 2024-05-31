import React from 'react';
import './FooterHero.css'; // You can create a CSS file for styling
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';



const FooterHero = () => {
    return (
        <footer className="footer">
            <div className='upper-section'>
            <div className="footer-section">
                {/* Place your website logo here */}
                <img src="images/icons/nav-logo.png" alt="Website Logo" className="logo" />
                <p className="footer-text">Empower your brand with Creative Fusion - your partner for innovative digital solutions. Let's create something extraordinary together. </p>
                <h3 className="footer-heading">Let's <span className='color-red'>Chat</span></h3>
            </div>

            {/* Part 2: Pages list */}
            <div className="footer-sectio w-auto">
                
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                </ul>
            </div>


            {/* Part 3: Contact information */}
            <div className="footer-section">
              
                <p className='specific-paragraph'><span className='span'>hello</span>@creativefusion.com</p>
                <p className='specific-paragraph'>+92<span className='span'>3001234567</span></p>
                <p className='specific-paragraph'>3rd Floor, Al-Ahmed plaza, University Rd, Block 13-C  <span className='span-block'> Gulshan-e-Iqbal, Karachi</span></p>
                {/* You can add Google Maps integration here */}
            </div>
            </div>
            {/* Part 1: Website logo, text, and heading */}
           

            <div className="blog-subfooter">
        <hr className="divider" />
        <div className="footer-content">
        <p className="p-text">&copy; 2024 CreativeFusion  |  All rights reserved</p>

          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
       
      </div>
            
            

           
        </footer>
    );
};

export default FooterHero;
