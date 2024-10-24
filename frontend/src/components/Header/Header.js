import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ darkBg = false, props }) => {
  const [menuState, setMenuState] = useState(false);
  const [isDropdownOpenDesk, setIsDropdownOpenDesk] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [imgurl, setImgurl] = useState(null);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDropdownOpenServices, setIsDropdownOpenServices] = useState(false);


  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  const dropdownServices = useRef();
  const navigate = useNavigate();
  const dropdownRef = useRef();
  const triggerRef = useRef();

  const clickCountRef = useRef(0);

  const onClickService = (e) => {
    e.preventDefault();

    clickCountRef.current++;
    if (clickCountRef.current === 1) {
      setIsDropdownOpenServices(true);
    }
    else if (clickCountRef.current === 2) {
      setMenuState(false)
      setIsDropdownOpenServices(false)
      navigate("/services");
      clickCountRef.current = 0;
    }
  };





  const services = [
    { name: "Design & Branding", image: "images/creatives/Design-&-Branding.png", link: "/design-and-branding" },
    { name: "Web Development", image: "images/creatives/Web-Development.png", link: "/web-development" },
    { name: "Social Media Marketing", image: "images/creatives/Social-Media-Marketing.png", link: "/social-media-marketing" },
    { name: "Google Ads", image: "images/creatives/Google-Ads.png", link: "/google-ads" },
    { name: "SEO", image: "images/creatives/Search-Engine-Optimization.png", link: "/search-engine-optimization" },
    { name: "UIUX Development", image: "images/creatives/UI-UX.png", link: "/uiux-development" },
    { name: "Performance Marketing", image: "images/creatives/Performance-Marketing.png", link: "/performance-marketing" },
    { name: "Ecommerce Development", image: "images/creatives/Ecommerce-Development.png", link: "/ecommerce-development" },
    { name: "Application Development", image: "images/creatives/Application-Development.png", link: "/application-development" },
  ];


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !triggerRef.current.contains(event.target) && isDropdownOpenDesk) {
        setIsDropdownOpenDesk(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpenDesk]);

  const menuClick = () => {
    setMenuState((prev) => !prev);
  }

  return (
    <div className={`header w-100`}>
      <div className="header-wrapper container">
        <nav className="navbar d-md-flex flex-md-row d-block">
          <nav className="navbar-container px-lg-2 py-2">
            <div className="nav-elements d-flex justify-content-between align-items-center px-lg-2">
              <input className="d-none" type="checkbox" id="menu-toggle" />
              <img src="/images/icons/nav-logo.png" className="nav-logo" onClick={() => { navigate("/") }} style={{ cursor: "pointer" }} />
              <nav>
                <ul className="nav-list d-lg-flex gap-5 align-items-center d-none main-nav p-0" id="js-menu">
                  <li>
                    <Link to={"/about"} className="nav-links font-play">About</Link>
                  </li>
                  <li>
                    <div className="navigation-dropdown">
                      <div
                        className="dropdown-trigger d-flex align-items-center"
                        onMouseEnter={() => setIsDropdownOpenDesk(true)}
                        onMouseLeave={() => setIsDropdownOpenDesk(false)}
                        ref={triggerRef}
                      >
                        <Link to="/services" style={{ textDecoration: "none" }}> <span className="nav-links font-play">Services</span></Link>
                      </div>
                      <div
                        className={`dropdown-content ${isDropdownOpenDesk ? 'open' : 'd-none'}`}
                        onMouseEnter={() => setIsDropdownOpenDesk(true)}
                        onMouseLeave={() => setIsDropdownOpenDesk(false)}
                        ref={dropdownRef}
                      >
                        <div className="d-flex align-item-center gap-5">
                          <div>
                            {services.map((service, index) => (
                              <div key={index}>
                                <Link
                                  to={service.link}
                                  className="nav-links font-play dropdown-item text-start"
                                  onMouseEnter={() => { setHoveredItem(index); setImgurl(services[index].image); }}
                                  onMouseLeave={() => { setHoveredItem(index); setImgurl(services[index].image); }}
                                  onClick={() => { setIsDropdownOpenDesk(false); setMenuState(false); }}
                                >
                                  <p className="itemsof-dropdown mb-0">{service.name}</p>
                                </Link>
                              </div>
                            ))}
                          </div>
                          {imgurl && (
                            <img src={imgurl} alt="service" className="dropdown-image" style={{ width: "550px" }} />
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <Link to={"/casestudies"} className="nav-links font-play">Case Studies</Link>
                  </li> */}
                  {/* <li>
                    <Link to={"/"} className="nav-links font-play">Learn</Link>
                  </li> */}
                  <li>
                    <Link to={"/blog"} className="nav-links font-play">Blog</Link>
                  </li>
                  {/* <li>
                  <Link to={"/casestudies"} className="nav-links font-play">Case Studies</Link>
                </li> */}
                  <li>
                    <Link to={"/contact"} className="nav-links font-play">Become a Client</Link>
                  </li>
                </ul>
              </nav>
              <label value="menu-toggle" onClick={menuClick} className="responsive-menu-btn d-lg-none d-inline">
                {menuState ? (
                  <img src="/images/icons/cross-icon.png" alt="" /> // Cross icon (×)
                ) : (
                  <img src="/images/icons/hamburger-menu.png" alt="" /> // Hamburger icon (☰)
                )}
              </label>
              <div className="nav-buttton ml-5 d-lg-flex d-none gap-3 extras-btns">
                <button className="genral-btn btn-red" onClick={() => { navigate("/contact") }}>Contact Us</button>
              </div>
            </div>
          </nav>
          <nav className="responsive-popup-menu w-100">
            <div className="hamburger-icon d-lg-none" onClick={toggleMenu}>

            </div>
            <div className="py-3 d-lg-none navbar-box" style={{ display: menuState ? "block" : "none" }}>
              <ul className="resp-nav-list d-lg-none w-100 gap-4 hs-dropdown [--trigger:hover] pl-4" style={{ display: menuState ? "block" : "none", color: "white" }}>
                <li>
                  <Link to={"/about"} className="nav-links font-play">About</Link>
                </li>


                <div className="" ref={dropdownServices}>
                  <div
                    className="dropdown-mobile-trigger d-flex align-items-center"
                    onClick={onClickService}
                  >
                    <span className="nav-links font-play">Services</span>
                    {/* <img src={`/images/icons/arrowrighticon.png ${isDropdownOpenDesk ? "b" : "w"}.svg`} className={isDropdownOpenDesk ? "rotate-icon arrow-icon" : "rotate-back arrow-icon"} alt="dropdown icon" /> */}
                  </div>

                  <div className={`dropdown-mobile-topical-content ${isDropdownOpenServices ? 'open' : ''}`}>
                    <div className="d-flex align-items-center gap-5 mobile-view-dropdown">
                      <div>
                        {services.map((services, index) => (
                          <div key={index}>
                            <Link
                              to={services.link}
                              className="nav-links font-play dropdown-item text-start"
                              onClick={() => {
                                setIsDropdownOpenServices(false);
                                setMenuState(false);
                                props.hamburgerdropdown();
                              }}
                            >
                              <p className="itemsof-dropdown mb-0">{services.name}</p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>


                {/* <li>
                  <Link to={"/casestudies"} className="nav-links font-play">Work</Link>
                </li> */}
                <li>
                  <Link to={"/blog"} className="nav-links font-play">Blog</Link>
                </li>
                {/* <li>
                  <Link to={"/casestudies"} className="nav-links font-play">Case Studies</Link>
                </li> */}
                <li>
                  <Link to={"/contact"} className="nav-links font-play">Become a Client</Link>
                </li>
              </ul>


              <div className="nav-buttton flex-wrap d-flex gap-4 extras-btns">
                <button className="genral-btn btn-red" onClick={() => { navigate("/contact") }}>Contact Us</button>
              </div>
            </div>
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Header;
