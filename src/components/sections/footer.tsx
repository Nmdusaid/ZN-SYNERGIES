
"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="footer" className="bg-background pt-20 md:pt-32 pb-10 md:pb-16 border-t border-foreground/5 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="space-y-6 md:space-y-10">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-foreground uppercase leading-none">
                ZN <span className="text-foreground/40">SYNERGIES</span>
              </span>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-foreground/20 uppercase mt-2">
                Enterprise Logistics
              </span>
            </div>
            <p className="text-muted-foreground text-[11px] md:text-sm font-light leading-relaxed tracking-wide max-w-xs">
              Reliable logistics solutions built for modern business transportation needs. Orchestrating movement with absolute cinematic precision.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={16} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram size={16} /></a>
            </div>
          </div>

          <div className="hidden sm:block">
            <h4 className="text-foreground/40 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-6 md:mb-10">Governance</h4>
            <ul className="space-y-3 md:space-y-4 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Strategic Sourcing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Global Compliance</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Risk Mitigation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground/40 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-6 md:mb-10">Direct Contact</h4>
            <ul className="space-y-4 md:space-y-6 text-xs md:text-sm font-light text-muted-foreground">
              <li className="flex gap-3 md:gap-4 items-center">
                <Phone size={12} className="text-foreground/40" />
                <span className="text-[11px] md:text-sm text-foreground">+91 000 000 0000</span>
              </li>
              <li className="flex gap-3 md:gap-4 items-center">
                <Mail size={12} className="text-foreground/40" />
                <span className="text-[11px] md:text-sm text-foreground">ops@zn-synergies.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground/40 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-6 md:mb-10">Newsletter</h4>
            <p className="text-[10px] md:text-xs text-muted-foreground mb-4 md:mb-6 font-light">Insights into global trade and logistics.</p>
            <div className="flex border-b border-foreground/10 pb-2">
              <input 
                suppressHydrationWarning
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none text-[8px] md:text-[10px] tracking-widest outline-none flex-1 placeholder:text-muted-foreground text-foreground" 
              />
              <button className="text-foreground font-bold text-[8px] md:text-[10px] tracking-widest">JOIN</button>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 text-center md:text-left">
            © {currentYear} ZN SYNERGIES LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 md:gap-12 text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
