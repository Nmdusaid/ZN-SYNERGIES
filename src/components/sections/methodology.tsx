"use client";

import React from 'react';
import { Shield, Zap, Target, BarChart3 } from 'lucide-react';

const steps = [
  {
    title: "Intelligence Gathering",
    desc: "Real-time analysis of geopolitical shifts and trade route fluctuations.",
    icon: <Target size={24} />
  },
  {
    title: "Risk Mitigation",
    desc: "Pre-emptive protocol deployment to bypass potential global bottlenecks.",
    icon: <Shield size={24} />
  },
  {
    title: "Synchronized Transit",
    desc: "High-velocity movement orchestrated across our multimodal grid.",
    icon: <Zap size={24} />
  },
  {
    title: "Final Integration",
    desc: "Seamless asset delivery into enterprise infrastructure with zero latency.",
    icon: <BarChart3 size={24} />
  }
];

export function Methodology() {
  return (
    <section className="py-48 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-24 items-start mb-32 reveal-on-scroll">
          <div className="flex-1">
            <h2 className="text-white/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">The Process</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-12">
              STRATEGIC<br />
              METHODOLOGY.
            </h3>
          </div>
          <div className="flex-1">
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-lg">
              Our approach is defined by cold logic and architectural precision. We don't just move freight; we engineer the path of least resistance for global capital.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="reveal-on-scroll group" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="mb-12 w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-white transition-all duration-500">
                {step.icon}
              </div>
              <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{step.title}</h4>
              <div className="w-12 h-px bg-white/20 mb-6 group-hover:w-full transition-all duration-700" />
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
