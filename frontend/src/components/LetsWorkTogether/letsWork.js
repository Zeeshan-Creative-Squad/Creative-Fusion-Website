import React from 'react';
import './letsWork.css'
import { useNavigate } from 'react-router-dom';

function LetsWork() {
  const navigate = useNavigate();
  return (
    <div className="letsWorkSection">
      <h2>
        Stay Informed, Stay Inspired <br /> Subscribe Now for the Latest  <span>Updates</span>
      </h2>
      <p>
        Don't miss out on our latest insights and inspiration. Subscribe to our newsletter and stay ahead in the digital world. Let’s connect!
      </p>
      <div className="buttonContainer">
        <button onClick={() => {
          navigate("/contact")
        }} className='lets-work-button'>Let's talk</button>
        <button className='lets-work-button'>Learn more</button>
      </div>
    </div>
  );
}

export default LetsWork;
