import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import SpecialOffer from '../components/home/SpecialOffer';
import Testimonials from '../components/home/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <SpecialOffer />
      <Testimonials />
    </div>
  );
};

export default HomePage;