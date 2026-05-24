"use client";

import React, { useState, useEffect } from 'react';
import { Globe, MapPin, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const offices = [
  {
    city: "Delhi",
    fullAddress: "Aerocity, Indira Gandhi International Airport, New Delhi, Delhi 110037",
    type: "National Capital Hub",
    orbitScale: "scale-[0.4]",
    angle: 45,
    delay: "0s"
  },
  {
    city: "Mumbai",
    fullAddress: "Bandra Kurla Complex, Mumbai, Maharashtra 400051",
    type: "Financial Terminal",
    orbitScale: "scale-[0.6]",
    angle: 135,
    delay: "2s"
  },
  {
    city: "Bangalore",
    fullAddress: "Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103",
    type: "Technology Hub",
    orbitScale: "scale-[0.8]",
    angle: 225,
    delay: "4s"
  },
  {
    city: "Chennai",
    fullAddress: "OMR, Karapakkam, Chennai, Tamil Nadu 600097",
    type: "Maritime Strategy Hub",
    orbitScale: "scale-[1.0]",
    angle: 315,
    delay: "6s"
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
    <section id="contact" className="py-48 px-6 bg-black border-t border-white/5 overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
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

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-24 reveal-on-scroll">
          <div className="text-white/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Global Infrastructure</div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
            STRATEGIC<br />
            <span className="text-white/40">GALAXY.</span>
          </h2>
          <p className="text-white/30 text-sm font-light tracking-widest max-w-md mx-auto uppercase">
            Click any orbital node to establish direct geolocation coordinates.
          </p>
        </div>

        {/* Single Galaxy System */}
        <div className="relative w-full aspect-square max-w-3xl mx-auto flex items-center justify-center reveal-on-scroll">
          
          {/* Central Hub Text - No Effects */}
          <div className="relative z-30 flex flex-col items-center justify-center text-center">
             <span className="text-2xl md:text-4xl font-black tracking-tighter text-white uppercase">
              ZN <span className="text-white/40">SYNERGIES</span>
            </span>
            <div className="w-12 h-px bg-white/20 mt-4" />
          </div>

          {/* Concentric Orbits - Stationary */}
          {[0.4, 0.6, 0.8, 1.0].map((scale, i) => (
            <div 
              key={i}
              className="absolute inset-0 border border-white/5 rounded-full pointer-events-none"
              style={{ transform: `scale(${scale})` }}
            />
          ))}

          {/* Location Nodes */}
          {offices.map((office, idx) => {
            // Convert angle to X and Y coordinates on a circle
            const radius = 50 * (0.4 + idx * 0.2); // Percentage radius based on orbit index
            const x = Math.cos((office.angle * Math.PI) / 180) * radius;
            const y = Math.sin((office.angle * Math.PI) / 180) * radius;

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
                {/* Node visual */}
                <div className="relative">
                  <div className="w-3 h-3 bg-white rounded-full transition-transform duration-500 group-hover:scale-150" />
                  
                  {/* Label - Always Visible */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-500 whitespace-nowrap opacity-100">
                    <div className="bg-white text-black px-4 py-2 flex flex-col items-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{office.city}</span>
                      <span className="text-[8px] font-bold text-black/50 uppercase tracking-[0.1em]">{office.type}</span>
                    </div>
                    <div className="w-px h-4 bg-white mx-auto -mt-1" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Aesthetic Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
      </div>
    </section>
  );
}
