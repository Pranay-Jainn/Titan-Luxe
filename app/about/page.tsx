import React from 'react';
import Image from 'next/image';
import { Award, Clock, Users, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-titan-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-titan-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3782237/pexels-photo-3782237.jpeg"
            alt="Titan Luxe Heritage"
            fill
            className="object-cover opacity-40"
          />    
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our <span className="text-titan-gold">Heritage</span>
          </h1>
          <p className="text-xl text-gray-200">
            Three decades of excellence in luxury timekeeping
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Brand Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-titan-black mb-6">
                The Titan Luxe Legacy
              </h2>
              <div className="space-y-4 text-lg text-titan-gray leading-relaxed">
                <p>
                  Founded in 1994, Titan Luxe emerged from a vision to create timepieces that 
                  transcend mere functionality and become symbols of personal achievement and refined taste.
                </p>
                <p>
                  Our journey began in the heart of Switzerland, where master craftsmen and innovative 
                  designers collaborated to redefine what luxury means in the modern era. Each Titan Luxe 
                  watch is a testament to our unwavering commitment to excellence.
                </p>
                <p>
                  Today, we continue to push the boundaries of horological artistry, combining 
                  time-honored traditions with cutting-edge technology to create watches that are 
                  not just instruments of time, but expressions of individual style and sophistication.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg"
                alt="Titan Luxe Craftsmanship"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-titan-gold p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="text-titan-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-titan-black mb-2">30+</h3>
              <p className="text-titan-gray">Years of Excellence</p>
            </div>
            
            <div className="text-center">
              <div className="bg-titan-gold p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-titan-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-titan-black mb-2">500K+</h3>
              <p className="text-titan-gray">Satisfied Customers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-titan-gold p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Globe className="text-titan-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-titan-black mb-2">75+</h3>
              <p className="text-titan-gray">Countries Worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="bg-titan-gold p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="text-titan-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-titan-black mb-2">50+</h3>
              <p className="text-titan-gray">Industry Awards</p>
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg"
                alt="Swiss Craftsmanship"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-titan-black mb-6">
                Swiss Craftsmanship
              </h2>
              <div className="space-y-4 text-lg text-titan-gray leading-relaxed">
                <p>
                  Every Titan Luxe timepiece is meticulously crafted by master watchmakers 
                  who have devoted their lives to the art of horology. Our workshops in Switzerland 
                  combine centuries-old techniques with modern precision engineering.
                </p>
                <p>
                  From the initial design concept to the final quality inspection, each watch 
                  undergoes over 200 individual processes. Our commitment to perfection means 
                  that only the finest materials and components make it into our timepieces.
                </p>
                <p>
                  The result is a collection of watches that not only keep perfect time but 
                  also serve as heirloom pieces that can be passed down through generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white rounded-2xl p-12 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-titan-black mb-4">
              Our Values
            </h2>
            <p className="text-lg text-titan-gray max-w-2xl mx-auto">
              The principles that guide everything we do at Titan Luxe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-titan-black mb-4">Excellence</h3>
              <p className="text-titan-gray">
                We never compromise on quality. Every component, every detail, 
                every finish is executed to the highest standards.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-titan-black mb-4">Innovation</h3>
              <p className="text-titan-gray">
                While respecting tradition, we continuously innovate to create 
                timepieces that meet the evolving needs of modern life.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-titan-black mb-4">Heritage</h3>
              <p className="text-titan-gray">
                We honor the rich history of watchmaking while building a legacy 
                for future generations of timepiece enthusiasts.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;