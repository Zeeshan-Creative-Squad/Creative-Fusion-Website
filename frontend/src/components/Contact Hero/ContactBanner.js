import React, { useState, useEffect } from "react";
import "./ContactBanner.css";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SocialIcons from "../SocialMediaIcons/SocialIcons";
import Header from "../Header/Header";
import Footer from "../../screens/Footer";

const ContactBanner = () => {
  // State to manage which image to display
  const [displayedImage, setDisplayedImage] = useState("quaid"); // Default image
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      toggleImage();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [displayedImage]); // Dependency array

  const toggleImage = () => {
    setDisplayedImage(displayedImage === "quaid" ? "canada" : "quaid");
    setAnimate(true); // Trigger the animation
    setTimeout(() => setAnimate(false), 500);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    // Your form submission logic
  };

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    const maxLength = 20;
    if (numericValue.length <= maxLength) {
      setPhone(numericValue);
    }
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(inputValue) || inputValue === "") {
      setName(inputValue);
    }
  };

  return (
    <>
      <Header />
      <div className="contact_section flex-column standard-margin-space">
        <SocialIcons />
        <div className="container pt-5">
          <div className="row gy-4 gx-lg-5 d-flex align-items-center">
            <div className="col-md-6 contact-form-side-img-container">
              {displayedImage === "quaid" ? (
                <>
                  <h2 className="body-heading contact-heading2">Karachi</h2>
                  <p className="body-paragraph contact-notpara">+92 (321)12345678</p>
                  <p className="body-paragraph contact-notpara">info@creativefusion.com</p>
                  <p className="body-paragraph contact-para">3rd Floor, Al-Ahmed plaza, Block-C, Gulshan-e-Iqbal, Karachi</p>
                  <img
                    src="images/creatives/Group 1893.svg"
                    alt="Tomb of Quaid-e-Azam"
                    className={`image-Contact ${animate ? 'fade-in' : ''}`}
                  />
                </>
              ) : (
                <>
                  <h3 className="body-heading contact-heading2">Canada</h3>
                  <p className="body-paragraph contact-notpara">+92 (321)12345678</p>
                  <p className="body-paragraph contact-notpara">info@creativesquad.ca</p>
                  <p className="body-paragraph contact-para">2300 Yonge Street, Suite 1600 toronto</p>
                  <img
                    src="images/creatives/Group 1894.svg"
                    alt="Canada Place"
                    className={`image-Contact ${animate ? 'fade-in' : ''}`}
                  />
                </>
              )}
              <div className="third-image">
               
                <img className="img-fluid" src="images/creatives/Group 1896.svg" alt="Your Third Image" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-details mb-4">
                <h2 className="body-heading mb-4">
                  Let's Start Your Digital Journey <span>Together!</span>
                </h2>
                <p className="body-paragraph">
                  Ready to take the next step? Contact us today to discuss how we can help you achieve your digital goals.
                </p>
              </div>

                <div className="row gy-4">
                <div className="col-12">
                  <form className="contact_form_form_containers" onSubmit={formSubmitHandler}>
                    <div className="row gy-4">
                      <div className="col-md-12 col-12">
                        <input
                          required
                          type="text"
                          value={name}
                          maxLength="40"
                          onChange={handleNameChange}
                          placeholder="Full Name"
                        
                        />
                      </div>
                      <div className="col-md-6 col-12">
                        <input
                          required
                          type="email"
                          value={email}
                          maxLength="36"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="col-md-6 col-12">
                        <input
                          required
                          type="tel"
                          value={phone}
                          maxLength="22"
                          onChange={handlePhoneChange}
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-md-12 col-12">
                        <textarea
                          required
                          rows={5}
                          value={message}
                          maxLength="70"
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write Message Here"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-12 button_col d-flex align-items-center justify-content-start">
                        <button type="submit" className="genral-btn contact-btn btn-red w-100">
                          Submit
                        </button>

                        {loading ? (
                          <Spinner
                            animation="border"
                            role="status"
                            style={{ color: "white", marginLeft: "10px" }}
                          />
                        ) : success ? (
                          <div>
                            {setLoading(false)}
                            {alert(success)}
                            {setSuccess(false)}
                          </div>
                        ) : (
                          error && (
                            <div>
                              {setLoading(false)}
                              {alert(error)}
                              {setError(false)}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactBanner;
