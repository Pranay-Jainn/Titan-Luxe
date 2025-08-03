"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Shield, Truck, Award } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig"; // ✅ make sure you created this file earlier
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch products dynamically from Firebase Firestore (with price conversion)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const snapshot = await getDocs(productsRef);
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            ...data,
            // ✅ Convert price & originalPrice to numbers (if they are strings)
            price: typeof data.price === "string"
              ? parseFloat(data.price.replace(/[^0-9.]/g, "")) || 0
              : data.price,
            originalPrice: data.originalPrice
              ? (typeof data.originalPrice === "string"
                  ? parseFloat(data.originalPrice.replace(/[^0-9.]/g, "")) || 0
                  : data.originalPrice)
              : null,
          };
        });

        // ✅ OPTIONAL: Limit featured products to 6 for cleaner homepage
        setFeaturedProducts(products.slice(0, 6));
      } catch (error) {
        console.error("🔥 Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-20">
      {/* ✅ Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-titan-black to-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg"
            alt="Luxury Titan Watch"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Time. Elegantly <span className="text-titan-gold">Defined.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover our exquisite collection of premium luxury watches, crafted
            with precision and designed for the discerning individual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections"
              className="btn-primary inline-flex items-center justify-center"
            >
              Explore Collections <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/about"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-titan-black"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Featured Collections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-titan-black mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-titan-gray max-w-2xl mx-auto">
              Explore our carefully curated collections, each designed to
              complement your unique style and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ✅ Men's Collection */}
            <Link
              href="/collections?category=men"
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg"
                  alt="Men's Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    Men's Collection
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Sophistication meets functionality
                  </p>
                  <span className="inline-flex items-center text-titan-gold font-medium">
                    Explore <ArrowRight className="ml-2" size={16} />
                  </span>
                </div>
              </div>
            </Link>

            {/* ✅ Women's Collection */}
            <Link
              href="/collections?category=women"
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg"
                  alt="Women's Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    Women's Collection
                  </h3>
                  <p className="text-gray-200 mb-4">Elegance redefined</p>
                  <span className="inline-flex items-center text-titan-gold font-medium">
                    Explore <ArrowRight className="ml-2" size={16} />
                  </span>
                </div>
              </div>
            </Link>

            {/* ✅ Smartwatch Collection */}
            <Link
              href="/collections?category=smartwatch"
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg"
                  alt="Smartwatch Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    Smart Collection
                  </h3>
                  <p className="text-gray-200 mb-4">Technology meets luxury</p>
                  <span className="inline-flex items-center text-titan-gold font-medium">
                    Explore <ArrowRight className="ml-2" size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Featured Products (Dynamic from Firestore) */}
      <section className="py-20 bg-titan-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-titan-black mb-4">
              Featured Timepieces
            </h2>
            <p className="text-lg text-titan-gray max-w-2xl mx-auto">
              Discover our most coveted watches, each a masterpiece of
              craftsmanship and design.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gray-600">
              Loading featured products...
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/collections" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Brand Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-titan-black mb-6">
                Why Titan Luxe?
              </h2>
              <p className="text-lg text-titan-gray mb-8 leading-relaxed">
                For over three decades, Titan Luxe has been synonymous with
                exceptional craftsmanship, innovative design, and timeless
                elegance. Each timepiece is meticulously crafted by master
                artisans who understand that a watch is more than just an
                instrument—it's a statement of character.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <Feature
                  icon={<Star size={20} />}
                  title="Premium Quality"
                  subtitle="Swiss movements and finest materials"
                />
                <Feature
                  icon={<Shield size={20} />}
                  title="Lifetime Warranty"
                  subtitle="Comprehensive protection guarantee"
                />
                <Feature
                  icon={<Award size={20} />}
                  title="Award Winning"
                  subtitle="Recognized by international bodies"
                />
                <Feature
                  icon={<Truck size={20} />}
                  title="Free Shipping"
                  subtitle="Complimentary worldwide delivery"
                />
              </div>
            </div>

            <div className="relative">
              <Image
                src="craftsman.jpg"
                alt="Titan Luxe Craftsmanship"
                width={600}
                height={700}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ✅ Small component for the Brand Story features
const Feature = ({ icon, title, subtitle }) => (
  <div className="flex items-start space-x-3">
    <div className="bg-titan-gold p-2 rounded-full">{icon}</div>
    <div>
      <h3 className="font-semibold text-titan-black">{title}</h3>
      <p className="text-sm text-titan-gray">{subtitle}</p>
    </div>
  </div>
);

export default HomePage;
