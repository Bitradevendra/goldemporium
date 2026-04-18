import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Browse Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our exquisite range of gold jewelry categories, each crafted with precision and passion.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 transform group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-medium text-white group-hover:text-amber-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;