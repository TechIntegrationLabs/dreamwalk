import React from 'react';
import { ShoppingCart, Download, Package, Sparkles } from 'lucide-react';

const products = [
  {
    name: 'Dream Crystal Hologram',
    price: 29.99,
    type: 'physical',
    image: 'https://images.unsplash.com/photo-1566345984367-fa2ba5cedc0f?auto=format&fit=crop&q=80',
    icon: Package,
    description: 'A mesmerizing holographic crystal that captures dream essence.'
  },
  {
    name: 'Neural Forest Soundscape',
    price: 14.99,
    type: 'digital',
    image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80',
    icon: Download,
    description: 'Immersive audio experience from our Neural Forest.'
  },
  {
    name: 'Robotic Companion Plush',
    price: 39.99,
    type: 'physical',
    image: 'https://images.unsplash.com/photo-1558679908-541bcbd0b125?auto=format&fit=crop&q=80',
    icon: Package,
    description: 'Soft plush version of our beloved robot characters.'
  },
  {
    name: 'Dream Chamber Wallpapers',
    price: 9.99,
    type: 'digital',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
    icon: Download,
    description: 'Collection of ethereal wallpapers for your devices.'
  }
];

const Shop = () => {
  return (
    <section className="py-20 bg-black" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Take the Magic Home
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our collection of physical and digital merchandise inspired by
            DreamWalk Park's most beloved attractions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-gray-900 rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <product.icon className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-sm text-purple-400">
                      {product.type === 'digital' ? 'Digital' : 'Physical'}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-white">
                    ${product.price}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {product.description}
                </p>
                
                <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;