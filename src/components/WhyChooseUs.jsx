import React from "react";
import { ShieldCheck, UserCheck, DollarSign, Smartphone } from "lucide-react"; // ✅ Icons

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#0B2545]" />,
      title: "Safe & Secure Rides",
      desc: "We prioritize your safety with trusted drivers and well-maintained cars.",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-[#0B2545]" />,
      title: "Professional Drivers",
      desc: "Our drivers are trained, courteous, and experienced for a smooth journey.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#0B2545]" />,
      title: "Affordable Pricing",
      desc: "Transparent fares with no hidden charges. Pay only for what you ride.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-[#0B2545]" />,
      title: "Easy Booking",
      desc: "Book a ride in just a few clicks with our simple booking system.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-10">
          Why Choose <span className="text-yellow-500">EagleCabs</span>?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#0B2545] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
