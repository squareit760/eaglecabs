import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for mobile menu
import logo from "/images/logo.png"; // ✅ Import your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md bg-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="EagleCabs Logo" className="h-10 lg:w-auto w-[8vw]" /> 
          <span className="font-extrabold text-xl text-[#0B2545]">EAGLECABS</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="/" className="hover:text-[#0B2545]">Home</a>
          <a href="/about" className="hover:text-[#0B2545]">About</a>
          <a href="/services" className="hover:text-[#0B2545]">Services</a>
          <a href="/our-cars" className="hover:text-[#0B2545]">Our Cars</a>
          <a href="/contact-us" className="hover:text-[#0B2545]">Contact</a>
        </nav>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="/services"
            className="bg-[#0B2545] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#163968] transition"
          >
             +91 7379034001
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-5 text-gray-700 font-medium">
            <a href="/" className="hover:text-[#0B2545]">Home</a>
          <a href="/about" className="hover:text-[#0B2545]">About</a>
          <a href="/services" className="hover:text-[#0B2545]">Services</a>
          <a href="/our-cars" className="hover:text-[#0B2545]">Our Cars</a>
          <a href="/contact-us" className="hover:text-[#0B2545]">Contact</a>
            <a
              href="/contact-us"
              className="bg-[#0B2545] text-white px-5 py-2 rounded-full text-center shadow-md hover:bg-[#163968] transition"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
