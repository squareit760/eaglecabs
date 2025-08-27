import React from "react";
import { MapPin, Clock, CheckCircle } from "lucide-react"; // ✅ Icons

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="h-12 w-12 text-[#0B2545]" />,
      title: "Step 1: Choose Pickup & Drop",
      desc: "Enter your pickup and drop location to get started.",
    },
    {
      icon: <Clock className="h-12 w-12 text-[#0B2545]" />,
      title: "Step 2: Select Cab & Time",
      desc: "Pick your preferred cab type and schedule your ride.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-[#0B2545]" />,
      title: "Step 3: Confirm & Ride",
      desc: "Confirm your booking and enjoy a smooth ride with EagleCabs.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-10">
          How It <span className="text-yellow-500">Works</span>
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#0B2545] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
