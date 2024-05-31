import React from 'react';
import "./SubblogSection.css"

function SubblogSection() {
  return (
    <>
    <div className='box multi-gradient '>
    <div className='subblogsection-main'>
    <div className=" header-box">
        <h2 className='head-primary'>Latest Blogs</h2>
        <button className="general-btn btn-red btn-pri">More blogs</button>
      </div>
      <div className='main-section'>
        <div className="row">
          <div className="col">
            <div className='transparency-box box-1'>
              <img src="images/creatives/blogcardimg.png" alt="Image" className='box-image' />
              <button className="btn btn-primary">Tech</button>
              <h2>The Powerof Progressive Web Apps</h2>
              <div className='logo-container'>
                <img src="images/icons/Group 1893.png" alt="Logo" className='logo-img' />
                <h4 className='logo-text'>CreativeFusion | April 18, 2024</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='transparency-box box-2'>
              <img src="images/creatives/blogcardimg.png" alt="Image" className='box-image' />
              <button className="btn btn-primary">Tech</button>
              <h2>The Powerof Progressive Web Apps</h2>
              <div className='logo-container'>
                <img src="images/icons/Group 1893.png" alt="Logo" className='logo-img' />
                <h4 className='logo-text'>CreativeFusion | April 18, 2024</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='transparency-box box-3'>
              <img src="images/creatives/blogcardimg.png" alt="Image" className='box-image' />
              <button className="btn btn-primary">Tech</button>
              <h2>The Powerof Progressive Web Apps</h2>
              <div className='logo-container'>
                <img src="images/icons/Group 1893.png" alt="Logo" className='logo-img' />
                <h4 className='logo-text'>CreativeFusion | April 18, 2024</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      
      </div>
    </>
  );
}

export default SubblogSection;
