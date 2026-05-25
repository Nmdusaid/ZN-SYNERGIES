
"use client";

import React from 'react';
import { 
  Area, 
  AreaChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  ResponsiveContainer 
} from 'recharts';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { 
  Activity, 
  TrendingUp, 
  Globe, 
  BarChart3,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

const growthData = [
  { year: '2019', shipments: 420, revenue: 2.1 },
  { year: '2020', shipments: 580, revenue: 3.4 },
  { year: '2021', shipments: 890, revenue: 5.8 },
  { year: '2022', shipments: 1240, revenue: 8.2 },
  { year: '2023', shipments: 1850, revenue: 12.4 },
  { year: '2024', shipments: 2400, revenue: 18.1 },
];

const chartConfig = {
  shipments: {
    label: "Shipments (k)",
    color: "hsl(var(--primary))",
  },
  revenue: {
    label: "Revenue ($M)",
    color: "hsl(var(--muted-foreground))",
  },
};

export function AnalyticsDashboard() {
  return (
    <section className="py-48 px-6 bg-background relative overflow-hidden border-y border-foreground/5">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24 reveal-on-scroll">
          <div className="max-w-2xl">
            <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-black mb-8">Performance Analytics</h2>
            <h3 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-none mb-10">
              STRATEGIC<br />
              <span className="text-foreground/40">GROWTH.</span>
            </h3>
            <p className="text-foreground/50 text-xl font-light leading-relaxed">
              visualizing the trajectory of ZN Synergies as we redefine global logistics infrastructure through consistent performance and enterprise scaling.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 w-full lg:w-auto">
            {[
              { label: 'Yearly Expansion', value: '+42%', icon: <TrendingUp size={14} /> },
              { label: 'Retention Rate', value: '96%', icon: <Users size={14} /> },
              { label: 'Global Nodes', value: '240', icon: <Globe size={14} /> },
              { label: 'Ops Efficiency', value: '99.8%', icon: <Activity size={14} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-background p-8 flex flex-col gap-4">
                <div className="text-foreground/20">{stat.icon}</div>
                <div>
                  <div className="text-3xl font-black tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-on-scroll">
          <div className="p-8 md:p-12 border border-foreground/10 bg-foreground/[0.02] glass-morphism rounded-none">
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center text-foreground/40">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest">Growth Index</h4>
                  <p className="text-[10px] text-foreground/30 uppercase font-bold">Consolidated Shipment & Revenue Scaling</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-foreground" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Shipments</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-foreground/20" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Revenue</span>
                </div>
              </div>
            </div>

            <div className="h-[400px] w-full">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorShipments" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="currentColor" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="currentColor" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                    <XAxis 
                      dataKey="year" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(0,0,0,0.3)', fontSize: 10, fontWeight: 900 }}
                      dy={10}
                    />
                    <YAxis 
                      hide={true}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="shipments" 
                      stroke="currentColor" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorShipments)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="rgba(0,0,0,0.2)" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fill="transparent" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-foreground/5 pt-12">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/20">
              * Simulated high-fidelity enterprise performance data for 2024 Audit
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-2 border border-foreground/10 text-[10px] font-black uppercase tracking-widest text-foreground/40">
                Verified: AI-Core-ZN
              </div>
              <div className="px-6 py-2 border border-foreground/10 text-[10px] font-black uppercase tracking-widest text-foreground/40">
                Sync: 12ms Latency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
