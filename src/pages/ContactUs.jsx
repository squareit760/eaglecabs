// src/pages/ContactUs.jsx
import React, { useState } from "react";
import { database } from "../firebase"; 
import { ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contactRef = ref(database, "popupEnquiries");
      await push(contactRef, {
        ...form,
        timestamp: Date.now(),
      });
     
      setForm({ name: "", email: "", mobile: "", message: "" });
      navigate("/thanks")
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <div
        className="relative bg-cover bg-center h-64 md:h-130 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/contact.jpg')" }}
      >
        <h1 className="relative text-3xl md:text-5xl font-bold text-gray-800 drop-shadow-lg">
          Contact <span className="text-white"> Us </span>
        </h1>
      </div>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Your Phone"
                value={form.mobile}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button
                type="submit"
                className="w-full cursor-pointer bg-gray-800 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600">
                Have questions? Reach out to us anytime.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  📞 <span className="font-semibold">+91 88810 59997</span>
                </p>
                <p className="text-gray-700">
                  ✉️ <span className="font-semibold">greeneaglecabs@gmail.com</span>
                </p>
                <p className="text-gray-700">
                  📍 Shop No.225, Sector-D, 2, Shopping Square Rd, Golf City, Bagiamau, Lucknow, Uttar Pradesh 226030
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.459893908297!2d81.00314457489087!3d26.793481365205242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be330e54ac337%3A0x28aee29b85e812b8!2sEagle%20Cabs%20-%20Best%20Travel%20Agency%20In%20Lucknow%20%7C%20Best%20Taxi%20Service%20in%20Lucknow%20%7C%20Corporate%20Cab%20Service%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1756275188670!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  🌐
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-xl"
                >
                  f
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 text-xl"
                >
                  ♡
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-sky-400 text-xl"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
