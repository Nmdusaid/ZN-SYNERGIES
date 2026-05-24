"use client";

import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, Globe } from 'lucide-react';

const offices = [
  {
    city: "Singapore",
    address: "Level 42, International Trade Tower",
    fullAddress: "Level 42, International Trade Tower, Singapore",
    phone: "+65 800 ZN-SING",
    type: "APAC Hub",
    coordinates: { top: '65%', left: '82%' }
  },
  {
    city: "London",
    address: "30 St Mary Axe (The Gherkin)",
    fullAddress: "30 St Mary Axe, London EC3A 8BF, United Kingdom",
    phone: "+44 20 7946 0000",
    type: "EMEA Hub",
    coordinates: { top: '35%', left: '48%' }
  },
  {
    city: "New York",
    address: "One World Trade Center, Suite 85",
    fullAddress: "One World Trade Center, New York, NY 10007, USA",
    phone: "+1 212 555 0123",
    type: "Americas Hub",
    coordinates: { top: '40%', left: '25%' }
  },
  {
    city: "Dubai",
    address: "Burj Daman, DIFC",
    fullAddress: "Burj Daman, DIFC, Dubai, United Arab Emirates",
    phone: "+971 4 301 7777",
    type: "MENA Hub",
    coordinates: { top: '50%', left: '60%' }
  }
];

export function Locations() {
  const openMap = (address: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

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
            Strategic command centers positioned at the critical crossroads of the global constellation.
          </p>
        </div>

        {/* Universe/Constellation Visualization */}
        <div className="relative w-full aspect-[21/9] bg-white/[0.01] border border-white/10 mb-32 overflow-hidden reveal-on-scroll group/universe">
          {/* Star Field */}
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />
          
          {/* Orbital Paths */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none">
            <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_100s_linear_infinite]" />
            <div className="absolute inset-[15%] border border-white/10 rounded-full animate-[spin_80s_linear_infinite_reverse]" />
            <div className="absolute inset-[30%] border border-white/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-[45%] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          </div>

          {/* Central Pulsing Sun/Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-1 h-1 bg-white rounded-full blur-[2px] animate-pulse" />
            <div className="absolute inset-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2 bg-white/5 rounded-full blur-2xl animate-pulse" />
          </div>

          {/* Location Nodes (Planetary) */}
          {offices.map((office, idx) => (
            <div 
              key={idx} 
              className="absolute group/node cursor-pointer z-20"
              style={{ top: office.coordinates.top, left: office.coordinates.left }}
              onClick={() => openMap(office.fullAddress)}
            >
              <div className="relative">
                {/* Node Aura */}
                <div className="absolute inset-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-white/0 group-hover/node:bg-white/20 transition-all duration-500 rounded-full blur-md" />
                
                {/* The Dot */}
                <div className="w-2 h-2 bg-white rounded-full group-hover/node:scale-150 transition-transform duration-500" />
                <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping opacity-30" />
                
                {/* Information Overlay */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 flex items-center gap-3 translate-y-2 group-hover/node:translate-y-0 shadow-2xl">
                  {office.city}
                  <Globe size={10} />
                </div>
              </div>
            </div>
          ))}

          {/* HUD Elements */}
          <div className="absolute bottom-10 right-10 flex items-center gap-4">
            <div className="text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">Network Active</div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {offices.map((office, idx) => (
            <div 
              key={idx} 
              className="p-16 bg-black hover:bg-white/[0.03] transition-all duration-500 group reveal-on-scroll cursor-pointer"
              onClick={() => openMap(office.fullAddress)}
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
                Open in Maps
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
