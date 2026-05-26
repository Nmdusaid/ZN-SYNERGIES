
"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { PackageCheck, Users2, MapPin, Star, Clock, FileText, Calendar, Building2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutUs() {
  const stats = [
    { label: "Deliveries", value: 12000, suffix: "+", icon: <PackageCheck size={18} /> },
    { label: "Support", value: 24, suffix: "/7", icon: <Clock size={18} /> },
    { label: "Locations", value: 120, suffix: "+", icon: <MapPin size={18} /> },
    { label: "Partners", value: 50, suffix: "+", icon: <Users2 size={18} /> },
    { label: "Satisfaction", value: 98, suffix: "%", icon: <Star size={18} /> },
  ];

  const corporateProfile = [
    { label: "Founded", value: "17 Oct 2011", icon: <Calendar size={14} /> },
    { label: "HQ", value: "Chennai, TN", icon: <MapPin size={14} /> },
    { label: "Type", value: "Private Ltd", icon: <Building2 size={14} /> },
    { label: "CIN", value: "U74900TN2011PTC082769", icon: <FileText size={14} /> },
  ];

  const founders = [
    { 
      name: "Sajjad Hussain Hashmi", 
      role: "Founder", 
      id: "founder-1",
      bio: "Founding visionary who established ZN Synergies with a mission for reliable logistics."
    },
    { 
      name: "Siddique Hussain Hashmi", 
      role: "Strategic Leadership", 
      id: "founder-2",
      bio: "Driving the global strategy and technological innovation across international hubs."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-48 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-32 items-center mb-32">
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
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {corporateProfile.map((item, i) => (
                <div key={i} className="p-4 md:p-6 border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors">
                  <div className="flex items-center gap-2 md:gap-3 text-foreground/20 mb-2 md:mb-3">
                    {item.icon}
                    <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">{item.label}</span>
                  </div>
                  <div className="text-[11px] md:text-sm font-bold text-foreground uppercase tracking-tight truncate">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square w-full reveal-on-scroll delay-300">
            <div className="absolute inset-0 border border-foreground/10 -translate-x-4 translate-y-4 md:-translate-x-10 md:translate-y-10" />
            <div className="relative h-full w-full overflow-hidden grayscale contrast-150 border border-foreground/5">
              <Image 
                src="https://picsum.photos/seed/zn-about-hq/1200/1200" 
                alt="ZN Synergies Headquarters" 
                fill 
                className="object-cover transition-all duration-1000 scale-110 hover:scale-100"
                data-ai-hint="modern architecture"
              />
            </div>
          </div>
        </div>

        {/* Founders Showcase */}
        <div className="mb-32 reveal-on-scroll">
          <div className="text-center mb-16 md:mb-24">
            <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase mb-4">Leadership</h3>
            <div className="w-12 h-1 bg-foreground/10 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {founders.map((founder, i) => {
              const imageData = PlaceHolderImages.find(img => img.id === founder.id);
              return (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-center md:items-start group">
                  <div className="relative w-full max-w-[300px] aspect-[3/4] overflow-hidden border border-foreground/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src={imageData?.imageUrl || `https://picsum.photos/seed/${founder.id}/600/800`}
                      alt={founder.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      data-ai-hint={imageData?.imageHint || "professional man"}
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-black mb-2 block">{founder.role}</span>
                    <h4 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tighter mb-4">{founder.name}</h4>
                    <p className="text-foreground/50 text-sm md:text-base font-light leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="reveal-on-scroll border-t border-foreground/5 pt-20">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-16 lg:gap-24 w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-4 md:space-y-6 group">
                <div className="w-8 h-8 md:w-10 md:h-10 border border-foreground/10 flex items-center justify-center text-foreground/40 group-hover:border-foreground group-hover:text-foreground transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="text-3xl md:text-6xl font-black text-foreground leading-none tracking-tighter">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[8px] md:text-[11px] uppercase tracking-[0.4em] text-foreground/30 font-black leading-tight">
                    {stat.label}
                  </div>
                  <div className="w-6 md:w-8 h-px bg-foreground/10 group-hover:w-full transition-all duration-700 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
