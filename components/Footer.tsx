import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-titan-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-serif font-bold">
                Titan <span className="text-titan-gold">Luxe</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Time. Elegantly Defined. Discover our exquisite collection of premium luxury watches, 
              crafted with precision and designed for the discerning individual.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-titan-gold transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-titan-gold transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-titan-gold transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-titan-gold transition-colors duration-300">Home</Link></li>
              <li><Link href="/collections" className="text-gray-300 hover:text-titan-gold transition-colors duration-300">Collections</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-titan-gold transition-colors duration-300">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-titan-gold transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <p>1234 Luxury Avenue</p>
              <p>New York, NY 10001</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@titanluxe.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Titan Luxe. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;