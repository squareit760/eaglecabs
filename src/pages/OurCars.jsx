import React from "react";
import CarRentalService from "../components/OurCars";

const OurCars = () => {
  const cars = [
    {
      name: "Sedan",
      desc: "Comfortable rides for city and outstation travel.",
      img: "/images/car1.png",
    },
    {
      name: "SUV",
      desc: "Spacious SUVs for family and group travel.",
      img: "/images/car2.png",
    },
    {
      name: "Luxury",
      desc: "Premium cars for weddings, events, and business trips.",
      img: "/images/car3.jpg",
    },
    {
      name: "Tempo Traveller",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/car4.jpg",
    },
    {
      name: "Tempo Traveller",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/car5.jpg",
    },
    {
      name: "Tempo Traveller",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/car6.png",
    },
    {
      name: "Tempo Traveller",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/car7.jpg",
    },
    {
      name: "Tempo Traveller",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/car8.jpg",
    },
    {
      name: "Tempo Traveller",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/car9.jpg",
    },
    {
      name: "Tempo Traveller",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/car10.jpg",
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner Section with car.jpg */}
      <div
        className="relative bg-cover bg-center h-64 md:h-130 flex items-center justify-center "
        style={{ backgroundImage: "url('/images/car.jpg')" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Our Cars
        </h1>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-blue-gray/70 to-blue-gray/80"></div>

      </div>

      {/* Cars Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Choose From Our <span className="text-yellow-500">Wide Fleet</span>
        </h2>

        <CarRentalService cars={cars} />

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {car.name}
                </h3>
                <p className="text-gray-600 mt-2">{car.desc}</p>
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default OurCars;
