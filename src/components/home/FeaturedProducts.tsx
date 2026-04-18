import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { products } from '../../data/products';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.isFeatured);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Featured Jewelry</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of exquisite gold pieces that combine timeless elegance with superior craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-md hover:from-amber-700 hover:to-yellow-600 transition-all shadow-md hover:shadow-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const toggleWishlist = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };
  
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Product Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
            {product.isOnSale && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                SALE
              </span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={(e) => toggleWishlist(e, product.id)}
              className={`p-2 rounded-full ${
                isInWishlist(product.id) 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-white text-gray-800 hover:bg-amber-500 hover:text-white'
              } transition-colors shadow-md`}
            >
              <Heart className="h-5 w-5" />
            </button>
            
            <button 
              onClick={(e) => handleAddToCart(e, product)}
              className="p-2 rounded-full bg-white text-gray-800 hover:bg-amber-500 hover:text-white transition-colors shadow-md"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={`w-4 h-4 ${
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
              <span className="text-gray-500 text-sm ml-1">
                ({product.reviews})
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-lg font-bold text-amber-600">
                    ${product.discountPrice.toFixed(2)}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold text-amber-600">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-500">
              {product.weight} | {product.purity}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProducts;