import React from 'react';
import { Dumbbell, Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
          <span className="text-lg font-semibold tracking-tight">AuraFit AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#planner" className="hover:text-white transition-colors">Planner</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Dumbbell size={16}/> Workouts</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm"><Settings size={16}/> Settings</button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 text-neutral-900 font-medium">
            <User size={16}/> Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
