
"use client";

import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const offices = [
  {
    city: "Singapore",
    address: "Level 42, International Trade Tower",
    phone: "+65 800 ZN-SING",
    type: "APAC Hub",
    delay: "0"
  },
  {
    city: "London",
    address: "30 St Mary Axe (The Gherkin)",
    phone: "+44 20 7946 0000",
    type: "EMEA Hub",
    delay: "200"
  },
  {
    city: "New York",
    address: "One World Trade Center, Suite 85",
    phone: "+1 212 555 0123",
    type: "Americas Hub",
    delay: "400"
  },
  {
    city: "Dubai",
    address: "Burj Daman, DIFC",
    phone: "+971 4 301 7777",
    type: "MENA Hub",
    delay: "600"
  }
];

export function Locations() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#08090A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="reveal-on-scroll">
            <div className="text-primary text-[10px] uppercase tracking-[0.4em] mb-6">Global Presence</div>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Our <span className="text-primary italic">Citadels.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg font-light max-w-sm reveal-on-scroll">
            Strategic command centers positioned at the world's most vital commercial crossroads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {offices.map((office, idx) => (
            <div 
              key={idx} 
              className={`p-10 bg-background hover:bg-primary/[0.02] transition-colors group reveal-on-scroll`}
              style={{ transitionDelay: `${office.delay}ms` }}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-[10px] uppercase tracking-widest text-primary/60">{office.type}</div>
                <ArrowUpRight className="text-white/20 group-hover:text-primary transition-colors" size={20} />
              </div>
              
              <h3 className="text-3xl font-serif text-white mb-6 group-hover:translate-x-2 transition-transform">{office.city}</h3>
              
              <div className="space-y-6 text-sm font-light text-muted-foreground">
                <div className="flex gap-4">
                  <MapPin size={16} className="text-primary shrink-0" />
                  <span>{office.address}</span>
                </div>
                <div className="flex gap-4">
                  <Phone size={16} className="text-primary shrink-0" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex gap-4">
                  <Mail size={16} className="text-primary shrink-0" />
                  <span>{office.city.toLowerCase()}@zn-synergies.com</span>
                </div>
              </div>

              <button className="mt-12 text-[10px] uppercase tracking-[0.3em] font-bold text-white border-b border-white/10 pb-1 hover:border-primary transition-colors">
                Contact HQ
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
