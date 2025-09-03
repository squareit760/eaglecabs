import React, { useState, useEffect } from "react";
import banner from "/images/banner.jpg";
import banner1 from "/images/banner1.jpg";
import banner2 from "/images/banner2.jpg";
import banner3 from "/images/banner3.jpg";
import { database } from "../firebase";
import { ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Hero = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const banners = [banner, banner1, banner2, banner3];

  // Auto slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000); // slide every 4s
    return () => clearInterval(interval);
  }, [banners.length]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobile } = form;

    if (!name || name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!mobile || !phoneRegex.test(mobile)) {
      toast.error("Mobile number must be 10 digits.");
      return;
    }

    const entry = { name, email, mobile, timestamp: Date.now() };

    try {
      await push(ref(database, "popupEnquiries"), entry);
      toast.success("Form submitted successfully!");
      setForm({ name: "", email: "", mobile: "" });
      navigate("/thanks");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      {/* Banner Slider */}
      <div className="relative min-h-screen sm:h-[400px] md:h-[90vh] lg:h-[90vh] overflow-hidden">
        {banners.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>

        {/* Banner Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg text-white">
              Book Your Ride Anytime, Anywhere with{" "}
              <span className="text-yellow-400">EagleCabs</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md text-white">
              Reliable, Affordable, and 24/7 available cabs at your service.
            </p>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition ${
                currentSlide === index ? "bg-yellow-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="flex justify-center mt-2 px-4 bg-none">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl flex flex-col sm:flex-row gap-4  p-6 text-gray-800"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Phone"
            value={form.mobile}
            onChange={handleChange}
            required
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-[#0B2545] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#163968] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Hero;
