
"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';

export function AboutUs() {
  return (
    <section id="about" className="py-48 px-6 bg-background relative overflow-hidden">
      {/* Background Universe/Planet Decoration */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 border border-foreground/5 rounded-full animate-pulse-slow pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="reveal-on-scroll">
            <div className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Our Foundation • FIATA Certified</div>
            <h2 className="text-6xl md:text-8xl font-black text-foreground mb-12 tracking-tighter leading-none">
              ABSOLUTE<br />
              <span className="text-foreground/40">INTEGRITY.</span>
            </h2>
            <div className="space-y-8 text-foreground/50 text-xl font-light leading-relaxed max-w-lg">
              <p>
                Under the strategic leadership of <span className="text-foreground font-bold">Siddique Hussain Hashimi</span>, ZN Synergies has evolved from a vision of operational excellence into a global benchmark for high-stakes logistics.
              </p>
              <p>
                As a <span className="text-foreground font-bold">FIATA Certified</span> enterprise, we operate in the shadows of global commerce, ensuring that your enterprise assets move with the silence and speed of light. No distractions. No compromises.
              </p>
            </div>
            
            <div className="mt-20 grid grid-cols-2 gap-16">
              <div>
                <div className="text-6xl font-black text-foreground mb-4">
                  <AnimatedCounter end={150} suffix="+" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold">Strategic Hubs</div>
              </div>
              <div>
                <div className="text-6xl font-black text-foreground mb-4">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold">Global Watch</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square w-full reveal-on-scroll delay-300">
            <div className="absolute inset-0 border border-foreground/10 -translate-x-10 translate-y-10" />
            <div className="relative h-full w-full overflow-hidden grayscale contrast-150">
              <Image 
                src="https://picsum.photos/seed/zn-about/1200/1200" 
                alt="Founder Vision" 
                fill 
                className="object-cover transition-all duration-1000 scale-110 hover:scale-100"
                data-ai-hint="minimalist office"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
