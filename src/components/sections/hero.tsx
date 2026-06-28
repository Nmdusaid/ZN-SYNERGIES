
"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const quoteMailto = "mailto:usaid6765@gmail.com?subject=Enterprise Inquiry&body=I would like to discuss a luxury logistics solution for my enterprise.";

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-background" data-parallax-speed="0.04">
      {/* Cinematic Identity Background - Video Element */}
  <div className="absolute inset-0 z-0 overflow-hidden bg-black" data-parallax-speed="0.08">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full min-h-screen min-w-full object-cover object-center"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
    <source src="/videos/hero.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>

  <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none" />
</div>

      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pt-10 md:px-12 md:pt-12">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="max-w-4xl space-y-6 md:space-y-12">
          {/* Typographic Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 md:gap-4 animate-in fade-in slide-in-from-left-4 duration-1000">
              <div className="w-6 md:w-12 h-px bg-foreground/20" />
              <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-foreground/40">Established Excellence 2011</span>
            </div>
            <h1 className="text-[clamp(2rem,8vw,7rem)] font-black text-foreground leading-[0.95] md:leading-[0.85] tracking-tighter uppercase animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              SMART LOGISTICS.
              <span className="text-stroke">PRECISION.</span>
            </h1>
          </div>
          
          <p className="max-w-lg text-sm md:text-xl text-foreground/60 font-light leading-relaxed animate-in fade-in slide-in-from-left-12 duration-1000 delay-400">
            Fast, secure, and reliable logistics solutions tailored to your needs. From local deliveries to global freight management, we ensure every shipment reaches its destination on time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 animate-in fade-in slide-in-from-left-16 duration-1000 delay-600">
            <a 
              href={quoteMailto}
              className="group h-14 md:h-20 px-8 md:px-16 bg-foreground text-background hover:bg-foreground/90 text-[9px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-black transition-all duration-500 rounded-none flex items-center justify-center no-underline w-full sm:w-auto"
            >
              Inquire Now <ArrowRight className="ml-4 transition-transform group-hover:translate-x-2" size={18} />
            </a>
            
            <div className="flex items-center gap-3 text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-foreground/20">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 animate-pulse" /> Global Network Online
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 animate-bounce opacity-20 hidden md:block">
        <div className="w-px h-16 md:h-24 bg-foreground" />
      </div>
      
      <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 hidden lg:flex flex-col gap-6 md:gap-8 opacity-10">
        <span className="rotate-90 text-[8px] md:text-[10px] font-black tracking-widest uppercase">Precision</span>
        <span className="rotate-90 text-[8px] md:text-[10px] font-black tracking-widest uppercase">Discipline</span>
        <span className="rotate-90 text-[8px] md:text-[10px] font-black tracking-widest uppercase">Synergy</span>
      </div>
    </section>
  );
}
