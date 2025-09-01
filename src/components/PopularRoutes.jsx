import React from 'react';

export default function PopularRoutes() {
  const routes = [
    "Taxi Service In Lucknow",
    "Lucknow To Gorakhpur Taxi", 
    "Lucknow Round Trip Taxi",
    "Lucknow To Agra One Way Taxi",
    "Lucknow To Allahabad Cab",
    "Lucknow To Gorakhpur One Way Cab",
    "One Way Cab In Lucknow",
    "Taxi Service In Lucknow",
    "Car Rental Service In Lucknow",
    "Tempo Traveller Rentals In Agra",
    "Lucknow To Varanasi Taxi",
    "Lucknow To Faizabad Taxi",
    "Lucknow To Varanasi Cab",
    "Lucknow To Agra One Way Cab",
    "Lucknow To Allahabad One Way Taxi",
    "Lucknow To Faizabad Cab",
    "Lucknow Outstation Cab",
    "Travel Agency In Lucknow",
    "Taxi Service In Agra",
    "One Way Cab In Agra",
    "Lucknow To Agra Taxi",
    "One Way Taxi Service In Lucknow",
    "Lucknow To Varanasi One Way Taxi",
    "Lucknow To Kanpur Cab",
    "Lucknow To Allahabad One Way Cab",
    "Lucknow To Faizabad One Way Taxi",
    "Innova Car Rental In Lucknow",
    "Taxi Fare In Lucknow",
    "Agra Cab Service",
    "One Way Taxi Service In Agra",
    "Lucknow To Kanpur Taxi",
    "Taxi Service In Lucknow Airport",
    "Lucknow To Varanasi One Way Cab",
    "Lucknow To Kanpur One Way Taxi",
    "Lucknow To Gorakhpur Cab",
    "Lucknow To Faizabad One Way Cab",
    "Tempo Traveller Rentals In Lucknow",
    "Luxury Car Rental In Lucknow",
    "Innova In Agra",
    "Outstation Cab In Agra",
    "Lucknow To Allahabad Taxi",
    "Lucknow Outstation Taxi",
    "Lucknow To Agra Cab",
    "Lucknow To Kanpur One Way Cab",
    "Lucknow To Gorakhpur One Way Taxi",
    "Lucknow Cab Service",
    "Lucknow Airport Taxi Service",
    "Pet Friendly Taxi In Lucknow",
    "Agra Car Rental Service",
    "Agra Outstation Taxi Service"
  ];

  return (
    <div className="bg-green-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
          Most Popular Routes
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-0 mb-12">
          {routes.map((route, index) => (
            <div
              key={index}
              className="text-white hover:text-green-200 cursor-pointer transition-colors duration-200 py-2 px-2 w-full rounded hover:bg-green-700 hover:bg-opacity-30"
            >
              <span className="text-sm lg:text-sm font-medium">
                {route}
              </span>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center">
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            View More
          </button>
        </div> */}
      </div>
    </div>
  );
}