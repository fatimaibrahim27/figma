import React from 'react'

const page = () => {
  return (
    <div>
          <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-[50%] flex items-center justify-center bg-gray-50">
          <img
            src="/Side Image.png"
            alt="Sign Up Image"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="w-[50%] flex flex-col justify-center items-center px-4 py-6">
          {/* Heading */}
          <h1 className="text-base font-bold text-gray-800 mb-2">Login to Exclusive</h1>
          <p className="text-xs text-gray-600 mb-4">Enter your details below</p>

          {/* Form */}
          <form className="w-full max-w-[200px] space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-2 py-1 border rounded-md text-gray-700 focus:ring-1 focus:ring-blue-400 focus:outline-none text-xs"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full px-2 py-1 border rounded-md text-gray-700 focus:ring-1 focus:ring-blue-400 focus:outline-none text-xs"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-2 py-1 border rounded-md text-gray-700 focus:ring-1 focus:ring-blue-400 focus:outline-none text-xs"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-1 rounded-md hover:bg-red-600 text-xs"
            >
              Create Account
            </button>
          </form>
</div>
</div></div>
    </div>
  )
}

export default page
