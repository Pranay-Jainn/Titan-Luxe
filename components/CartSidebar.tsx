'use client';

import React from 'react';
import Link from 'next/link';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';

const CartSidebar = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice,
    clearCart 
  } = useCart();
  const { user, setIsAuthModalOpen, setAuthMode } = useAuth();

  if (!isCartOpen) return null;

  return (
    <>
      {/* 🔲 Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* 🔲 Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        
        {/* 🔲 Header */}
        <div className="flex items-center justify-between p-6 border-b shadow-sm">
          <h2 className="text-xl font-serif font-semibold">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* 🔲 Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center space-x-4 border-b pb-4"
                >
                  
                  {/* 🖼 Product Image */}
                  <div className="flex-shrink-0 w-16 h-16 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  
                  {/* 📝 Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                    
                    {/* ➕➖ Quantity Controls */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  {/* ❌ Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 🔲 Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-5 shadow-inner bg-gray-50">
            
            {/* 💰 Total Price */}
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-titan-gold">
                ₹{getTotalPrice().toLocaleString('en-IN')}
              </span>
            </div>
            
            {/* 🛒 Buttons */}
            <div className="flex flex-col space-y-3">
              {user ? (
                <Link 
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full block text-center py-3 bg-titan-gold text-titan-black font-semibold rounded-md hover:bg-titan-black hover:text-white transition-all"
                >
                  Proceed to Checkout
                </Link>
              ) : (
                <button 
                  onClick={() => {
                    setAuthMode('signin');
                    setIsAuthModalOpen(true);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3 bg-titan-gold text-titan-black font-semibold rounded-md hover:bg-titan-black hover:text-white transition-all"
                >
                  Sign In to Checkout
                </button>
              )}

              {/* 🗑 Clear Cart */}
              <button 
                onClick={clearCart}
                className="w-full py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-all text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
