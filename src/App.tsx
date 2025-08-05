import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import VideoReel from './components/VideoReel';
import Photography from './components/Photography';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Portfolio />
      <VideoReel />
      <Photography />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;