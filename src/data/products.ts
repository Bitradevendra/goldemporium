import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Studded Gold Necklace',
    description: 'Exquisite 22K gold necklace with premium cut diamonds and intricate craftsmanship. This piece showcases traditional artistry with modern elegance.',
    price: 2499.99,
    discountPrice: 2199.99,
    images: [
      'https://images.pexels.com/photos/10917521/pexels-photo-10917521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/11638635/pexels-photo-11638635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'Necklaces',
    purity: '22K',
    weight: '32.5g',
    rating: 4.9,
    reviews: 124,
    isFeatured: true,
    isOnSale: true
  },
  {
    id: '2',
    name: 'Traditional Bridal Gold Set',
    description: 'Complete bridal jewelry set in pure 24K gold with matching earrings, necklace, and bangles. Perfect for wedding ceremonies and special occasions.',
    price: 4999.99,
    images: [
      'https://images.pexels.com/photos/12934510/pexels-photo-12934510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5370711/pexels-photo-5370711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'Bridal Sets',
    purity: '24K',
    weight: '120g',
    rating: 5.0,
    reviews: 87,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Vintage Gold Earrings',
    description: 'Handcrafted vintage-style 18K gold earrings with intricate filigree work, inspired by classical designs with a contemporary twist.',
    price: 899.99,
    discountPrice: 799.99,
    images: [
      'https://images.pexels.com/photos/10971172/pexels-photo-10971172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/13084299/pexels-photo-13084299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'Earrings',
    purity: '18K',
    weight: '8.2g',
    rating: 4.7,
    reviews: 203,
    isOnSale: true
  },
  {
    id: '4',
    name: 'Gold Kada Bracelet',
    description: 'Solid gold kada bracelet with antique finish and traditional motifs. A statement piece that adds elegance to any outfit.',
    price: 1299.99,
    images: [
      'https://images.pexels.com/photos/12680182/pexels-photo-12680182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/10917517/pexels-photo-10917517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'Bracelets',
    purity: '22K',
    weight: '25.8g',
    rating: 4.8,
    reviews: 156,
    isNew: true
  },
  {
    id: '5',
    name: 'Rose Gold Chain',
    description: 'Delicate 18K rose gold chain with modern design. Perfect for everyday wear or layering with other necklaces.',
    price: 599.99,
    discountPrice: 499.99,
    images: [
      'https://images.pexels.com/photos/9953654/pexels-photo-9953654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/10917522/pexels-photo-10917522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'Chains',
    purity: '18K',
    weight: '5.5g',
    rating: 4.6,
    reviews: 178,
    isOnSale: true
  },
  {
    id: '6',
    name: 'Men\'s Gold Signet Ring',
    description: 'Classic 22K gold signet ring for men with customizable engraving option. Sophisticated and timeless design for the modern gentleman.',
    price: 999.99,
    images: [
      'https://images.pexels.com/photos/9420617/pexels-photo-9420617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6949895/pexels-photo-6949895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'Rings',
    purity: '22K',
    weight: '12.7g',
    rating: 4.8,
    reviews: 92,
    isNew: true
  },
  {
    id: '7',
    name: 'Gold Coin Collection',
    description: 'Set of five 24K gold coins with various auspicious symbols. Perfect for investment or gifting on special occasions.',
    price: 3299.99,
    images: [
      'https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'Coins',
    purity: '24K',
    weight: '50g',
    rating: 4.9,
    reviews: 63,
    isFeatured: true
  },
  {
    id: '8',
    name: 'Gold Anklet Pair',
    description: 'Beautifully crafted 22K gold anklets with tiny bells and intricate chain work. Adds a touch of elegance to traditional attire.',
    price: 899.99,
    images: [
      'https://images.pexels.com/photos/12330407/pexels-photo-12330407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8105035/pexels-photo-8105035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'Anklets',
    purity: '22K',
    weight: '18.3g',
    rating: 4.7,
    reviews: 82,
    isNew: true
  }
];