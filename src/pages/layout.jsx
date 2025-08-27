import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />

    {/* Floating CTA Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        {/* Call Button */}
        <a
          href="tel:+919559102222" // Replace with your phone number
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        >
          <FaPhoneAlt className="w-5 h-5" />
        </a>
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919559102222" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>
      </div>
      
    </>
  )
}

export default MainLayout;
