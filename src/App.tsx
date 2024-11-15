import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Attractions from './components/Attractions';
import Characters from './components/Characters';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Shop from './components/Shop';
import Tickets from './components/Tickets';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Attractions />
        <Characters />
        <Events />
        <Gallery />
        <Shop />
        <Tickets />
        <Contact />
      </main>
    </div>
  );
}

export default App;