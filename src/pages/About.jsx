import React from "react";
import { Users, Clock, Shield, Star, MapPin, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "24/7", label: "Service Available" },
    { number: "100+", label: "Professional Drivers" },
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Secure",
      description:
        "All our drivers are verified and vehicles are regularly maintained for your safety.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Always On Time",
      description:
        "Punctuality is our priority. We ensure you reach your destination on schedule.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Professional Service",
      description:
        "Our experienced drivers provide courteous and professional service every time.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Top Rated",
      description:
        "Consistently rated 5 stars by customers for reliability and excellence.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* Banner Section */}
      <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img 
          src="/images/about.jpg" 
          alt="EagleCabs - Professional Transportation Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-blue-gray/70 to-blue-gray/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-yellow-400">EagleCabs</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100">
                Your trusted transportation partner since 2014
              </p>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                We soar above the competition to deliver safe, reliable, and comfortable rides across the city and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gradient-to-r from-gray-300 via-indigo-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
              EagleCabs
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2014, EagleCabs began with a simple mission: to
                provide reliable, safe, and comfortable transportation services
                that you can trust. What started as a small fleet of just 5
                vehicles has grown into one of the region's most trusted cab
                services.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our name "Eagle" represents our commitment to soaring above
                expectations. Like eagles, we have keen vision for detail,
                unwavering focus on our goals, and the strength to carry our
                passengers safely to their destinations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to serve thousands of customers monthly with
                our fleet of modern, well-maintained vehicles and team of
                professional drivers who treat every ride as an opportunity to
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose EagleCabs?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-gray-800 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-gradient-to-r from-gray-300 via-indigo-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Our Mission & Vision
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              At{" "}
              <span className="font-semibold text-indigo-600">EagleCabs</span>,
              we are driven by passion, integrity, and commitment to excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6-8a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional transportation services that prioritize
                safety, reliability, and customer satisfaction. We strive to
                make every journey comfortable and stress-free while building
                lasting relationships with our community.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 
                9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading transportation service provider in the region,
                known for innovation, sustainability, and unwavering commitment
                to excellence. We envision a future where every ride with
                <span className="font-semibold text-indigo-600">
                  {" "}
                  EagleCabs
                </span>{" "}
                exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience the EagleCabs Difference?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Book your ride today and discover why thousands of customers trust
            us for their transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="text-lg">+1 (555) 123-EAGLE</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="text-lg">info@eaglecabs.com</span>
            </div>
          </div>
          <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
