import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { products } from '../data/products';

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlistIds(JSON.parse(savedWishlist));
    }
  }, []);

  // Update wishlist products when IDs change
  useEffect(() => {
    const wishlistProducts = products.filter(product => 
      wishlistIds.includes(product.id)
    );
    setWishlist(wishlistProducts);
    
    // Save to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const addToWishlist = (productId: string) => {
    setWishlistIds(prev => {
      if (!prev.includes(productId)) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistIds(prev => prev.filter(id => id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return wishlistIds.includes(productId);
  };

  return (
    <WishlistContext.Provider 
      value={{ 
        wishlist, 
        addToWishlist, 
        removeFromWishlist, 
        isInWishlist 
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};