import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-40 bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 text-center pointer-events-none">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight">
          Your AI Gym Trainer,
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-orange-300">personalized to you</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
          Real-time voice coaching, adaptive workout plans, and form tips powered by an AI agent. Train smarter with a dynamic plan that grows with your progress.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <a href="#planner" className="px-6 py-3 rounded-md bg-white text-neutral-900 font-semibold shadow-lg shadow-purple-500/20">Build my plan</a>
          <button className="px-6 py-3 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 transition">Try voice coach</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
