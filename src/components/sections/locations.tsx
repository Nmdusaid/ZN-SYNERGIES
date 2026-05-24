"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, ArrowUpRight, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const offices = [
  {
    city: "Delhi",
    address: "Aerocity Corporate Hub, Level 12",
    fullAddress: "Aerocity, Indira Gandhi International Airport, New Delhi, Delhi 110037",
    phone: "+91 11 4000 0000",
    type: "National Capital Hub",
    angle: "45deg",
  },
  {
    city: "Mumbai",
    address: "BKC Financial Centre, Tower A",
    fullAddress: "Bandra Kurla Complex, Mumbai, Maharashtra 400051",
    phone: "+91 22 6000 0000",
    type: "Financial Terminal",
    angle: "135deg",
  },
  {
    city: "Bangalore",
    address: "Tech Corridor, Outer Ring Road",
    fullAddress: "Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103",
    phone: "+91 80 2000 0000",
    type: "Technology Hub",
    angle: "225deg",
  },
  {
    city: "Chennai",
    address: "Maritime Plaza, Old Mahabalipuram Rd",
    fullAddress: "OMR, Karapakkam, Chennai, Tamil Nadu 600097",
    phone: "+91 44 3000 0000",
    type: "Maritime Strategy Hub",
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
    const generatedStars = [...Array(40)].map(() => ({
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
      <div className="absolute inset-0 pointer-events-none opacity-20">
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
            <div className="text-white/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Strategic Network</div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              INDIAN<br />
              <span className="text-white/40">CITADELS.</span>
            </h2>
          </div>
          <p className="text-white/40 text-xl font-light max-w-sm reveal-on-scroll">
            A specialized logistics universe connecting the core economic hubs of the subcontinent through separate, high-velocity orbital paths.
          </p>
        </div>

        {/* Separate Galaxy Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {offices.map((office, idx) => (
            <div key={idx} className="flex flex-col items-center reveal-on-scroll" style={{ transitionDelay: `${idx * 100}ms` }}>
              {/* Individual Galaxy Circle */}
              <div 
                className="relative w-full aspect-square flex items-center justify-center mb-12 group cursor-pointer"
                onClick={() => openMap(office.fullAddress)}
              >
                {/* Central Core */}
                <div className="relative z-20 w-3 h-3 bg-white rounded-full shadow-[0_0_25px_white]">
                  <div className="absolute inset-0 w-full h-full bg-white rounded-full animate-ping opacity-20" />
                </div>

                {/* Single Orbit Line */}
                <div className="absolute inset-8 border border-white/10 rounded-full group-hover:border-white/30 transition-colors duration-700">
                  {/* Rotating Hub Node */}
                  <div 
                    className="absolute w-full h-full animate-[spin_10s_linear_infinite]"
                    style={{ animationDuration: `${12 + idx * 2}s` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_white] scale-75 group-hover:scale-100 transition-transform duration-500" />
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap bg-white text-black text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 flex items-center gap-1">
                        {office.city}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity" 
                     style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              </div>

              {/* Office Metadata */}
              <div className="w-full p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group cursor-pointer" onClick={() => openMap(office.fullAddress)}>
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">{office.type}</div>
                  <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" size={18} />
                </div>
                
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">{office.city}</h3>
                
                <div className="space-y-4 text-xs font-light text-white/30 group-hover:text-white/50 transition-colors">
                  <div className="flex gap-4">
                    <MapPin size={14} className="text-white shrink-0" />
                    <span className="line-clamp-1">{office.address}</span>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={14} className="text-white shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
