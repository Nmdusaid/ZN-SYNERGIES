"use client";

import React from 'react';
import { Globe, ShieldCheck, Zap } from 'lucide-react';

const clientLogos = [
  "SAMSUNG", "HYUNDAI", "FORD", "TOYOTA", "LG ELECTRONICS", "AMAZON",
  "MAERSK", "DHL GLOBAL", "FEDEX", "EMIRATES", "HAPAG-LLOYD", "MSC GROUP",
  "KUEHNE+NAGEL", "DB SCHENKER", "COASTAL", "RELIANCE", "TATA MOTORS", "VOLVO"
];

export function Clients() {
  // Split logos into 3 distinct sets for the rows
  const row1 = [...clientLogos.slice(0, 6), ...clientLogos.slice(0, 6)];
  const row2 = [...clientLogos.slice(6, 12), ...clientLogos.slice(6, 12)];
  const row3 = [...clientLogos.slice(12, 18), ...clientLogos.slice(12, 18)];

  return (
    <section id="clients" className="py-24 md:py-48 bg-background relative overflow-hidden border-y border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 mb-24 reveal-on-scroll text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Global Partnerships</h2>
            <h3 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none">
              STRATEGIC<br />
              <span className="text-foreground/40 text-stroke">CLIENTS.</span>
            </h3>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3 text-foreground/20">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} />
              <span className="text-[10px] uppercase font-black tracking-widest">Verified Partners</span>
            </div>
            <p className="text-[11px] font-light italic text-right max-w-[200px]">
              Orchestrating movements for the world's most demanding enterprises.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-col gap-8 md:gap-12 py-10">
        
        {/* Row 1: Forward */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee-slow whitespace-nowrap">
            {row1.map((client, idx) => (
              <div key={idx} className="flex items-center justify-center px-12 md:px-24">
                <span className="text-2xl md:text-6xl font-black text-foreground/10 hover:text-foreground/60 transition-colors duration-500 cursor-default uppercase tracking-tighter">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Reverse */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {row2.map((client, idx) => (
              <div key={idx} className="flex items-center justify-center px-12 md:px-24">
                <span className="text-2xl md:text-6xl font-black text-foreground/10 hover:text-foreground/60 transition-colors duration-500 cursor-default uppercase tracking-tighter">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Forward */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap">
            {row3.map((client, idx) => (
              <div key={idx} className="flex items-center justify-center px-12 md:px-24">
                <span className="text-2xl md:text-6xl font-black text-foreground/10 hover:text-foreground/60 transition-colors duration-500 cursor-default uppercase tracking-tighter">
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