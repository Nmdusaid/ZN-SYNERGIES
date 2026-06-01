"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';

const ratings = [
  {
    name: "Tech Corp Global",
    role: "Supply Chain Director",
    content: "ZN Synergies transformed our international logistics. Their air freight precision and AI-driven tracking are unmatched in the industry.",
    rating: 5
  },
  {
    name: "Marine Industries Ltd",
    role: "Operations Manager",
    content: "Reliable, secure, and always on time. The maritime strategy team handled our heavy industrial assets with extreme care and professionalism.",
    rating: 5
  },
  {
    name: "Logistics Solutions India",
    role: "Strategic Partner",
    content: "The transparency provided by ZN's intelligence node gave us real-time visibility we couldn't find elsewhere. Truly enterprise-grade service.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-48 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32 reveal-on-scroll">
          <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Strategic Endorsements</h2>
          <h3 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none">
            ENTERPRISE<br />
            <span className="text-foreground/40 text-stroke">VOICES.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {ratings.map((item, idx) => (
            <div key={idx} className="bg-background p-10 md:p-16 flex flex-col hover:bg-foreground/[0.02] transition-all duration-700 reveal-on-scroll">
              <div className="flex gap-1 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-foreground text-foreground" />
                ))}
              </div>
              
              <Quote className="text-foreground/10 mb-8" size={32} strokeWidth={1} />
              
              <p className="text-foreground/60 text-lg font-light leading-relaxed mb-12 italic">
                "{item.content}"
              </p>

              <div className="mt-auto">
                <div className="w-8 h-px bg-foreground/20 mb-4" />
                <h4 className="text-sm font-black text-foreground uppercase tracking-widest">{item.name}</h4>
                <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
