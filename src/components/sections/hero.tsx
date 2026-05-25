
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const quoteMailto = "mailto:usaid6765@gmail.com?subject=Enterprise Inquiry&body=I would like to discuss a luxury logistics solution for my enterprise.";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* 4K Cinematic Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125"
        >
          <source 
            src="https://cdn.pixabay.com/video/2021/04/12/70815-536967756_large.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]" />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-12 w-full">
        <div className="max-w-4xl space-y-12">
          {/* Typographic Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-1000">
              <div className="w-12 h-px bg-foreground/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40">Established Excellence 2011</span>
            </div>
            <h1 className="text-6xl md:text-[9.5rem] font-black text-foreground leading-[0.8] tracking-tighter uppercase animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              CINEMATIC<br />
              <span className="text-stroke">PRECISION.</span>
            </h1>
          </div>
          
          <p className="max-w-xl text-xl text-foreground/60 font-light leading-relaxed animate-in fade-in slide-in-from-left-12 duration-1000 delay-400">
            Architecting the world's most complex supply chains with absolute discipline. Luxury infrastructure for a high-stakes global economy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-10 animate-in fade-in slide-in-from-left-16 duration-1000 delay-600">
            <a 
              href={quoteMailto}
              className="group h-20 px-16 bg-foreground text-background hover:bg-foreground/90 text-[12px] uppercase tracking-[0.4em] font-black transition-all duration-500 rounded-none flex items-center justify-center no-underline"
            >
              Inquire Now <ArrowRight className="ml-4 transition-transform group-hover:translate-x-2" size={20} />
            </a>
            
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Global Network Online
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-20 animate-bounce opacity-20 hidden lg:block">
        <div className="w-px h-24 bg-foreground" />
      </div>
      
      <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col gap-8 opacity-10">
        <span className="rotate-90 text-[10px] font-black tracking-widest uppercase">Precision</span>
        <span className="rotate-90 text-[10px] font-black tracking-widest uppercase">Discipline</span>
        <span className="rotate-90 text-[10px] font-black tracking-widest uppercase">Synergy</span>
      </div>
    </section>
  );
}
