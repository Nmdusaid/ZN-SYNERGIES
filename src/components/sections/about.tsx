
"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { PackageCheck, Users2, MapPin, Star, Clock, FileText, Calendar, Building2 } from 'lucide-react';

export function AboutUs() {
  const stats = [
    { label: "Deliveries Completed", value: 12000, suffix: "+", icon: <PackageCheck size={20} /> },
    { label: "Logistics Partners", value: 50, suffix: "+", icon: <Users2 size={20} /> },
    { label: "Service Locations", value: 120, suffix: "+", icon: <MapPin size={20} /> },
    { label: "Client Satisfaction", value: 98, suffix: "%", icon: <Star size={20} /> },
    { label: "Operational Support", value: 24, suffix: "/7", icon: <Clock size={20} /> },
  ];

  const corporateProfile = [
    { label: "Founded", value: "17 Oct 2011", icon: <Calendar size={14} /> },
    { label: "HQ", value: "Chennai, Tamil Nadu", icon: <MapPin size={14} /> },
    { label: "Type", value: "Private Limited", icon: <Building2 size={14} /> },
    { label: "CIN", value: "U74900TN2011PTC082769", icon: <FileText size={14} /> },
  ];

  return (
    <section id="about" className="py-48 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 border border-foreground/5 rounded-full animate-pulse-slow pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="reveal-on-scroll">
            <h2 className="text-6xl md:text-8xl font-black text-foreground mb-12 tracking-tighter leading-none">
              ESTABLISHED<br />
              <span className="text-foreground/40">EXCELLENCE.</span>
            </h2>
            
            <div className="space-y-8 text-foreground/50 text-xl font-light leading-relaxed max-w-lg mb-12">
              <p>
                Established on <span className="text-foreground font-bold">17 October 2011</span> in Chennai, Tamil Nadu, ZN Synergies Private Limited has evolved into a cornerstone of the Indian transportation and logistics sector.
              </p>
              <p>
                Under the founding leadership of <span className="text-foreground font-bold">Sajjad Hussain Hashmi</span> and the strategic direction of <span className="text-foreground font-bold">Siddique Hussain Hashmi</span>, we orchestrate global freight solutions with absolute precision.
              </p>
            </div>

            {/* Corporate Profile Grid */}
            <div className="grid grid-cols-2 gap-4 mb-20">
              {corporateProfile.map((item, i) => (
                <div key={i} className="p-6 border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors">
                  <div className="flex items-center gap-3 text-foreground/20 mb-3">
                    {item.icon}
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">{item.label}</span>
                  </div>
                  <div className="text-sm font-bold text-foreground uppercase tracking-tight">{item.value}</div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center text-foreground/40">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-4xl font-black text-foreground mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square w-full reveal-on-scroll delay-300">
            <div className="absolute inset-0 border border-foreground/10 -translate-x-10 translate-y-10" />
            <div className="relative h-full w-full overflow-hidden grayscale contrast-150">
              <Image 
                src="https://picsum.photos/seed/zn-about-hq/1200/1200" 
                alt="ZN Synergies Headquarters" 
                fill 
                className="object-cover transition-all duration-1000 scale-110 hover:scale-100"
                data-ai-hint="modern architecture"
              />
              <div className="absolute bottom-10 left-10 right-10 p-10 bg-background/90 backdrop-blur-xl border border-foreground/10">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30">Company Status</span>
                  <span className="text-2xl font-black text-foreground uppercase tracking-tighter flex items-center gap-4">
                    ACTIVE <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
