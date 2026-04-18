import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Shield, CreditCard, TruckIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Trust badges */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <Shield className="h-8 w-8 text-amber-400 mr-3" />
              <div>
                <h4 className="font-medium text-white">Certified Authentic</h4>
                <p className="text-sm">100% Certified Jewelry</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CreditCard className="h-8 w-8 text-amber-400 mr-3" />
              <div>
                <h4 className="font-medium text-white">Secure Payment</h4>
                <p className="text-sm">Multiple Payment Options</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <TruckIcon className="h-8 w-8 text-amber-400 mr-3" />
              <div>
                <h4 className="font-medium text-white">Free Shipping</h4>
                <p className="text-sm">On Orders Above $999</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Shield className="h-8 w-8 text-amber-400 mr-3" />
              <div>
                <h4 className="font-medium text-white">30-Day Returns</h4>
                <p className="text-sm">Easy Return Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold text-amber-400 mb-4">GoldEmporium</h3>
            <p className="mb-4">
              Discover our exquisite collection of gold jewelry and ornaments, 
              crafted with precision and passion. Each piece tells a story of elegance and tradition.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-400 transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/necklaces" className="hover:text-amber-400 transition-colors">Necklaces</Link>
              </li>
              <li>
                <Link to="/category/earrings" className="hover:text-amber-400 transition-colors">Earrings</Link>
              </li>
              <li>
                <Link to="/category/bracelets" className="hover:text-amber-400 transition-colors">Bracelets</Link>
              </li>
              <li>
                <Link to="/category/rings" className="hover:text-amber-400 transition-colors">Rings</Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="hover:text-amber-400 transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link to="/deals" className="hover:text-amber-400 transition-colors">Special Offers</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mr-2 mt-0.5" />
                <span>123 Jewelry Lane, Gold City, GC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-2" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-2" />
                <span>info@goldemporium.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white mb-2">Subscribe to our Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-amber-400"
                />
                <button 
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} GoldEmporium. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <img 
                src="https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Payment Methods" 
                className="h-8" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;