
"use client";

import React, { useState } from 'react';
import { Check, ShieldAlert, Zap, Globe, Lock, ArrowRight, ShieldCheck, Clock, FileText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Strategic",
    focus: "Standard enterprise movements with guaranteed reliability.",
    level: "01",
    features: ["Global Route Access", "Standard Documentation", "24/7 Monitoring", "Standard Transit Times"],
    details: {
      description: "Our entry-level enterprise tier designed for high-volume global distribution where reliability and cost-efficiency are balanced perfectly.",
      compliance: "ISO 9001:2015 Certified Logistics Operations",
      security: "Standard Facility Protection & Cargo Tracking",
      availability: "99.2% Global Node Reach",
      bestFor: "Bulk electronics, retail inventory, and non-sensitive industrial components."
    }
  },
  {
    name: "Priority",
    focus: "Accelerated logistics for time-sensitive global assets.",
    level: "02",
    features: ["Next-Flight Out", "Priority Customs Clearance", "Direct Port Handling", "Expedited Documentation"],
    details: {
      description: "Engineered for high-stakes supply chains where time is the primary variable. This tier bypasses standard processing queues to ensure velocity.",
      compliance: "AEO / C-TPAT Fast-Track Documentation Protocols",
      security: "Enhanced GPS Geofencing & Real-Time Telemetry",
      availability: "Immediate Flight/Vessel Allocation",
      bestFor: "Critical spare parts, fashion launches, and seasonal product rollouts."
    }
  },
  {
    name: "Critical",
    focus: "Bespoke high-stakes solutions for mission-critical cargo.",
    level: "03",
    features: ["White-Glove Escort", "Chartered Transit", "Absolute Confidentiality", "Real-Time Direct Reporting"],
    details: {
      description: "Our highest level of operational engagement. Designed for assets that require absolute precision, confidentiality, and specialized physical security.",
      compliance: "Military-Grade TAPA FSR Level A Standards",
      security: "Armed Escort Available / Biometric Asset Verification",
      availability: "Dedicated Command Center Liaison",
      bestFor: "Prototypes, high-value luxury, sensitive medical technology, and defense assets."
    }
  }
];

export function EnterpriseTiers() {
  const [selectedTier, setSelectedTier] = useState<typeof tiers[0] | null>(null);

  return (
    <section className="py-48 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 reveal-on-scroll">
          <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Service Framework</h2>
          <h3 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter uppercase leading-none">
            OPERATIONAL<br />
            <span className="text-foreground/40 text-stroke">TIERS.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className="group bg-background p-16 flex flex-col hover:bg-foreground/[0.02] transition-all duration-700 reveal-on-scroll" 
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-black mb-6 flex items-center gap-3">
                <div className="w-4 h-px bg-foreground/20" /> LEVEL {tier.level}
              </div>
              
              <h4 className="text-5xl font-black text-foreground mb-8 tracking-tighter uppercase">{tier.name}</h4>
              
              <p className="text-foreground/50 text-sm font-light mb-12 h-12 leading-relaxed">
                {tier.focus}
              </p>
              
              <ul className="space-y-6 mt-auto">
                {tier.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-foreground/30 font-bold group/item">
                    <Check size={14} className="text-foreground/20 group-hover/item:text-foreground transition-colors" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setSelectedTier(tier)}
                className="mt-20 w-full py-8 border border-foreground/10 text-[10px] uppercase tracking-[0.4em] font-black hover:bg-foreground hover:text-background transition-all duration-500 flex items-center justify-center gap-4"
              >
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tier Intelligence Modal */}
      <Dialog open={!!selectedTier} onOpenChange={(open) => !open && setSelectedTier(null)}>
        <DialogContent className="max-w-3xl bg-background border border-foreground/10 rounded-none p-0 overflow-hidden shadow-2xl">
          {selectedTier && (
            <div className="flex flex-col">
              {/* Header */}
              <div className="p-10 border-b border-foreground/5 bg-foreground/[0.02]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 border border-foreground/10 flex items-center justify-center text-foreground font-black text-2xl">
                      {selectedTier.level}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.5em] text-foreground/30 font-bold">Strategic Tier</span>
                      <DialogTitle className="text-4xl font-black text-foreground uppercase tracking-tighter">
                        {selectedTier.name} PROTOCOL
                      </DialogTitle>
                    </div>
                  </div>
                  {selectedTier.name === 'Critical' && <ShieldAlert className="text-foreground/20" size={32} />}
                  {selectedTier.name === 'Priority' && <Zap className="text-foreground/20" size={32} />}
                  {selectedTier.name === 'Strategic' && <Globe className="text-foreground/20" size={32} />}
                </div>
                <DialogDescription className="text-foreground/50 text-lg font-light leading-relaxed">
                  {selectedTier.details.description}
                </DialogDescription>
              </div>

              {/* Data Grid */}
              <div className="p-10 grid md:grid-cols-2 gap-12">
                <div className="space-y-10">
                  <div className="flex gap-4">
                    <ShieldCheck size={18} className="text-foreground/20 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-black block mb-2">Compliance standard</span>
                      <p className="text-sm font-bold text-foreground uppercase leading-tight">{selectedTier.details.compliance}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Lock size={18} className="text-foreground/20 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-black block mb-2">Security protocol</span>
                      <p className="text-sm font-bold text-foreground uppercase leading-tight">{selectedTier.details.security}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="flex gap-4">
                    <Clock size={18} className="text-foreground/20 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-black block mb-2">Asset Availability</span>
                      <p className="text-sm font-bold text-foreground uppercase leading-tight">{selectedTier.details.availability}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FileText size={18} className="text-foreground/20 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-black block mb-2">Operational Focus</span>
                      <p className="text-xs font-light text-foreground/50 leading-relaxed italic">{selectedTier.details.bestFor}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="p-10 bg-foreground text-background flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-background animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Node Connection Active</span>
                </div>
                <Button 
                  onClick={() => setSelectedTier(null)}
                  className="bg-background text-foreground hover:bg-background/90 rounded-none h-14 px-10 text-[10px] font-black uppercase tracking-widest"
                >
                  Activate Tier <ArrowRight className="ml-4" size={14} />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
