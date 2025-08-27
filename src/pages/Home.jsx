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

const Home = () => {
  const navigate = useNavigate();
  const cars = [
    {
      name: "Sedan",
      desc: "Comfortable rides for city and outstation travel.",
      img: "/images/car1.png",
    },
    {
      name: "SUV",
      desc: "Spacious SUVs for family and group travel.",
      img: "/images/car2.png",
    },
    {
      name: "Luxury",
      desc: "Premium cars for weddings, events, and business trips.",
      img: "/images/car3.jpg",
    }
    
  ];
  const handleClick = () =>{
    navigate("/our-cars");
  }
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServiceCard />
      <HowItWorks />
      <CarRentalService cars={cars} />
      <div className='flex justify-center my-2'>
      <button onClick={handleClick} className=' py-2 px-4 rounded-4xl cursor-pointer bg-yellow-500 text-white'>View All</button>
      </div>
      <Testimonials />
      <CallTo />

    </>
  )
}

export default Home
