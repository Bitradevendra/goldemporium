import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const SpecialOffer: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gold particles background */}
      <div className="absolute inset-0 bg-amber-50 opacity-50">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Special Offer Jewelry" 
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white font-bold py-2 px-4 rounded-full transform rotate-12 shadow-md">
                SAVE 20%
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 opacity-70 blur-lg"></div>
          </div>
          
          {/* Content Side */}
          <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
            <span className="inline-block py-1 px-3 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              LIMITED TIME OFFER
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Summer Collection <br />
              <span className="text-amber-600">Special Discount</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Celebrate the season with our exclusive summer collection. Enjoy 20% off on selected gold jewelry pieces. 
              Perfect for gifting or adding to your personal collection.
            </p>
            
            <div className="mb-8">
              <div className="flex space-x-6 mb-4">
                <div className="text-center">
                  <div className="bg-amber-500 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mb-1">
                    30
                  </div>
                  <span className="text-xs text-gray-500">Days</span>
                </div>
                <div className="text-center">
                  <div className="bg-amber-500 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mb-1">
                    12
                  </div>
                  <span className="text-xs text-gray-500">Hours</span>
                </div>
                <div className="text-center">
                  <div className="bg-amber-500 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mb-1">
                    45
                  </div>
                  <span className="text-xs text-gray-500">Minutes</span>
                </div>
                <div className="text-center">
                  <div className="bg-amber-500 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mb-1">
                    30
                  </div>
                  <span className="text-xs text-gray-500">Seconds</span>
                </div>
              </div>
            </div>
            
            <Link to="/deals">
              <Button size="lg">
                Shop the Sale
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;