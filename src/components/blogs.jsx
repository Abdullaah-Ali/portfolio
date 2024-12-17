import React from "react";
import Slider from "react-slick";
import blogData from "../data/blogs.json"; // Import the blog data

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id ="blogs" className="blogs-container">
      <div className="slider-wrapper">
        <h2 className="section-title">Latest Blogs</h2>
        <Slider {...settings}>
          {blogData.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
