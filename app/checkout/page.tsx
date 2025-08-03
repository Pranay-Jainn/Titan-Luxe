"use client";

import React from "react";
import { useCart } from "@/contexts/CartContext";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();

  // ✅ Make subtotal calculation type safe
  const subtotal = cartItems.reduce<number>(
    (acc, item) => acc + (Number(item.price) * (item.quantity || 1)),
    0
  );

  const handlePlaceOrder = () => {
    alert("✅ Order placed successfully!");
    clearCart();
  };

  return (
    <div className="pt-20 min-h-screen bg-titan-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-serif font-bold text-titan-black mb-8">
          Checkout
        </h1>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-4">
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  ₹{Number(item.price) * item.quantity}
                </p>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between items-center pt-6 border-t mt-4">
              <p className="text-xl font-semibold">Subtotal:</p>
              <p className="text-xl font-bold">₹{subtotal}</p>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full bg-titan-black text-white py-3 rounded-lg hover:bg-titan-gold hover:text-titan-black transition"
            >
              Place Order
            </button>
          </div>
        ) : (
          <p className="text-lg text-titan-gray">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
