import { Clock, Moon, AlertTriangle, Car, Fuel, BookOpen } from "lucide-react";

export default function BookingConditions() {
  const conditions = [
    {
      icon: Clock,
      title: "Time & Distance:",
      description: "Calculated from garage to garage.",
      bgColor: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: Moon,
      title: "Night Charges:",
      description: "Apply before 6:30 AM and after 9:30 PM.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      icon: AlertTriangle,
      title: "Toll, Parking, etc.:",
      description: "Charged as per actuals.",
      bgColor: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: Car,
      title: "Outstation Minimum:",
      description: "250 KM/day.",
      bgColor: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: Fuel,
      title: "Fuel Price Variation:",
      description: "Rates may change with fuel price fluctuations.",
      bgColor: "bg-red-50",
      iconColor: "text-red-500"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <BookOpen className="text-blue-600" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            BOOKING & CONDITIONS
          </h2>
        </div>
        <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
      </div>

      {/* Conditions List */}
      <div className="space-y-4">
        {conditions.map((condition, index) => {
          const IconComponent = condition.icon;
          return (
            <div 
              key={index}
              className={`${condition.bgColor} rounded-lg p-4 md:p-6 transition-all duration-300 hover:shadow-md border border-gray-100`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <IconComponent 
                      className={condition.iconColor} 
                      size={20}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 flex-shrink-0">
                      {condition.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <p className="text-sm md:text-base text-blue-800">
          <span className="font-semibold">Note:</span> All terms and conditions are subject to change. 
          Please confirm details at the time of booking.
        </p>
      </div>
    </div>
  );
}