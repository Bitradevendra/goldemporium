import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Menu, 
  X, 
  ChevronDown 
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { categories } from '../../data/categories';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [categoriesMenuOpen, setCategoriesMenuOpen] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to search results (would be implemented with router)
    console.log('Searching for:', searchQuery);
    setSearchOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-md text-white py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <div className={`text-2xl font-serif font-bold ${isScrolled ? 'text-amber-600' : 'text-amber-400'}`}>
              GoldEmporium
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}
            >
              Home
            </Link>
            <div className="relative">
              <button 
                className={`flex items-center ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}
                onClick={() => setCategoriesMenuOpen(!categoriesMenuOpen)}
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {categoriesMenuOpen && (
                <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  {categories.map(category => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-amber-50 hover:text-amber-600"
                      onClick={() => setCategoriesMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link 
              to="/deals" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}
            >
              Deals
            </Link>
            <Link 
              to="/about" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 transition-colors`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className={`p-2 rounded-full hover:bg-amber-100 ${
                isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-500'
              }`}
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link 
              to="/wishlist"
              className={`p-2 rounded-full hover:bg-amber-100 ${
                isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-500'
              }`}
            >
              <Heart className="h-5 w-5" />
            </Link>
            
            <Link 
              to="/cart" 
              className={`p-2 rounded-full hover:bg-amber-100 relative ${
                isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-500'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className={`p-2 rounded-full hover:bg-amber-100 ${
                  isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-500'
                }`}>
                  <User className="h-5 w-5" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 hidden group-hover:block">
                  <p className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                    Hello, {user?.name}
                  </p>
                  <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50">My Account</Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50">Orders</Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className={`p-2 rounded-full hover:bg-amber-100 ${
                  isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-500'
                }`}
              >
                <User className="h-5 w-5" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link 
              to="/cart" 
              className={`p-2 rounded-full hover:bg-amber-100 relative ${
                isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-500'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button 
              onClick={toggleMobileMenu}
              className={`p-2 rounded-full hover:bg-amber-100 ${
                isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-500'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-20 z-50">
            <div className="bg-white rounded-lg p-4 shadow-xl w-full max-w-2xl mx-4">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search for jewelry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <button 
                  type="submit"
                  className="bg-amber-500 text-white px-4 py-2 rounded-r-md hover:bg-amber-600 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
              <button 
                onClick={toggleSearch}
                className="mt-4 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-amber-600">GoldEmporium</h2>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <form className="flex">
                  <input
                    type="text"
                    placeholder="Search for jewelry..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                  />
                  <button 
                    type="submit"
                    className="bg-amber-500 text-white px-4 py-2 rounded-r-md"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </form>
              </div>
              
              <nav className="space-y-4">
                <Link 
                  to="/" 
                  className="block py-2 text-lg hover:text-amber-600"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <div>
                  <button 
                    className="flex items-center justify-between w-full py-2 text-lg hover:text-amber-600"
                    onClick={() => setCategoriesMenuOpen(!categoriesMenuOpen)}
                  >
                    Categories
                    <ChevronDown className={`h-5 w-5 transition-transform ${categoriesMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {categoriesMenuOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      {categories.map(category => (
                        <Link
                          key={category.id}
                          to={`/category/${category.id}`}
                          className="block py-1 hover:text-amber-600"
                          onClick={toggleMobileMenu}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link 
                  to="/deals" 
                  className="block py-2 text-lg hover:text-amber-600"
                  onClick={toggleMobileMenu}
                >
                  Deals
                </Link>
                <Link 
                  to="/wishlist" 
                  className="block py-2 text-lg hover:text-amber-600"
                  onClick={toggleMobileMenu}
                >
                  Wishlist
                </Link>
                <Link 
                  to="/about" 
                  className="block py-2 text-lg hover:text-amber-600"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="block py-2 text-lg hover:text-amber-600"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-8 border-t pt-4">
                {isAuthenticated ? (
                  <>
                    <p className="text-gray-600 mb-4">Hello, {user?.name}</p>
                    <Link 
                      to="/account" 
                      className="block py-2 hover:text-amber-600"
                      onClick={toggleMobileMenu}
                    >
                      My Account
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block py-2 hover:text-amber-600"
                      onClick={toggleMobileMenu}
                    >
                      Orders
                    </Link>
                    <button 
                      onClick={() => { logout(); toggleMobileMenu(); }}
                      className="block py-2 hover:text-amber-600"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <div className="space-y-2">
                    <Link 
                      to="/login" 
                      className="block py-2 text-center bg-amber-500 text-white rounded-md hover:bg-amber-600"
                      onClick={toggleMobileMenu}
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/register" 
                      className="block py-2 text-center border border-amber-500 text-amber-600 rounded-md hover:bg-amber-50"
                      onClick={toggleMobileMenu}
                    >
                      Create Account
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;