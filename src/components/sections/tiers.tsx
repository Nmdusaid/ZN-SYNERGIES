"use client";

import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Strategic",
    focus: "Standard enterprise movements with guaranteed reliability.",
    features: ["Global Route Access", "Standard Documentation", "24/7 Monitoring", "Standard Transit Times"]
  },
  {
    name: "Priority",
    focus: "Accelerated logistics for time-sensitive global assets.",
    features: ["Next-Flight Out", "Priority Customs Clearance", "Direct Port Handling", "Expedited Documentation"]
  },
  {
    name: "Critical",
    focus: "Bespoke high-stakes solutions for mission-critical cargo.",
    features: ["White-Glove Escort", "Chartered Transit", "Absolute Confidentiality", "Real-Time Direct Reporting"]
  }
];

export function EnterpriseTiers() {
  return (
    <section className="py-48 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 reveal-on-scroll">
          <h2 className="text-white/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Service Framework</h2>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter">OPERATIONAL TIERS</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {tiers.map((tier, idx) => (
            <div key={idx} className="bg-black p-16 flex flex-col hover:bg-white/[0.02] transition-colors duration-500 reveal-on-scroll" style={{ transitionDelay: `${idx * 200}ms` }}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-4">Level 0{idx + 1}</div>
              <h4 className="text-4xl font-black text-white mb-8">{tier.name}</h4>
              <p className="text-white/50 text-sm font-light mb-12 h-12">
                {tier.focus}
              </p>
              
              <ul className="space-y-6 mt-auto">
                {tier.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-white/30 font-bold group">
                    <Check size={14} className="text-white/20 group-hover:text-white transition-colors" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-20 w-full py-6 border border-white/10 text-[10px] uppercase tracking-[0.4em] font-black hover:bg-white hover:text-black transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
