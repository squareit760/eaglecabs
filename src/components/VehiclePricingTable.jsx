export default function VehiclePricingTable() {
  const pricingData = [
    {
      vehicleType: "Innova/Crysta",
      local8Hrs: "₹3000",
      local4Hrs: "₹0",
      airportPickup: "–",
      perKmRate: "₹16",
      nightCharges: "₹300"
    },
    {
      vehicleType: "Innova/Hycross",
      local8Hrs: "₹3500",
      local4Hrs: "₹0",
      airportPickup: "–",
      perKmRate: "₹18",
      nightCharges: "₹500"
    },
    {
      vehicleType: "XUV400/Creta",
      local8Hrs: "₹2000",
      local4Hrs: "₹1500",
      airportPickup: "₹1500",
      perKmRate: "₹13",
      nightCharges: "₹300"
    },
    {
      vehicleType: "Innova/Carens",
      local8Hrs: "₹2500",
      local4Hrs: "–",
      airportPickup: "₹0",
      perKmRate: "₹14",
      nightCharges: "₹300"
    },
    {
      vehicleType: "Ertiga / XL6",
      local8Hrs: "₹2400",
      local4Hrs: "₹0",
      airportPickup: "–",
      perKmRate: "₹13",
      nightCharges: "₹300"
    }
  ];

  const travellerData = [
    {
      vehicleType: "25+D Traveller",
      local8Hrs: "₹7500",
      local4Hrs: "₹0.00",
      perKmRate: "₹31/km"
    },
    {
      vehicleType: "17+D Traveller",
      local8Hrs: "₹6000",
      local4Hrs: "₹0.00",
      perKmRate: "₹26/km"
    },
    {
      vehicleType: "15+D Traveller",
      local8Hrs: "₹5800",
      local4Hrs: "₹0.00",
      perKmRate: "₹23/km"
    },
    {
      vehicleType: "12+D Traveller",
      local8Hrs: "₹4500",
      local4Hrs: "₹0.00",
      perKmRate: "₹21/km"
    }
  ];

  const headers = [
    "Vehicle Type",
    "Local 8 Hrs/80 KM",
    "Local 4 Hrs/40 KM", 
    "Airport Pickup/Drop",
    "Per KM Rate",
    "Night Charges"
  ];

  const travellerHeaders = [
    "Vehicle Type",
    "Local 8 Hrs/80 KM",
    "Local 4 Hrs/40 KM",
    "Per KM Rate"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 lg:p-6 space-y-12">
      {/* First Table - Regular Vehicles */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Regular Vehicle Pricing</h2>
        
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-800 text-white">
              {headers.map((header, index) => (
                <th 
                  key={index}
                  className="px-4 py-4 text-left font-semibold text-sm xl:text-base border-r border-blue-800 last:border-r-0"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {pricingData.map((row, index) => (
              <tr 
                key={index}
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}
              >
                <td className="px-4 py-4 font-medium text-gray-800 border-r border-gray-200 text-sm xl:text-base">
                  {row.vehicleType}
                </td>
                <td className="px-4 py-4 text-gray-700 border-r border-gray-200 text-sm xl:text-base">
                  {row.local8Hrs}
                </td>
                <td className="px-4 py-4 text-gray-700 border-r border-gray-200 text-sm xl:text-base">
                  {row.local4Hrs}
                </td>
                <td className="px-4 py-4 text-gray-700 border-r border-gray-200 text-sm xl:text-base">
                  {row.airportPickup}
                </td>
                <td className="px-4 py-4 text-gray-700 border-r border-gray-200 text-sm xl:text-base">
                  {row.perKmRate}
                </td>
                <td className="px-4 py-4 text-gray-700 text-sm xl:text-base">
                  {row.nightCharges}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
              </div>

        {/* Mobile/Tablet Card View */}
        <div className="lg:hidden space-y-4">
          {pricingData.map((vehicle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Vehicle Header */}
              <div className="bg-blue-900 text-white px-4 py-3">
                <h3 className="font-bold text-lg">{vehicle.vehicleType}</h3>
              </div>
              
              {/* Vehicle Details */}
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">Local 8 Hrs/80 KM:</span>
                    <span className="text-gray-800 font-semibold">{vehicle.local8Hrs}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">Local 4 Hrs/40 KM:</span>
                    <span className="text-gray-800 font-semibold">{vehicle.local4Hrs}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">Airport Pickup/Drop:</span>
                    <span className="text-gray-800 font-semibold">{vehicle.airportPickup}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">Per KM Rate:</span>
                    <span className="text-gray-800 font-semibold">{vehicle.perKmRate}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-2 bg-blue-50 px-3 rounded">
                  <span className="text-blue-700 text-sm font-medium">Night Charges:</span>
                  <span className="text-blue-800 font-bold">{vehicle.nightCharges}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Table - Traveller Vehicles */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Traveller Vehicle Pricing</h2>
        
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-800 text-white">
                {travellerHeaders.map((header, index) => (
                  <th 
                    key={index}
                    className="px-4 py-4 text-left font-semibold text-sm xl:text-base border-r border-blue-800 last:border-r-0"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {travellerData.map((row, index) => (
                <tr 
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}
                >
                  <td className="px-4 py-4 font-medium text-gray-800 border-r border-gray-200 text-sm xl:text-base">
                    {row.vehicleType}
                  </td>
                  <td className="px-4 py-4 text-gray-700 border-r border-gray-200 text-sm xl:text-base">
                    {row.local8Hrs}
                  </td>
                  <td className="px-4 py-4 text-gray-700 border-r border-gray-200 text-sm xl:text-base">
                    {row.local4Hrs}
                  </td>
                  <td className="px-4 py-4 text-gray-700 text-sm xl:text-base">
                    {row.perKmRate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Card View */}
        <div className="lg:hidden space-y-4">
          {travellerData.map((vehicle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Vehicle Header */}
              <div className="bg-blue-900 text-white px-4 py-3">
                <h3 className="font-bold text-lg">{vehicle.vehicleType}</h3>
              </div>
              
              {/* Vehicle Details */}
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">Local 8 Hrs/80 KM:</span>
                    <span className="text-gray-800 font-semibold">{vehicle.local8Hrs}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">Local 4 Hrs/40 KM:</span>
                    <span className="text-gray-800 font-semibold">{vehicle.local4Hrs}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">Per KM Rate:</span>
                    <span className="text-gray-800 font-semibold">{vehicle.perKmRate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
        <p className="text-sm text-yellow-800">
          <span className="font-semibold">Note:</span> All prices are inclusive of driver allowance. 
          Toll, parking, and state taxes are additional as per actuals.
        </p>
      </div>
    </div>
  );
}