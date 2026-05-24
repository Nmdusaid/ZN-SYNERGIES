
"use client";

import React from 'react';
import { Cpu, FlaskConical, Diamond, Briefcase, Zap, ShieldCheck } from 'lucide-react';

const industries = [
  {
    title: "High-Tech & Electronics",
    desc: "Clean-room transit and anti-static protocols for sensitive semiconductors.",
    icon: <Cpu size={24} />
  },
  {
    title: "Life Sciences",
    desc: "Cold-chain infrastructure with -80°C vault storage for biopharma.",
    icon: <FlaskConical size={24} />
  },
  {
    title: "Luxury & Retail",
    desc: "White-glove delivery for high-value assets and global boutiques.",
    icon: <Diamond size={24} />
  },
  {
    title: "Energy & Utilities",
    desc: "Heavy-lift logistics for renewable energy and grid components.",
    icon: <Zap size={24} />
  },
  {
    title: "Defense & Aerospace",
    desc: "Secure, audited transport for military and aviation assets.",
    icon: <ShieldCheck size={24} />
  },
  {
    title: "Automotive",
    desc: "Just-in-time logistics for global manufacturing and assembly lines.",
    icon: <Briefcase size={24} />
  }
];

export function Industries() {
  return (
    <section className="py-48 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 reveal-on-scroll">
          <div className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Strategic Verticals</div>
          <h2 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter leading-none mb-10">
            INDUSTRIES<br />
            <span className="text-foreground/40">SERVED.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {industries.map((item, idx) => (
            <div key={idx} className="bg-background p-16 hover:bg-foreground/[0.02] transition-colors duration-500 reveal-on-scroll">
              <div className="w-12 h-12 mb-10 border border-foreground/20 flex items-center justify-center text-foreground">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight">{item.title}</h4>
              <p className="text-foreground/40 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
