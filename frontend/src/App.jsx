import React from 'react';
import Navbar from './components/Navbar';
import StarBackground from './components/StarBackground';
import Hero from './components/Hero';
import About from './components/About';
import ScrollNav from './components/ScrollNav';
import Projects from './components/Projects';
import Goals from './components/Goals';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <StarBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Goals />
      <Contact />
      <div style={{height: '50vh'}}></div>
      <footer style={{ textAlign: 'center', padding: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
        <p>© 2024 Mateo Portfolio. Built with React & SCSS.</p>
      </footer>

    </div>
  );
}

export default App;