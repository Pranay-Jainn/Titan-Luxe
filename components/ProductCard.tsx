'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  // ✅ Generate slug from name if product.slug is missing
  const productSlug = product.slug 
    ? product.slug 
    : product.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')   // replace spaces & symbols with "-"
        .replace(/(^-|-$)+/g, '');     // remove trailing hyphens

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* ✅ Wrap the whole card in Link for product page */}
      <Link href={`/product/${productSlug}`}>
        {/* ✅ Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* ✅ Show SALE tag only if originalPrice exists */}
          {product.originalPrice && (
            <div className="absolute top-4 left-4 bg-titan-gold text-titan-black px-2 py-1 text-xs font-medium rounded">
              SALE
            </div>
          )}
        </div>

        {/* ✅ Product Info */}
        <div className="p-6">
          {/* ✅ Product title & collection */}
          <div className="mb-2">
            <p className="text-sm text-titan-gray uppercase tracking-wide">
              {product.collection}
            </p>
            <h3 className="text-lg font-serif font-semibold text-titan-black group-hover:text-titan-gold transition-colors duration-300">
              {product.name}
            </h3>
          </div>

          {/* ✅ Pricing Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* ✅ Format price in ₹ with commas */}
              <span className="text-xl font-bold text-titan-black">
                {product.price.toLocaleString('en-IN')}
              </span>

              {/* ✅ Show original price only if it exists */}
              {product.originalPrice && (
                <span className="text-sm text-titan-gray line-through">
                  {product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {/* ✅ Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-titan-black text-white px-4 py-2 text-sm font-medium hover:bg-titan-gold hover:text-titan-black transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
