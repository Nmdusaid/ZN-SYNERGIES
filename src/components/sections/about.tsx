
"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { PackageCheck, Users2, MapPin, Star, Clock, FileText, Calendar, Building2 } from 'lucide-react';

export function AboutUs() {
  const stats = [
    { label: "Deliveries", value: 12000, suffix: "+", icon: <PackageCheck size={18} /> },
    { label: "Partners", value: 50, suffix: "+", icon: <Users2 size={18} /> },
    { label: "Locations", value: 120, suffix: "+", icon: <MapPin size={18} /> },
    { label: "Satisfaction", value: 98, suffix: "%", icon: <Star size={18} /> },
    { label: "Support", value: 24, suffix: "/7", icon: <Clock size={18} /> },
  ];

  const corporateProfile = [
    { label: "Founded", value: "17 Oct 2011", icon: <Calendar size={14} /> },
    { label: "HQ", value: "Chennai, TN", icon: <MapPin size={14} /> },
    { label: "Type", value: "Private Ltd", icon: <Building2 size={14} /> },
    { label: "CIN", value: "U74900TN2011PTC082769", icon: <FileText size={14} /> },
  ];

  return (
    <section id="about" className="py-20 md:py-48 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-32 items-start">
          <div className="reveal-on-scroll">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-foreground mb-6 md:mb-12 tracking-tighter leading-[0.95] md:leading-none uppercase">
              ESTABLISHED<br />
              <span className="text-foreground/40">EXCELLENCE.</span>
            </h2>
            
            <div className="space-y-4 md:space-y-8 text-foreground/50 text-base md:text-xl font-light leading-relaxed max-w-lg mb-8 md:mb-12">
              <p>
                Established on <span className="text-foreground font-bold">17 October 2011</span> in Chennai, Tamil Nadu, ZN Synergies Private Limited has evolved into a cornerstone of the Indian transportation and logistics sector.
              </p>
              <p>
                Under the founding leadership of <span className="text-foreground font-bold">Sajjad Hussain Hashmi</span> and the strategic direction of <span className="text-foreground font-bold">Siddique Hussain Hashmi</span>, we orchestrate global freight solutions with absolute precision.
              </p>
            </div>

            {/* Corporate Profile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-12 md:mb-20">
              {corporateProfile.map((item, i) => (
                <div key={i} className="p-4 md:p-6 border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors">
                  <div className="flex items-center gap-2 md:gap-3 text-foreground/20 mb-1.5 md:mb-3">
                    {item.icon}
                    <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">{item.label}</span>
                  </div>
                  <div className="text-[11px] md:text-sm font-bold text-foreground uppercase tracking-tight truncate">{item.value}</div>
                </div>
              ))}
            </div>
            
            {/* Stats Grid - Enhanced Responsiveness */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 md:gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 border border-foreground/10 flex items-center justify-center text-foreground/40">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 16 })}
                  </div>
                  <div>
                    <div className="text-2xl md:text-4xl font-black text-foreground mb-1 md:mb-2 leading-none">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-foreground/30 font-black leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square w-full reveal-on-scroll delay-300 hidden lg:block">
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
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30">Status</span>
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
