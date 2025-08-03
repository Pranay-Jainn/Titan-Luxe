export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number; // ✅ Always stored as number now
  originalPrice?: number; // ✅ Optional, also number only
  image: string;
  images: string[];
  description: string;
  category: 'men' | 'women' | 'smartwatch';
  collection: string;
  features: string[];
  specifications: {
    movement: string;
    caseMaterial: string;
    strapMaterial: string;
    waterResistance: string;
    caseSize: string;
  };
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'titan-chronograph-black-gold',
    name: 'Titan Chronograph Black Gold',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/364371/pexels-photo-364371.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg'
    ],
    description:
      'A masterpiece of precision engineering, the Titan Chronograph Black Gold combines sophisticated aesthetics with exceptional functionality. This timepiece features a sleek black dial with gold accents, perfect for the modern gentleman.',
    category: 'men',
    collection: 'Heritage Collection',
    features: [
      'Swiss Movement',
      'Sapphire Crystal Glass',
      'Water Resistant 100m',
      'Chronograph Function',
      'Gold-plated Details'
    ],
    specifications: {
      movement: 'Swiss Automatic',
      caseMaterial: 'Stainless Steel with Gold Plating',
      strapMaterial: 'Genuine Leather',
      waterResistance: '100m',
      caseSize: '42mm'
    },
    inStock: true
  },
  {
    id: '2',
    slug: 'titan-diamond-elegance-women',
    name: 'Titan Diamond Elegance',
    price: 3299,
    image: 'https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg',
    images: [
      'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg',
      'https://images.pexels.com/photos/9490516/pexels-photo-9490516.jpeg'
    ],
    description:
      'Exquisite femininity meets timeless luxury in the Titan Diamond Elegance. Adorned with carefully selected diamonds and crafted with the finest materials.',
    category: 'women',
    collection: 'Diamond Collection',
    features: [
      'Diamond Hour Markers',
      'Mother of Pearl Dial',
      'Swiss Movement',
      'Sapphire Crystal',
      'Water Resistant'
    ],
    specifications: {
      movement: 'Swiss Quartz',
      caseMaterial: 'Rose Gold Plated Steel',
      strapMaterial: 'Stainless Steel Bracelet',
      waterResistance: '50m',
      caseSize: '32mm'
    },
    inStock: true
  },
  {
    id: '3',
    slug: 'titan-smart-pro-black',
    name: 'Titan Smart Pro',
    price: 1899,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      'https://images.pexels.com/photos/1697215/pexels-photo-1697215.jpeg'
    ],
    description:
      'The future of timekeeping. Titan Smart Pro combines traditional watchmaking with cutting-edge technology for the modern lifestyle.',
    category: 'smartwatch',
    collection: 'Smart Collection',
    features: [
      'Heart Rate Monitor',
      'GPS Tracking',
      'Water Resistant 50m',
      '7-Day Battery Life',
      'Bluetooth Connectivity'
    ],
    specifications: {
      movement: 'Digital Smart Movement',
      caseMaterial: 'Titanium Alloy',
      strapMaterial: 'Silicone Sports Band',
      waterResistance: '50m',
      caseSize: '44mm'
    },
    inStock: true
  },
  {
    id: '4',
    slug: 'titan-classic-gold-men',
    name: 'Titan Classic Gold',
    price: 1999,
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/364371/pexels-photo-364371.jpeg'
    ],
    description:
      'Timeless elegance in its purest form. The Titan Classic Gold represents the pinnacle of traditional watchmaking with modern reliability.',
    category: 'men',
    collection: 'Classic Collection',
    features: [
      'Gold Plated Case',
      'Automatic Movement',
      'Leather Strap',
      'Date Display',
      'Anti-reflective Crystal'
    ],
    specifications: {
      movement: 'Automatic',
      caseMaterial: 'Gold Plated Stainless Steel',
      strapMaterial: 'Genuine Leather',
      waterResistance: '30m',
      caseSize: '40mm'
    },
    inStock: true
  },
  {
    id: '5',
    slug: 'titan-rose-gold-women',
    name: 'Titan Rose Gold Bloom',
    price: 2799,
    image: 'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg',
    images: [
      'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg',
      'https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg'
    ],
    description:
      'Embrace your feminine grace with the Titan Rose Gold Bloom. This delicate timepiece features intricate floral motifs and rose gold finishing.',
    category: 'women',
    collection: 'Bloom Collection',
    features: [
      'Rose Gold Plating',
      'Floral Motif Design',
      'Quartz Movement',
      'Scratch Resistant',
      'Adjustable Bracelet'
    ],
    specifications: {
      movement: 'Swiss Quartz',
      caseMaterial: 'Rose Gold Plated Steel',
      strapMaterial: 'Rose Gold Bracelet',
      waterResistance: '30m',
      caseSize: '28mm'
    },
    inStock: true
  },
  {
    id: '6',
    slug: 'titan-sport-chronograph',
    name: 'Titan Sport Chronograph',
    price: 2199,
    image: 'https://images.pexels.com/photos/364371/pexels-photo-364371.jpeg',
    images: [
      'https://images.pexels.com/photos/364371/pexels-photo-364371.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    description:
      'Built for performance and style. The Titan Sport Chronograph is the perfect companion for active lifestyles without compromising on elegance.',
    category: 'men',
    collection: 'Sport Collection',
    features: [
      'Tachymeter Scale',
      'Chronograph Function',
      'Luminous Hands',
      'Shock Resistant',
      'Sport Band'
    ],
    specifications: {
      movement: 'Quartz Chronograph',
      caseMaterial: 'Stainless Steel',
      strapMaterial: 'Rubber Sport Band',
      waterResistance: '200m',
      caseSize: '45mm'
    },
    inStock: true
  },
  {
    id: '7',
    slug: 'titan-smart-fitness-women',
    name: 'Titan Smart Fitness',
    price: 1599,
    image: 'https://images.pexels.com/photos/1697215/pexels-photo-1697215.jpeg',
    images: [
      'https://images.pexels.com/photos/1697215/pexels-photo-1697215.jpeg',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'
    ],
    description:
      'Designed for the active woman. Track your fitness goals while maintaining elegance with the Titan Smart Fitness watch.',
    category: 'smartwatch',
    collection: 'Fitness Collection',
    features: [
      'Fitness Tracking',
      'Sleep Monitor',
      '24/7 Heart Rate',
      'Smart Notifications',
      'Long Battery Life'
    ],
    specifications: {
      movement: 'Digital Smart Movement',
      caseMaterial: 'Aluminum Alloy',
      strapMaterial: 'Silicone Fitness Band',
      waterResistance: '50m',
      caseSize: '38mm'
    },
    inStock: true
  },
  {
    id: '8',
    slug: 'titan-heritage-automatic',
    name: 'Titan Heritage Automatic',
    price: 3799,
    image: 'https://images.pexels.com/photos/3782237/pexels-photo-3782237.jpeg',
    images: [
      'https://images.pexels.com/photos/3782237/pexels-photo-3782237.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg'
    ],
    description:
      'A tribute to horological excellence. The Titan Heritage Automatic showcases traditional craftsmanship with contemporary refinement.',
    category: 'men',
    collection: 'Heritage Collection',
    features: [
      'Skeleton Dial',
      'Automatic Movement',
      'Premium Leather',
      'Exhibition Caseback',
      'Hand-assembled'
    ],
    specifications: {
      movement: 'Swiss Automatic',
      caseMaterial: 'Stainless Steel',
      strapMaterial: 'Premium Leather',
      waterResistance: '50m',
      caseSize: '41mm'
    },
    inStock: true
  }
];

// ✅ Utility functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 6);
};
