
"use client";

import React from 'react';
import { Plane, Ship, Truck, Box, ShieldCheck, FileText, Globe, Warehouse } from 'lucide-react';
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Aviation Express",
    description: "Elite air freight network connecting global capitals within 24 hours.",
    icon: <Plane className="text-primary" size={24} />,
    tag: "Priority"
  },
  {
    title: "Maritime Strategy",
    description: "High-capacity ocean transport for global enterprise scale and stability.",
    icon: <Ship className="text-primary" size={24} />,
    tag: "Global"
  },
  {
    title: "Overland Logistics",
    description: "Precision last-mile solutions utilizing our autonomous electric fleet.",
    icon: <Truck className="text-primary" size={24} />,
    tag: "Precision"
  },
  {
    title: "Vault Storage",
    description: "Climate-controlled, secure warehousing for high-value enterprise assets.",
    icon: <Warehouse className="text-primary" size={24} />,
    tag: "Secured"
  },
  {
    title: "Supply Architecture",
    description: "End-to-end logistics design optimized by our proprietary GenAI.",
    icon: <Box className="text-primary" size={24} />,
    tag: "Intelligent"
  },
  {
    title: "Regulatory Counsel",
    description: "Expert navigation of global customs and trade compliance frameworks.",
    icon: <FileText className="text-primary" size={24} />,
    tag: "Compliant"
  },
  {
    title: "Asset Shield",
    description: "Premium cargo insurance and bespoke risk mitigation strategies.",
    icon: <ShieldCheck className="text-primary" size={24} />,
    tag: "Protected"
  },
  {
    title: "Global Export",
    description: "Strategic export solutions for the most complex international markets.",
    icon: <Globe className="text-primary" size={24} />,
    tag: "Limitless"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#08090A] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal-on-scroll">
          <div className="text-primary text-[10px] uppercase tracking-[0.4em] mb-6">Our Capabilities</div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            World-class <span className="text-primary italic">Excellence.</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Meticulously engineered solutions designed to navigate the intricate complexities of modern global trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group bg-background p-12 hover:bg-primary/[0.01] transition-all duration-700 reveal-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-10 w-12 h-12 flex items-center justify-center border border-primary/20 group-hover:border-primary/60 transition-colors">
                {service.icon}
              </div>
              
              <div className="text-[9px] text-primary uppercase tracking-[0.3em] font-bold mb-4">
                {service.tag}
              </div>
              
              <h4 className="text-2xl font-serif text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 h-12 overflow-hidden">
                {service.description}
              </p>

              <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-white/40 group-hover:text-primary transition-all group-hover:translate-x-2">
                Learn More <div className="ml-3 w-8 h-px bg-current" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
