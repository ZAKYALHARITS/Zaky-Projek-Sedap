import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-end items-center bg-white text-xs px-8 py-1 border-b">
        <div className="flex space-x-6">
          <span className="cursor-pointer">ENGLISH &#9662;</span>
          <span className="cursor-pointer">USD &#9662;</span>
          <span className="cursor-pointer">MY ACCOUNT</span>
          <span className="cursor-pointer">WISHLIST</span>
          <span className="cursor-pointer">CHECKOUT</span>
          <span className="cursor-pointer">LOGIN</span>
        </div>
      </div>
      {/* Main Navbar */}
      <header className="flex justify-between items-center bg-gray-900 text-white px-8 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="logo-eren.png" alt="EREN Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold tracking-wide">EREN</span>
        </div>
        {/* Main Menu */}
        <nav className="flex items-center space-x-8">
          <a href="#home" className="hover:text-blue-400 font-semibold">
            HOME
          </a>
          <a href="#products" className="hover:text-blue-400 font-semibold">
            PRODUCTS
          </a>
          <a href="#collection" className="hover:text-blue-400 font-semibold">
            COLLECTION
          </a>
          <a href="#pages" className="hover:text-blue-400 font-semibold">
            PAGES
          </a>
          <a href="#about" className="hover:text-blue-400 font-semibold">
            ABOUT US
          </a>
          <a href="#contact" className="hover:text-blue-400 font-semibold">
            CONTACT US
          </a>
          {/* Cart Icon */}
          <div className="relative">
            <FaShoppingCart className="w-5 h-5 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-blue-300 text-xs text-black rounded-full px-1">3</span>
          </div>
          {/* Search Icon */}
          <FaSearch className="w-5 h-5 cursor-pointer" />
        </nav>
      </header>
    </div>
  );
}
