import React,{useState} from "react";
import "./Contactform.css";
// import axios from "axios"
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    // axios
    //   .post("/send-quote", {
    //     email: email,
    //     name:name,
    //     message:message,
    //     phone:phone,
    //     formType: "Get in Touch form",
    //   })
    //   .then((response) => {
    //     if (response.data.msg === "success") {
    //       setError(false);
    //       setSuccess("Message sended Successfully!");
    //       setLoading(false);
    //       setEmail("");
    //       setName("")
    //       setPhone("")
    //       setMessage('')
    //       window.open("/thank-you", '_blank');
    //     } else if (response.data.msg === "fail") {
    //       setSuccess(false);
    //       setError("Failed to send message, try again by reloading the page.");
    //       setLoading(false);
    //       setEmail("");
    //       setName("")
    //       setPhone("")
    //       setMessage('')
    //     }
    //   });
  };

  const handlePhoneChange = (e) => {
    // Allow only numeric values and limit the length
    const numericValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    const maxLength = 20; // Adjust as needed

    // Update state only if the value is within the specified range
    if (numericValue.length <= maxLength) {
      setPhone(numericValue);
    }
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(inputValue) || inputValue === '') {
      setName(inputValue);
    }
  };


  return (
    <div className="container">
        <div className="contact_section">
        <div className="row cont-special gy-4 gx-lg-6 d-flex align-items-center">
          <div className="col-md-6 contact-form-side-img-container" >
              <img src="/images/creatives/contact-form-img.png" className="img-fluid contact-form-side-img" alt="phone icon "/>
          </div>
          <div className="col-md-6">
            <div className="contact-details mb-4" >
              <p className="sub-heading"></p>
              <h2 className="body-heading mb-4 ">
              Let's Get In Touch
              </h2>
              <p className="body-paragraph">
              Got an idea or need a digital solution? Let's chat! Reach out to us and let's bring your vision to life.
              </p>
            </div>
            
            <div className="row gy-4">

              <div className="col-12">
                <form className="contact_form_form_container" onSubmit={formSubmitHandler}> 
                  <div className="row gy-4">
                    <div className="col-md-12 col-12">
                      <input
                        required
                        type="text"
                        value={name}
                        maxLength="40"
                        onChange={handleNameChange}
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="col-md-12 col-12">
                      <input
                        required
                        type="email"
                        value={email}
                        maxLength="36"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email Address"
                      />
                    </div>
                    <div className="col-md-12 col-12">
                      <input
                        required
                        type="tel"
                        value={phone}
                        maxLength="22"
                        onChange={handlePhoneChange}
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div className="col-md-12 col-12">
                      <input
                       required
                       type="text"
                       value={message}
                       maxLength="70"
                       onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write Message Here"
                      />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 button_col d-flex align-items-center justify-content-start">
                      <button type="submit" className="genral-btn btn-sub btn-red" >Submit
                      </button>
                      {loading ? (
                          <Spinner
                            animation="border"
                            role="status"
                            style={{ color: "white",marginLeft:"10px" }}
                          />
                    ) : (
                      success ? (
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
  );
};

export default Contactform;
