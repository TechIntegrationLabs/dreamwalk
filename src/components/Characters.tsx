import React from 'react';
import { Bot, Sparkles, Cpu, Zap } from 'lucide-react';

const characters = [
  {
    name: 'WH28 the Doorman',
    role: 'Guardian of Dreams',
    description: 'A charming robotic doorman who greets visitors with riddles and holographic displays.',
    icon: Bot,
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80'
  },
  {
    name: 'Luna the Light Weaver',
    role: 'Dream Architect',
    description: 'Creates stunning light sculptures that respond to visitors\' emotions.',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80'
  },
  {
    name: 'MC Bot',
    role: 'Entertainment Director',
    description: 'The charismatic host of the Robot Marketplace, known for impromptu dance parties.',
    icon: Cpu,
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
  },
  {
    name: 'Volt the Navigator',
    role: 'Park Guide',
    description: 'A floating energy being who helps visitors discover hidden park secrets.',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&q=80'
  }
];

const Characters = () => {
  return (
    <section className="py-20 bg-black" id="characters">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Meet Our Magical Residents
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each character brings their own unique magic to DreamWalk Park,
            creating unforgettable interactions and memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character) => (
            <div
              key={character.name}
              className="group bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${character.color} mb-4`}>
                  <character.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {character.name}
                </h3>
                <div className="text-sm text-gradient mb-3">
                  {character.role}
                </div>
                <p className="text-gray-400 text-sm">
                  {character.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;