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
    arrows: false, // Remove arrows on mobile for a cleaner look
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="blogs" className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 py-12 bg-gradient-to-b from-[#E8F4FF] to-white text-[#333]">
      <h2 className="text-2xl mb-6 font-bold text-center font-inter">Latest Blogs</h2>

      <div className="w-full max-w-lg mx-auto">
        <Slider {...settings}>
          {blogData.map((blog) => (
            <div key={blog.id} className="flex flex-col items-center rounded-lg shadow-lg overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md bg-white">
              {/* Image Section */}
              <div className="w-full">
                <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover" />
              </div>

              {/* Blog Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-2 font-inter">{blog.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-roboto">{blog.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
