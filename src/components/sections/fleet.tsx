
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const fleet = [
  {
    id: 'fleet-truck',
    title: 'Precision Road Fleet',
    desc: 'Autonomous electric long-haul transporters for zero-emission delivery.',
    specs: ['Autonomous Level 4', '1,200km Range', 'Cold Chain Ready'],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-truck-driving-on-the-highway-at-night-42612-large.mp4',
    animationClass: 'animate-drift'
  },
  {
    id: 'fleet-ship',
    title: 'Ocean Megastructures',
    desc: 'Deep-water logistics vessels powered by hybrid hydrogen propulsion.',
    specs: ['24k TEU Capacity', 'Smart Stowage', 'Reduced Emissions'],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-container-ship-sailing-the-ocean-at-sunset-42611-large.mp4',
    animationClass: 'animate-float'
  },
  {
    id: 'fleet-plane',
    title: 'Aviation Express',
    desc: 'High-velocity air freight connecting major global hubs in < 24 hours.',
    specs: ['Next-Gen Cargo Bay', 'Route Optimization', 'Priority Handling'],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cargo-plane-taking-off-at-dusk-42613-large.mp4',
    animationClass: 'animate-plane'
  }
];

export function FleetShowcase() {
  return (
    <section id="fleet" className="py-32 px-6 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 reveal-on-scroll">
          <h2 className="text-white/30 font-bold tracking-[0.5em] uppercase text-xs mb-6">Hardware & Infrastructure</h2>
          <h3 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">THE MODERN FLEET</h3>
          <div className="w-24 h-px bg-white/20 mx-auto" />
        </div>

        <div className="space-y-48">
          {fleet.map((item, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            return (
              <div key={idx} className={cn(
                "flex flex-col items-center gap-24 reveal-on-scroll",
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              )}>
                <div className="flex-1 relative aspect-video w-full group">
                  <div className="absolute -inset-4 border border-white/5 group-hover:border-white/20 transition-colors duration-700" />
                  <div className={cn("relative h-full w-full overflow-hidden grayscale contrast-125", item.animationClass)}>
                    {item.videoUrl ? (
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                      >
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <Image 
                        src={imageData?.imageUrl || `https://picsum.photos/seed/${item.id}/800/600`} 
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={imageData?.imageHint || "logistics vehicle"}
                      />
                    )}
                  </div>
                </div>
                
                <div className="flex-1 space-y-10">
                  <div className="space-y-6">
                    <span className="text-white/10 font-black text-9xl block leading-none">0{idx + 1}</span>
                    <h4 className="text-5xl font-black text-white tracking-tighter">{item.title}</h4>
                    <p className="text-muted-foreground text-xl font-light leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {item.specs.map((spec, sidx) => (
                      <div key={sidx} className="px-6 py-2 border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.2em]">
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
