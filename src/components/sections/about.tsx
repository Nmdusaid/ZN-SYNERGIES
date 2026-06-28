
"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { PackageCheck, Users2, MapPin, Star, Clock, FileText, Calendar, Building2 } from 'lucide-react';

export function AboutUs() {
  const stats = [
    { label: "Deliveries", value: 12000, suffix: "+", icon: <PackageCheck size={18} /> },
    { label: "Support", value: 24, suffix: "/7", icon: <Clock size={18} /> },
    { label: "Locations", value: 120, suffix: "+", icon: <MapPin size={18} /> },
    { label: "Clients", value: 50, suffix: "+", icon: <Users2 size={18} /> },
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
      name: "Siddique Hussain Hashimi", 
      role: "Managing Director & Founder", 
      id: "founder-2",
      imageUrl: "/images/siddique sir.jpeg",
      bio: "As the Managing Director and Founder, Siddique Hussain Hashimi orchestrates the global logistics architecture of ZN Synergies, driving technological synergy and strategic movement across international nodes."
    },
  ];

  return (
    <section id="about" className="py-20 md:py-48 px-6 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-32 items-center mb-32">
          <div className="reveal-on-scroll">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-foreground mb-6 md:mb-12 tracking-tighter leading-[0.95] md:leading-none uppercase">
              ESTABLISHED<br />
              <span className="text-foreground/40">EXCELLENCE.</span>
            </h2>
            
            <div className="space-y-4 md:space-y-8 text-foreground/50 text-base md:text-xl font-light leading-relaxed max-w-lg mb-8 md:mb-12">
              <p>
                Established on <span className="text-foreground font-bold">17 October 2011</span> in Chennai, Tamil Nadu, ZN Synergies Private Limited has evolved into a cornerstone of the global transportation sector.
              </p>
              <p>
                Under the strategic direction of <span className="text-foreground font-bold">Siddique Hussain Hashimi</span>, we orchestrate freight solutions with cinematic precision and absolute discipline.
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
            <div className="absolute inset-0 -translate-x-4 translate-y-4 md:-translate-x-10 md:translate-y-10" />
            <div className="relative h-full w-full flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden  animate-slow-rotate transition-all duration-700 group hover:grayscale-0">
                <Image 
                  src="/images/ZN-image.png" 
                  alt="ZN Synergies Headquarters" 
                  fill 
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  priority
                  className="object-cover transition-transform duration-700 transform-gpu group-hover:scale-105 will-change-transform"
                  data-ai-hint="modern architecture"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Founders Showcase */}
        <div className="mb-32 reveal-on-scroll">
          <div className="text-center mb-16 md:mb-24">
            <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase mb-4">Leadership</h3>
            <div className="w-12 h-1 bg-foreground/10 mx-auto" />
          </div>
          <div className="grid gap-8 md:grid-cols-1">
            {founders.map((founder, i) => {
              return (
                <div key={i} className="mx-auto flex max-w-3xl flex-col items-center gap-10 rounded-[1.5rem] p-8 md:p-12">
                  <div className="relative w-full max-w-[340px] aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={founder.imageUrl}
                      alt={founder.name}
                      fill
                      quality={100}
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      priority
                      className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                      data-ai-hint="professional man"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-black mb-4 block">{founder.role}</span>
                    <h4 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tighter mb-6">{founder.name}</h4>
                    <p className="text-foreground/70 text-base md:text-lg font-light leading-relaxed">
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
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-24 w-full">
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
