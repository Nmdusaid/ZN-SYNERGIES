
"use client";

import React from 'react';
import { Plane, Ship, Truck, Box, FileText, Globe, Warehouse, ArrowRight, Navigation, Anchor } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Air Freight",
    description: "High-velocity aviation solutions connecting global hubs with next-gen cargo bays for sensitive enterprise assets.",
    icon: <Plane className="text-foreground" size={24} />,
    tag: "AERIAL",
    id: "fleet-plane"
  },
  {
    title: "Sea Freight",
    description: "Deep-water maritime strategy with high-capacity vessels ensuring stable and efficient high-volume global transit.",
    icon: <Anchor className="text-foreground" size={24} />,
    tag: "OCEANIC",
    id: "fleet-ship"
  },
  {
    title: "Road Transport",
    description: "Precision last-mile and long-haul solutions utilizing our modern transport fleet for reliable terrestrial delivery.",
    icon: <Truck className="text-foreground" size={24} />,
    tag: "TERRESTRIAL",
    id: "fleet-truck"
  },
  {
    title: "Warehousing",
    description: "High-security, climate-controlled storage architectures designed for high-value inventory and asset preservation.",
    icon: <Warehouse className="text-foreground" size={24} />,
    tag: "SECURED"
  },
  {
    title: "Customs Clearance",
    description: "Expert navigation of global regulatory frameworks, trade laws, and international compliance standards.",
    icon: <FileText className="text-foreground" size={24} />,
    tag: "REGULATORY"
  },
  {
    title: "Express Cargo",
    description: "AI-optimized priority supply chain design, reducing latency and maximizing operational throughput globally.",
    icon: <Box className="text-foreground" size={24} />,
    tag: "INTELLIGENT"
  }
];

export function Services() {
  const truckImg = PlaceHolderImages.find(img => img.id === 'fleet-truck');
  const shipImg = PlaceHolderImages.find(img => img.id === 'fleet-ship');
  const planeImg = PlaceHolderImages.find(img => img.id === 'fleet-plane');

  return (
    <section id="services" className="py-48 px-6 bg-background border-y border-foreground/5 relative overflow-hidden">
      {/* Background Strategic Elements */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
        <div className="absolute inset-0 border border-foreground/10 rounded-full" />
        <div className="absolute inset-20 border border-foreground/5 rounded-full animate-spin [animation-duration:60s]" />
        <div className="absolute inset-40 border border-foreground/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 reveal-on-scroll">
          <div className="flex items-center gap-4 text-foreground/40 text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">
            <Globe size={14} className="animate-pulse-slow" /> Global Logistics Support
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
            INTEGRATED<br />
            <span className="text-foreground/30">OPERATIONS.</span>
          </h2>
          <div className="max-w-2xl space-y-6">
            <p className="text-foreground/80 text-2xl font-black uppercase tracking-tight">
              Looking for trusted logistics support?
            </p>
            <p className="text-foreground/50 text-xl font-light leading-relaxed">
              We help businesses move cargo safely and efficiently with professional logistics support and on-time delivery services across domestic and international markets.
            </p>
          </div>
        </div>

        {/* Cinematic Fleet Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 reveal-on-scroll">
          {[
            { img: planeImg, title: "Air Freight Hub", desc: "Aviation Express", icon: <Plane size={16} />, anim: "animate-plane" },
            { img: shipImg, title: "Maritime Strategy", desc: "Sea Cargo Grid", icon: <Ship size={16} />, anim: "animate-float" },
            { img: truckImg, title: "Terrestrial Fleet", desc: "Road Transport", icon: <Truck size={16} />, anim: "animate-drift" }
          ].map((item, idx) => (
            <div key={idx} className="group relative aspect-[4/5] bg-foreground/5 border border-foreground/10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <div className={cn("absolute inset-0 transition-transform duration-1000 group-hover:scale-110", item.anim)}>
                <Image 
                  src={item.img?.imageUrl || "https://picsum.photos/seed/zn-service/800/1000"} 
                  alt={item.title} 
                  fill 
                  className="object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                  data-ai-hint="modern logistics infrastructure"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Branded Global Logo Identity Watermark */}
              <div className="absolute top-8 right-8 w-12 h-12 border border-foreground/20 flex items-center justify-center bg-background/20 backdrop-blur-xl group-hover:border-foreground transition-all duration-500">
                <Globe size={20} className="text-foreground animate-pulse-slow" />
              </div>

              <div className="absolute bottom-0 left-0 p-10 space-y-4">
                <div className="flex items-center gap-3 text-foreground/40">
                  <span className={cn(item.anim, "flex items-center justify-center")}>
                    {item.icon}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{item.desc}</span>
                </div>
                <h4 className="text-4xl font-black text-foreground uppercase tracking-tighter">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/5 border border-foreground/5">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group bg-background p-16 hover:bg-foreground/[0.02] transition-all duration-700 reveal-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-12 w-16 h-16 flex items-center justify-center border border-foreground/10 group-hover:border-foreground transition-all">
                <div className="transition-transform duration-700 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              
              <div className="text-[10px] text-foreground/30 uppercase tracking-[0.4em] font-bold mb-6 flex items-center gap-3">
                <div className="w-4 h-px bg-foreground/20" /> {service.tag}
              </div>
              
              <h4 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tighter leading-tight">
                {service.title}
              </h4>
              
              <p className="text-foreground/40 text-sm font-light leading-relaxed mb-10">
                {service.description}
              </p>

              <div className="flex items-center text-[10px] uppercase tracking-[0.3em] font-black text-foreground/20 group-hover:text-foreground transition-all group-hover:translate-x-2 cursor-pointer">
                Protocol Details <ArrowRight className="ml-4" size={14} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 border border-foreground/10 bg-foreground/[0.02] reveal-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <p className="text-2xl font-black uppercase tracking-tighter mb-2">Let’s simplify your shipping operations.</p>
              <p className="text-[11px] uppercase tracking-[0.5em] font-bold text-foreground/40">Reliable Logistics. Smarter Deliveries.</p>
            </div>
            <button className="h-16 px-12 bg-foreground text-background text-[11px] font-black uppercase tracking-[0.4em] hover:bg-foreground/90 transition-colors">
              Request Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
