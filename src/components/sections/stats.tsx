"use client";

import React from 'react';

const stats = [
  { label: 'Deliveries', value: '1.2M+', desc: 'Annual successful movements' },
  { label: 'Countries', value: '180+', desc: 'Global network reach' },
  { label: 'On-Time', value: '99.8%', desc: 'Operational precision' },
  { label: 'Asset Value', value: '$45B+', desc: 'Total cargo protected' },
];

export function PerformanceHUD() {
  return (
    <section className="py-24 px-6 bg-[#0B0C0E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative group text-center lg:text-left">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-white/5 hidden lg:block group-hover:bg-accent/30 transition-colors" />
              <div className="flex flex-col gap-2 p-4">
                <span className="text-accent font-bold tracking-widest uppercase text-[10px] mb-2">{stat.label}</span>
                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter group-hover:text-accent transition-colors duration-500">
                  {stat.value}
                </span>
                <p className="text-muted-foreground text-sm font-medium opacity-60">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}