"use client";

import React from 'react';
import { Handshake, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  const whatsappUrl = "https://wa.me/919962556765?text=I've%20come%20for%20a%20quote.%20I'm%20a%20customer%20and%20I'd%20like%20to%20speak%20with%20your%20business%20regarding%20logistics.";

  return (
    <section className="py-48 px-6 bg-foreground text-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg viewBox="0 0 1000 1000" className="w-full h-full fill-current">
          <path d="M0,500 L1000,500 M500,0 L500,1000" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Column: Strategic Text Content */}
          <div className="reveal-on-scroll space-y-12">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.8em] font-black opacity-40">Strategic Partnership Protocol</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                Partner with a <br />
                <span className="opacity-40 text-stroke">Logistics Team</span> <br />
                You Can Trust.
              </h3>
            </div>

            <div className="space-y-8 max-w-lg">
              <p className="text-sm md:text-base font-light leading-relaxed opacity-70">
                We orchestrate high-stakes global movements with absolute discipline and cinematic precision. Join our network of elite enterprise partners.
              </p>
              
              {/* Step-by-step content style */}
              <div className="space-y-6 pt-4">
                {[
                  "Secure Global Infrastructure",
                  "AI-Driven Supply Chain Efficiency",
                  "24/7 Dedicated Strategic Support"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-px bg-background/20 group-hover:w-10 transition-all duration-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-background text-foreground h-16 px-10 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-background/90 transition-all rounded-none group no-underline"
            >
              Get a Quote <MessageSquare size={14} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          {/* Right Column: Enhanced Handshake Visual */}
          <div className="flex justify-center lg:justify-end reveal-on-scroll delay-300">
            <div className="relative group">
              {/* Enhanced Orbital/Glow Effects */}
              <div className="absolute inset-0 bg-background/5 rounded-full blur-3xl group-hover:bg-background/10 transition-all duration-1000 scale-150 animate-pulse-slow" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 border border-background/10 flex items-center justify-center animate-handshake backdrop-blur-sm">
                <div className="absolute inset-4 border border-background/5 flex items-center justify-center">
                   <Handshake size={100} className="text-background md:size-[140px]" strokeWidth={0.5} />
                </div>
                
                {/* Dynamic Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-background/40" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-background/40" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-background/40" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-background/40" />
                
                {/* Rotating Scanner Line */}
                <div className="absolute inset-0 border border-background/5 rounded-full animate-spin-slow opacity-20" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-32 w-px h-32 bg-background/10 mx-auto hidden lg:block" />
      </div>
    </section>
  );
}
