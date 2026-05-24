"use client";

import React from 'react';
import { Plane, Ship, Truck, Box, ShieldCheck, FileText, Globe, Warehouse } from 'lucide-react';
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Aviation Express",
    description: "Elite air freight network connecting global capitals within 24 hours.",
    icon: <Plane className="text-white" size={24} />,
    tag: "Priority"
  },
  {
    title: "Maritime Strategy",
    description: "High-capacity ocean transport for global enterprise scale and stability.",
    icon: <Ship className="text-white" size={24} />,
    tag: "Global"
  },
  {
    title: "Overland Logistics",
    description: "Precision last-mile solutions utilizing our autonomous electric fleet.",
    icon: <Truck className="text-white" size={24} />,
    tag: "Precision"
  },
  {
    title: "Vault Storage",
    description: "Climate-controlled, secure warehousing for high-value enterprise assets.",
    icon: <Warehouse className="text-white" size={24} />,
    tag: "Secured"
  },
  {
    title: "Supply Architecture",
    description: "End-to-end logistics design optimized by our proprietary GenAI.",
    icon: <Box className="text-white" size={24} />,
    tag: "Intelligent"
  },
  {
    title: "Regulatory Counsel",
    description: "Expert navigation of global customs and trade compliance frameworks.",
    icon: <FileText className="text-white" size={24} />,
    tag: "Compliant"
  },
  {
    title: "Asset Shield",
    description: "Premium cargo insurance and bespoke risk mitigation strategies.",
    icon: <ShieldCheck className="text-white" size={24} />,
    tag: "Protected"
  },
  {
    title: "Global Export",
    description: "Strategic export solutions for the most complex international markets.",
    icon: <Globe className="text-white" size={24} />,
    tag: "Limitless"
  }
];

export function Services() {
  return (
    <section id="services" className="py-48 px-6 bg-[#08090A] border-y border-white/5 relative overflow-hidden">
      {/* Universe/Planet Object Background */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
        <div className="absolute inset-0 border border-white/10 rounded-full" />
        <div className="absolute inset-20 border border-white/5 rounded-full animate-spin [animation-duration:60s]" />
        <div className="absolute inset-40 border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
        <div className="absolute top-0 left-1/2 h-full w-px bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-sm animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 reveal-on-scroll">
          <div className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">Our Capabilities</div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            WORLD-CLASS<br />
            <span className="text-white/30">EXCELLENCE.</span>
          </h2>
          <p className="text-white/50 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Meticulously engineered solutions designed to navigate the intricate complexities of modern global trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group bg-black p-12 hover:bg-white/[0.02] transition-all duration-700 reveal-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-10 w-12 h-12 flex items-center justify-center border border-white/20 group-hover:border-white transition-colors">
                {service.icon}
              </div>
              
              <div className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-bold mb-4">
                {service.tag}
              </div>
              
              <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
                {service.title}
              </h4>
              
              <p className="text-white/40 text-sm font-light leading-relaxed mb-8 h-12 overflow-hidden">
                {service.description}
              </p>

              <div className="flex items-center text-[10px] uppercase tracking-widest font-black text-white/20 group-hover:text-white transition-all group-hover:translate-x-2 cursor-pointer">
                Learn More <div className="ml-3 w-8 h-px bg-current" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
