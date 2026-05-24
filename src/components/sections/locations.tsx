"use client";

import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, Globe } from 'lucide-react';

const offices = [
  {
    city: "Singapore",
    address: "Level 42, International Trade Tower",
    phone: "+65 800 ZN-SING",
    type: "APAC Hub",
    coordinates: { top: '65%', left: '82%' }
  },
  {
    city: "London",
    address: "30 St Mary Axe (The Gherkin)",
    phone: "+44 20 7946 0000",
    type: "EMEA Hub",
    coordinates: { top: '35%', left: '48%' }
  },
  {
    city: "New York",
    address: "One World Trade Center, Suite 85",
    phone: "+1 212 555 0123",
    type: "Americas Hub",
    coordinates: { top: '40%', left: '25%' }
  },
  {
    city: "Dubai",
    address: "Burj Daman, DIFC",
    phone: "+971 4 301 7777",
    type: "MENA Hub",
    coordinates: { top: '50%', left: '60%' }
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

        {/* Stylized Map Visualization */}
        <div className="relative w-full aspect-[21/9] bg-white/[0.02] border border-white/10 mb-32 overflow-hidden reveal-on-scroll">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          {/* Abstract Map Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <path d="M150,150 Q400,100 850,250" stroke="white" strokeWidth="0.5" fill="none" />
            <path d="M150,150 Q500,300 650,200" stroke="white" strokeWidth="0.5" fill="none" />
            <path d="M500,120 Q600,250 850,250" stroke="white" strokeWidth="0.5" fill="none" />
          </svg>

          {/* Location Markers */}
          {offices.map((office, idx) => (
            <div 
              key={idx} 
              className="absolute group cursor-pointer"
              style={{ top: office.coordinates.top, left: office.coordinates.left }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-white rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-50" />
                
                <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none whitespace-nowrap bg-white text-black text-[10px] font-black uppercase tracking-widest px-3 py-1">
                  {office.city}
                </div>
              </div>
            </div>
          ))}

          {/* Map Compass/Hud Element */}
          <div className="absolute bottom-10 right-10 flex items-center gap-4">
            <div className="text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">Network Active</div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
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
