import React, { useState } from "react";
import banner from "/images/banner.jpg";
// import { database,ref, push } from "../firebase";
import { database } from "../firebase";
import { ref, push } from "firebase/database"; // 👈 correct import

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Hero = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile } = form;

    // ✅ Validation checks
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

    const entry = {
      name,
      email,
      mobile,
      timestamp: Date.now(),
    };

    try {
      await push(ref(database, "popupEnquiries"), entry);

      // Save to allEnquiries (used by permanent tracking page)
      // await push(ref(database, "allEnquiries"), entry);

      toast.success("Form submitted successfully!");
      setForm({ name: "", email: "", mobile: "" });
      navigate("/thanks"); // Redirect to thank you page

      // ✅ Close the form after slight delay to let toast show
      // setTimeout(() => setShowForm(false), 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full">
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg text-gray-800">
          Book Your Ride Anytime, Anywhere with{" "}
          <span className="text-yellow-400">EagleCabs</span>
        </h1>

        {/* Sub-text */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md text-gray-800">
          Reliable, Affordable, and 24/7 available cabs at your service.
        </p>

        {/* Booking Form */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="lg:flex hidden gap-4 bg-white rounded-xl shadow-lg p-5 text-gray-800"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Phone"
              value={form.mobile}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-[#0B2545] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#163968] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;