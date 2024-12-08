'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Header() {
  const [isMenFashionOpen, setMenFashionOpen] = useState(false);
  const [isElectronicsOpen, setElectronicsOpen] = useState(false);
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);

  // Handle category dropdown toggle
  const toggleMenFashion = () => setMenFashionOpen(!isMenFashionOpen);
  const toggleElectronics = () => setElectronicsOpen(!isElectronicsOpen);
  const toggleAccountMenu = () => setAccountMenuOpen(!isAccountMenuOpen);

  function handleSearch(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("Search function triggered.");
  }

  return (
    <div>
      {/* Promo Banner */}
      <header className="bg-black text-white p-2 flex justify-center items-center">
        <div className="max-w-screen-sm text-xs sm:text-sm text-center animate-shakeSale">
          <h4 className="text-xs sm:text-sm">
            Summer Sale For All Swimsuits And Free Express Delivery - OFF <b>50%!</b>
          </h4>
          <Link href="/shop" className="text-white font-semibold underline ml-1">
            Shop Now
          </Link>
        </div>
      </header>
      <br />

      {/* Main Header */}
      <header className="bg-gray-300 text-gray-500 p-2 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        {/* Logo */}
        <div className="logo font-bold text-lg text-black mb-4 sm:mb-0">Exclusive</div>

        {/* Navigation */}
        <nav className="flex space-x-5 items-center mb-3 sm:mb-0">
          <a href="/" className="hover:underline">Home</a>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/Signup">Signup</Link>
        </nav>

        {/* Search Bar */}
        <form
          className="flex items-center gap-2 bg-gray-100 p-1 rounded-md w-full sm:w-auto"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
          />
          <button type="submit" className="cursor-pointer">
            <Image
              src="/OIP (1).jpg"
              alt="Search Icon"
              width={20}
              height={20}
              className="object-contain"
            />
          </button>
        </form>

        {/* Cart and Account Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Image
            src="/cart.png"
            alt="Cart"
            width={32}
            height={32}
            className="object-contain"
          />

          {/* Wishlist Icon */}
          <Link href="/wishlist">
            <Image
              src="/wish.jpg"
              alt="Wishlist"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>

          {/* Account Icon */}
          <div className="relative">
            <button
              onClick={toggleAccountMenu}
              className="cursor-pointer flex items-center"
            >
              <Image
                src="/acc.jpg"
                alt="Account"
                width={32}
                height={32}
                className="object-contain rounded-full"
              />
            </button>

            {/* Account Dropdown Menu */}
            {isAccountMenuOpen && (
              <ul className="absolute right-0 bg-white shadow-lg rounded-md mt-2 text-sm w-40">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Orders</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Cancellations</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Manage Account</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Reviews</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Log Out</li>
              </ul>
            )}
          </div>
        </div>
      </header>

      <br />
      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 my-2" />

      {/* Categories and Image */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
        {/* Categories */}
        <ul className="flex flex-col sm:w-[250px] space-y-4 text-xs sm:text-sm md:text-base w-full">
          <li>Women's Fashion</li>
          <li
            className="flex items-center cursor-pointer"
            onClick={toggleMenFashion}
          >
            Men's Fashion <span className="ml-1">{isMenFashionOpen ? '▼' : '>'}</span>
            {isMenFashionOpen && (
              <ul className="mt-2 space-y-1 text-sm">
                <li>Shirts</li>
                <li>Trousers</li>
                <li>Jackets</li>
              </ul>
            )}
          </li>
          <li
            className="flex items-center cursor-pointer"
            onClick={toggleElectronics}
          >
            Electronics <span className="ml-1">{isElectronicsOpen ? '▼' : '>'}</span>
            {isElectronicsOpen && (
              <ul className="mt-2 space-y-1 text-sm">
                <li>Mobiles</li>
                <li>Laptops</li>
                <li>Accessories</li>
              </ul>
            )}
          </li>
          <li>Homes and Lifestyle</li>
          <li>Medicines</li>
          <li>Sports and Outdoor</li>
          <li>Baby's and Toy's</li>
        </ul>

        {/* Image */}
        <div className="flex-2 sm:w-[1000px] md:w-[700px] w-full mx-auto">
          <Image
            src="/Frame 560 (1).png"
            alt="frame"
            width={700}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
