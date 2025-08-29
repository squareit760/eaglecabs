import React from "react";
import { useState, useEffect } from "react";

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const reviews = [
    {
      name: "Amit Sharma",
      role: "Business Executive",
      review: "EagleCabs is my go-to service for airport transfers. Their drivers are always punctual, professional, and courteous. The booking system is incredibly user-friendly.",
      rating: 5,
      image: "AS"
    },
    {
      name: "Priya Verma",
      role: "Marketing Manager",
      review: "Outstanding service at competitive prices! The fleet is well-maintained, drivers are knowledgeable about city routes, and customer support is responsive.",
      rating: 5,
      image: "PV"
    },
    {
      name: "Rahul Mehta",
      role: "Software Engineer",
      review: "Professional service with complete transparency in pricing. No hidden charges, clean vehicles, and courteous drivers. EagleCabs has set a new standard.",
      rating: 5,
      image: "RM"
    },
    {
      name: "Sneha Kapoor",
      role: "Interior Designer",
      review: "Seamless booking experience through their app. Real-time tracking, professional drivers, and excellent customer service. Perfect for both short and long trips.",
      rating: 5,
      image: "SK"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, reviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 relative overflow-hidden min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 h-full opacity-20">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-white/10 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 px-2">
            What Our <span className="text-yellow-400">Customers</span> Say
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-4">
            Don't just take our word for it. Here's what our valued customers have to say.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-6 md:p-8 lg:p-10 mx-auto max-w-full transition-all duration-500 hover:bg-white/15 hover:border-white/30">
                    
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center mb-4 sm:mb-6 font-light px-2">
                      "{review.review}"
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <svg 
                          key={i} 
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mx-0.5 sm:mx-1" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center justify-center">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-full flex items-center justify-center text-slate-800 text-base sm:text-lg font-bold">
                          {review.image}
                        </div>
                        <div className="text-left">
                          <h3 className="text-base sm:text-lg font-bold text-white mb-1">{review.name}</h3>
                          <p className="text-slate-300 text-xs sm:text-sm">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on very small screens */}
          <button 
            onClick={prevSlide}
            className=" sm:flex flex absolute left-[-40px] lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-white/20 items-center justify-center transition-all duration-300 hover:scale-110 group z-10"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className=" sm:flex flex absolute right-[-40px] lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-white/20 items-center justify-center transition-all duration-300 hover:scale-110 group z-10"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-6 sm:w-8 h-2 bg-yellow-400'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/60 hover:scale-125'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mt-8 sm:mt-10 lg:mt-12 max-w-full sm:max-w-3xl lg:max-w-5xl mx-auto px-4">
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1">50K+</div>
            <div className="text-slate-300 text-xs sm:text-sm md:text-base">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1">4.9</div>
            <div className="text-slate-300 text-xs sm:text-sm md:text-base">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1">24/7</div>
            <div className="text-slate-300 text-xs sm:text-sm md:text-base">Service Available</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1">100%</div>
            <div className="text-slate-300 text-xs sm:text-sm md:text-base">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;