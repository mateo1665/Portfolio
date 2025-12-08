import React from 'react';
import Navbar from './components/Navbar';
import StarBackground from './components/StarBackground';
import Hero from './components/Hero';
import About from './components/About';
import ScrollNav from './components/ScrollNav';

function App() {
  return (
    <div>
      <StarBackground />
      <Navbar />
      <Hero />
      <About />
      <div style={{height: '50vh'}}></div>
    </div>
  );
}

export default App;