
"use client";

import React from 'react';
import { Leaf, Zap, Navigation, BarChart3 } from 'lucide-react';

const sustainabilityInitiatives = [
  {
    title: "Fuel-Efficient Transport",
    desc: "Deploying hydrogen-hybrid vessels and SAF-powered aircraft to drastically reduce maritime and aviation emissions.",
    icon: <Leaf className="text-foreground" size={24} />
  },
  {
    title: "Optimized Delivery Routes",
    desc: "Proprietary AI algorithms calculate the most energy-efficient paths, minimizing fuel waste and transit time.",
    icon: <Navigation className="text-foreground" size={24} />
  },
  {
    title: "Reduced Carbon Footprint",
    desc: "Rigorous monitoring of CO2 output per metric ton-kilometer, with a committed roadmap to Net Zero by 2040.",
    icon: <Zap className="text-foreground" size={24} />
  },
  {
    title: "Smart Logistics Planning",
    desc: "Predictive load balancing and multimodal optimization to ensure no asset moves without maximum efficiency.",
    icon: <BarChart3 className="text-foreground" size={24} />
  }
];

export function Sustainability() {
  return (
    <section id="sustainability" className="py-48 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-on-scroll">
            <div className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Future Forward</div>
            <h2 className="text-6xl md:text-8xl font-black text-foreground mb-12 tracking-tighter leading-none">
              GREEN<br />
              <span className="text-foreground/40">SYNERGY.</span>
            </h2>
            <div className="space-y-8 text-foreground/50 text-xl font-light leading-relaxed max-w-lg">
              <p>
                Sustainability is no longer an option; it is an operational imperative. At ZN Synergies, we architect supply chains that protect both your assets and the global ecosystem.
              </p>
              <p>
                Through the use of autonomous electric fleets and hydrogen propulsion, we are leading the transition to a zero-emission logistics landscape.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 reveal-on-scroll">
            {sustainabilityInitiatives.map((item, idx) => (
              <div key={idx} className="p-10 border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-colors group">
                <div className="w-12 h-12 border border-foreground/10 flex items-center justify-center mb-8 group-hover:border-foreground transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-foreground mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-foreground/40 text-[11px] font-bold uppercase tracking-wider leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
