"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from 'recharts';
import { 
  TrendingUp, 
  Globe, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Plane, 
  Ship, 
  Truck, 
  AlertCircle, 
  Layers,
  Search,
  ChevronRight,
  Database
} from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { cn } from '@/lib/utils';

// --- Types ---
interface LogEntry {
  id: string;
  time: string;
  activity: string;
  location: string;
  type: 'info' | 'success' | 'warning' | 'critical';
}

interface ShipmentCard {
  id: string;
  awb: string;
  client: string;
  destination: string;
  status: string;
  progress: number;
  type: 'air' | 'sea' | 'road';
}

// --- Mock Data Constants ---
const CITIES = ["SIN", "DXB", "JFK", "LHR", "HKG", "PVG", "FRA", "CDG", "BOM", "DXB"];
const CLIENTS = ["AURORA LUXURY", "OMNI TECH CORP", "ZENITH DYNAMICS", "GLOBAL AETHER", "NOVA DEFENSE"];
const STATUSES = ["IN TRANSIT", "CUSTOMS VERIFIED", "DEPARTED", "ARRIVAL PENDING", "EN ROUTE"];
const ACTIVITIES = [
  "Satellite Link Established",
  "FIATA Protocol Verified",
  "Customs Barrier Cleared",
  "Cargo Extraction Initiated",
  "Multimodal Sync Completed",
  "High-Value Vault Secured",
  "Route Optimization Active"
];

export function AnalyticsDashboard() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [shipments, setShipments] = useState<ShipmentCard[]>([]);
  const [currentTime, setCurrentTime] = useState<string>('');

  // --- Real-time Simulation Engine ---
  useEffect(() => {
    // 1. Initial Data
    const initialShipments: ShipmentCard[] = Array.from({ length: 3 }).map((_, i) => ({
      id: Math.random().toString(36).substr(2, 9),
      awb: `ZN-${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}`,
      client: CLIENTS[Math.floor(Math.random() * CLIENTS.length)],
      destination: CITIES[Math.floor(Math.random() * CITIES.length)],
      status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
      progress: Math.floor(Math.random() * 80),
      type: i === 0 ? 'air' : i === 1 ? 'sea' : 'road'
    }));
    setShipments(initialShipments);

    const initialLogs: LogEntry[] = Array.from({ length: 6 }).map((_, i) => ({
      id: Math.random().toString(36).substr(2, 9),
      time: new Date(Date.now() - i * 600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      activity: ACTIVITIES[Math.floor(Math.random() * ACTIVITIES.length)],
      location: CITIES[Math.floor(Math.random() * CITIES.length)],
      type: i % 3 === 0 ? 'success' : 'info'
    }));
    setLogs(initialLogs);

    // 2. Automated Updates
    const interval = setInterval(() => {
      // Rotate Logs
      const newLog: LogEntry = {
        id: Math.random().toString(36).substr(2, 9),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        activity: ACTIVITIES[Math.floor(Math.random() * ACTIVITIES.length)],
        location: CITIES[Math.floor(Math.random() * CITIES.length)],
        type: Math.random() > 0.8 ? 'warning' : 'success'
      };
      setLogs(prev => [newLog, ...prev.slice(0, 5)]);

      // Randomly update a shipment progress
      setShipments(prev => prev.map(s => {
        const move = Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 1 : 0;
        let newProgress = s.progress + move;
        if (newProgress >= 100) newProgress = 0; // Loop simulation
        return { ...s, progress: newProgress };
      }));
    }, 4000);

    // 3. System Time
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  // Static Data for Charts
  const growthData = useMemo(() => [
    { year: '2019', revenue: 420, shipments: 2400 },
    { year: '2020', revenue: 580, shipments: 3100 },
    { year: '2021', revenue: 890, shipments: 4800 },
    { year: '2022', revenue: 1200, shipments: 6200 },
    { year: '2023', revenue: 1850, shipments: 8900 },
    { year: '2024', revenue: 2400, shipments: 12000 },
  ], []);

  const reviewData = useMemo(() => [
    { month: 'Jan', rating: 4.8 },
    { month: 'Feb', rating: 4.9 },
    { month: 'Mar', rating: 4.7 },
    { month: 'Apr', rating: 4.9 },
    { month: 'May', rating: 5.0 },
    { month: 'Jun', rating: 4.9 },
  ], []);

  return (
    <section className="py-48 px-6 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background Matrix/Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="scanline" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-start mb-32 reveal-on-scroll">
          <div className="flex-1">
            <div className="flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-[0.5em] font-black mb-8">
              <span className="w-2 h-2 bg-white animate-pulse" /> Live Protocol: Active
              <span className="ml-4 font-mono">{currentTime} UTC</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
              INTELLIGENCE<br />
              <span className="text-white/40">TERMINAL.</span>
            </h2>
          </div>
          <div className="flex-1 pt-12">
             <div className="p-8 border border-white/10 bg-white/5 glass-morphism">
               <div className="flex justify-between items-center mb-6">
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Global Nodes</span>
                 <Database size={14} className="text-white/20" />
               </div>
               <div className="flex gap-4">
                 {CITIES.slice(0, 4).map((city, i) => (
                   <div key={i} className="flex-1 py-4 border border-white/5 text-center">
                     <span className="text-xl font-black text-white block">{city}</span>
                     <span className="text-[8px] text-white/30 uppercase font-bold tracking-tighter">Verified</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-8 reveal-on-scroll">
          {/* 1. Live Shipments Dashboard */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {shipments.map((s, i) => (
                <div key={s.id} className="p-8 border border-white/10 bg-white/5 glass-morphism relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    {s.type === 'air' ? <Plane size={40} /> : s.type === 'sea' ? <Ship size={40} /> : <Truck size={40} />}
                  </div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[10px] font-mono text-white/40 tracking-widest">{s.awb}</span>
                    <div className="px-3 py-1 border border-white/20 text-[8px] font-black uppercase text-white/60">
                      {s.status}
                    </div>
                  </div>
                  <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{s.client}</h4>
                  <div className="flex items-center gap-3 text-[10px] text-white/40 uppercase font-bold mb-8">
                    <Globe size={10} /> Destination: {s.destination}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black text-white/30 uppercase">
                      <span>Sync Progress</span>
                      <span>{s.progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 relative">
                      <div className="h-full bg-white transition-all duration-1000" style={{ width: `${s.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Analytics Chart */}
            <div className="bg-white/5 border border-white/10 p-12 glass-morphism min-h-[500px]">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-white">Strategic Growth Index</h4>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mt-2">Annual Enterprise Revenue Telemetry</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-white/40">
                    <span className="w-2 h-2 bg-white rounded-full" /> Revenue
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-white/20">
                    <span className="w-2 h-2 bg-white/20 rounded-full" /> Capacity
                  </div>
                </div>
              </div>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="white" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="white" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="white" opacity={0.05} />
                    <XAxis 
                      dataKey="year" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: 'white', opacity: 0.3 }}
                      dy={20}
                    />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'black', border: '1px solid #333', color: 'white' }}
                      itemStyle={{ color: 'white' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="white" 
                      fillOpacity={1} 
                      fill="url(#growthGradient)" 
                      strokeWidth={2}
                      animationDuration={3000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* 2. Live Activity Feed */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 border border-white/10 p-10 glass-morphism h-full flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-white flex items-center gap-3">
                  <Activity size={14} className="animate-pulse" /> Live Ops Stream
                </h4>
                <div className="w-8 h-8 flex items-center justify-center border border-white/10">
                   <ChevronRight size={14} className="text-white/40" />
                </div>
              </div>

              <div className="flex-1 space-y-8 overflow-hidden relative">
                {logs.map((log, i) => (
                  <div key={log.id} className={cn(
                    "relative pl-8 border-l border-white/10 pb-2 transition-all duration-700 animate-in slide-in-from-right-4",
                    i === 0 ? "opacity-100" : `opacity-${Math.max(10, 80 - i * 15)}`
                  )}>
                    <div className={cn(
                      "absolute -left-[5px] top-0 w-2 h-2 rounded-full",
                      log.type === 'warning' ? "bg-red-500 shadow-[0_0_10px_red]" : "bg-white"
                    )} />
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono text-white/30">{log.time}</span>
                      <span className="text-[8px] font-black uppercase text-white/60 tracking-tighter">Node: {log.location}</span>
                    </div>
                    <p className="text-xs font-bold text-white uppercase tracking-tight">{log.activity}</p>
                  </div>
                ))}
                
                {/* Fade-out effect at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em] block mb-2">Integrity Status</span>
                    <div className="text-xl font-black text-white uppercase tracking-tighter">Secured</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em] block mb-2">Ops Density</span>
                    <div className="text-xl font-black text-white uppercase tracking-tighter">98.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Global Telemetry Overview */}
        <div className="grid md:grid-cols-3 gap-8 reveal-on-scroll">
          {[
            { label: 'Asset Protection', value: 99.9, suffix: '%', icon: <ShieldCheck size={20} />, trend: 'FIATA VERIFIED' },
            { label: 'Global Footprint', value: 180, suffix: '+', icon: <Globe size={20} />, trend: '+4 NEW NODES' },
            { label: 'Latency Optimization', value: 32, suffix: 'ms', icon: <Zap size={20} />, trend: 'ULTRA-LOW' }
          ].map((stat, i) => (
            <div key={i} className="p-10 border border-white/10 bg-white/5 glass-morphism flex items-center justify-between group hover:border-white/30 transition-all">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 block mb-4">{stat.label}</span>
                <div className="text-4xl font-black text-white tracking-tighter">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={3000} />
                </div>
              </div>
              <div className="text-right">
                 <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 mb-4 ml-auto group-hover:text-white transition-colors">
                  {stat.icon}
                 </div>
                 <span className="text-[8px] font-black uppercase tracking-widest text-white/60">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}