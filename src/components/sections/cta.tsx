"use client";

import React from 'react';
import { Handshake } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-64 px-6 bg-foreground text-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg viewBox="0 0 1000 1000" className="w-full h-full fill-current">
          <path d="M0,500 L1000,500 M500,0 L500,1000" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center reveal-on-scroll">
          <h2 className="text-[10px] uppercase tracking-[0.8em] font-black mb-16 opacity-40">Strategic Partnership Protocol</h2>
          
          <div className="mb-20 relative group">
            {/* Orbital glow effect for the handshake */}
            <div className="absolute inset-0 bg-background/10 rounded-full blur-3xl group-hover:bg-background/20 transition-all duration-700 scale-150" />
            
            <div className="relative w-48 h-48 border border-background/20 flex items-center justify-center animate-handshake">
              <Handshake size={80} className="text-background" strokeWidth={1} />
            </div>
            
            {/* Corner Accents */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-background/30" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-background/30" />
          </div>

          <h3 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none max-w-5xl">
            Partner with a <br />
            <span className="opacity-40">Logistics Team</span> <br />
            You Can Trust.
          </h3>
          
          <div className="mt-20 w-px h-32 bg-background/20" />
          
          <p className="mt-12 text-[10px] uppercase tracking-[0.5em] font-black opacity-30">
            Secure • Reliable • Integrated
          </p>
        </div>
      </div>
    </section>
  );
}