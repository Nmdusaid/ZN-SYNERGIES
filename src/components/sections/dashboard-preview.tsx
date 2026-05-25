"use client";

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Plane, 
  Ship, 
  Truck, 
  Search,
  Box,
  CheckCircle2,
  MapPin,
  Anchor,
  Navigation,
  Database,
  Terminal,
  Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Types ---
interface TransitStage {
  label: string;
  status: 'complete' | 'active' | 'pending';
  icon: React.ReactNode;
}

interface DemoShipment {
  id: string;
  awb: string;
  client: string;
  pickup: string;
  destination: string;
  weight: string;
  cargo: string;
  timeline: string;
  currentStage: number;
  type: 'air' | 'sea' | 'road';
}

// --- Mock Data ---
const TRANSIT_STAGES = [
  { label: "Picked Up", icon: <MapPin size={12} /> },
  { label: "In Warehouse", icon: <Box size={12} /> },
  { label: "Customs Clearance", icon: <ShieldCheck size={12} /> },
  { label: "In Transit", icon: <Navigation size={12} /> },
  { label: "Arrived at Hub", icon: <Anchor size={12} /> },
  { label: "Out for Delivery", icon: <Truck size={12} /> },
  { label: "Delivered", icon: <CheckCircle2 size={12} /> },
];

const SHIPMENTS: DemoShipment[] = [
  {
    id: "1",
    awb: "ZN-942-8821",
    client: "ZENITH TECH SOLUTIONS",
    pickup: "SHANGHAI (PVG)",
    destination: "NEW YORK (JFK)",
    weight: "1,240 KG",
    cargo: "SEMICONDUCTOR COMPONENTS",
    timeline: "ETA: 48 HOURS",
    currentStage: 3,
    type: 'air'
  },
  {
    id: "2",
    awb: "ZN-551-0092",
    client: "AURORA LUXURY GROUP",
    pickup: "MILAN (MXP)",
    destination: "DUBAI (DXB)",
    weight: "450 KG",
    cargo: "HIGH-END TEXTILES",
    timeline: "ETA: 72 HOURS",
    currentStage: 2,
    type: 'road'
  },
  {
    id: "3",
    awb: "ZN-112-4430",
    client: "OMNI MEDICAL CORP",
    pickup: "SINGAPORE (SIN)",
    destination: "HAMBURG (HAM)",
    weight: "2,800 KG",
    cargo: "CRITICAL HEALTHCARE ASSETS",
    timeline: "ETA: 5 DAYS",
    currentStage: 4,
    type: 'sea'
  },
  {
    id: "4",
    awb: "ZN-773-2219",
    client: "NOVA DEFENSE SYSTEMS",
    pickup: "BANGALORE (BLR)",
    destination: "LONDON (LHR)",
    weight: "890 KG",
    cargo: "AEROSPACE INSTRUMENTATION",
    timeline: "ETA: 24 HOURS",
    currentStage: 5,
    type: 'air'
  }
];

export function AnalyticsDashboard() {
  const [shipmentIndex, setShipmentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // --- Animation Cycle ---
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRefreshing(true);
      setTimeout(() => {
        setShipmentIndex((prev) => (prev + 1) % SHIPMENTS.length);
        setIsRefreshing(false);
      }, 500);
    }, 6000);

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  const currentShipment = SHIPMENTS[shipmentIndex];

  return (
    <section className="py-48 px-6 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="scanline" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-start mb-24 reveal-on-scroll">
          <div className="flex-1">
            <div className="flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-[0.5em] font-black mb-8">
              <span className="w-2 h-2 bg-white animate-pulse" /> LIVE TERMINAL: ACTIVE
              <span className="ml-4 font-mono">{currentTime} UTC</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
              SHIPMENT<br />
              <span className="text-white/40">INTELLIGENCE.</span>
            </h2>
            <p className="text-white/30 text-xl font-light max-w-lg">
              Enterprise monitoring simulator visualizing global asset movements with absolute precision.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-1 pt-12 justify-end">
             <div className="p-8 border border-white/10 bg-white/5 glass-morphism w-full max-w-sm">
               <div className="flex justify-between items-center mb-10">
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Node Status</span>
                 <Database size={14} className="text-white/20" />
               </div>
               <div className="space-y-6">
                 {['SIN-H6', 'DXB-TERMINAL', 'JFK-SECURE'].map((node, i) => (
                   <div key={i} className="flex items-center justify-between text-[10px] font-bold uppercase tracking-tighter">
                     <span className="text-white/40">{node}</span>
                     <span className="text-white">ENCRYPTED</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>

        {/* The Tracking Dashboard UI */}
        <div className={cn(
          "bg-white/[0.02] border border-white/10 p-8 md:p-16 glass-morphism transition-all duration-700 reveal-on-scroll",
          isRefreshing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        )}>
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 pb-12 border-b border-white/5">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center text-white/40">
                {currentShipment.type === 'air' ? <Plane size={32} /> : currentShipment.type === 'sea' ? <Ship size={32} /> : <Truck size={32} />}
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block mb-1">AWB SIGNATURE</span>
                <h4 className="text-3xl font-black text-white tracking-tighter uppercase">{currentShipment.awb}</h4>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full lg:w-auto">
              <div>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block mb-2">Client</span>
                <span className="text-sm font-bold text-white uppercase">{currentShipment.client}</span>
              </div>
              <div>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block mb-2">Weight</span>
                <span className="text-sm font-bold text-white uppercase">{currentShipment.weight}</span>
              </div>
              <div>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block mb-2">Asset Type</span>
                <span className="text-sm font-bold text-white uppercase tracking-tighter">{currentShipment.cargo}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block mb-2">Status</span>
                <span className="text-sm font-black text-white uppercase animate-pulse">{TRANSIT_STAGES[currentShipment.currentStage].label}</span>
              </div>
            </div>
          </div>

          {/* Stepper Logic */}
          <div className="relative mb-24">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />
            <div className="relative flex justify-between items-center">
              {TRANSIT_STAGES.map((stage, idx) => {
                const isActive = idx === currentShipment.currentStage;
                const isComplete = idx < currentShipment.currentStage;
                
                return (
                  <div key={idx} className="flex flex-col items-center gap-6 relative z-10">
                    <div className={cn(
                      "w-10 h-10 border flex items-center justify-center transition-all duration-700",
                      isComplete ? "bg-white border-white text-black" : 
                      isActive ? "bg-black border-white text-white scale-125 shadow-[0_0_20px_rgba(255,255,255,0.3)]" : 
                      "bg-black border-white/10 text-white/20"
                    )}>
                      {isComplete ? <CheckCircle2 size={16} /> : stage.icon}
                    </div>
                    <div className="absolute top-16 whitespace-nowrap text-center">
                      <span className={cn(
                        "text-[9px] font-black uppercase tracking-widest",
                        isActive ? "text-white" : isComplete ? "text-white/60" : "text-white/20"
                      )}>
                        {stage.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/5">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-white/5 border border-white/5 flex items-center justify-center text-white/30">
                <MapPin size={16} />
              </div>
              <div>
                <span className="text-[8px] font-black text-white/30 uppercase tracking-widest block">Pickup Node</span>
                <span className="text-xs font-bold text-white">{currentShipment.pickup}</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-white/5 border border-white/5 flex items-center justify-center text-white/30">
                <Globe size={16} />
              </div>
              <div>
                <span className="text-[8px] font-black text-white/30 uppercase tracking-widest block">Destination</span>
                <span className="text-xs font-bold text-white">{currentShipment.destination}</span>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-end">
              <div className="text-right">
                <span className="text-[8px] font-black text-white/30 uppercase tracking-widest block">Operational Timeline</span>
                <span className="text-xs font-black text-white animate-pulse">{currentShipment.timeline}</span>
              </div>
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center">
                <Clock size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Global Overview Metrics */}
        <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10 mt-12 reveal-on-scroll">
          {[
            { label: 'Active Streams', value: '42', icon: <Activity size={12} /> },
            { label: 'Asset Security', value: 'ULTRA', icon: <ShieldCheck size={12} /> },
            { label: 'Sync Latency', value: '12ms', icon: <Cpu size={12} /> },
            { label: 'Terminal Access', value: 'Alpha', icon: <Terminal size={12} /> }
          ].map((stat, i) => (
            <div key={i} className="bg-black p-8 flex items-center justify-between group">
              <div>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30 block mb-2">{stat.label}</span>
                <div className="text-xl font-black text-white tracking-tighter">{stat.value}</div>
              </div>
              <div className="text-white/10 group-hover:text-white transition-colors">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
