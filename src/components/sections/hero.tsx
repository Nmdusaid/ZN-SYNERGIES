"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage?.imageUrl || "https://picsum.photos/seed/logistics/1920/1080"} 
          alt="Hero Background" 
          fill
          className="object-cover opacity-40 grayscale"
          priority
          data-ai-hint="futuristic logistics"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-80" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-widest uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Next-Gen Supply Chain Intelligence
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          ZN <span className="text-gradient">SYNERGIES</span><br />
          <span className="text-4xl md:text-6xl font-light opacity-80">GLOBAL MOVEMENTS.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
          Seamless logistics for a borderless world. Leveraging AI-driven predictive insights and a high-performance network to move your enterprise forward.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-600">
          <Button size="lg" className="h-14 px-8 bg-accent text-background hover:bg-accent/90 text-lg font-bold transition-all hover:scale-105">
            Request Freight Quote <ChevronRight className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-8 border-white/10 hover:bg-white/5 text-lg font-semibold group">
            <Play className="mr-2 fill-white group-hover:fill-accent transition-colors" size={16} /> Watch Showcase
          </Button>
        </div>
      </div>

      {/* Floating Hud elements for visual interest */}
      <div className="absolute bottom-10 left-10 hidden lg:block animate-pulse-slow">
        <div className="glass-morphism p-4 rounded-xl flex flex-col gap-1">
          <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Active Vessel</span>
          <span className="text-sm font-bold">ZNS-ATLANTIC_MARU</span>
          <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden mt-2">
            <div className="w-2/3 h-full bg-accent" />
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-10 hidden lg:block animate-pulse-slow">
        <div className="glass-morphism p-4 rounded-xl flex flex-col gap-1">
          <span className="text-[10px] text-accent font-bold uppercase tracking-widest">System Status</span>
          <span className="text-sm font-bold">ALL NODES NOMINAL</span>
          <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 rounded-sm bg-accent/40" />)}
          </div>
        </div>
      </div>
    </section>
  );
}