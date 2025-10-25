import React, { useMemo, useState } from 'react';

const defaultPlan = ({ goal, days, equipment, experience, voice }) => {
  const split = days >= 5 ? 'Upper/Lower/Push/Pull/Legs' : days === 4 ? 'Upper/Lower x2' : days === 3 ? 'Full Body x3' : 'Full Body x2 + Conditioning';
  const intensity = experience === 'beginner' ? 'Moderate' : experience === 'intermediate' ? 'Moderate-High' : 'High';
  const equipText = equipment === 'gym' ? 'full gym access' : equipment === 'home' ? 'adjustable dumbbells + bands' : 'bodyweight-focused';

  const sampleDay = equipment === 'bodyweight'
    ? [
        'Squat to box 4x8',
        'Push-up 4xAMRAP',
        'Inverted row 4x8-12',
        'Split squat 3x12/leg',
        'Pike shoulder taps 3x10/side',
        'RPE 7-8, 60-90s rest'
      ]
    : [
        'Back squat or goblet squat 4x6-8',
        'Romanian deadlift 3x8-10',
        'Bench press or DB press 4x6-8',
        'Lat pulldown or 1-arm row 3x10-12',
        'Plank 3x45-60s',
        'RPE 7-8, 90s rest'
      ];

  const voiceTip = voice ? 'Voice Coach enabled: you\'ll get in-set tempo, breathing cues, and last-rep encouragement.' : 'Enable Voice Coach for hands-free cues during sets.';

  return {
    headline: `${intensity} intensity • ${split} • ${days} days/week`,
    overview: `Goal: ${goal}. Training with ${equipText}. Sessions emphasize progressive overload, quality movement, and recovery.`,
    focus: experience === 'beginner' ? 'Movement quality, consistency, building capacity.' : experience === 'intermediate' ? 'Volume management, weak-point work.' : 'Intensity cycling, specificity, performance.',
    week:
      days >= 5
        ? ['Upper', 'Lower', 'Push', 'Pull', 'Legs']
        : days === 4
        ? ['Upper', 'Lower', 'Upper (vol.)', 'Lower (vol.)']
        : days === 3
        ? ['Full Body A', 'Full Body B', 'Full Body C']
        : ['Full Body A', 'Conditioning + Core'],
    sampleDay,
    voiceTip
  };
};

const Planner = () => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('build muscle');
  const [days, setDays] = useState(3);
  const [equipment, setEquipment] = useState('gym');
  const [experience, setExperience] = useState('beginner');
  const [voice, setVoice] = useState(true);
  const plan = useMemo(() => defaultPlan({ goal, days: Number(days), equipment, experience, voice }), [goal, days, equipment, experience, voice]);

  return (
    <section id="planner" className="relative py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold">Build your adaptive plan</h2>
          <p className="mt-2 text-white/70">Answer a few questions and get a smart starting plan. The AI coach will adapt it each week based on your sessions.</p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="block text-sm text-white/80 mb-2">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g., Alex" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-2">Primary goal</label>
                <select value={goal} onChange={e => setGoal(e.target.value)} className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="build muscle">Build muscle</option>
                  <option value="lose fat">Lose fat</option>
                  <option value="get stronger">Get stronger</option>
                  <option value="improve endurance">Improve endurance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">Days per week</label>
                <select value={days} onChange={e => setDays(e.target.value)} className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 focus:ring-purple-500">
                  {[2,3,4,5].map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-2">Equipment</label>
                <select value={equipment} onChange={e => setEquipment(e.target.value)} className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="gym">Gym</option>
                  <option value="home">Home (DBs + bands)</option>
                  <option value="bodyweight">Bodyweight</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">Experience</label>
                <select value={experience} onChange={e => setExperience(e.target.value)} className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input id="voice" type="checkbox" checked={voice} onChange={e => setVoice(e.target.checked)} className="h-4 w-4 rounded bg-white/5 border-white/20" />
              <label htmlFor="voice" className="text-sm text-white/80">Enable Voice Coach</label>
            </div>
          </form>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 self-start">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">{name ? `${name}\'s Plan` : 'Your Plan'}</h3>
              <p className="text-white/70 text-sm mt-1">{plan.headline}</p>
            </div>
            <span className="shrink-0 px-3 py-1.5 rounded-md text-xs bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 text-neutral-900 font-medium">Adaptive</span>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-relaxed">
            <p className="text-white/80">{plan.overview}</p>
            <p className="text-white/70"><span className="text-white">Weekly focus:</span> {plan.focus}</p>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Weekly layout</h4>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/80">
              {plan.week.map((d, i) => (
                <li key={i} className="rounded-md border border-white/10 bg-neutral-900/50 px-3 py-2">Day {i+1}: {d}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Sample day</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/80 list-disc list-inside">
              {plan.sampleDay.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-orange-400/10 border border-white/10">
            <p className="text-sm text-white/80">{plan.voiceTip}</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-2.5 rounded-md bg-white text-neutral-900 font-semibold">Start week 1</button>
            <button className="px-5 py-2.5 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 transition">Export as PDF</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planner;
