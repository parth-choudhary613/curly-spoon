import React from 'react';
import DesignSection from './designSection';
import bgImage from '../assets/2025-Porsche-Taycan-002-1440sw.jpg';
import Navbar from './navBar'; // Ensure the Navbar is imported here

function Home() {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Home Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center m-8 sm:m-16 md:m-20 p-8 sm:p-12 md:p-16">
        <div className="lg:w-1/2 mb-96">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-white">
            <span className="block drop-shadow-[0_1.2px_1.2px_rgba(2,3,4,5)]">THE</span>
            <span className="block drop-shadow-[0_1.2px_1.2px_rgba(2,3,4,5)]">PERFECT</span>
            <span className="block drop-shadow-[0_1.2px_1.2px_rgba(2,3,4,5)]">HOME</span>
          </h1>
          <p className="text-white mt-4 text-base sm:text-lg md:text-xl drop-shadow-[0_1.2px_1.2px_rgba(2,3,4,5)]">
            We craft custom homes
          </p>
          <button className="bg-[#5b4636] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg mt-4 sm:mt-6 hover:bg-[#483729] transition duration-300">
            START
          </button>
        </div>

        {/* Design Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <DesignSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
