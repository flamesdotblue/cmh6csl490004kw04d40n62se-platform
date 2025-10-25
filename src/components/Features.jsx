import React from 'react';
import { Activity, Bot, Mic, Star } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Adaptive programming',
    desc: 'Your sets, reps, and rest auto-adjust from session to session based on performance and readiness.'
  },
  {
    icon: Mic,
    title: 'Voice coaching',
    desc: 'Hands-free guidance, tempo cues, and real-time encouragement while you train.'
  },
  {
    icon: Bot,
    title: 'Form intelligence',
    desc: 'Clear, actionable tips to improve technique and reduce injury risk over time.'
  },
  {
    icon: Star,
    title: 'Progress insights',
    desc: 'Weekly summaries and milestones so you always know what’s working.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Built for momentum</h2>
          <p className="mt-3 text-white/70">Everything you need to stay consistent—from planning to coaching and tracking—wrapped into one minimal, futuristic experience.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition group">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 flex items-center justify-center mb-4">
                <Icon size={20} className="text-neutral-950" />
              </div>
              <h3 className="font-medium text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
