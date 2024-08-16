import React from 'react';
import './CasestudyItem.css';

function CaseStudyItem({ image, title, description }) {
    return (
        <div className='case-study-item d-flex'>
            <div className='image-container'>
                <img src={image} alt={title} />
            </div>
            <div className='text-container'>
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <a href='#' className='case-study-link'>
                    Case study <img src="images/icons/arrow-right-yellow.svg" alt="Arrow Icon" className='arrow-icon-caseStudy' />
                </a>
            </div>
        </div>
    );
}

export default CaseStudyItem;
