import React from 'react'
import DesignSection from './designSection'
function home() {
  return (
    <>
    
    <div className="text-white m-8 sm:m-16 md:m-20 p-8 sm:p-12 md:p-16">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-wider">
        <span className="block drop-shadow-[0_1.2px_1.2px_rgba(2,3,4,5)]">THE</span>
        <span className="block drop-shadow-[0_1.2px_1.2px_rgba(2,3,4,5)]">PERFECT</span>
        <span className="block drop-shadow-[0_1.2px_1.2px_rgba(2,3,4,5)]">HOME</span>
    </h1>
    <p className="text-white mt-4 text-base sm:text-lg md:text-xl drop-shadow-[0_1.2px_1.2px_rgba(2,3,4,5)] ">
         We craft custom homes 
    </p>

    {/* Start Button */}
    <button className="bg-[#5b4636] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg mt-4 sm:mt-6 hover:bg-[#483729] transition duration-300">
        START
    </button>
<DesignSection/>
</div>
    </>
  )
}

export default home