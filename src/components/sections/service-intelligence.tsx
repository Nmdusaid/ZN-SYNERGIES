"use client";

import React, { useState } from 'react';
import { 
  Search, Plane, Ship, Truck, Box, Shield, ArrowRight, Loader2, 
  ChevronRight, Globe, Lock, Clock, Zap, FileCheck 
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const serviceData = [
  { 
    id: 'air', 
    name: 'Air Freight', 
    icon: <Plane size={24} />, 
    desc: 'Next-gen aviation for high-value cargo.', 
    status: 'Priority',
    details: {
      compliance: 'IATA/ICAO Secure Supply Chain Standard',
      leadTime: '24-72 Hours Global Transit',
      security: 'Level 05 Alpha - Biometric/Armed Escort Available',
      cargoType: 'Semiconductors, High-Value Electronics, Pharmaceuticals',
      notes: 'Real-time satellite telemetry enabled. Direct ' + 'access to major global hubs (SIN, HKG, DXB, LHR).'
    }
  },
  { 
    id: 'sea', 
    name: 'Sea Freight', 
    icon: <Ship size={24} />, 
    desc: 'Global maritime strategy for heavy assets.', 
    status: 'Stable',
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
    name: 'Road Transport', 
    icon: <Truck size={24} />, 
    desc: 'Terrestrial precision for last-mile delivery.', 
    status: 'Active',
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
    name: 'Warehousing', 
    icon: <Box size={24} />, 
    desc: 'Climate-controlled high-security storage.', 
    status: 'Secured',
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
    name: 'Customs', 
    icon: <Shield size={24} />, 
    desc: 'Regulatory navigation & compliance.', 
    status: 'Verified',
    details: {
      compliance: 'AEO / C-TPAT Trusted Trader Status',
      leadTime: 'Automated EDI Filing (Latency < 2h)',
      security: 'End-to-End Encrypted Data Interchange',
      cargoType: 'Regulatory Documentation, Tariffs, Trade Compliance',
      notes: 'Expert navigation of complex geopolitical trade barriers.'
    }
  },
];

export function ServiceIntelligence() {
  const [query, setQuery] = useState('');
  const [isQuerying, setIsQuerying] = useState(false);
  const [activeResult, setActiveResult] = useState<typeof serviceData[0] | null>(null);
  const [selectedProtocol, setSelectedProtocol] = useState<typeof serviceData[0] | null>(null);

  const handleQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    
    setIsQuerying(true);
    setActiveResult(null);
    
    setTimeout(() => {
      const result = serviceData.find(s => s.name.toLowerCase().includes(query.toLowerCase()));
      setActiveResult(result || null);
      setIsQuerying(false);
    }, 800);
  };

  return (
    <section id="service-query" className="py-48 px-6 bg-background border-y border-foreground/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32 reveal-on-scroll">
          <div className="max-w-2xl">
            <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-black mb-8">Intelligence Terminal</h2>
            <h3 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter leading-none mb-10 uppercase">
              SERVICE<br />
              <span className="text-foreground/40 text-stroke">INQUIRY.</span>
            </h3>
            <p className="text-foreground/50 text-xl font-light">
              Search for logistics protocols and service intelligence across our global network.
            </p>
          </div>

          <form onSubmit={handleQuery} className="w-full lg:w-96 flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20" size={16} />
              <Input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Services (e.g. Air, Sea)..."
                className="h-16 pl-12 bg-foreground/5 border-foreground/10 text-foreground rounded-none text-xs uppercase font-bold tracking-widest focus:ring-0 focus:border-foreground transition-colors"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isQuerying}
              className="h-16 bg-foreground text-background hover:bg-foreground/90 rounded-none uppercase tracking-[0.3em] font-black text-[10px]"
            >
              {isQuerying ? <Loader2 className="animate-spin" /> : "Initiate Search"}
            </Button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {activeResult ? (
            <div className="lg:col-span-3 bg-foreground/5 p-16 flex flex-col md:flex-row items-center justify-between gap-12 animate-in fade-in zoom-in-95 duration-500">
              <div className="flex items-center gap-10">
                <div className="w-24 h-24 border border-foreground/20 flex items-center justify-center text-foreground bg-background">
                  {activeResult.icon}
                </div>
                <div>
                  <h4 className="text-5xl font-black text-foreground mb-4 uppercase tracking-tighter">{activeResult.name}</h4>
                  <p className="text-foreground/40 text-lg font-light max-w-md">{activeResult.desc}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="text-center md:text-right">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/30 block mb-2 font-black">Link Status</span>
                  <span className="text-2xl font-black text-foreground uppercase">{activeResult.status}</span>
                </div>
                <Button 
                  onClick={() => setSelectedProtocol(activeResult)}
                  className="h-16 px-12 bg-foreground text-background hover:bg-foreground/90 rounded-none text-[10px] font-black uppercase tracking-widest"
                >
                  Protocol Details <ArrowRight className="ml-4" size={16} />
                </Button>
              </div>
            </div>
          ) : (
            serviceData.map((service, idx) => (
              <div key={idx} className="bg-background p-16 hover:bg-foreground/[0.02] transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-foreground group-hover:h-full transition-all duration-500" />
                <div className="w-16 h-16 mb-10 border border-foreground/10 flex items-center justify-center text-foreground/40 group-hover:border-foreground group-hover:text-foreground transition-all">
                  {service.icon}
                </div>
                <h4 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tighter">{service.name}</h4>
                <p className="text-foreground/40 text-[11px] font-bold uppercase tracking-wider mb-12 leading-relaxed">
                  {service.desc}
                </p>
                <div 
                  onClick={() => setSelectedProtocol(service)}
                  className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 group-hover:text-foreground transition-all cursor-pointer"
                >
                  Query Intelligence <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Protocol Intelligence Modal */}
      <Dialog open={!!selectedProtocol} onOpenChange={(open) => !open && setSelectedProtocol(null)}>
        <DialogContent className="max-w-3xl bg-background border border-foreground/10 rounded-none p-0 overflow-hidden shadow-2xl">
          {selectedProtocol && (
            <div className="flex flex-col">
              {/* Header */}
              <div className="p-10 border-b border-foreground/5 bg-foreground/[0.02]">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 border border-foreground/10 flex items-center justify-center text-foreground">
                    {selectedProtocol.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-foreground/30 font-bold">Strategic Protocol</span>
                    <DialogTitle className="text-4xl font-black text-foreground uppercase tracking-tighter">
                      {selectedProtocol.name}
                    </DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-foreground/50 text-lg font-light leading-relaxed">
                  Enterprise-grade {selectedProtocol.name.toLowerCase()} infrastructure protocols for mission-critical logistics operations.
                </DialogDescription>
              </div>

              {/* Data Grid */}
              <div className="p-10 grid md:grid-cols-2 gap-12">
                <div className="space-y-10">
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

                <div className="space-y-10">
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

              {/* Footer Action */}
              <div className="p-10 bg-foreground text-background flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Globe size={20} className="animate-pulse-slow" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Protocol Link Active</span>
                </div>
                <Button 
                  onClick={() => setSelectedProtocol(null)}
                  className="bg-background text-foreground hover:bg-background/90 rounded-none h-14 px-10 text-[10px] font-black uppercase tracking-widest"
                >
                  Initiate Booking <ArrowRight className="ml-4" size={14} />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
