import React from 'react';

const LocationsSection = () => {
  const stats = [
    { number: '16+', label: 'Locations', color: 'text-yellow-500' },
    { number: '13+', label: 'States', color: 'text-yellow-500' },
    { number: '14+', label: 'Vehicle Types', color: 'text-yellow-500' },
    { number: '15K+', label: 'Customers', color: 'text-yellow-500' },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-1">
          {/* <h3 className="text-yellow-500 font-semibold text-sm tracking-wider uppercase mb-4">
            LOCATIONS
          </h3> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            LOCATIONS WE SERVE
          </h2>
          <p className="text-gray-800 text-lg mx-autoleading-relaxed">
            At EagleCabs, we proudly offer our car rental service in Lucknow and nearby cities to ensure a comfortable and reliable travel experience. 
            Whether you're planning a city ride, wedding, or outstation trip, our extensive network allows us to deliver fast and dependable car booking 
            services in Lucknow and across major destinations in Uttar Pradesh.
          </p>
        </div>

        {/* Car Fleet Image */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/location.png" 
                alt="Fleet of luxury cars available for rental"
                className="w-full h-48 md:h-64 lg:h-80 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="flex justify-center gap-14">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <h3 className={`text-2xl md:text-5xl lg:text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </h3>
                <p className="text-gray-800 font-bold text-sm md:text-base lg:text-lg">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;