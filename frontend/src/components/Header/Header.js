import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ darkBg = false }) => {
  const [menuState, setMenuState] = useState(false);
  const [isDropdownOpenDesk, setIsDropdownOpenDesk] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [imgurl, setImgurl] = useState(null)

  const navigate = useNavigate();
  const dropdownRef = useRef();



  const services = [
    { name: "Ads Management", image: "images/creatives/submenu.png", link: "/services/service1" },
    { name: "Call Intelligence", image: "images/creatives/submenu1.png", link: "/services/service2" },
    { name: "Local Services Ads", image: "images/creatives/submenu2.png", link: "/services/service3" },
    { name: "eCommerce", image: "images/creatives/submenu3.png", link: "/services/service4" },
    { name: "Video Marketing", image: "images/creatives/submenu4.png", link: "/services/service5" },
    { name: "Web Services", image: "images/creatives/submenu5.png", link: "/services/service6" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isDropdownOpenDesk) {
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
  };

  return (
    <div className={`header w-100`}>
      <div className="header-wrapper container">
        <nav className="navbar d-md-flex flex-md-row d-block">
          <nav className="navbar-container px-lg-0 px-2 py-2">
            <div className="nav-elements d-flex justify-content-between align-items-center px-lg-2">
              <input className="d-none" type="checkbox" id="menu-toggle" />
              <img src="/images/icons/nav-logo.png" className="nav-logo" onClick={() => { navigate("/") }} style={{ cursor: "pointer" }} />
              <nav>
                <ul className="nav-list d-lg-flex gap-5 align-items-center d-none main-nav p-0" id="js-menu">
                  <li>
                    <Link to={"/about"} className="nav-links font-play">About</Link>
                  </li>
                  <li>
                    <div className="navigation-dropdown" ref={dropdownRef}>
                      <div className="dropdown-trigger d-flex align-items-center" onClick={() => setIsDropdownOpenDesk(!isDropdownOpenDesk)}>
                        <span className="nav-links font-play">Services</span>
                        {/* <img src={`/images/icons/arrowrighticon.png ${isDropdownOpenDesk ? "b" : "w"}.svg`} className={isDropdownOpenDesk ? "rotate-icon arrow-icon" : "rotate-back arrow-icon"} alt="dropdown icon" /> */}
                      </div>
                      <div className={`dropdown-content  ${isDropdownOpenDesk ? 'open' : 'd-none'}`}>
                        <div className="d-flex align-item-center gap-5">
                          <div>
                        {services.map((service, index) => (
                          <div key={index}>
                            <Link
                              to={service.link}
                              className="nav-links font-play dropdown-item text-start"
                              onMouseEnter={() => {setHoveredItem(index); setImgurl(services[index].image) }}
                              onMouseLeave={() => {setHoveredItem(null); setImgurl(null)}}
                              onClick={() => { setIsDropdownOpenDesk(false); setMenuState(false); }}
                            >
                              <p className="itemsof-dropdown mb-0">{service.name}</p>
                            
                            </Link>
                          </div>
                        ))}
                        </div>
                        {imgurl && (
                              <img src={imgurl} alt={"service"} className="dropdown-image" />
                            )}
                      </div>
                      </div>

                    </div>
                  </li>
                  <li>
                    <Link to={"/casestudies"} className="nav-links font-play">Work</Link>
                  </li>
                  <li>
                    <Link to={"/"} className="nav-links font-play">Learn</Link>
                  </li>
                  <li>
                    <Link to={"/"} className="nav-links font-play">Become a Client</Link>
                  </li>
                </ul>
              </nav>
              <label value="menu-toggle" onClick={menuClick} className="responsive-menu-btn d-lg-none d-inline">
                <img src="/images/icons/hamburger-menu.png" className="img-fluid menu-btn" alt="menu" />
              </label>
              <div className="nav-buttton ml-5 d-lg-flex d-none gap-3 extras-btns">
                <button className="genral-btn btn-red" onClick={() => { navigate("/contact") }}>Contact Us</button>
              </div>
            </div>
          </nav>
          <nav className="responsive-popup-menu w-100">
            <div className="py-3 d-lg-none" style={{ display: menuState ? "block" : "none" }}>
              <ul className="resp-nav-list d-lg-none w-100 gap-4 hs-dropdown [--trigger:hover] pl-4" style={{ display: menuState ? "block" : "none" }}>
                <li>
                  <Link to={"/about"} className="nav-links font-play">About</Link>
                </li>
                <li>
                  <Link to={"/services"} className="nav-links font-play">Services</Link>
                </li>
                <li>
                  <Link to={"/casestudies"} className="nav-links font-play">Work</Link>
                </li>
                <li>
                  <Link to={"/"} className="nav-links font-play">Learn</Link>
                </li>
                <li>
                  <Link to={"/"} className="nav-links font-play">Become a Client</Link>
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