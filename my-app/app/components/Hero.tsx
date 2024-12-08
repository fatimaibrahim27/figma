'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [mounted, setMounted] = useState(false); // To handle hydration mismatch

  // Function to calculate remaining time
  const calculateTimeRemaining = () => {
    const countdownDate = new Date('2024-12-31T23:59:59').getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) return 'EXPIRED';

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    setMounted(true); // Component has mounted
    const interval = setInterval(() => {
      const time = calculateTimeRemaining();
      setTimeRemaining(time);

      if (time === 'EXPIRED') {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="flex justify-center items-center mt-10 w-full h-auto">
      <div className="max-w-screen-lg w-[90%]">
        {/* Header Section */}
        <div className="text-left mb-4">
          <span className="text-red-500 text-sm sm:text-base font-light">Today's</span>
          <h2 className="text-xl sm:text-2xl font-semibold">Flash Sale</h2>
        </div>

        {/* Timer Section */}
        <div className="text-center mb-6">
          <p className="text-gray-700 text-sm sm:text-lg font-medium">Time Left:</p>
          <p className={`font-bold ${timeRemaining === 'EXPIRED' ? 'text-gray-500' : 'text-red-500'} text-lg`}>
            {timeRemaining}
          </p>
        </div>

        {/* Product Section */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="w-[200px] h-[150px] flex-shrink-0 bg-gray-100 rounded-md shadow-md flex items-center justify-center"
            >
              <Image
                src={`/Cart-With-Flat-Discount-${index}.png`} // Ensure these files exist in the public folder
                width={200}
                height={150}
                className="object-contain"
                alt={`Product ${index + 1}`}
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.png'; // Fallback to placeholder if image fails
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => alert('Redirecting to all products...')}
            className="py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
