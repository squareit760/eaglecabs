import React from 'react'

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServiceCard from '../components/ServiceCard';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CallTo from '../components/CallTo';
import Footer from '../components/Footer';
import CarRentalService from '../components/OurCars';
import { useNavigate } from 'react-router-dom';
import LocationsSection from '../components/location';

const Home = () => {
  const navigate = useNavigate();
  const cars = [
    {
      name: "HYUNDAI VERNA",
      desc: "Comfortable rides for city and outstation travel.",
      img: "/images/Hyundai.webp",
    },
    {
      name: "INNOVA HYCROSS",
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
    
  ];
  const handleClick = () =>{
    navigate("/our-cars");
  }
  return (
    <>
      <HeroSection />
      <CarRentalService cars={cars} />
      <div className='flex justify-center my-2'>
      <button onClick={handleClick} className=' py-2 px-4 rounded-4xl cursor-pointer bg-yellow-500 text-white'>View All</button>
      </div>
      <WhyChooseUs />
      <HowItWorks />
      <LocationsSection />
      <ServiceCard />
      <Testimonials />
      <CallTo />

    </>
  )
}

export default Home
