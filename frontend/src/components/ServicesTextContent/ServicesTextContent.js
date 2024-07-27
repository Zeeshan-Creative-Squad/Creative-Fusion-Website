import React from "react";
import "./ServicesTextContent.css";
import { useNavigate } from "react-router-dom";

function ServicesTextContent({
  img = "",
  headingNumber = "000",
  subHeading = "",
  heading = "",
  headingYellow,
  paragraph,
  btn = false,
  btnText,
  shiftRow = false,
  listData = null,
  transparentBg = false,
  button,
}) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    switch (button) {
      case "Application-Development":
        navigate("/application-development");
        break;
      case "Web Development":
        navigate("/web-development");
        break;
      case "Social Media Marketing":
        navigate("/social-media-marketing");
        break;
      case "Google Ads":
        navigate("/google-ads");
        break;
      case "Search Engine Optimization":
        navigate("/search-engine-optimization");
        break;
      case "ServicesInner":
        navigate("/servicesinner");
        break;
      case "Performance Marketing":
        navigate("/performance-marketing");
        break;
      case "UIUX Development":
        navigate("/uiux-development");
        break;
      case "E-commerce Development":
        navigate("/ecommerce-development");
        break;
      
      default:
        navigate("/application-development"); // Default route if no match
    }
  };
  return (
    <div
      className={`ServicesTextContent-container py-5`}
      style={
        transparentBg
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#101010" }
      }
    >
      <div className="container my-xxl-5 my-4">
        <div
          className={`main row align-items-center gy-3 ${
            shiftRow && "flex-row-reverse"
          } my-xxl-5`}
        >
          <div className="img-container col-md-5 px-4">
            <img src={img} className="img-fluid" alt="text content" />
          </div>
          <div className="text-content col-md-6 text-center text-md-start">
            {subHeading && (
              <h6 className="color-red sub-heading mb-3">
                {subHeading} _______
              </h6>
            )}
            <div className="d-flex gap-3 align-items-center">
              <div className="number-container text-center">
                <h2 className="color-white font-bebus m-0">{headingNumber}</h2>
              </div>
              <h3 className="font-bebus body-heading color-white m-0">
                {heading}
                {headingYellow && (
                  <span className="color-yellow">{headingYellow}</span>
                )}
              </h3>
            </div>
            <p
              className="body-paragraph content my-4"
              style={{ lineHeight: "2" }}
            >
              {paragraph}
            </p>
            {listData && (
              <div className="row">
                {listData.map((ele, index) => (
                  <div className="col-12 col-lg-6" key={index}>
                    <div className="d-flex align-items-center my-2 icon-list gap-2">
                      <img
                        src="/images/icons/list-card-bullets.png"
                        alt="icon"
                        className="list-bullet"
                      />
                      <p className="body-paragraph my-0 list-para">{ele}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {btn && (
              <button className="genral-btn btn-red mt-2">{btnText}</button>
            )}
            <div className="line-seprator my-3"></div>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <button className="btn-transparent" onClick={handleNavigation}>
                {button}{" "}
              </button>
              {/* <button className='btn-transparent' onClick={() => { navigate("/servicesinner") }}>Ui/Ux Design</button>
                            <button className='btn-transparent' onClick={() => { navigate("/servicesinner") }}>Ui/Ux Design</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesTextContent;
