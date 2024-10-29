import React, { useState } from 'react';
import Image from '../assets/homeLogo.png';
import bgImage from '../assets/2025-Porsche-Taycan-002-1440sw.jpg';
import Home from './home';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <nav className="bg-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center mx-auto lg:mx-0 transform transition duration-300 ease-in-out hover:scale-110">
            <img
              src={Image}
              alt="Logo"
              className="h-20 w-auto mix-blend-multiply opacity" />
          </div>

          <div className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Homes</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Cases</a>
          </div>

          <div className="hidden lg:flex space-x-4 items-center ml-auto">
            <a href="#" className="text-gray-700 hover:text-gray-900">ENG</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-700 ">CONTACT US</a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-transparent">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#" className="block text-gray-700 hover:text-gray-900">Services</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">Homes</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">About us</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">Cases</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">ENG</a>
              <a href="#" className="block text-gray-700 font-semibold border-b-2 border-gray-900 hover:border-gray-700">CONTACT US</a>
            </div>
          </div>
        )}
      </nav>
     
      <Home />
    </div>
  );
}

export default Navbar;
