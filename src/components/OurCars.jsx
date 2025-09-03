import React from "react";
import { useNavigate } from "react-router-dom";

export default function CarRentalService({ cars }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact-us");
  };
  return (
    <div className="min-h-screen bg-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-6 leading-tight">
            RENT A CAR IN LUCKNOW WITH DRIVER{" "}
            <span className="text-yellow-500"> – EAGLECAB'S </span> PREMIUM CAR
            <br />
            BOOKING SERVICE
          </h1>
          <p className="text-lg text-gray-600 mx-auto">
            Rent a car in Lucknow with EAGLECABS – your trusted car rental
            service offering fast, reliable car booking service in Lucknow.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Car Image */}
              <div className="relative bg-white p-3 h-50 w-full flex items-center justify-center group overflow-hidden">
                {/* Shine overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent 
                        -translate-x-full group-hover:translate-x-full 
                        transition-transform duration-[500ms] ease-in-out"
                ></div>

                <img
                  src={car.img}
                  alt={car.alt}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              {/* Car Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {car.name}
                </h3>
                <button
                  onClick={handleClick}
                  className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-colors duration-200 transform hover:scale-105 shadow-md"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
