
"use client";

import React from 'react';
import { Building2 } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-48 px-6 bg-foreground text-background relative overflow-hidden flex items-center justify-center">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg viewBox="0 0 1000 1000" className="w-full h-full fill-current">
          <path d="M0,500 L1000,500 M500,0 L500,1000" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="reveal-on-scroll space-y-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            Partner with a <br />
            logistics team you can trust.
          </h2>

          <div className="flex flex-col items-center gap-6">
            <div className="w-32 h-32 border border-background/20 flex items-center justify-center group hover:border-background/40 transition-colors duration-500">
              <Building2 size={64} strokeWidth={1} className="text-background" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black tracking-[0.5em] uppercase text-background">
                ZN
              </span>
              <div className="w-12 h-px bg-background/20 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
