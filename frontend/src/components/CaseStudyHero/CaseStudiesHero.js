import React from 'react';
import './CaseStudiesHero.css';
import Header from '../Header/Header';
import CasestudyItem from '../CaseStudyItems/CasestudyItem';
import Pagination from '../Paginations/Pagination';
import Contactform from '../Contact Form/Contactform';
import Footer from '../../screens/Footer';

function CaseStudiesHero() {
    const caseStudies = [
        {
            image: '/images/creatives/image1.jpg',
            title: 'Creative Design <br/> Showcase',
            description: 'Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.'
        },
        {
            image: '/images/creatives/image1.jpg',
            title: 'Creative Design<br/> Showcase',
            description: 'Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.'
        },
        {
            image: '/images/creatives/item-case.png',
            title: 'Creative Design<br/> Showcase',
            description: 'Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.'
        },
        {
            image: '/images/creatives/case-item.png',
            title: 'Creative Design<br/> Showcase',
            description: 'Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.'
        }
    ];

    return (
        <div className='CaseStudiesHero-container d-flex flex-column'>
            <Header />
            <div className='content-container d-flex flex-column align-items-center justify-content-center'>
                <div className='text-content text-center'>
                    <h1 className='body-heading my-3'>
                        Our Case <span className='color-yellow'>Studies</span>
                    </h1>
                    <p className='body-paragraphh my-3'>
                    Know real-world examples of how Creative Fusion has helped businesses like yours achieve digital success.
                    </p>
                </div>
                <div className='case-studies-list'>
                    {caseStudies.map((study, index) => (
                        <CasestudyItem
                            key={index}
                            image={study.image}
                            title={study.title}
                            description={study.description}
                        />
                    ))}
                </div>
                <Pagination />
                <Contactform />
            </div>
            <Footer />
        </div>
    );
}

export default CaseStudiesHero;
