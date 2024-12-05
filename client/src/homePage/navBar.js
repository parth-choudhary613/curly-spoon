import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImage from '../assets/2025-Porsche-Taycan-002-1440sw.jpg';
import Home from './home';
import About from '../aboutpage/about';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  useEffect(() => {
    // Page overlap animation
    gsap.utils.toArray('.page').forEach((page, index) => {
      gsap.fromTo(
        page,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: page,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        }
      );
    });

    // 3D element movement
    gsap.to('.threeD-element', {
      x: '30vw',
      rotationY: 360,
      scrollTrigger: {
        trigger: '.page',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <nav className="bg-transparent">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center mx-auto lg:mx-0 transform transition duration-300 ease-in-out hover:scale-110">
              <img src="../assets/homeLogo.png" alt="Logo" className="h-20 w-auto mix-blend-multiply opacity" />
            </div>
          </div>
        </nav>

        {/* 3D Element */}
        <div className="threeD-element bg-[#5b4636] h-16 w-16 rounded-full fixed top-1/2 left-1/4"></div>

        {/* Pages */}
        <div className="page bg-white h-screen flex items-center justify-center">
          <Home />
        </div>
        <div className="page bg-gray-200 h-screen flex items-center justify-center">
          <About />
        </div>
      </div>
    </>
  );
}

export default Navbar;
