import React from 'react';
import { ChevronDown } from 'lucide-react';
import VideoBackground from './VideoBackground';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen">
      <VideoBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Hero content */}
      </div>

      {/* Animated down arrow */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer group"
        aria-label="Scroll down"
      >
        <div className="relative">
          <ChevronDown className="w-12 h-12 text-white animate-bounce opacity-80 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 bg-white/10 rounded-full blur-lg group-hover:bg-white/20 transition-colors"></div>
        </div>
      </button>
    </div>
  );
};

export default Hero;