import React from 'react';
import Header from '../Header/Header';
import './CaseStudyInner.css';
import ScopeofWork from '../ScopeWork/ScopeofWork';
import TextContent from '../TextContent/TextContent';
import LatestProject from '../LatestProject/LatestProject';
import Footer from '../../screens/Footer';
import TextContentWork from '../NewTextContentWork/TextContentWork';

function CasestudyInner() {
  return (
    <>
    <div className="box multi-gradient blog-inner">
      <Header />
      <div className="content">
      <div className="text-section text-center text-lg-start">
        <div className='row'>
          <div className='col-lg-6 case-contentbox'>
          <h1 className='case-head'>Creative <br></br> Design Showcase</h1>
        
        <p className='case-para'>lorem ipsum balh so walhy gdja.</p>
          </div>
          <div className='col-lg-6'>
          <div className="bullet-text-section">
            <div className="left-text">
              CLIENT<span className='center-bullet'>•</span>John Smith
            </div>
          </div>
          <div className="gradient-line"></div>
          <div className="bullet-text-section">
            <div className="left-text">
              CATAGORY<span className='center-bullet'>•</span>John Smith
            </div>
          </div>
          <div className="gradient-line"></div> {/* Gradient line yahan shift ki */}
          <div className="bullet-text-section">
            <div className="left-text">
              DATE<span className='center-bullet'>•</span>Oct, 27-2023
            </div>
          </div>
        </div>
      </div>
          </div>

        </div>
        
          

      <div>
      <div className='image-section'>
                <img
                    src='images/creatives/case-study-inner-banner.png'
                    alt='Image Description'
                    className='small-image'

                />
                </div>
      <div className="caseheading text-center text-lg-start">
          <h2 className='case-h2'>Project Overview</h2>
          <p className='caseparagraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
      </div>

     
      
      </div>
    </div>
     <ScopeofWork />
     <TextContentWork
     imgg='/images/creatives/Mask Group 110-min.png'
      subHeading=""
      heading="Guaranted Excellence"
      headingright="Guaranted Excellence"
      paragraph="Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, ihasihfdidsahfiusahf sanidsaiufhsaiufhsiufhds jdnfhdfiudsahfiuhdsiufh dsjhfidshfiudshfiuds dsjfniudshf"
      btn={false}
      btnText=""
      shiftRow={true}
      listData={["Our Client satisfication is our ultimate goal, fosteringenduring creativepartnerships","Automotive" ,"Construction" ,"Technology"]}
     />
     
      <LatestProject />
      <Footer/>
     </>
  );
}

export default CasestudyInner;
