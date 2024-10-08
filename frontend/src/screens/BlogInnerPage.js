import React, { useState, useEffect } from 'react'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent';
import BlogInner from '../components/BlogInnerSection/BlogInner';
import BlogPosting from '../components/BlogsMain/BlogPosting';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Header from '../components/Header/Header';

const BlogInnerPage = () => {
  const [blogsData, setBlogsData] = useState();
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const id = useParams().id;

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

          let blog = res.data.data.find((item) => item.slug_url == id);
          setBlogsData(blog);

          res.data.data.forEach((item) => {
            Updated_recent_blogs.push({
              id: item.blog_id,
              slug_url: item.slug_url,
              logo: item.blog_image,
              blog_description: item.title,
              date: item.published_date,
            });
          });
          console.log(blog)
          setRecentBlogs(Updated_recent_blogs.slice(0, 2));
          console.log("", recentBlogs)
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("err");
        setBlogsData(null)
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllBlogs();
  }, [id]);

  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (slug_url) => {
    if (!slug_url) return;
    navigate(`/blogs/${slug_url}`);
  };

  return (
    <div className='box'>
      <div className='glass-box'>
        <Header />
        <div>
          {
            loading ? (
              <div
                style={{ width: "100%", height: "100vh" }}
                className="d-flex justify-content-center align-items-center"
              >
                <Spinner
                  style={{ color: "#ea3317", width: "120px", height: "120px" }}
                />
              </div>
            ) : (
              blogsData &&
              <>
                <CommonHeroComponent Para="Welcome to the world of interior design, where creativity, vision, and functionality converge to transform houses into dream homes."
                  backgroundImg="/images/creatives/blogsinner-hero.jpg"
                  Heading={blogsData.title}
                />
                {
                  recentBlogs &&

                  <BlogInner
                    text={blogsData.brief_paragraph}
                    blogContent={blogsData.blogs_content}
                    date={blogsData?.published_date}
                    Heading={blogsData.title} />
                }
              </>
            )
          }
          <BlogPosting
          />
        </div>
      </div>
    </div>
  )
}

export default BlogInnerPage;