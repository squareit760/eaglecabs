import React from "react";
import CarRentalService from "../components/OurCars";

const OurCars = () => {
  const cars = [
    {
      name: "HYUNDAI VERNA",
      desc: "Comfortable rides for city and outstation travel.",
      img: "/images/Hyundai.webp",
    },
    {
      name: " INNOVA HYCROSS",
      desc: "Spacious SUVs for family and group travel.",
      img: "/images/SUV.png",
    },
    {
      name: "BMW GRAN TURISMO",
      desc: "Premium cars for weddings, events, and business trips.",
      img: "/images/BMW.webp",
    },
    {
      name: "HYUNDAI AURA",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/HYUNDAIAURA.png",
    },
    {
      name: "AUDI A4",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/AUDIA4.png",
    },
    {
      name: "MERCEDES C CLASS",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/MERCEDES.webp",
    },
    {
      name: "TOYOTA FORTUNER LEGENDER",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/TOYOTA.png",
    },
    {
      name: "TOYOTA INNOVA CRYSTA",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/TOYOTAINNOVA.png",
    },
    {
      name: "Urbania Tempo Traveller 17 seater",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/Urbania.png",
    },
    {
      name: "Tempo Traveller 9,12,15,17,26 Seater",
      desc: "Perfect for group tours and long journeys.",
      img: "/images/Tempo.jpg",
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner Section with car.jpg */}

      <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img 
          src="/images/about.jpg" 
          alt="EagleCabs - Professional Transportation Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-800/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our  <span className="text-yellow-400">Cars</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-white">
                Your trusted transportation partner since 2014
              </p>
              <p className="text-lg text-white max-w-2xl mx-auto">
                We soar above the competition to deliver safe, reliable, and comfortable rides across the city and beyond.
              </p>
            </div>
          </div>
        </div>
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
