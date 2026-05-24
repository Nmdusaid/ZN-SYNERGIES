
"use client";

import React from 'react';
import { Target, Box, Truck, Shield, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: "Shipment Booking",
    desc: "Seamless digital boarding for your enterprise assets via our secure terminal.",
    icon: <Target size={24} />
  },
  {
    title: "Cargo Pickup",
    desc: "Precision extraction and handling from your facility with military discipline.",
    icon: <Box size={24} />
  },
  {
    title: "Transportation",
    desc: "High-velocity multimodal movement across our optimized global grid.",
    icon: <Truck size={24} />
  },
  {
    title: "Customs Handling",
    desc: "Expert navigation of regulatory frameworks and international compliance.",
    icon: <Shield size={24} />
  },
  {
    title: "Final Delivery",
    desc: "Zero-latency integration into your destination infrastructure.",
    icon: <CheckCircle2 size={24} />
  }
];

export function Methodology() {
  return (
    <section className="py-48 px-6 bg-background border-y border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-24 items-start mb-32 reveal-on-scroll">
          <div className="flex-1">
            <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">The Framework</h2>
            <h3 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-none mb-12">
              OUR STRATEGIC<br />
              <span className="text-foreground/40 text-stroke">PROCESS.</span>
            </h3>
          </div>
          <div className="flex-1">
            <p className="text-foreground/50 text-xl font-light leading-relaxed max-w-lg">
              We orchestrate logistics with architectural precision. Our five-step methodology ensures that complex global movements are executed with absolute transparency and zero compromise.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="reveal-on-scroll group" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="mb-12 w-16 h-16 border border-foreground/10 flex items-center justify-center group-hover:border-foreground transition-all duration-500 bg-foreground/[0.02]">
                <div className="text-foreground">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-xl font-black text-foreground mb-6 uppercase tracking-tight">{step.title}</h4>
              <div className="w-12 h-px bg-foreground/20 mb-6 group-hover:w-full transition-all duration-700" />
              <p className="text-foreground/40 text-[11px] font-bold uppercase tracking-wider leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
