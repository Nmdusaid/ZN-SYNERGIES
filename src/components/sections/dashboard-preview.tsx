
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
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { TrendingUp, Globe, Activity, Users } from 'lucide-react';

const growthData = [
  { year: '2019', value: 240 },
  { year: '2020', value: 380 },
  { year: '2021', value: 520 },
  { year: '2022', value: 890 },
  { year: '2023', value: 1450 },
  { year: '2024', value: 2100 },
];

const chartConfig = {
  value: {
    label: "Growth Index",
    color: "hsl(var(--primary))",
  },
};

export function AnalyticsDashboard() {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden border-y border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24 reveal-on-scroll">
          <div className="max-w-xl">
            <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-black mb-8">Growth Metrics</h2>
            <h3 className="text-6xl font-black text-foreground tracking-tighter leading-none mb-10 uppercase">
              SCALING<br />
              <span className="text-foreground/40">ENTERPRISE.</span>
            </h3>
            <p className="text-foreground/50 text-xl font-light">
              Visualizing the consistent trajectory of ZN Synergies across global markets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 w-full lg:w-auto">
            {[
              { label: 'Yearly Expansion', value: 42, suffix: '%', icon: <TrendingUp size={14} /> },
              { label: 'Global Nodes', value: 240, suffix: '+', icon: <Globe size={14} /> },
              { label: 'Efficiency', value: 99, suffix: '.8%', icon: <Activity size={14} /> },
              { label: 'Client Retention', value: 96, suffix: '%', icon: <Users size={14} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-background p-8 flex flex-col gap-4 min-w-[200px]">
                <div className="text-foreground/20">{stat.icon}</div>
                <div>
                  <div className="text-4xl font-black tracking-tighter">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-on-scroll p-12 border border-foreground/10 bg-foreground/[0.02] rounded-none">
          <div className="flex items-center justify-between mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">Corporate Growth Index (2019–2024)</span>
          </div>
          <div className="h-[300px] w-full">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
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
                  />
                  <YAxis hide />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="currentColor" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorGrowth)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
