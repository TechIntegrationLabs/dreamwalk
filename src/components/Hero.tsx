import React from 'react';
import { ChevronDown, Ticket, Map } from 'lucide-react';
import VideoBackground from './VideoBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <VideoBackground />

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hero-title animate-float font-cinzel">
          Welcome to a new realm of wonder and imagination...
        </h1>
        
        <p className="max-w-3xl text-lg md:text-xl text-white mb-8 opacity-90">
          Our unique walking adventure guides you through diverse, meticulously crafted environments, 
          each transporting you to a different world filled with captivating narratives and interactive exhibits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold flex items-center justify-center hover:opacity-90 transition-all duration-300 hover:scale-105 hover-lift glow">
            <Ticket className="w-5 h-5 mr-2" />
            Buy Tickets
          </button>
          <button className="px-8 py-4 rounded-full glass text-white font-semibold flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10">
            <Map className="w-5 h-5 mr-2" />
            Explore the Park
          </button>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default Hero;