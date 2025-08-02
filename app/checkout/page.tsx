'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  const handlePlaceOrder = () => {
    alert('✅ Order placed successfully!');
    clearCart(); // cart empty after order
  };

  return (
    <div className="pt-20 min-h-screen bg-titan-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                  <span className="text-lg">{item.name}</span>
                  <span className="text-lg">₹{item.price.toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-xl font-semibold mb-6">
              <span>Total:</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-titan-black text-white py-3 px-6 text-lg font-medium hover:bg-titan-gold hover:text-titan-black transition-all duration-300"
            >
              Place Order
            </button>
          </>
        ) : (
          <p className="text-lg">Your cart is empty. <Link href="/collections" className="text-titan-gold">Go shopping</Link></p>
        )}
      </div>
    </div>
  );
}
