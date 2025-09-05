import React, { useState, useEffect } from "react";
import banner from "/images/banner4.jpg";
import banner1 from "/images/crysta_banner.png";
import banner2 from "/images/hycross_banner.png";
import banner3 from "/images/wedding_car_banner.png";
import { database } from "../firebase";
import { ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Hero = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const banners = [
    {
      img: banner,
      title: "Book Your Ride Anytime, Anywhere",
      subtitle: "Reliable, Affordable, and 24/7 available cabs at your service.",
    },
    {
      img: banner1,
      title: "Luxury Innova Crysta at Your Doorstep",
      subtitle: "Experience comfort & premium travel with EagleCabs.",
    },
    {
      img: banner2,
      title: "Toyota Hycross for Long Rides",
      subtitle: "Spacious, fuel-efficient, and perfect for family trips.",
    },
    {
      img: banner3,
      title: "Wedding Car Rentals",
      subtitle: "Make your special day memorable with our premium rides.",
    },
  ];

  // Auto slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
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
      <div className="relative min-h-[60vh] sm:h-[400px] md:h-[90vh] lg:h-[90vh] overflow-hidden">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.img}
            alt={`Banner ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>


{/* Banner Content */}
<div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-16 overflow-hidden">
  {banners.map((banner, index) => (
    <div
      key={index}
      className={`absolute transition-all duration-1000 ease-in-out
        ${index === currentSlide 
          ? "opacity-100 translate-x-0" 
          : index < currentSlide 
            ? "opacity-0 -translate-x-full"   // slide out left
            : "opacity-0 translate-x-full"    // slide out right
        }
        max-w-3xl p-4 sm:p-6 md:p-8 rounded-2xl
        ${index === 0 
          ? "md:ml-auto md:text-center"   // ✅ only first banner → right side
          : "md:mx-auto md:text-center"  // ✅ others stay centered
        }`}
    >
      <h1 className="text-yellow-400 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 leading-snug drop-shadow-lg">
        {banner.title}
      </h1>
      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl opacity-90 drop-shadow-md">
        {banner.subtitle}
      </p>
    </div>
  ))}
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
      <div className="flex justify-center mt-4 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl flex flex-col sm:flex-row gap-4 bg-white/90 p-6 rounded-lg shadow-md"
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
