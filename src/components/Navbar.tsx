import React, { useState } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import BuyTicketsButton from './BuyTicketsButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL1I5Rmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d719b9fae75fe2adc7f966282b1126cd7250f5ff/dreamwalk%20logo.png" 
                alt="DreamWalk Logo" 
                className="h-16 w-auto hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <BuyTicketsButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <BuyTicketsButton className="w-full" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;