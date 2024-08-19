import React from 'react';
import BlogMain from '../components/BlogsMain/BlogMain';
import { Helmet } from 'react-helmet';

function Blog() {
    return (
        <>
         <Helmet>
      <title>Digital Insights & Trends - Creative Fusion Blogs & Articles</title>
      <meta name="description" content="Explore Creative Fusion's latest blogs and articles on Google Ads, UI/UX, SEO, eCommerce, performance marketing, and more. Stay informed and inspired." />
    </Helmet>
            <div className='box multi-gradient '>
                <div className='glass-box'>
                    <BlogMain />
                </div>
            </div>
        </>
    )
}

export default Blog