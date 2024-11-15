import React from 'react';
import { Flame, Bot, Sparkles, Brain } from 'lucide-react';

const attractions = [
  {
    title: 'Lava Room',
    description: 'An immersive space where digital lava flows respond to your movements.',
    icon: Flame,
    color: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80'
  },
  {
    title: 'Robot Marketplace',
    description: 'Meet our mechanical friends in an interactive robotic bazaar.',
    icon: Bot,
    color: 'from-blue-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
  },
  {
    title: 'Galactic Grotto',
    description: 'Experience your dreams projected into stunning visual displays.',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80'
  },
  {
    title: 'Mushroom Forest',
    description: 'Walk through a forest of light that responds to your thoughts.',
    icon: Brain,
    color: 'from-green-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1518818419601-72c8673f5852?auto=format&fit=crop&q=80'
  }
];

const Attractions = () => {
  return (
    <section className="py-20 bg-black" id="explore">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover Our Magical Installations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each installation is a unique blend of technology and artistry,
            creating unforgettable experiences that challenge reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attractions.map((attraction) => (
            <div
              key={attraction.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              
              <div className="relative p-8 h-full min-h-[300px] flex flex-col justify-end">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${attraction.color} mb-4`}>
                  <attraction.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {attraction.title}
                </h3>
                <p className="text-gray-300">
                  {attraction.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;