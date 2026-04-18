import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/230290/pexels-photo-230290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Luxury Gold Jewelry" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-28 md:py-40 lg:py-48">
        <div className="max-w-xl">
          <span className="block text-amber-400 text-sm md:text-base font-medium mb-3 tracking-wider">
            LUXURY REDEFINED
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Exquisite Gold Jewelry Collection
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Discover handcrafted pieces that blend timeless tradition with contemporary elegance. Each piece tells a story of exceptional craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/shop">
              <Button size="lg">
                Explore Collection
              </Button>
            </Link>
            <Link to="/category/new-arrivals">
              <Button variant="outline" size="lg">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Gold Bar Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-600"></div>
    </div>
  );
};

export default Hero;