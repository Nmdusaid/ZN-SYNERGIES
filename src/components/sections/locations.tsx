"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const offices = [
  {
    city: "Singapore",
    address: "Level 42, International Trade Tower",
    fullAddress: "Level 42, International Trade Tower, Singapore",
    phone: "+65 800 ZN-SING",
    type: "APAC Hub",
    orbitSize: "w-[30%] h-[30%]",
    angle: "45deg",
  },
  {
    city: "London",
    address: "30 St Mary Axe (The Gherkin)",
    fullAddress: "30 St Mary Axe, London EC3A 8BF, United Kingdom",
    phone: "+44 20 7946 0000",
    type: "EMEA Hub",
    orbitSize: "w-[50%] h-[50%]",
    angle: "135deg",
  },
  {
    city: "New York",
    address: "One World Trade Center, Suite 85",
    fullAddress: "One World Trade Center, New York, NY 10007, USA",
    phone: "+1 212 555 0123",
    type: "Americas Hub",
    orbitSize: "w-[70%] h-[70%]",
    angle: "225deg",
  },
  {
    city: "Dubai",
    address: "Burj Daman, DIFC",
    fullAddress: "Burj Daman, DIFC, Dubai, United Arab Emirates",
    phone: "+971 4 301 7777",
    type: "MENA Hub",
    orbitSize: "w-[90%] h-[90%]",
    angle: "315deg",
  }
];

type Star = {
  top: string;
  left: string;
  delay: string;
  duration: string;
};

export function Locations() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = [...Array(50)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 4}s`,
    }));
    setStars(generatedStars);
  }, []);

  const openMap = (address: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <section id="contact" className="py-48 px-6 bg-black border-t border-white/5 overflow-hidden relative">
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {stars.map((star, i) => (
          <div 
            key={i} 
            className="absolute w-px h-px bg-white rounded-full animate-pulse"
            style={{ 
              top: star.top, 
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
          {/* Central Pulsing Core */}
          <div className="relative z-20 w-4 h-4 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.9)]">
            <div className="absolute inset-0 w-full h-full bg-white rounded-full animate-ping opacity-30" />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[8px] text-white/40 font-black uppercase tracking-[0.6em] whitespace-nowrap">
              ZN CORE
            </div>
          </div>

          {/* Concentric Orbits */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {offices.map((office, idx) => (
              <div 
                key={idx}
                className={cn(
                  "absolute border border-white/10 rounded-full flex items-center justify-center",
                  office.orbitSize
                )}
              >
                {/* Orbital Path Glow */}
                <div className="absolute inset-0 rounded-full border border-white/[0.02]" />
                
                {/* Hub Node on Orbit */}
                <div 
                  className="absolute cursor-pointer pointer-events-auto group/node"
                  style={{ 
                    transform: `rotate(${office.angle}) translateX(50%)`,
                    left: '50%',
                    top: '50%'
                  }}
                  onClick={() => openMap(office.fullAddress)}
                >
                  <div 
                    className="relative"
                    style={{ transform: `translateX(-50%) translateY(-50%) rotate(-${office.angle})` }}
                  >
                    {/* Node Dot */}
                    <div className="w-4 h-4 bg-white rounded-full group-hover/node:scale-150 transition-transform duration-500 shadow-[0_0_15px_white] z-30" />
                    
                    {/* Node Orbiting Label */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 transition-all duration-500 whitespace-nowrap bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 flex items-center gap-2 translate-y-2 group-hover/node:translate-y-0">
                      {office.city}
                      <ArrowUpRight size={10} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grid Overlay HUD */}
          <div className="absolute inset-0 pointer-events-none opacity-10" 
               style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        </div>

        {/* Office Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mt-32">
          {offices.map((office, idx) => (
            <div 
              key={idx} 
              className="p-16 bg-black hover:bg-white/[0.03] transition-all duration-500 group reveal-on-scroll cursor-pointer border border-white/5"
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
                  <span className="line-clamp-2">{office.address}</span>
                </div>
                <div className="flex gap-6">
                  <Phone size={18} className="text-white shrink-0" />
                  <span>{office.phone}</span>
                </div>
              </div>

              <button className="mt-16 text-[10px] uppercase tracking-[0.4em] font-black text-white border-b border-white/10 pb-2 hover:border-white transition-all">
                OPEN PROTOCOL
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}