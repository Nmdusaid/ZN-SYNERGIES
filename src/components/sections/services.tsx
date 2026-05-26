
"use client";

import React, { useState } from 'react';
import { 
  Plane, Ship, Truck, Box, FileText, Warehouse, 
  ArrowRight, Anchor, Globe, FileCheck, Clock, 
  Lock, Zap
} from 'lucide-react';
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 'air',
    title: "Air Freight",
    description: "High-velocity aviation solutions connecting global hubs with next-gen cargo bays for sensitive enterprise assets.",
    icon: <Plane className="text-foreground" size={24} />,
    tag: "AERIAL",
    details: {
      compliance: 'IATA/ICAO Secure Supply Chain Standard',
      leadTime: '24-72 Hours Global Transit',
      security: 'Level 05 Alpha - Biometric/Armed Escort Available',
      cargoType: 'Semiconductors, High-Value Electronics, Pharmaceuticals',
      notes: 'Real-time satellite telemetry enabled. Direct access to major global hubs.'
    }
  },
  {
    id: 'sea',
    title: "Sea Freight",
    description: "Deep-water maritime strategy with high-capacity vessels ensuring stable and efficient high-volume global transit.",
    icon: <Anchor className="text-foreground" size={24} />,
    tag: "OCEANIC",
    details: {
      compliance: 'IMO 2024 / SOLAS Certified Operations',
      leadTime: '12-28 Days Global Transit',
      security: 'Hybrid Hydrogen-Propulsion / Anti-Piracy Shielding',
      cargoType: 'Heavy Machinery, Bulk Industrial Goods, Automotive',
      notes: 'Deep-water port integration with autonomous loading protocols.'
    }
  },
  {
    id: 'road',
    title: "Road Transport",
    description: "Precision last-mile and long-haul solutions utilizing our modern transport fleet for reliable terrestrial delivery.",
    icon: <Truck className="text-foreground" size={24} />,
    tag: "TERRESTRIAL",
    details: {
      compliance: 'ADR/DOT Hazardous Material Transport Standards',
      leadTime: 'Regional: 12-48h / International: 2-7 Days',
      security: 'GPS Geofencing & Remote Ignition Interlock',
      cargoType: 'Retail Inventory, Distribution Goods, Perishables',
      notes: 'Zero-emission electric fleet for urban last-mile operations.'
    }
  },
  {
    id: 'warehousing',
    title: "Warehousing",
    description: "High-security, climate-controlled storage architectures designed for high-value inventory and asset preservation.",
    icon: <Warehouse className="text-foreground" size={24} />,
    tag: "SECURED",
    details: {
      compliance: 'TAPA FSR Level A / GDP Pharma Certified',
      leadTime: 'Real-time Inventory Access',
      security: '24/7 AI-Surveillance & Vault Preservation',
      cargoType: 'Temperature Sensitive, High-Value Luxury, Bonded Goods',
      notes: 'Bonded warehouse status for duty-deferred storage solutions.'
    }
  },
  {
    id: 'customs',
    title: "Customs Clearance",
    description: "Expert navigation of global regulatory frameworks, trade laws, and international compliance standards.",
    icon: <FileText className="text-foreground" size={24} />,
    tag: "REGULATORY",
    details: {
      compliance: 'AEO / C-TPAT Trusted Trader Status',
      leadTime: 'Automated EDI Filing (Latency < 2h)',
      security: 'End-to-End Encrypted Data Interchange',
      cargoType: 'Regulatory Documentation, Tariffs, Trade Compliance',
      notes: 'Expert navigation of complex geopolitical trade barriers.'
    }
  },
  {
    id: 'express',
    title: "Express Cargo",
    description: "AI-optimized priority supply chain design, reducing latency and maximizing operational throughput globally.",
    icon: <Box className="text-foreground" size={24} />,
    tag: "INTELLIGENT",
    details: {
      compliance: 'Custom Fast-Track Protocols',
      leadTime: 'Priority Handling - Guaranteed Deadlines',
      security: 'Continuous Asset Monitoring',
      cargoType: 'Time-Critical Spare Parts, Samples, Urgent Docs',
      notes: 'AI-driven routing to bypass congestion nodes in real-time.'
    }
  }
];

export function Services() {
  const [selectedProtocol, setSelectedProtocol] = useState<typeof services[0] | null>(null);

  const quoteMailto = "mailto:usaid6765@gmail.com?subject=Strategic Booking Inquiry&body=I would like to initiate a booking for the following protocol:";

  return (
    <section id="services" className="py-24 md:py-48 px-6 bg-background border-y border-foreground/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-32 reveal-on-scroll">
          <div className="flex items-center gap-4 text-foreground/40 text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">
            <Globe size={14} /> Global Logistics Support
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
            INTEGRATED<br />
            <span className="text-foreground/30">OPERATIONS.</span>
          </h2>
          <p className="text-foreground/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            We help businesses move cargo safely and efficiently with professional logistics support and on-time delivery services across domestic and international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/5 border border-foreground/5">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group bg-background p-8 md:p-16 hover:bg-foreground/[0.02] transition-all duration-700 reveal-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-8 md:mb-12 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-foreground/10 group-hover:border-foreground transition-all">
                {service.icon}
              </div>
              
              <div className="text-[10px] text-foreground/30 uppercase tracking-[0.4em] font-bold mb-4 md:mb-6 flex items-center gap-3">
                <div className="w-4 h-px bg-foreground/20" /> {service.tag}
              </div>
              
              <h4 className="text-2xl md:text-3xl font-black text-foreground mb-4 md:mb-6 uppercase tracking-tighter leading-tight">
                {service.title}
              </h4>
              
              <p className="text-foreground/40 text-sm font-light leading-relaxed mb-8 md:mb-10">
                {service.description}
              </p>

              <div 
                onClick={() => setSelectedProtocol(service)}
                className="flex items-center text-[10px] uppercase tracking-[0.3em] font-black text-foreground/20 group-hover:text-foreground transition-all group-hover:translate-x-2 cursor-pointer"
              >
                Protocol Details <ArrowRight className="ml-4" size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol Intelligence Modal */}
      <Dialog open={!!selectedProtocol} onOpenChange={(open) => !open && setSelectedProtocol(null)}>
        <DialogContent className="max-w-3xl w-[95vw] md:w-full bg-background border border-foreground/10 rounded-none p-0 overflow-hidden shadow-2xl">
          {selectedProtocol && (
            <div className="flex flex-col">
              {/* Header */}
              <div className="p-6 md:p-10 border-b border-foreground/5 bg-foreground/[0.02] relative">
                <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8 pr-12">
                  <div className="w-12 h-12 md:w-16 md:h-16 border border-foreground/10 flex items-center justify-center text-foreground shrink-0">
                    {selectedProtocol.icon}
                  </div>
                  <div>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-foreground/30 font-bold">Strategic Protocol</span>
                    <DialogTitle className="text-2xl md:text-4xl font-black text-foreground uppercase tracking-tighter">
                      {selectedProtocol.title}
                    </DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-foreground/50 text-base md:text-lg font-light leading-relaxed">
                  Enterprise-grade {selectedProtocol.title.toLowerCase()} infrastructure protocols for mission-critical logistics operations.
                </DialogDescription>
              </div>

              {/* Data Grid */}
              <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12 overflow-y-auto max-h-[60vh]">
                <div className="space-y-8 md:space-y-10">
                  <div className="flex gap-4">
                    <FileCheck size={18} className="text-foreground/20 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-black block mb-2">Compliance standard</span>
                      <p className="text-sm font-bold text-foreground uppercase leading-tight">{selectedProtocol.details.compliance}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock size={18} className="text-foreground/20 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-black block mb-2">Global Lead Time</span>
                      <p className="text-sm font-bold text-foreground uppercase leading-tight">{selectedProtocol.details.leadTime}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Lock size={18} className="text-foreground/20 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-black block mb-2">Security protocol</span>
                      <p className="text-sm font-bold text-foreground uppercase leading-tight">{selectedProtocol.details.security}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 md:space-y-10">
                  <div className="flex gap-4">
                    <Box size={18} className="text-foreground/20 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-black block mb-2">Primary Cargo types</span>
                      <p className="text-sm font-bold text-foreground uppercase leading-tight">{selectedProtocol.details.cargoType}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Zap size={18} className="text-foreground/20 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-black block mb-2">Operational Node Notes</span>
                      <p className="text-xs font-light text-foreground/50 leading-relaxed italic">{selectedProtocol.details.notes}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Action - Cleaned up footer */}
              <div className="p-6 md:p-10 bg-foreground text-background flex justify-center">
                <Button 
                  onClick={() => window.open(quoteMailto + " " + selectedProtocol.title, '_blank')}
                  className="w-full md:w-auto bg-background text-foreground hover:bg-background/90 rounded-none h-14 px-12 text-[10px] font-black uppercase tracking-[0.2em]"
                >
                  Initiate Strategic Booking <ArrowRight className="ml-4" size={14} />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
