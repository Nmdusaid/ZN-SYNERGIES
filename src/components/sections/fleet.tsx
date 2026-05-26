"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const fleet = [
  {
    id: 'fleet-truck',
    title: 'Precision Road Fleet',
    desc: 'Autonomous electric long-haul transporters for zero-emission delivery across continental corridors.',
    specs: ['Autonomous Level 4', '1,200km Range', 'Cold Chain Ready'],
    animationClass: 'animate-drift'
  },
  {
    id: 'fleet-ship',
    title: 'Ocean Megastructures',
    desc: 'Deep-water logistics vessels powered by hybrid hydrogen propulsion for stable high-volume transit.',
    specs: ['24k TEU Capacity', 'Smart Stowage', 'Reduced Emissions'],
    animationClass: 'animate-float'
  },
  {
    id: 'fleet-plane',
    title: 'Aviation Express',
    desc: 'High-velocity air freight connecting major global hubs with next-gen cargo bays for sensitive assets.',
    specs: ['Next-Gen Cargo Bay', 'Route Optimization', 'Priority Handling'],
    animationClass: 'animate-plane'
  }
];

export function FleetShowcase() {
  return (
    <section id="fleet" className="py-24 md:py-48 px-6 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-40 reveal-on-scroll">
          <h2 className="text-white/30 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6">Hardware & Infrastructure</h2>
          <h3 className="text-[clamp(2rem,8vw,5rem)] font-black text-white mb-8 tracking-tighter leading-[0.9]">THE MODERN FLEET</h3>
          <div className="w-20 h-px bg-white/20 mx-auto" />
        </div>

        <div className="space-y-32 md:space-y-64">
          {fleet.map((item, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            return (
              <div key={idx} className={cn(
                "flex flex-col items-center gap-12 md:gap-32 reveal-on-scroll",
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              )}>
                {/* Visual Component */}
                <div className="flex-1 relative aspect-[16/10] w-full group">
                  <div className="absolute -inset-4 border border-white/5 group-hover:border-white/20 transition-colors duration-700 pointer-events-none" />
                  <div className={cn("relative h-full w-full overflow-hidden grayscale contrast-125 brightness-75", item.animationClass)}>
                    <Image 
                      src={imageData?.imageUrl || `https://picsum.photos/seed/${item.id}/800/600`} 
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={imageData?.imageHint || "logistics vehicle"}
                    />
                  </div>
                </div>
                
                {/* Text Component */}
                <div className="flex-1 space-y-8 md:space-y-12 w-full text-left">
                  <div className="space-y-4 md:space-y-8">
                    <span className="text-white/10 font-black text-[clamp(4rem,15vw,10rem)] block leading-none tracking-tighter">
                      0{idx + 1}
                    </span>
                    <h4 className="text-[clamp(1.5rem,6vw,3.5rem)] font-black text-white tracking-tighter uppercase leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-base md:text-xl font-light leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {item.specs.map((spec, sidx) => (
                      <div key={sidx} className="px-5 py-3 border border-white/10 text-[9px] md:text-[11px] font-black text-white uppercase tracking-[0.2em] bg-white/[0.02]">
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
