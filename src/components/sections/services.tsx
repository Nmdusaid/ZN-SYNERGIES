
"use client";

import React from 'react';
import { Plane, Ship, Truck, Box, FileText, Warehouse, ArrowRight, Anchor, Globe } from 'lucide-react';
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Air Freight",
    description: "High-velocity aviation solutions connecting global hubs with next-gen cargo bays for sensitive enterprise assets.",
    icon: <Plane className="text-foreground" size={24} />,
    tag: "AERIAL"
  },
  {
    title: "Sea Freight",
    description: "Deep-water maritime strategy with high-capacity vessels ensuring stable and efficient high-volume global transit.",
    icon: <Anchor className="text-foreground" size={24} />,
    tag: "OCEANIC"
  },
  {
    title: "Road Transport",
    description: "Precision last-mile and long-haul solutions utilizing our modern transport fleet for reliable terrestrial delivery.",
    icon: <Truck className="text-foreground" size={24} />,
    tag: "TERRESTRIAL"
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
  return (
    <section id="services" className="py-48 px-6 bg-background border-y border-foreground/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 reveal-on-scroll">
          <div className="flex items-center gap-4 text-foreground/40 text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">
            <Globe size={14} /> Global Logistics Support
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
            INTEGRATED<br />
            <span className="text-foreground/30">OPERATIONS.</span>
          </h2>
          <p className="text-foreground/50 text-xl font-light leading-relaxed max-w-2xl">
            We help businesses move cargo safely and efficiently with professional logistics support and on-time delivery services across domestic and international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/5 border border-foreground/5">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group bg-background p-16 hover:bg-foreground/[0.02] transition-all duration-700 reveal-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-12 w-16 h-16 flex items-center justify-center border border-foreground/10 group-hover:border-foreground transition-all">
                {service.icon}
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
      </div>
    </section>
  );
}
