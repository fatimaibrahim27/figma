import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-[50%] flex items-center justify-center bg-gray-50">
          <Image
            src="/Side Image.png"
            alt="Sign Up Image"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="w-[50%] flex flex-col justify-center items-center px-4 py-6">
          {/* Heading */}
          <h1 className="text-base font-bold text-gray-800 mb-2">Create an Account</h1>
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

          {/* Divider */}
          <div className="flex items-center justify-center mt-3 w-full">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500 text-[10px]">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Google Sign-Up */}
          <button
            className="w-full mt-2 bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600 flex items-center justify-center text-xs"
          >
            Sign Up with Google
          </button>

          {/* Footer */}
          <p className="mt-3 text-[10px] text-gray-600 text-center">
            Already have an account?{" "}
            <Link href="/Login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
