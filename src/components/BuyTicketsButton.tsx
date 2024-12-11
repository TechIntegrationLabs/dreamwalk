import React from 'react';
import { Ticket } from 'lucide-react';

interface BuyTicketsButtonProps {
  className?: string;
}

const BuyTicketsButton: React.FC<BuyTicketsButtonProps> = ({ className = '' }) => {
  return (
    <a
      href="https://ecom.roller.app/dreamwalk/booknow/en-us/products"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-float ${className}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300 animate-glow"></div>
      
      {/* Button background with gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 group-hover:opacity-90"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 w-full h-full rounded-xl">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:1000px_100%] animate-shimmer opacity-0 group-hover:opacity-100"></div>
      </div>
      
      {/* Content */}
      <div className="relative flex items-center justify-center space-x-2">
        <Ticket className="w-6 h-6 animate-pulse" />
        <span className="relative">Buy Tickets</span>
      </div>
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-xl border-2 border-purple-400/50 group-hover:border-purple-400/80 transition-colors duration-300"></div>
    </a>
  );
};

export default BuyTicketsButton;
