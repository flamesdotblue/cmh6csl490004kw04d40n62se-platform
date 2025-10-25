import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Planner from './components/Planner';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Planner />
      </main>
      <footer className="border-t border-white/10 mt-20 py-10 text-center text-sm text-white/60">
        <p>
          © {new Date().getFullYear()} AuraFit AI. Built for personalized training, recovery, and motivation.
        </p>
      </footer>
    </div>
  );
}

export default App;
