
"use client";

import React from 'react';
import { Globe, ShieldCheck, Zap } from 'lucide-react';

const row1Clients = ["SAMSUNG", "HYUNDAI", "FORD", "TOYOTA", "LG ELECTRONICS", "AMAZON", "APPLE", "SONY"];
const row2Clients = ["MAERSK", "DHL GLOBAL", "FEDEX", "EMIRATES", "HAPAG-LLOYD", "MSC GROUP", "UPS", "COSCO"];
const row3Clients = ["TATA MOTORS", "RELIANCE", "VOLVO", "BMW GROUP", "SIEMENS", "GE", "SHELL", "BP"];

export function Clients() {
  // Duplicate arrays for seamless looping
  const row1 = [...row1Clients, ...row1Clients];
  const row2 = [...row2Clients, ...row2Clients];
  const row3 = [...row3Clients, ...row3Clients];

  return (
    <section id="clients" className="py-24 md:py-48 bg-background relative overflow-hidden border-y border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 mb-24 reveal-on-scroll">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Enterprise Client Portfolio</h2>
            <h3 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none">
              ENTERPRISE<br />
              <span className="text-foreground/40 text-stroke">CLIENTS.</span>
            </h3>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3 text-foreground/20">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} />
              <span className="text-[10px] uppercase font-black tracking-widest">Global Grid Verified</span>
            </div>
            <p className="text-[11px] font-light italic text-center md:text-right max-w-[200px]">
              Orchestrating logistics for the world's most demanding corporate supply chains.
            </p>
          </div>
        </div>
      </div>

      {/* Cinematic Triple-Row Animated Marquee */}
      <div className="flex flex-col gap-6 md:gap-12 py-10">
        
        {/* Row 1: Forward Slow */}
        <div className="relative flex overflow-hidden group border-y border-foreground/5 py-8 md:py-12 bg-transparent">
          <div className="flex animate-marquee-slow whitespace-nowrap">
            {row1.map((client, idx) => (
              <div key={idx} className="flex items-center justify-center px-12 md:px-32 group/item">
                <span className="text-2xl md:text-7xl font-black text-foreground/20 group-hover/item:text-foreground group-hover/item:scale-110 transition-all duration-700 cursor-default uppercase tracking-tighter select-none">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Reverse Medium */}
        <div className="relative flex overflow-hidden group border-b border-foreground/5 pb-8 md:py-12 bg-transparent">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {row2.map((client, idx) => (
              <div key={idx} className="flex items-center justify-center px-12 md:px-32 group/item">
                <span className="text-2xl md:text-7xl font-black text-foreground/20 group-hover/item:text-foreground group-hover/item:scale-110 text-stroke-sm md:text-stroke transition-all duration-700 cursor-default uppercase tracking-tighter select-none">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Forward Extra Slow */}
        <div className="relative flex overflow-hidden group border-b border-foreground/5 pb-8 md:py-12 bg-transparent">
          <div className="flex animate-marquee-slow whitespace-nowrap" style={{ animationDuration: '100s' }}>
            {row3.map((client, idx) => (
              <div key={idx} className="flex items-center justify-center px-12 md:px-32 group/item">
                <span className="text-2xl md:text-7xl font-black text-foreground/20 group-hover/item:text-foreground group-hover/item:scale-110 transition-all duration-700 cursor-default uppercase tracking-tighter select-none">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 flex flex-col md:flex-row items-center justify-center gap-12 opacity-20 reveal-on-scroll">
        <div className="flex items-center gap-4">
          <Globe size={14} />
          <span className="text-[10px] uppercase font-black tracking-[0.3em]">Global Grid Access</span>
        </div>
        <div className="hidden md:block w-px h-8 bg-foreground" />
        <div className="flex items-center gap-4">
          <Zap size={14} />
          <span className="text-[10px] uppercase font-black tracking-[0.3em]">Low Latency Delivery</span>
        </div>
      </div>
    </section>
  );
}
