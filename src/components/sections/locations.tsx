"use client";

import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const offices = [
  {
    city: "Singapore",
    address: "Level 42, International Trade Tower",
    phone: "+65 800 ZN-SING",
    type: "APAC Hub",
  },
  {
    city: "London",
    address: "30 St Mary Axe (The Gherkin)",
    phone: "+44 20 7946 0000",
    type: "EMEA Hub",
  },
  {
    city: "New York",
    address: "One World Trade Center, Suite 85",
    phone: "+1 212 555 0123",
    type: "Americas Hub",
  },
  {
    city: "Dubai",
    address: "Burj Daman, DIFC",
    phone: "+971 4 301 7777",
    type: "MENA Hub",
  }
];

export function Locations() {
  return (
    <section id="contact" className="py-48 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="reveal-on-scroll">
            <div className="text-white/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Global Network</div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              OUR<br />
              <span className="text-white/40">CITADELS.</span>
            </h2>
          </div>
          <p className="text-white/40 text-xl font-light max-w-sm reveal-on-scroll">
            Command centers positioned at the critical crossroads of global commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {offices.map((office, idx) => (
            <div 
              key={idx} 
              className="p-16 bg-black hover:bg-white/[0.03] transition-all duration-500 group reveal-on-scroll"
            >
              <div className="flex justify-between items-start mb-16">
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">{office.type}</div>
                <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" size={24} />
              </div>
              
              <h3 className="text-4xl font-black text-white mb-8 group-hover:translate-x-4 transition-transform duration-500">{office.city}</h3>
              
              <div className="space-y-8 text-sm font-light text-white/40">
                <div className="flex gap-6">
                  <MapPin size={18} className="text-white shrink-0" />
                  <span>{office.address}</span>
                </div>
                <div className="flex gap-6">
                  <Phone size={18} className="text-white shrink-0" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex gap-6">
                  <Mail size={18} className="text-white shrink-0" />
                  <span>{office.city.toLowerCase()}@zn-synergies.com</span>
                </div>
              </div>

              <button className="mt-16 text-[10px] uppercase tracking-[0.4em] font-black text-white border-b border-white/10 pb-2 hover:border-white transition-all">
                Contact HQ
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}