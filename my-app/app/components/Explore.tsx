'use client'
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center mt-10">
      <div className="w-[90%] max-w-screen-lg">
        {/* Heading */}
        <div className="text-left mb-2">
          <span className="text-red-500 font-extralight text-[10px] sm:text-xs">
            Our products
          </span>
          <h2 className="font-semibold text-lg sm:text-xl">Explore our Products</h2>
        </div>

        {/* Products (Horizontal Scrolling Layout) */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide scroll-smooth py-4">
          <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src="\Cart (1).png"
              className="w-full h-full object-contain"
              alt="Product 1"
            />
          </div>
          <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src="\Cart (2).png"
              className="w-full h-full object-contain"
              alt="Product 2"
            />
          </div>
          <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src="\Cart (3).png"
              className="w-full h-full object-contain"
              alt="Product 3"
            />
          </div>
          <div className="w-[180px] sm:w-[220px] h-[150px] flex-shrink-0 transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src="/Cart With Flat Discount (3).png"
              className="w-full h-full object-contain"
              alt="Product 4"
            />
          </div>
        </div>

        {/* View All Button */}
        <div className="text-right mt-4">
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-md text-xs hover:bg-red-600 transition-all duration-200"
            onClick={() => alert('Redirecting to all products...')}
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
