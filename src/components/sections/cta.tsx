
"use client";

import React from 'react';
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CallToAction() {
  const quoteMailto = "mailto:usaid6765@gmail.com?subject=Enterprise Quote Inquiry&body=I would like to request a quote for the following logistics operations:";
  
  return (
    <section className="py-48 px-6 bg-foreground text-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-5">
        <svg viewBox="0 0 1000 1000" className="w-full h-full fill-current">
          <path d="M0,500 L1000,500 M500,0 L500,1000" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl reveal-on-scroll">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-black mb-12 opacity-40">Ready to Move Your Cargo Efficiently?</h2>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-16">
            Partner with a <br />
            <span className="opacity-40">Logistics Team</span> <br />
            You Can Trust.
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <a 
              href={quoteMailto}
              className="group flex flex-col gap-6 p-10 border border-background/20 hover:bg-background hover:text-foreground transition-all duration-500 no-underline"
            >
              <div className="w-12 h-12 border border-current flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest block">Inquire</span>
                <span className="text-lg font-black uppercase tracking-tighter flex items-center gap-2">
                  Get a Quote <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </a>

            <a 
              href="tel:+65800ZNGLOBAL"
              className="group flex flex-col gap-6 p-10 border border-background/20 hover:bg-background hover:text-foreground transition-all duration-500 no-underline"
            >
              <div className="w-12 h-12 border border-current flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest block">Support</span>
                <span className="text-lg font-black uppercase tracking-tighter flex items-center gap-2">
                  Contact Us <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </a>

            <a 
              href={quoteMailto}
              className="group flex flex-col gap-6 p-10 border border-background/20 hover:bg-background hover:text-foreground transition-all duration-500 no-underline"
            >
              <div className="w-12 h-12 border border-current flex items-center justify-center">
                <Calendar size={20} />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest block">Scheduling</span>
                <span className="text-lg font-black uppercase tracking-tighter flex items-center gap-2">
                  Schedule Shipment <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
