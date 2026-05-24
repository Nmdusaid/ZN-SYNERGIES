"use client";

import React from 'react';
import { Globe, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center rotate-45">
                <Globe className="text-background -rotate-45" size={16} />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                ZN <span className="text-accent">SYNERGIES</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Redefining global logistics through cinematic precision and AI-driven supply chain intelligence. Your movement, our mission.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-accent transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-accent transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-accent transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Capabilities</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Strategic Sourcing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cross-Border Compliance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Reverse Logistics</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Predictive Analytics</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cold Chain Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">HQ Hubs</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin size={16} className="text-accent shrink-0" />
                <span>Level 42, International Trade Tower, Singapore</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-accent shrink-0" />
                <span>The Gherkin, 30 St Mary Axe, London, UK</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-accent shrink-0" />
                <span>One World Trade Center, New York, USA</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Direct Line</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-accent" />
                <span>+65 800 ZN-SYNERGY</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-accent" />
                <span>global.ops@zn-synergies.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 ZN SYNERGIES LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Movement</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Architecture</a>
          </div>
        </div>
      </div>
    </footer>
  );
}