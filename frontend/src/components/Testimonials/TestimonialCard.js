
function TestimonialCard(props) {
 
  return (
    <div className="testimonial-card">
      {/* <img src={props.clientImg} alt="user" className="user-img" /> */}
      <div className="d-flex flex-column testbox">

        <img src="/images/icons/Saying-quotes.svg" className="mx-auto my-4" style={{width:"35px"}}/>
        <div className="testimonial-card-info pb-2">
          <div className="profile-info px-2 w-100">
            <p className="review-text mt-2">{props.clientReview}</p>
            <div className="testimonial-card-line-seprator mb-4"></div>
            {/* <img src="images/icons/stars-icon.svg" alt="rating icon" /> */}
            <h5 className="name color-yellow">{props.clientName}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard