'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products';

interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number | null;
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
  quantity: number;
}


interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
  const savedCart = localStorage.getItem('titan-luxe-cart');
  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);

    // ✅ ensure all prices are numbers after restoring
    setCartItems(parsedCart.map((item: any) => ({
      ...item,
      price: Number(item.price),
      originalPrice: item.originalPrice ? Number(item.originalPrice) : null
    })));
  }
}, []);


  // ✅ Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('titan-luxe-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add product to cart (FORCING price to be a number)
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // ✅ Increase quantity if product already exists
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // ✅ New product – ensure price & originalPrice are numbers
        return [
          ...prevItems,
          {
            ...product,
            price: Number(product.price), // 🔥 ensures number type
            originalPrice: product.originalPrice
              ? Number(product.originalPrice)
              : null,
            quantity: 1,
          },
        ];
      }
    });
    setIsCartOpen(true);
  };

  // ✅ Remove product from cart
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // ✅ Update quantity
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // ✅ Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Total items count
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // ✅ Total price calculation (price is guaranteed number now)
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
