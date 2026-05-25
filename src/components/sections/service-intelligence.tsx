
"use client";

import React, { useState } from 'react';
import { Search, Plane, Ship, Truck, Box, Shield, ArrowRight, Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const serviceData = [
  { id: 'air', name: 'Air Freight', icon: <Plane size={18} />, desc: 'Next-gen aviation for high-value cargo.', status: 'Priority' },
  { id: 'sea', name: 'Sea Freight', icon: <Ship size={18} />, desc: 'Global maritime strategy for heavy assets.', status: 'Stable' },
  { id: 'road', name: 'Road Transport', icon: <Truck size={18} />, desc: 'Terrestrial precision for last-mile delivery.', status: 'Active' },
  { id: 'warehousing', name: 'Warehousing', icon: <Box size={18} />, desc: 'Climate-controlled high-security storage.', status: 'Secured' },
  { id: 'customs', name: 'Customs', icon: <Shield size={18} />, desc: 'Regulatory navigation & compliance.', status: 'Verified' },
];

export function ServiceIntelligence() {
  const [query, setQuery] = useState('');
  const [isQuerying, setIsQuerying] = useState(false);
  const [activeResult, setActiveResult] = useState<typeof serviceData[0] | null>(null);

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
    <section id="service-query" className="py-32 px-6 bg-background border-y border-foreground/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24 reveal-on-scroll">
          <div className="max-w-2xl">
            <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-black mb-8">Intelligence Terminal</h2>
            <h3 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-none mb-10 uppercase">
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
                className="h-16 pl-12 bg-foreground/5 border-foreground/10 text-foreground rounded-none text-xs uppercase font-bold tracking-widest"
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
            <div className="lg:col-span-3 bg-foreground/5 p-12 flex flex-col md:flex-row items-center justify-between gap-12 animate-in fade-in zoom-in-95 duration-500">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 border border-foreground/20 flex items-center justify-center text-foreground bg-background">
                  {activeResult.icon}
                </div>
                <div>
                  <h4 className="text-4xl font-black text-foreground mb-2 uppercase tracking-tighter">{activeResult.name}</h4>
                  <p className="text-foreground/40 text-sm font-light">{activeResult.desc}</p>
                </div>
              </div>
              <div className="flex gap-12 text-center md:text-right">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/30 block mb-2 font-black">Link Status</span>
                  <span className="text-xl font-black text-foreground uppercase">{activeResult.status}</span>
                </div>
                <Button variant="outline" className="h-14 px-10 border-foreground/20 text-foreground hover:bg-foreground hover:text-background rounded-none text-[10px] font-black uppercase tracking-widest">
                  Protocol Details <ArrowRight className="ml-4" size={14} />
                </Button>
              </div>
            </div>
          ) : (
            serviceData.map((service, idx) => (
              <div key={idx} className="bg-background p-12 hover:bg-foreground/[0.02] transition-colors group">
                <div className="w-12 h-12 mb-8 border border-foreground/10 flex items-center justify-center text-foreground/40 group-hover:border-foreground group-hover:text-foreground transition-all">
                  {service.icon}
                </div>
                <h4 className="text-xl font-black text-foreground mb-4 uppercase tracking-tight">{service.name}</h4>
                <p className="text-foreground/40 text-[10px] font-bold uppercase tracking-wider mb-8">{service.desc}</p>
                <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.3em] text-foreground/20 group-hover:text-foreground transition-all cursor-pointer">
                  Query Intelligence <ArrowRight size={10} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
