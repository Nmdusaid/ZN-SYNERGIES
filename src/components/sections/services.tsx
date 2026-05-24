"use client";

import React from 'react';
import { Plane, Ship, Truck, Box, ShieldCheck, FileText, Globe, Warehouse } from 'lucide-react';
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Air Freight",
    description: "Premium express global delivery via our elite aviation network.",
    icon: <Plane className="text-accent" size={32} />,
    tag: "High Velocity"
  },
  {
    title: "Sea Freight",
    description: "High-capacity ocean transport for global enterprise scale.",
    icon: <Ship className="text-accent" size={32} />,
    tag: "Global Range"
  },
  {
    title: "Road Transport",
    description: "Precision last-mile and long-haul trucking solutions.",
    icon: <Truck className="text-accent" size={32} />,
    tag: "Dynamic Routing"
  },
  {
    title: "Warehousing",
    description: "Smart storage and automated inventory management hubs.",
    icon: <Warehouse className="text-accent" size={32} />,
    tag: "Secured Nodes"
  },
  {
    title: "Supply Chain",
    description: "AI-optimized end-to-end logistics architecture.",
    icon: <Box className="text-accent" size={32} />,
    tag: "Optimized"
  },
  {
    title: "Customs Clearance",
    description: "Expert navigation of international regulatory frameworks.",
    icon: <FileText className="text-accent" size={32} />,
    tag: "Compliant"
  },
  {
    title: "Cargo Shield",
    description: "Premium insurance and risk mitigation for valuable assets.",
    icon: <ShieldCheck className="text-accent" size={32} />,
    tag: "Insured"
  },
  {
    title: "Global Export",
    description: "Strategic export solutions for complex global markets.",
    icon: <Globe className="text-accent" size={32} />,
    tag: "Omni-Channel"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0B0C0E]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Precision Services</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
              WORLD-CLASS <span className="text-gradient">LOGISTICS</span><br />
              ENGINEERED FOR EXCELLENCE.
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Custom-tailored logistics solutions designed to handle the most demanding global supply chain requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group relative glass-morphism p-8 rounded-2xl hover:border-accent/40 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 p-3 w-fit rounded-xl bg-accent/10 border border-accent/20 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest mb-2 block">
                  {service.tag}
                </span>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-xs font-bold text-accent group-hover:translate-x-2 transition-transform">
                  EXPLORE CAPABILITIES <div className="ml-2 w-4 h-px bg-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}