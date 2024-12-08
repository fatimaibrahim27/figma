import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-gray-100">Exclusive</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Subscribe<br/>
            Get 10% off of your first order<br/>
            <input className='p-2 px-2' type='text' placeholder='Send Email'></input>
          </p>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-gray-100">Support</h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Help Center</li>
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Contact Us</li>
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Order Tracking</li>
          </ul>
        </div>

        {/* Account Section */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-gray-100">Account</h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Sign up</li>
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Register/login</li>
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Cart</li>
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Wishlist</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-gray-100">Quick Links</h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">About Us</li>
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">FAQs</li>
            <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-gray-100">Download App</h4>
          <p className="text-sm text-gray-400 mb-4">
            Save 30% with App now.
          </p>
          <div className="flex space-x-2 mb-2">
            <Image
              src="/scan.jpg"
              alt="Google Play Store"
              width={104}
              height={64}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-500">
          © 2024 Exclusive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
