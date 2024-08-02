import React from 'react';
import "./FooterHero.css";
import { Link, useNavigate } from "react-router-dom";

const FooterHero = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="footer">
            <div className='container'>
                <div className='upper-section'>
                    <div className="footer-section">
                        <img src="/images/icons/nav-logo.png" alt="Website Logo" className="logo" />
                        <p className="footer-text">Empower your brand with Creative Fusion - your partner for innovative digital solutions. Let's create something extraordinary together. </p>
                        <h3 className="footer-heading">Let's <span className='span'>Chat</span></h3>
                        
                    </div>

                    <div className="footer-sect">
                        <ul className='ul-segment'>
                            <h2 className='head-h1'>QuickLinks</h2>
                            <li onClick={() => handleClick("/")}><span className='span-hover'>Home</span></li>
                            <li onClick={() => handleClick("/about")}><span className='span-hover'>About</span></li>
                            <li onClick={() => handleClick("/services")}><span className='span-hover'>Services</span></li>
                            <li onClick={() => handleClick("/casestudies")}><span className='span-hover'>Case Studies</span></li>
                            <li onClick={() => handleClick("/blog")}><span className='span-hover'>Blogs</span></li>
                        </ul>
                    </div>
                    <div className="footer-second-section">
                        <ul className='ul-segment-second pl-0'>
                            <h2 className='head-h1'>Terms & Updates</h2>
                            <li onClick={() => handleClick("/contact")}><span className='span-hover'>Refund Policy</span></li>
                            <li onClick={() => handleClick("/privacy-policy")}><span className='span-hover'>Privacy Policy</span></li>
                        </ul>
                    </div>

                    <div className="footer-section-right">
                        <p className='specific-paragraph'>
                        <span className='span'>hello</span>@creativefusion.com
                        </p>
                        <p className='specific-paragraph d-none d-lg-block'>
                        +92<span className='span'>3001234567</span>
                        </p>

                        <p className='specific-paragraph d-lg-none d-md-none d-block'>
                        +92<span className='span'>3001234567</span>
                        </p>


                        <p className='specific-paragraph'>
                        3rd Floor, Al-Ahmed plaza, University Rd, Block 13-C<br />
                        <span className='span-block'>Gulshan-e-Iqbal, Karachi</span>
                        </p>
                    </div>
                </div>

                <div className="blog-subfooter">
                    <hr className="divider" />
                    <div className="footer-content">
                        <p className="p-text">&copy; 2024 Creative Fusion  |  All rights reserved</p>
                        <div className="social-icons-bottom">
                        <img src="/images/icons/Icon-awesome-cc-visa.svg" alt="Facebook" className="icons" />
            <img src="/images/icons//Icon-awesome-stripe.svg" alt="Instagram" className="icons" />
            <img src="/images/icons//Icon-awesome-amazon-pay.svg" alt="Twitter" className="icons" />
            <img src="/images/icons//Icon-awesome-cc-mastercard.svg" alt="LinkedIn" className="icons" />
            <img src="/images/icons//Icon-awesome-paypal.svg" alt="LinkedIn" className="icons" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterHero;
