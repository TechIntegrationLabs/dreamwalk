import React, { useState } from 'react';
import { Ticket, Users, Calendar, Clock } from 'lucide-react';

const ticketTypes = [
  {
    name: 'Day Pass',
    price: 49.99,
    description: 'Full day access to all attractions',
    features: ['All installations', 'Basic workshops', 'Photo opportunities']
  },
  {
    name: 'VIP Experience',
    price: 99.99,
    description: 'Premium access with exclusive benefits',
    features: ['Priority access', 'Private tours', 'Special events', 'Exclusive merch']
  },
  {
    name: 'Group Package',
    price: 39.99,
    description: 'Per person for groups of 5+',
    features: ['Group activities', 'Dedicated guide', 'Group photo session']
  }
];

const Tickets = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="py-20 bg-black" id="tickets">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Book Your Dream Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your perfect ticket package and prepare for an
            unforgettable journey through DreamWalk Park.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ticketTypes.map((ticket) => (
            <div
              key={ticket.name}
              className="bg-gray-900 rounded-2xl p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {ticket.name}
              </h3>
              <div className="text-3xl font-bold text-gradient mb-4">
                ${ticket.price}
              </div>
              <p className="text-gray-400 mb-6">{ticket.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Ticket className="w-4 h-4 mr-2 text-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:opacity-90 transition-opacity">
                Select Package
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Book Your Visit
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Select Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-gray-800 text-white rounded-lg py-3 px-10 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Select Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-gray-800 text-white rounded-lg py-3 px-10 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                >
                  <option value="">Choose time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Number of Tickets</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full bg-gray-800 text-white rounded-lg py-3 px-10 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <button className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:opacity-90 transition-opacity">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tickets;