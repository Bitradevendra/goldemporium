import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Heart, Share2, ShoppingCart, Shield, TruckIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };
  
  const nextImage = () => {
    setActiveImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setActiveImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div>
            <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100 h-96">
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
              
              {/* Navigation arrows */}
              <button 
                onClick={prevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-amber-500 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-amber-500 hover:text-white transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* Thumbnail images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`border-2 cursor-pointer rounded-md overflow-hidden w-20 h-20 ${
                    index === activeImageIndex 
                      ? 'border-amber-500' 
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) 
                        ? 'text-amber-500' 
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-amber-600">
                    ${product.discountPrice.toFixed(2)}
                  </span>
                  <span className="ml-3 text-lg text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                    {(((product.price - product.discountPrice) / product.price) * 100).toFixed(0)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-amber-600">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700">
                {product.description}
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Category:</span>
                <span className="text-amber-600">{product.category}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Purity:</span>
                <span className="text-amber-600">{product.purity}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Weight:</span>
                <span className="text-amber-600">{product.weight}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button 
                  onClick={decrementQuantity}
                  className="bg-gray-200 text-gray-700 px-3 py-2 rounded-l-md hover:bg-gray-300"
                >
                  -
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 text-center px-3 py-2 border-t border-b border-gray-300 focus:outline-none"
                />
                <button 
                  onClick={incrementQuantity}
                  className="bg-gray-200 text-gray-700 px-3 py-2 rounded-r-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
              <Button 
                onClick={handleAddToCart}
                fullWidth
                size="lg"
                className="flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button 
                onClick={toggleWishlist}
                variant={isInWishlist(product.id) ? 'primary' : 'outline'}
                fullWidth
                size="lg"
                className="flex items-center justify-center"
              >
                <Heart className="h-5 w-5 mr-2" />
                {isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
              </Button>
            </div>
            
            {/* Share button */}
            <button className="flex items-center text-gray-600 hover:text-amber-600 mb-6">
              <Share2 className="h-5 w-5 mr-2" />
              Share this product
            </button>
            
            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 text-amber-600 mr-3" />
                <span className="text-gray-700">Certified Authentic Jewelry</span>
              </div>
              <div className="flex items-center">
                <TruckIcon className="h-5 w-5 text-amber-600 mr-3" />
                <span className="text-gray-700">Free Shipping & 30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;