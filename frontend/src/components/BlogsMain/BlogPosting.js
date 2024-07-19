import React,{useState} from "react";
import './BlogPosting.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardBox from "./CardBox";

const cardDataOlevel = [
  {
    cardImg: "./images/creatives/blogcardimg.png",
    title: "The Power of Progressive Web apps",
    price:"PKR 1,500",
    content:"Moosa Khan",
  },
  {
    cardImg: "./images/creatives/blogcardimg.png",
    title: "The Power of Progressive Web apps",
    price:"PKR 1,500",
    content:"Moosa Khan",
  },
  {
    cardImg: "./images/creatives/blogcardimg.png",
    title: "The Power of Progressive Web apps",
    price:"PKR 1,500",
    content:"Moosa Khan",
  }
  
];

//   const catagory = [
//     "O - Level",
//     "AS-Level",
//     "A2-Level"
//   ]

function BlogPosting() {
  const [cat,setCat] = useState("O - Level")

return (
  <div className='CourseCard-container'>
      <div className="container my-5">
   
     

    <Swiper
    loop={true}
    spaceBetween={50}
    autoplay={{
      delay: 3000,
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

)
}

export default BlogPosting;