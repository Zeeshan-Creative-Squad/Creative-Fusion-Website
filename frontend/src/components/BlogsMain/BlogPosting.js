import React, { useState } from "react";
import { Link } from "react-router-dom";
import './BlogPosting.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardBox from "./CardBox";

const cardDataOlevel = [
  {
    cardImg: "./images/creatives/blogcardimg.png",
    title: "The Power of Progressive Web apps",

  },
  {
    cardImg: "./images/creatives/blogcardimg.png",
    title: "The Power of Progressive Web apps",

  },
  {
    cardImg: "./images/creatives/blogcardimg.png",
    title: "The Power of Progressive Web apps",

  },
  {
    cardImg: "./images/creatives/blogcardimg.png",
    title: "The Power of Progressive Web apps",

  }
];

function BlogPosting(props) {
  const [cat, setCat] = useState("O - Level");

  return (
    <div className='CourseCard-container'>
      <div className="container my-5">
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <h3 className='body-heading'>{props.heading}</h3>
          </div>
          <div className='col-lg-6 text-center text-lg-end'>
            {props.button && (
              <Link to="/casestudies" className="link-no-underline">
                <button className='btn-blog-red d-lg-inline d-none'>{props.button}</button>
              </Link>
            )}
          </div>
          <div className='col-lg-6 text-center d-lg-none mb-5'>
            {props.button && (
              <Link to="/casestudies" className="link-no-underline">
                <button className='genral-btn btn-blog-red text-center d-lg-block'>{props.button}</button>
              </Link>
            )}
          </div>
        </div>

        <Swiper
          loop={true}
          spaceBetween={50}
          autoplay={{
            delay: 1400,
            disableOnInteraction: false,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 3,
            }
          }}
          modules={[Autoplay]} // Register the Autoplay module
          className="card-list py-4 mx-0 w-100 px-2"
        >
          {cardDataOlevel.map((ele, ind) => (
            <SwiperSlide key={ind} style={{ height: "auto" }}>
              <CardBox
                className="h-100"
                cardImg={ele.cardImg}
                title={ele.title}
                price={ele.price}
                content={ele.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BlogPosting;
