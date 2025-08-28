import React from "react";

const CTASection = () => {
  return (
    <section className="bg-white py-16 px-6 text-center text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Ride with Us?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Book your cab now and enjoy a safe, reliable, and comfortable journey.
        </p>
        <a
          href="/services" //  link to Booking/Services page
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
        >
          Book Your Cab Now →
        </a>
      </div>
    </section>
  );
};

export default CTASection;
