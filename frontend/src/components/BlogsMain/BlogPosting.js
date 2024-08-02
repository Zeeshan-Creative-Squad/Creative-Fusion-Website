import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import './BlogPosting.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardBox from "./CardBox";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

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
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()


  let blogAPICalledId = false;
  let allBlogsCalled = false;

  const getAllBlogs = async () => {
    if (allBlogsCalled) return;
    allBlogsCalled = true;

    setLoading(true);
    
    axios
      .get(`/blogs`, {})
      .then((res) => {
        if (res.data.status === "success") {
          let Updated_recent_blogs = [];

          res.data.data.forEach((item) => {
            Updated_recent_blogs.push({
              id: item.blog_id,
              slug_url: item.slug_url,
              logo: item.blog_image,
              content: item.brief_paragraph,
              blog_description: item.title,
              date: item.published_date,
            });
          });
          
          setRecentBlogs(Updated_recent_blogs);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (slug_url) => {
    if (!slug_url) return;
    navigate(`/blogs/${slug_url}`);
  };

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

        {
        loading?
          <div
            style={{ width: "100%", height: "100vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner
              style={{ color: "#3F1626", width: "120px", height: "120px" }}
            />
          </div>
        :

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
          {recentBlogs.map((ele, ind) => (
            <SwiperSlide key={ind} style={{ height: "auto" }}>
              <CardBox
                className="h-100"
                cardImg={ele.logo}
                title={ele.blog_description}
                price={ele.price}
                slug_url={ele.slug_url}
                content={ele.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
}
      </div>
    </div>
  );
}

export default BlogPosting;
