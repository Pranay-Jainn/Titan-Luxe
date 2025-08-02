import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { CartProvider } from '@/contexts/CartContext';
import { AuthProvider } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Titan Luxe - Luxury Watches',
  description: 'Discover Titan Luxe\'s exquisite collection of premium luxury watches. Crafted with precision and elegance for the discerning individual.',
  keywords: 'luxury watches, premium watches, Titan Luxe, men watches, women watches, smartwatches',
  openGraph: {
    title: 'Titan Luxe - Premium Luxury Watches',
    description: 'Time. Elegantly Defined. - Discover our exquisite collection of premium luxury watches.',
    url: 'https://titanluxe.com',
    siteName: 'Titan Luxe',
    images: [
      {
        url: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
        width: 1200,
        height: 630,
        alt: 'Titan Luxe Premium Watch Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titan Luxe - Premium Luxury Watches',
    description: 'Time. Elegantly Defined.',
    images: ['https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'],
  },
  icons: {
    icon: '/tabLogo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <AuthModal />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}