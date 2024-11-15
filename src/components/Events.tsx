import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Night of Living Dreams',
    date: 'Every Friday',
    time: '7:00 PM - 11:00 PM',
    location: 'Throughout the Park',
    description: 'Experience the park after dark with special light shows and performances.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80'
  },
  {
    title: 'Robot Dance Workshop',
    date: 'Saturdays',
    time: '2:00 PM - 4:00 PM',
    location: 'Robot Marketplace',
    description: 'Learn signature moves from MC Bot and the mechanical crew.',
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Dream Weaving Session',
    date: 'Daily',
    time: '11:00 AM - 3:00 PM',
    location: 'Dream Chamber',
    description: 'Create and project your own dream sequences with our dream artists.',
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80'
  }
];

const Events = () => {
  return (
    <section className="py-20 bg-black" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us for special events that make the magic of DreamWalk Park
            even more extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  {event.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <p className="mt-4 text-gray-400 text-sm">
                  {event.description}
                </p>
                <button className="mt-6 w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Reserve Spot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;