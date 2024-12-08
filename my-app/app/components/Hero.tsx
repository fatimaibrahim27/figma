'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Importing Next.js Image component

const Hero: React.FC = () => {
  // Timer logic (Countdown to a specific date)
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  useEffect(() => {
    const countdownDate = new Date('2024-12-31T23:59:59').getTime(); // Set the target date for the countdown

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // Calculate time remaining
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);

      // Stop the timer once the countdown finishes
      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining('EXPIRED');
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-full h-auto flex justify-center items-center mt-10">
      <div className="w-[90%] max-w-screen-lg">
        {/* Heading and Timer Section */}
        <div className="text-left mb-4">
          <span className="text-red-500 font-extralight text-sm sm:text-base">
            Today&apos;s
          </span>
          <h2 className="font-semibold text-xl sm:text-2xl">Flash Sale</h2>
        </div>

        {/* Centered Timer */}
        <div className="flex justify-center items-center mb-4">
          <div className="text-center text-sm sm:text-lg font-medium text-gray-700">
            <p>Time Left:</p>
            <p className="font-bold text-red-500">{timeRemaining}</p>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex justify-between items-center overflow-x-auto scrollbar-hide">
          <div className="w-[200px] h-[150px] flex-shrink-0">
            <Image
              src="/Cart With Flat Discount.png"
              className="w-full h-full object-contain"
              alt="Product 1 Image"
              width={200}
              height={150}
            />
          </div>
          <div className="w-[200px] h-[150px] flex-shrink-0">
            <Image
              src="/Cart With Flat Discount (1).png"
              className="w-full h-full object-contain"
              alt="Product 2 Image"
              width={200}
              height={150}
            />
          </div>
          <div className="w-[200px] h-[150px] flex-shrink-0">
            <Image
              src="/Cart With Flat Discount (2).png"
              className="w-full h-full object-contain"
              alt="Product 3 Image"
              width={200}
              height={150}
            />
          </div>
          <div className="w-[200px] h-[150px] flex-shrink-0">
            <Image
              src="/Cart With Flat Discount (3).png"
              className="w-full h-full object-contain"
              alt="Product 4 Image"
              width={200}
              height={150}
            />
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-6">
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
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
