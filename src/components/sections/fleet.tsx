"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const fleet = [
  {
    id: 'fleet-truck',
    title: 'Precision Road Fleet',
    desc: 'Autonomous electric long-haul transporters for zero-emission delivery.',
    specs: ['Autonomous Level 4', '1,200km Range', 'Cold Chain Ready']
  },
  {
    id: 'fleet-ship',
    title: 'Ocean Megastructures',
    desc: 'Deep-water logistics vessels powered by hybrid hydrogen propulsion.',
    specs: ['24k TEU Capacity', 'Smart Stowage', 'Reduced Emissions']
  },
  {
    id: 'fleet-plane',
    title: 'Aviation Express',
    desc: 'High-velocity air freight connecting major global hubs in < 24 hours.',
    specs: ['Next-Gen Cargo Bay', 'Route Optimization', 'Priority Handling']
  }
];

export function FleetShowcase() {
  return (
    <section id="fleet" className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Operations</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">THE MODERN FLEET</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Investing in the world's most advanced logistics hardware to ensure your cargo moves with unparalleled safety and speed.
          </p>
        </div>

        <div className="space-y-32">
          {fleet.map((item, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            return (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 group`}>
                <div className="flex-1 relative aspect-[4/3] w-full rounded-3xl overflow-hidden glass-morphism">
                  <Image 
                    src={imageData?.imageUrl || "https://picsum.photos/seed/fleet/800/600"} 
                    alt={item.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    data-ai-hint={imageData?.imageHint || "logistics vehicle"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <span className="text-accent font-bold text-5xl opacity-20">0{idx + 1}</span>
                    <h4 className="text-4xl font-black text-white tracking-tight">{item.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {item.specs.map((spec, sidx) => (
                      <div key={sidx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-accent uppercase tracking-wider">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}