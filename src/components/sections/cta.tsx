
"use client";

import React from 'react';
import { Building2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function CallToAction() {
  const whatsappNumber = "+910000000000"; // User should update this with their actual business number
  const whatsappMessage = "I've come for a quote, I'm a customer and I'd like to speak with the business.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-48 px-6 bg-foreground text-background relative overflow-hidden flex items-center justify-center">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg viewBox="0 0 1000 1000" className="w-full h-full fill-current">
          <path d="M0,500 L1000,500 M500,0 L500,1000" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="reveal-on-scroll space-y-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            Partner with a <br />
            logistics team you can trust.
          </h2>

          <div className="flex flex-col items-center gap-12">
            {/* Corporate Identity Signature */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 border border-background/20 flex items-center justify-center group hover:border-background/40 transition-colors duration-500">
                <Building2 strokeWidth={1} className="text-background w-12 h-12 md:w-16 md:h-16" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-black tracking-[0.5em] uppercase text-background">
                  ZN
                </span>
                <div className="w-12 h-px bg-background/20 mt-4" />
              </div>
            </div>

            {/* Strategic Action Button */}
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-background text-foreground hover:bg-background/90 rounded-none h-16 px-12 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black transition-all duration-500 hover:scale-105"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
