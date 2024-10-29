import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Photo from '../assets/2025-Porsche-Taycan-002-1440sw.jpg'
const DesignSection = () => {
  const carouselImages = [
Photo,
Photo,
Photo,
  ];

  return (
    <>
    <div className="relative flex flex-col items-center bg-white p-10 lg:p-20 rounded-lg shadow-lg max-w-5xl mx-auto mt-20">
      {/* Title Section */}
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-2">Unique Design & Ergonomics</h2>
        <p className="text-lg lg:text-xl text-gray-600">From blueprints to renders.</p>
      </div>
    </div>
      <div className="relative w-full lg:w-3/4 mx-auto rounded-lg overflow-hidden shadow-lg mb-18 pb-8">
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover h-64 lg:h-80 w-full rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DesignSection;
