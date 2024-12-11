import React, { useState } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import BuyTicketsButton from './BuyTicketsButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL1I5Rmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d719b9fae75fe2adc7f966282b1126cd7250f5ff/dreamwalk%20logo.png" 
                alt="DreamWalk Logo" 
                className="h-12 sm:h-16 w-auto transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <BuyTicketsButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-500 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <BuyTicketsButton className="w-full text-base" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;