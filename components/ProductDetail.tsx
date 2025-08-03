'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, Shield, Truck, Award, Check } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  // ✅ Directly use price since it's always a number now
  const productImages = product.images && product.images.length > 0
    ? product.images
    : [product.image]; // fallback to single image

  return (
    <div className="pt-20 min-h-screen bg-titan-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ✅ Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-titan-gray mb-8">
          <Link href="/" className="hover:text-titan-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-titan-gold transition-colors">
            Collections
          </Link>
          <span>/</span>
          <span className="text-titan-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ✅ Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square relative overflow-hidden rounded-lg bg-white">
              <Image
                src={productImages[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* ✅ Thumbnail Images (only if multiple images) */}
            {productImages.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImageIndex === index
                        ? 'border-titan-gold'
                        : 'border-gray-200 hover:border-titan-gold'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ✅ Product Info */}
          <div className="space-y-6">
            {/* Back Button */}
            <Link
              href="/collections"
              className="inline-flex items-center text-titan-gray hover:text-titan-gold transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Collections
            </Link>

            {/* Product Details */}
            <div>
              <p className="text-sm text-titan-gray uppercase tracking-wide mb-2">
                {product.collection || 'Titan Luxe Collection'}
              </p>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-titan-black mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-titan-black">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-titan-gray line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <p className="text-lg text-titan-gray leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* ✅ Features (safe check) */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-titan-black mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check size={16} className="text-titan-gold flex-shrink-0" />
                      <span className="text-titan-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ✅ Specifications */}
            {product.specifications && (
              <div>
                <h3 className="text-lg font-semibold text-titan-black mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-medium text-titan-gray">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </dt>
                      <dd className="text-sm text-titan-black">{value}</dd>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={product.inStock === false}
                className={`w-full py-4 px-8 text-lg font-medium transition-all duration-300 ${
                  product.inStock !== false
                    ? 'bg-titan-black text-white hover:bg-titan-gold hover:text-titan-black'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock !== false ? 'Add to Cart' : 'Out of Stock'}
              </button>

              {product.inStock !== false && (
                <p className="text-sm text-titan-gray text-center">
                  <Check size={16} className="inline mr-1 text-green-500" />
                  In stock and ready to ship
                </p>
              )}
            </div>

            {/* ✅ Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="bg-titan-gold p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Star className="text-titan-black" size={20} />
                </div>
                <p className="text-xs text-titan-gray">Premium Quality</p>
              </div>

              <div className="text-center">
                <div className="bg-titan-gold p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Shield className="text-titan-black" size={20} />
                </div>
                <p className="text-xs text-titan-gray">Lifetime Warranty</p>
              </div>

              <div className="text-center">
                <div className="bg-titan-gold p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Truck className="text-titan-black" size={20} />
                </div>
                <p className="text-xs text-titan-gray">Free Shipping</p>
              </div>

              <div className="text-center">
                <div className="bg-titan-gold p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Award className="text-titan-black" size={20} />
                </div>
                <p className="text-xs text-titan-gray">Award Winning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
