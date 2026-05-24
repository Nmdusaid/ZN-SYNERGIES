
"use client";

import React from 'react';
import { Plane, Ship, Truck, Box, FileText, Globe, Warehouse, ArrowRight, Navigation } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Aviation Express (Air Cargo)",
    description: "High-velocity air freight connecting 180+ global hubs. Utilizing next-gen cargo bays for sensitive enterprise assets.",
    icon: <Plane className="text-foreground" size={24} />,
    tag: "AERIAL",
    id: "fleet-plane"
  },
  {
    title: "Maritime Strategy (Sea Cargo)",
    description: "Deep-water logistics with 24k TEU capacity. Hydrogen-powered vessels ensuring stable, high-volume global transit.",
    icon: <Ship className="text-foreground" size={24} />,
    tag: "OCEANIC",
    id: "fleet-ship"
  },
  {
    title: "Overland Logistics (Roadways)",
    description: "Precision last-mile solutions utilizing our autonomous electric fleet. Optimized for urban and long-haul delivery.",
    icon: <Truck className="text-foreground" size={24} />,
    tag: "TERRESTRIAL",
    id: "fleet-truck"
  },
  {
    title: "Global Export Solutions",
    description: "Strategic export protocols for complex international markets, ensuring seamless cross-border asset movement.",
    icon: <Globe className="text-foreground" size={24} />,
    tag: "OUTBOUND"
  },
  {
    title: "Global Import Protocol",
    description: "End-to-end import management with real-time clearance and local integration for global enterprises.",
    icon: <Navigation className="text-foreground" size={24} />,
    tag: "INBOUND"
  },
  {
    title: "Vault Warehousing",
    description: "High-security, climate-controlled storage architectures designed for high-value inventory and asset preservation.",
    icon: <Warehouse className="text-foreground" size={24} />,
    tag: "SECURED"
  },
  {
    title: "Customs & Compliance",
    description: "Expert navigation of global regulatory frameworks, trade laws, and international compliance standards.",
    icon: <FileText className="text-foreground" size={24} />,
    tag: "REGULATORY"
  },
  {
    title: "Supply Architecture",
    description: "AI-optimized supply chain design, reducing latency and maximizing operational throughput globally.",
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
      {/* Background Universe/Planet Object */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
        <div className="absolute inset-0 border border-foreground/10 rounded-full" />
        <div className="absolute inset-20 border border-foreground/5 rounded-full animate-spin [animation-duration:60s]" />
        <div className="absolute inset-40 border border-foreground/10 rounded-full" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/5" />
        <div className="absolute top-0 left-1/2 h-full w-px bg-foreground/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-foreground rounded-full blur-sm animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 reveal-on-scroll">
          <div className="text-foreground/40 text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">Logistics Capabilities</div>
          <h2 className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
            INTEGRATED<br />
            <span className="text-foreground/30">OPERATIONS.</span>
          </h2>
          <p className="text-foreground/50 text-xl font-light max-w-2xl leading-relaxed">
            From deep-water strategy to autonomous roadways, ZN Synergies provides an exhaustive framework for global enterprise movement.
          </p>
        </div>

        {/* Fleet Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 reveal-on-scroll">
          {[
            { img: planeImg, title: "Air Cargo Hub", desc: "Aviation Infrastructure", icon: <Plane size={16} />, anim: "animate-plane" },
            { img: shipImg, title: "Oceanic Strategy", desc: "Maritime Grid", icon: <Ship size={16} />, anim: "animate-float" },
            { img: truckImg, title: "Terrestrial Roadways", desc: "Autonomous Fleet", icon: <Truck size={16} />, anim: "animate-drift" }
          ].map((item, idx) => (
            <div key={idx} className="group relative aspect-[4/5] bg-foreground/5 border border-foreground/10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <div className={cn("absolute inset-0 transition-transform duration-1000 group-hover:scale-110", item.anim)}>
                <Image 
                  src={item.img?.imageUrl || "https://picsum.photos/seed/zn-service/800/1000"} 
                  alt={item.title} 
                  fill 
                  className="object-cover opacity-60"
                  data-ai-hint="logistics infrastructure"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <div className="flex items-center gap-3 text-foreground/40">
                  {item.icon}
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{item.desc}</span>
                </div>
                <h4 className="text-3xl font-black text-foreground uppercase tracking-tighter">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/5 border border-foreground/5">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group bg-background p-12 hover:bg-foreground/[0.02] transition-all duration-700 reveal-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-10 w-12 h-12 flex items-center justify-center border border-foreground/20 group-hover:border-foreground transition-colors">
                {service.icon}
              </div>
              
              <div className="text-[9px] text-foreground/40 uppercase tracking-[0.3em] font-bold mb-4">
                {service.tag}
              </div>
              
              <h4 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter leading-tight">
                {service.title}
              </h4>
              
              <p className="text-foreground/40 text-sm font-light leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex items-center text-[10px] uppercase tracking-widest font-black text-foreground/20 group-hover:text-foreground transition-all group-hover:translate-x-2 cursor-pointer">
                Protocol Details <ArrowRight className="ml-3" size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
