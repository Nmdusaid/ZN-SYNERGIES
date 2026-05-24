
"use client";

import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const offices = [
  {
    city: "Delhi",
    fullAddress: "Aerocity, Indira Gandhi International Airport, New Delhi, Delhi 110037",
    type: "National Capital Hub",
    angle: 45,
    radius: 0.4
  },
  {
    city: "Mumbai",
    fullAddress: "Bandra Kurla Complex, Mumbai, Maharashtra 400051",
    type: "Financial Terminal",
    angle: 135,
    radius: 0.6
  },
  {
    city: "Bangalore",
    fullAddress: "Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103",
    type: "Technology Hub",
    angle: 225,
    radius: 0.8
  },
  {
    city: "Chennai",
    fullAddress: "OMR, Karapakkam, Chennai, Tamil Nadu 600097",
    type: "Maritime Strategy Hub",
    angle: 315,
    radius: 1.0
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
    const generatedStars = [...Array(60)].map(() => ({
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
    <section id="contact" className="py-48 px-6 bg-background border-t border-foreground/5 overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {stars.map((star, i) => (
          <div 
            key={i} 
            className="absolute w-px h-px bg-foreground rounded-full animate-pulse"
            style={{ 
              top: star.top, 
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-24 reveal-on-scroll">
          <div className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Global Infrastructure</div>
          <h2 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-none mb-10">
            STRATEGIC<br />
            <span className="text-foreground/40">GALAXY.</span>
          </h2>
        </div>

        {/* Single Galaxy System */}
        <div className="relative w-full aspect-square max-w-3xl mx-auto flex items-center justify-center reveal-on-scroll">
          
          {/* World Map Backdrop */}
          <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
             <svg viewBox="0 0 1000 500" className="w-[120%] h-auto text-foreground fill-current">
                <path d="M150,150 L160,140 L180,145 L200,130 L220,135 L240,120 L260,130 L280,125 L300,140 L320,150 L310,170 L290,180 L270,190 L250,200 L230,190 L210,185 L190,170 Z" />
                <path d="M450,120 L470,110 L500,105 L530,115 L550,130 L540,160 L520,180 L490,190 L460,180 L440,150 Z" />
                <path d="M500,80 L530,70 L570,75 L600,60 L640,65 L680,80 L700,100 L720,130 L700,160 L670,180 L630,190 L600,170 L570,160 L540,140 L520,120 Z" />
                <path d="M750,250 L780,240 L810,245 L830,260 L820,280 L800,295 L770,290 L740,270 Z" />
                <circle cx="650" cy="150" r="50" className="opacity-20" />
             </svg>
          </div>

          {/* Central Hub Text */}
          <div className="relative z-30 flex flex-col items-center justify-center text-center">
             <span className="text-2xl md:text-4xl font-black tracking-tighter text-foreground uppercase">
              ZN <span className="text-foreground/40">SYNERGIES</span>
            </span>
            <div className="w-12 h-px bg-foreground/20 mt-4" />
          </div>

          {/* Concentric Orbits */}
          {[0.4, 0.6, 0.8, 1.0].map((scale, i) => (
            <div 
              key={i}
              className="absolute inset-0 border border-foreground/5 rounded-full pointer-events-none"
              style={{ transform: `scale(${scale})` }}
            />
          ))}

          {/* Location Nodes */}
          {offices.map((office, idx) => {
            const orbitRadius = 50 * office.radius;
            const x = Math.cos((office.angle * Math.PI) / 180) * orbitRadius;
            const y = Math.sin((office.angle * Math.PI) / 180) * orbitRadius;

            return (
              <div 
                key={idx}
                className="absolute z-40 group cursor-pointer"
                style={{ 
                  left: `calc(50% + ${x}%)`, 
                  top: `calc(50% + ${y}%)`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => openMap(office.fullAddress)}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-foreground rounded-full transition-transform duration-500 group-hover:scale-150" />
                  
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-500 whitespace-nowrap opacity-100">
                    <div className="bg-foreground text-background px-4 py-2 flex flex-col items-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{office.city}</span>
                      <span className="text-[8px] font-bold opacity-50 uppercase tracking-[0.1em]">{office.type}</span>
                    </div>
                    <div className="w-px h-4 bg-foreground mx-auto -mt-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
