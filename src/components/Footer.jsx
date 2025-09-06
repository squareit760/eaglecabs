import { Mail, Phone } from "lucide-react";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <img src="/images/logo.jpg" alt="Logo" className="h-22 w-22 mb-4" />
          <p className="text-md leading-6">
            EagleCabs provides safe, reliable, and affordable cab services across multiple locations with 24/7 support. Your journey is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/contact-us" className="hover:text-yellow-400">Contact</a></li>
            <li><a href="/our-cars" className="hover:text-yellow-400">Our Cars</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <div className="flex gap-2">
            <FaLocationDot className="h-5 w-8" />
            
            <li>Shop No.225, Sector-D, 2, Shopping Square Rd, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030</li>
            </div>
            <div className="flex gap-2">
              <Phone className="h-5 w-5" />
            <a href="+918881059997">
              <li> +918881059997</li>
            </a>
            </div>
             
             <div className="flex gap-2">
              <Mail className="h-5 w-5" />
              
              <a href="mailto:greeneaglecabs@gmail.com">
               <li>
              greeneaglecabs@gmail.com</li>
              </a>
             </div>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EagleCabs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
