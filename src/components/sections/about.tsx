
"use client";

import React from 'react';
import Image from 'next/image';

export function AboutUs() {
  return (
    <section id="about" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-on-scroll">
            <div className="text-primary text-[10px] uppercase tracking-[0.4em] mb-6">Our Legacy</div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight italic">
              A heritage of <span className="text-primary">uncompromising</span> integrity.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed max-w-lg">
              <p>
                Founded on the principles of discretion and operational excellence, ZN Synergies has evolved from a boutique freight forwarder into a global titan of luxury logistics.
              </p>
              <p>
                We don't just move cargo; we move your reputation. Every shipment is a commitment to precision, handled by our elite network of logistics architects across six continents.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-12">
              <div>
                <div className="text-4xl font-serif text-primary mb-2">150+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Strategic Hubs</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-primary mb-2">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Global Watch</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full reveal-on-scroll delay-300">
            <div className="absolute inset-0 border border-primary/20 translate-x-6 translate-y-6 -z-10" />
            <div className="relative h-full w-full overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/zn-about/1000/1250" 
                alt="Corporate Excellence" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                data-ai-hint="corporate office"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass-morphism p-10 max-w-xs">
              <p className="text-sm font-serif italic text-white/80 leading-relaxed">
                "Logistics is the silent engine of global commerce. We ensure yours runs with absolute silence and absolute speed."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-px bg-primary" />
                <span className="text-[10px] uppercase tracking-widest">CEO, ZN Synergies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
