
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage?.imageUrl || "https://picsum.photos/seed/luxury-cargo/1920/1080"} 
          alt="Hero Background" 
          fill
          className="object-cover opacity-30 grayscale contrast-125 scale-105"
          priority
          data-ai-hint="luxury logistics"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-[0.4em] mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          The Gold Standard of Logistics
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Global <span className="text-primary italic">Precision.</span><br />
          <span className="text-4xl md:text-7xl font-light opacity-50 tracking-tighter">Enterprise Movement.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground/80 font-light tracking-wide mb-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
          Where sophistication meets scale. We orchestrate the world's most complex supply chains with white-glove service and predictive intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-600">
          <Button 
            size="lg" 
            className="h-16 px-12 bg-primary text-background hover:bg-white text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Inquire Now <ArrowRight className="ml-3" size={16} />
          </Button>
          <button className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-primary transition-colors flex items-center gap-3">
            <span className="w-12 h-px bg-white/20" /> View Portfolio
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-px h-12 bg-white" />
      </div>
    </section>
  );
}
