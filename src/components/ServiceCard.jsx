import React from "react";
import { Plane, MapPin, Car, Briefcase, Heart } from "lucide-react"; // ✅ Added Heart icon

const Services = () => {
  const services = [
    {
      icon: <Plane className="h-12 w-12 " />,
      title: "Airport Pickup & Drop",
      desc: "On-time and reliable airport transfers for stress-free travel.",
    },
    {
      icon: <MapPin className="h-12 w-12 " />,
      title: "Outstation Rides",
      desc: "Comfortable rides for outstation trips with transparent fares.",
    },
    {
      icon: <Car className="h-12 w-12 " />,
      title: "Local City Rides",
      desc: "Quick and affordable rides within the city, anytime you need.",
    },
    {
      icon: <Briefcase className="h-12 w-12  " />,
      title: "Corporate Travel",
      desc: "Professional and punctual travel solutions for business needs.",
    },
    {
      icon: <Heart className="h-12 w-12  " />, // 💍 Wedding Service
      title: "Wedding Car Booking",
      desc: "Luxury cars and premium services for your special wedding day.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our <span className="text-yellow-500">Services</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8  ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50  rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition"
            >
              <div className="mb-4 text-yellow-400">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
