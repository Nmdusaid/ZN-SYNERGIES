
"use client";

import React from 'react';
import { Globe, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ShieldCheck, Plane, Ship, Truck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background pt-32 pb-16 border-t border-white/5 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-10">
            {/* Integrated Footer Logo */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 border border-foreground/10 flex flex-col items-center justify-center p-1 bg-foreground/5">
                <Globe className="text-foreground mb-1" size={18} />
                <div className="flex gap-1 text-foreground/30">
                  <Plane size={8} />
                  <Ship size={8} />
                  <Truck size={8} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">
                  ZN <span className="text-white/40">SYNERGIES</span>
                </span>
                <span className="text-[7px] font-bold tracking-[0.4em] text-white/20 uppercase mt-1">
                  FIATA Certified
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm font-light leading-relaxed tracking-wide">
              Reliable logistics solutions built for modern business transportation needs. Orchestrating movement with cinematic precision.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-10">Governance</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <li><a href="#" className="hover:text-white transition-colors">FIATA Certification</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategic Sourcing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Risk Mitigation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-10">Direct Contact</h4>
            <ul className="space-y-6 text-sm font-light text-muted-foreground">
              <li className="flex gap-4 items-center">
                <Phone size={14} className="text-foreground/40" />
                <span>+65 800 ZN-GLOBAL</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={14} className="text-foreground/40" />
                <span>ops@zn-synergies.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-10">Newsletter</h4>
            <p className="text-xs text-muted-foreground mb-6 font-light">Insights into global trade and logistics.</p>
            <div className="flex border-b border-white/10 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none text-[10px] tracking-widest outline-none flex-1 placeholder:text-muted-foreground" 
              />
              <button className="text-foreground font-bold text-[10px] tracking-widest">JOIN</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            © 2024 ZN SYNERGIES LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
