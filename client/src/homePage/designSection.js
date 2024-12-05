import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Photo from '../assets/2025-Porsche-Taycan-002-1440sw.jpg';

const DesignSection = () => {
  const carouselImages = [Photo, Photo, Photo];

  return (
    <>
    
      <div className="relative flex flex-col items-center bg-white glassmorphism p-6 sm:p-6  md:p-6 lg:p-20 rounded-lg shadow-lg max-w-5xl mx-auto max-h-full">
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-100 rounded-lg pointer-events-none">
  </div>
    

  {/* Title Section */}
  <div className="text-center mb-10 md:mb-8  lg:mb-12 relative z-10">
    <h2 className="text-2xl text-black md:text-3xl lg:text-5xl font-bold mb-2">Unique Design & Ergonomics</h2>
    <p className="text-base md:text-lg lg:text-xl text-gray-900">From blueprints to renders.</p>
  </div>
</div>


      {/* Conditionally render the carousel only for larger screens */}
      <div className="relative w-full sm:w-5/6 lg:w-3/4 mx-auto rounded-lg overflow-hidden shadow-lg mb-10 pb-8 -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20 hidden lg:block">
        <Slider
           infinite={true}
    speed= {1000}
    slidesToShow= {1}
    slidesToScroll= {1}
    autoplay= {true}
    autoplaySpeed= {3000}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
  
    </>
  );
};

export default DesignSection;
