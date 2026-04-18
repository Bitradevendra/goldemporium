import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold mb-8">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="h-20 w-20 text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any jewelry to your cart yet.
            </p>
            <Link to="/shop">
              <Button>
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-medium">{totalItems} {totalItems === 1 ? 'Item' : 'Items'} in Cart</h2>
                </div>
                
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.product.id} className="p-6 flex flex-col sm:flex-row items-center">
                      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="sm:ml-6 mt-4 sm:mt-0 flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="text-base font-medium text-gray-900">
                              {item.product.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.product.purity} | {item.product.weight}
                            </p>
                          </div>
                          <p className="mt-2 sm:mt-0 text-base font-medium text-amber-600">
                            ${(item.product.discountPrice || item.product.price).toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border-l border-r border-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700 flex items-center"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-lg font-medium mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">
                      {totalPrice >= 999 ? 'Free' : '$19.99'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">
                      ${(totalPrice * 0.07).toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Order Total</span>
                      <span className="text-amber-600">
                        ${(
                          totalPrice + 
                          (totalPrice >= 999 ? 0 : 19.99) + 
                          (totalPrice * 0.07)
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/checkout">
                    <Button fullWidth size="lg" className="flex items-center justify-center">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-4 text-center">
                  <Link 
                    to="/shop" 
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;