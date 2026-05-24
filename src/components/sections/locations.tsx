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
    orbit: "w-[40%] h-[40%]",
    angle: "45deg",
    delay: "0s"
  },
  {
    city: "London",
    address: "30 St Mary Axe (The Gherkin)",
    fullAddress: "30 St Mary Axe, London EC3A 8BF, United Kingdom",
    phone: "+44 20 7946 0000",
    type: "EMEA Hub",
    orbit: "w-[60%] h-[60%]",
    angle: "135deg",
    delay: "1s"
  },
  {
    city: "New York",
    address: "One World Trade Center, Suite 85",
    fullAddress: "One World Trade Center, New York, NY 10007, USA",
    phone: "+1 212 555 0123",
    type: "Americas Hub",
    orbit: "w-[80%] h-[80%]",
    angle: "225deg",
    delay: "2s"
  },
  {
    city: "Dubai",
    address: "Burj Daman, DIFC",
    fullAddress: "Burj Daman, DIFC, Dubai, United Arab Emirates",
    phone: "+971 4 301 7777",
    type: "MENA Hub",
    orbit: "w-[100%] h-[100%]",
    angle: "315deg",
    delay: "3s"
  }
];

export function Locations() {
  const openMap = (address: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <section id="contact" className="py-48 px-6 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="reveal-on-scroll">
            <div className="text-white/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Global Network</div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              OUR<br />
              <span className="text-white/40">GALAXY.</span>
            </h2>
          </div>
          <p className="text-white/40 text-xl font-light max-w-sm reveal-on-scroll">
            A centralized universe of strategic command centers orchestrated through synchronized orbital logistics.
          </p>
        </div>

        {/* Galaxy Circle Visualization */}
        <div className="relative w-full aspect-square md:aspect-[21/9] flex items-center justify-center mb-32 reveal-on-scroll">
          <div className="absolute inset-0 bg-white/[0.01] border border-white/5 opacity-50" />
          
          {/* Central Pulsing Core */}
          <div className="relative z-10 w-4 h-4 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-pulse">
            <div className="absolute inset-0 w-full h-full bg-white rounded-full animate-ping opacity-50" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] text-white/20 font-black uppercase tracking-[0.5em] whitespace-nowrap">
              ZN Core
            </div>
          </div>

          {/* Orbital Containers */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {offices.map((office, idx) => (
              <div 
                key={idx}
                className={`absolute border border-white/10 rounded-full ${office.orbit} transition-colors duration-700 hover:border-white/30`}
              >
                {/* Hub Node on Orbit */}
                <div 
                  className="absolute cursor-pointer pointer-events-auto group/node"
                  style={{ 
                    top: '50%', 
                    left: '50%', 
                    transform: `rotate(${office.angle}) translate(calc(50% + 0px))`,
                  }}
                  onClick={() => openMap(office.fullAddress)}
                >
                  <div 
                    className="relative"
                    style={{ transform: `rotate(-${office.angle})` }}
                  >
                    {/* Node Dot */}
                    <div className="w-3 h-3 bg-white rounded-full group-hover/node:scale-150 transition-transform duration-500 shadow-[0_0_10px_white]" />
                    
                    {/* Tooltip HUD */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 transition-all duration-500 whitespace-nowrap bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 flex items-center gap-3 translate-y-2 group-hover/node:translate-y-0">
                      {office.city}
                      <ArrowUpRight size={10} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grid Overlay HUD */}
          <div className="absolute inset-0 pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
          
          <div className="absolute bottom-10 right-10 flex items-center gap-4">
            <div className="text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">Network Active</div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
          </div>
        </div>

        {/* Office Details Grid */}
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
