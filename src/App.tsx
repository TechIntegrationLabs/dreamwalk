import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import MediaCarousel from './components/MediaCarousel';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <MediaCarousel />
        <Contact />
      </main>
    </div>
  );
}

export default App;