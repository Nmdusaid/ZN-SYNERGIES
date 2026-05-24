"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const quoteMailto = "mailto:usaid6765@gmail.com?subject=Enterprise Inquiry&body=I would like to discuss a luxury logistics solution for my enterprise.";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage?.imageUrl || "https://picsum.photos/seed/luxury-cargo/1920/1080"} 
          alt="Hero Background" 
          fill
          className="object-cover opacity-20 grayscale contrast-150 scale-105"
          priority
          data-ai-hint="black and white logistics"
        />
        {/* Cinematic Particles Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/stars/1920/1080')] bg-repeat" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-12 w-full">
        <div className="max-w-4xl space-y-12">
          <div className="inline-block px-6 py-2 border border-foreground/20 text-[10px] uppercase tracking-[0.5em] font-bold animate-in fade-in slide-in-from-left-4 duration-1000">
            Enterprise Logistics Excellence • FIATA Certified
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-black text-foreground leading-[0.85] tracking-tighter uppercase animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
            CINEMATIC<br />
            <span className="text-stroke">PRECISION.</span>
          </h1>
          
          <p className="max-w-xl text-xl text-foreground/50 font-light leading-relaxed animate-in fade-in slide-in-from-left-12 duration-1000 delay-400">
            Architecting the world's most complex supply chains with military discipline. Luxury infrastructure for a high-stakes global economy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-10 animate-in fade-in slide-in-from-left-16 duration-1000 delay-600">
            <a 
              href={quoteMailto}
              className="h-20 px-16 bg-foreground text-background hover:bg-foreground/90 text-[12px] uppercase tracking-[0.4em] font-black transition-all duration-500 rounded-none flex items-center justify-center no-underline"
            >
              Inquire Now <ArrowRight className="ml-4" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 right-20 animate-bounce opacity-20 hidden lg:block">
        <div className="w-px h-24 bg-foreground" />
      </div>
    </section>
  );
}
