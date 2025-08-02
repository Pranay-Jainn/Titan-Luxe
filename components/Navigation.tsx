'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, User, LogOut } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import CartSidebar from './CartSidebar';

const Navigation = () => {
  const pathname = usePathname();
  const { getTotalItems, setIsCartOpen } = useCart();
  const { user, signOut, setIsAuthModalOpen, setAuthMode } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* ✅ Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-titan-black">
                Titan <span className="text-titan-gold">Luxe</span>
              </span>
            </Link>

            {/* ✅ Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    isActiveLink(link.href)
                      ? 'text-titan-gold'
                      : 'text-titan-black hover:text-titan-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* ✅ Cart, Auth & Mobile Menu */}
            <div className="flex items-center space-x-6">
              
              {/* ✅ User Authentication */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 p-2 text-titan-black hover:text-titan-gold transition-colors duration-300"
                  >
                    <User size={24} />
                    <span className="hidden sm:block font-medium">{user.name}</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-titan-black">{user.name}</p>
                        <p className="text-xs text-titan-gray">{user.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          signOut();
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-left text-titan-black hover:bg-gray-50 transition-colors"
                      >
                        <LogOut size={16} />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => {
                      setAuthMode('signin');
                      setIsAuthModalOpen(true);
                    }}
                    className="text-titan-black hover:text-titan-gold transition-colors duration-300 font-medium"
                  >
                    Sign In
                  </button>
                  <span className="text-titan-gray">|</span>
                  <button
                    onClick={() => {
                      setAuthMode('signup');
                      setIsAuthModalOpen(true);
                    }}
                    className="text-titan-black hover:text-titan-gold transition-colors duration-300 font-medium"
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {/* ✅ 🛒 CART BUTTON FIXED */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <ShoppingBag size={26} className="text-titan-black hover:text-titan-gold" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-titan-gold text-titan-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* ✅ Mobile Menu Toggle (Rightmost) */}
              <button
                className="md:hidden p-2 text-titan-black hover:text-titan-gold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* ✅ Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                      isActiveLink(link.href)
                        ? 'text-titan-gold'
                        : 'text-titan-black hover:text-titan-gold'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* ✅ Mobile Auth Buttons */}
                {!user && (
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <button
                      onClick={() => {
                        setAuthMode('signin');
                        setIsAuthModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-titan-black hover:text-titan-gold transition-colors duration-300"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setAuthMode('signup');
                        setIsAuthModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-titan-black hover:text-titan-gold transition-colors duration-300"
                    >
                      Sign Up
                    </button>
                  </div>
                )}

                {/* ✅ Mobile User Menu */}
                {user && (
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="px-3 py-2">
                      <p className="text-sm font-medium text-titan-black">{user.name}</p>
                      <p className="text-xs text-titan-gray">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-titan-black hover:text-titan-gold transition-colors duration-300"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ✅ Cart Sidebar Component */}
      <CartSidebar />
    </>
  );
};

export default Navigation;
