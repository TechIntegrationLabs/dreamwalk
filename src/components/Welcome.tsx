import React, { useState } from 'react';
import BuyTicketsButton from './BuyTicketsButton';

const Welcome = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email signup logic
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative py-24 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Opening announcement */}
        <div className="text-center mb-12">
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 mb-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 tracking-tight">
              Grand Opening December 12
            </h1>
          </div>
          <div className="mt-8 flex justify-center">
            <BuyTicketsButton />
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Welcome to Dreamwalk Park, where every step takes you into a new realm of wonder and imagination.
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Our unique walking adventure guides you through diverse, meticulously crafted environments, 
            each transporting you to a different world filled with captivating narratives and interactive exhibits. 
            As we design and build our full site, please use the form for any general inquiries.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Stay tuned for more updates as we prepare to open the gates to your next great adventure!
          </p>
        </div>

        {/* Newsletter signup */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/80 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Sign Up For The Latest Updates!
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your full name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
