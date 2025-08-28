import React, { useState } from 'react';
import { 
  Car, Clock, MapPin, Users, Shield, Star, Phone, CheckCircle, 
  ArrowRight, Calendar, Briefcase, Heart, Plane, Navigation,
  CreditCard, Headphones, Award, Zap,
  Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us")
  }

  const serviceCategories = [
    { id: 'all', label: 'All Services', icon: <Car className="h-5 w-5" /> },
    { id: 'local', label: 'Local Rides', icon: <MapPin className="h-5 w-5" /> },
    { id: 'airport', label: 'Airport', icon: <Plane className="h-5 w-5" /> },
    { id: 'corporate', label: 'Corporate', icon: <Briefcase className="h-5 w-5" /> },
    { id: 'special', label: 'Special Events', icon: <Heart className="h-5 w-5" /> }
  ];

  const services = [
    {
      id: 1,
      category: 'local',
      title: 'City Taxi',
      subtitle: 'Quick rides within city',
      description: 'Fast, reliable transportation for your daily commute and city travel needs.',
      price: 'From $8',
      duration: 'Instant booking',
      features: ['GPS tracking', 'Professional drivers', 'Clean vehicles', 'Multiple payment options'],
      icon: <Car className="h-8 w-8" />,
      popular: false,
      image: '/images/city-taxi.jpg'
    },
    {
      id: 2,
      category: 'airport',
      title: 'Airport Transfer',
      subtitle: 'Seamless airport service',
      description: 'Stress-free airport pickup and drop-off with flight tracking and meet & greet service.',
      price: 'From $35',
      duration: '24/7 available',
      features: ['Flight tracking', 'Meet & greet', 'Luggage assistance', 'Fixed pricing'],
      icon: <Plane className="h-8 w-8" />,
      popular: true,
      image: '/images/airport-transfer.jpg'
    },
    {
      id: 3,
      category: 'local',
      title: 'Premium Rides',
      subtitle: 'Luxury transportation',
      description: 'Travel in style with our premium vehicles and enhanced comfort features.',
      price: 'From $15',
      duration: 'Advanced booking',
      features: ['Luxury vehicles', 'Premium amenities', 'Experienced chauffeurs', 'Complimentary refreshments'],
      icon: <Award className="h-8 w-8" />,
      popular: false,
      image: '/images/premium-rides.jpg'
    },
    {
      id: 4,
      category: 'local',
      title: 'Group Transportation',
      subtitle: 'Perfect for groups',
      description: 'Spacious vehicles for family trips, group outings, and team transportation.',
      price: 'From $25',
      duration: 'Group discounts',
      features: ['6-12 seater vehicles', 'Extra luggage space', 'Group rates', 'Event coordination'],
      icon: <Users className="h-8 w-8" />,
      popular: false,
      image: '/images/group-transport.jpg'
    },
    {
      id: 5,
      category: 'corporate',
      title: 'Corporate Services',
      subtitle: 'Business transportation',
      description: 'Professional transportation solutions tailored for corporate clients and executives.',
      price: 'Custom rates',
      duration: 'Monthly packages',
      features: ['Executive vehicles', 'Corporate billing', 'Priority support', 'Account management'],
      icon: <Briefcase className="h-8 w-8" />,
      popular: true,
      image: '/images/corporate-service.jpg'
    },
    {
      id: 6,
      category: 'special',
      title: 'Wedding Transportation',
      subtitle: 'Your special day',
      description: 'Make your wedding day memorable with our decorated luxury vehicles and professional service.',
      price: 'From $150',
      duration: 'Event packages',
      features: ['Decorated vehicles', 'Bridal party transport', 'Photography support', 'Flexible timing'],
      icon: <Heart className="h-8 w-8" />,
      popular: false,
      image: '/images/wedding-transport.jpg'
    },
    {
      id: 7,
      category: 'local',
      title: 'Hourly Rentals',
      subtitle: 'Flexible hourly service',
      description: 'Rent a cab by the hour for shopping, meetings, city tours, or multiple stops.',
      price: 'From $25/hr',
      duration: 'Minimum 2 hours',
      features: ['Flexible duration', 'Multiple stops', 'Wait time included', 'City tour packages'],
      icon: <Clock className="h-8 w-8" />,
      popular: false,
      image: '/images/hourly-rental.jpg'
    },
    {
      id: 8,
      category: 'airport',
      title: 'Outstation Trips',
      subtitle: 'Long distance travel',
      description: 'Comfortable intercity travel to nearby destinations with experienced drivers.',
      price: 'From $0.75/km',
      duration: 'Multi-day trips',
      features: ['Intercity travel', 'Experienced drivers', 'Overnight packages', 'Tourist destinations'],
      icon: <Navigation className="h-8 w-8" />,
      popular: false,
      image: '/images/outstation-trips.jpg'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const advantages = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Safe & Secure',
      description: 'All drivers are background-verified with regular vehicle safety inspections.'
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'Quick Response',
      description: 'Average pickup time of 5 minutes with real-time tracking and updates.'
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: '4.9 Star Rating',
      description: 'Consistently rated as the top cab service by thousands of satisfied customers.'
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your transportation needs.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Service',
      description: 'Select from our range of transportation services based on your needs.'
    },
    {
      number: '02',
      title: 'Book Instantly',
      description: 'Quick booking through our website, app, or phone with instant confirmation.'
    },
    {
      number: '03',
      title: 'Track & Ride',
      description: 'Real-time tracking of your driver with live updates and ETA.'
    },
    {
      number: '04',
      title: 'Secure Payment',
      description: 'Multiple payment options including cash, card, and digital wallets.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       {/* Hero Section */}

      <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img 
          src="/images/service.jpg" 
          alt="EagleCabs - Professional Transportation Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-blue-gray/70 to-blue-gray/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
               Our <span className="text-yellow-400">Services</span>
              </h1>
              <p className="lg:text-xl text-md mb-8 text-white">
                Your trusted transportation partner since 2014
              </p>
              <p className="lg:text-lg text-md text-white max-w-2xl mx-auto">
                We soar above the competition to deliver safe, reliable, and comfortable rides across the city and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-800 lg:py-12 py-4 shadow-lg ">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 text-center ">
            <div>
              <div className="text-2xl lg:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white lg:text-lg text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl lg:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white lg:text-lg text-sm">Service Available</div>
            </div>
            {/* <div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">5 Min</div>
              <div className="text-gray-600">Average Pickup</div>
            </div> */}
            <div>
              <div className="text-2xl lg:text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-white lg:text-lg text-sm">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-yellow-500">Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick city rides to luxury corporate transportation, we have the perfect solution for every journey.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-4 mb-12 overflow-x-auto md:overflow-visible">
  {serviceCategories.map((category) => (
    <button
      key={category.id}
      onClick={() => setActiveTab(category.id)}
      className={`flex items-center gap-1 md:gap-2 
                  px-3 py-2 md:px-6 md:py-3 
                  rounded-full font-medium text-sm md:text-base
                  transition-all whitespace-nowrap
                  ${
                    activeTab === category.id
                      ? "bg-gray-800 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
    >
      {category.icon}
      {category.label}
    </button>
  ))}
</div>


          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
                {service.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 text-sm font-bold px-4 py-2 text-center">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start justify-between mt-4 mb-6">
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                    {/* <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div> */}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-blue-600 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={handleClick} className="w-full bg-gradient-to-r from-gray-800 to-blue-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-6 rounded-lg transition-all transform group-hover:scale-105">
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="lg:text-4xl text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-yellow-500">EagleCabs?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality transportation experience with unmatched service standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="text-yellow-300 mb-6 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How It <span className="text-yellow-500">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Booking your ride is simple and straightforward. Follow these easy steps to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 p-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative shadow-2xl rounded-2xl p-9 lg:hover:scale-110 transition-all duration-100 cursor-pointer">
                <div className="bg-gradient-to-r from-blue-900 to-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {/* {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-blue-500 mx-auto" />
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      {/* <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transparent <span className="text-yellow-500">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no surge pricing. What you see is what you pay.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Standard Rates</h3>
              <div className="space-y-4">
                {[
                  { service: 'City Taxi (Base fare)', price: '$5 + $1.50/km' },
                  { service: 'Airport Transfer', price: '$35 - $65' },
                  { service: 'Hourly Rental', price: '$25/hour' },
                  { service: 'Outstation Travel', price: '$0.75/km' },
                  { service: 'Premium Rides', price: '$12 + $2.00/km' },
                  { service: 'Group Transportation', price: '$25 + $2.50/km' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700">{item.service}</span>
                    <span className="font-bold text-blue-800">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {[
                  'Professional, verified drivers',
                  'GPS tracking and live updates',
                  'Clean, well-maintained vehicles',
                  '24/7 customer support',
                  'Multiple payment options',
                  'Free cancellation (before pickup)',
                  'No booking or convenience fees',
                  'Complimentary waiting time (5 mins)'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
              <span className="text-lg">+91 88810 59997</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:greeneaglecabs@gmail.com">
              <span className="text-lg">greeneaglecabs@gmail.com</span>
              </a>
            </div>
          </div>
          <button onClick={() => navigate("/contact-us")} className="mt-8 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}