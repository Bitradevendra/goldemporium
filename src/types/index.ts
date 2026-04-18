export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  purity: string;
  weight: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  wishlist: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}