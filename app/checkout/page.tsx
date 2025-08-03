"use client";

import React from "react";
import { useCart } from "@/contexts/CartContext";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();

  // ✅ Fix: force price to be a number before arithmetic
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + (Number(item.price) * (item.quantity || 1));
  }, 0);

  const handlePlaceOrder = () => {
    alert('✅ Order placed successfully!');
    clearCart();
  };

  return (
    <div className="pt-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200 mb-6">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{Number(item.price) * item.quantity}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between text-lg font-semibold">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full btn-primary"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
