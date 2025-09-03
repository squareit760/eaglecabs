import { MapPin, Car, CreditCard, Coffee } from "lucide-react";

export default function OurCarsWork() {
  const steps = [
    {
      id: "01",
      title: "SELECT PLACE & DATE",
      description: "Choose your pickup location and travel date for your ride.",
      icon: MapPin,
      bgColor: "bg-gray-800",
      textColor: "text-white text-sm"
    },
    {
      id: "02", 
      title: "CHOOSE YOUR CAR",
      description: "Select the car type that best suits your travel needs.",
      icon: Car,
     bgColor: "bg-gray-800",
      textColor: "text-white text-sm"
    },
    {
      id: "03",
      title: "PAYMENT & RECIEVE",
      description: "Make payment securely and receive confirmation for your cab booking.",
      icon: CreditCard,
      bgColor: "bg-gray-800 ",
      textColor: "text-white text-sm"
    },
    {
      id: "04",
      title: "ENJOY YOUR TRIP",
      description: "Relax and enjoy a comfortable ride with MD Travels reliable.",
      icon: Coffee,
      bgColor: "bg-gray-800",
      textColor: "text-white text-sm"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-white">
      {/* Header Section */}
      <div className="px-4 py-16 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-3xl font-bold text-gray-800 mb-8">
          How To Secure Your Ride With <span className="text-yellow-500"> EagleCabs</span>?
        </h1>
        <p className="text-gray-800 text-md md:text-xl max-w-4xl mx-auto leading-relaxed">
          Securing your ride with EagleCabs is easy! Simply follow our straightforward 
          booking process online or via our app, and enjoy a smooth and reliable 
          transportation experience.
        </p>
      </div>

      {/* Steps Section */}
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="group">
                  {/* Card */}
                  <div className={`${step.bgColor} rounded-xl p-8 h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl`}>
                    {/* Step Number */}
                    {/* <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6 mx-auto">
                      <span className="text-2xl font-bold">{step.id}</span>
                    </div> */}

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <IconComponent size={48} className={`${step.textColor}`} />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className={`text-md font-semibold text-white mb-4`}>
                        {step.title}
                      </h3>
                      <p className={`text-opacity-90 leading-relaxed ${step.textColor}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Elements
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 bg-opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-orange-400 bg-opacity-10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-slate-500 bg-opacity-10 rounded-full blur-lg"></div> */}
    </div>
  );
}