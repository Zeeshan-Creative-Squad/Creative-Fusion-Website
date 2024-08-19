import React from 'react';
import ContactBanner from '../components/Contact Hero/ContactBanner'
import { Helmet } from 'react-helmet';

function Contact() {
  return (
    <>
    <Helmet>
      <title>Contact Creative Fusion - Top Digital Solutions in Karachi | Pakistan</title>
      <meta name="description" content="Get in touch with Creative Fusion for innovative digital solutions in Karachi & Pakistan. Let's start your journey to success. Contact us today!" />
    </Helmet>

    <div className='box multi-gradient '>
    <div className='glass-box'>
      <ContactBanner />
    </div>
  </div>
  </>
    
  )
}

export default Contact