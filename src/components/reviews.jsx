import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Meto",
      text: "Exceptional service! Highly recommend and would work with again.",
      rating: 5,
    },
    {
      id: 2,
      name: "James",
      text: "Professional, efficient, and great communication throughout our project.",
      rating: 5,
    },
  ];

  const reviewsPerPage = 3; // Number of reviews to display at once
  const [currentPage, setCurrentPage] = useState(0);

  // Handle Next Button Click
  const handleNext = () => {
    if (currentPage < reviews.length - reviewsPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Prev Button Click
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage;
  const selectedReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <div id="reviews" className="relative max-w-5xl mx-auto mt-12 pb-8">
      {/* Carousel */}
      <div className="flex relative space-x-6 items-center">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-20 p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition transform -translate-y-1/2"
          style={{ top: "50%" }} // Vertically centers the button
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Reviews */}
        <div className="flex overflow-hidden space-x-6 mx-auto">
          {selectedReviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-80 p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center mx-4 transform transition-transform hover:scale-105 hover:shadow-xl hover:border-blue-500 hover:bg-blue-50"
            >
              <Quote className="mx-auto mb-4 text-blue-500 scale-150" />
              <p className="text-lg italic text-gray-600">"{review.text}"</p>
              <h3 className="mt-4 font-semibold text-gray-800">{review.name}</h3>
              <div className="mt-2 flex justify-center">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-4 z-20 p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition transform -translate-y-1/2"
          style={{ top: "50%" }} // Vertically centers the button
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ClientReviews;
