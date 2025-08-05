import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, DollarSign, TrendingUp } from "lucide-react";

const ClientReviews = () => {
  const reviews = [
    { 
      id: 1, 
      name: "Meto", 
      company: "TechCorp",
      project: "E-commerce Platform",
      text: "Abdullah delivered exceptional results! Our revenue increased by 150% within 3 months of launch. The platform handles 10K+ users seamlessly.", 
      rating: 5,
      timeline: "6 weeks"
    },
    { 
      id: 2, 
      name: "James", 
      company: "StartupXYZ",
      project: "SaaS Dashboard",
      text: "Professional, efficient, and great communication throughout our project. The analytics dashboard reduced our reporting time by 80%.", 
      rating: 5,
      timeline: "4 weeks"
    },
    { 
      id: 3, 
      name: "Alex", 
      company: "MediaFlow",
      project: "Content Management",
      text: "The team was fantastic to work with and delivered great results! Our content workflow improved dramatically with 90% faster publishing.", 
      rating: 5,
      timeline: "5 weeks"
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setReviewsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setReviewsPerPage(2);
      } else {
        setReviewsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentPage, isAutoPlaying, reviewsPerPage]);

  const handleNext = () => {
    if (currentPage < reviews.length - reviewsPerPage) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(reviews.length - reviewsPerPage);
    }
  };

  const startIndex = currentPage;
  const selectedReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <section id="reviews" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-black text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Client <span className="text-green-500" style={{ color: 'var(--accent-primary)' }}>Success</span> Stories
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Real results from real clients. Here's how I've helped businesses 
            <span className="font-bold text-green-500" style={{ color: 'var(--accent-primary)' }}> </span>
          </p>

          {/* Aggregate Stats */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-4xl mx-auto mb-12">
           
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-xl border border-gray-800">
              <Star className="w-8 h-8 text-green-500 mx-auto mb-3" style={{ color: 'var(--accent-primary)' }} />
              <div className="text-3xl font-black text-green-500 mb-2" style={{ color: 'var(--accent-primary)' }}>99%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div 
            className="flex items-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-20 p-4 bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-green-500"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-300 hover:text-green-500" />
            </button>

            {/* Reviews Container */}
            <div className="flex overflow-hidden mx-auto space-x-6 px-16">
              {selectedReviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 w-full sm:w-96 md:w-[400px] p-8 bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-800 hover:border-green-500 transition-all duration-500 group card-hover"
                >
                  {/* Quote Icon */}
                  <div className="text-center mb-6">
                    <Quote className="mx-auto text-green-500 w-12 h-12 opacity-50" style={{ color: 'var(--accent-primary)' }} />
                  </div>

                  {/* Review Text */}
                  <p className="text-lg italic text-gray-300 leading-relaxed mb-6 text-center">
                    "{review.text}"
                  </p>

                  {/* Client Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">{review.name}</h3>
                    <p className="text-green-500 font-medium mb-1" style={{ color: 'var(--accent-primary)' }}>{review.company}</p>
                    <p className="text-sm text-gray-400">{review.project}</p>
                  </div>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    
                    <div className="text-center p-3 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
                      <div className="text-lg font-bold text-green-500" style={{ color: 'var(--accent-primary)' }}>{review.timeline}</div>
                      <div className="text-xs text-gray-400">Delivered In</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex justify-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-green-500 fill-current"
                        style={{ color: 'var(--accent-primary)' }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 z-20 p-4 bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-green-500"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronRight className="w-6 h-6 text-gray-300 hover:text-green-500" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: reviews.length - reviewsPerPage + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? 'bg-green-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                style={{ backgroundColor: currentPage === index ? 'var(--accent-primary)' : '' }}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
       
      </div>
    </section>
  );
};

export default ClientReviews;
