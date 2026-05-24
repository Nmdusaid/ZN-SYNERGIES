
"use client";

import React from 'react';
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
  Area
} from 'recharts';
import { TrendingUp, Globe, Activity, Zap } from 'lucide-react';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 900 },
  { name: 'Sun', value: 1000 },
];

export function AnalyticsDashboard() {
  return (
    <section className="py-48 px-6 bg-background border-y border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-24 items-start mb-32 reveal-on-scroll">
          <div className="flex-1">
            <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Predictive Intelligence</h2>
            <h3 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter leading-none mb-10">
              ANALYTICS<br />
              <span className="text-foreground/40">DASHBOARD.</span>
            </h3>
          </div>
          <div className="flex-1 pt-12">
            <p className="text-foreground/50 text-xl font-light leading-relaxed max-w-lg">
              Our proprietary GenAI engine analyzes global trade routes, geopolitical shifts, and environmental data to provide real-time strategic insights.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 reveal-on-scroll">
          {/* Main Chart Card */}
          <div className="lg:col-span-2 bg-foreground/5 border border-foreground/10 p-12 glass-morphism">
            <div className="flex justify-between items-center mb-12">
              <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-foreground">Global Throughput (7D)</h4>
              <div className="flex items-center gap-3 text-foreground/40 text-[10px] font-bold uppercase tracking-widest">
                <Activity size={14} /> Real-Time Stream
              </div>
            </div>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="currentColor" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="currentColor" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" opacity={0.05} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: 'currentColor', opacity: 0.3 }}
                    dy={20}
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'black', border: '1px solid #333', color: 'white' }}
                    itemStyle={{ color: 'white' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="currentColor" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Side Stats */}
          <div className="space-y-12">
            {[
              { label: 'Active Routes', value: '4,892', icon: <Globe size={20} />, trend: '+12.4%' },
              { label: 'System Efficiency', value: '99.98%', icon: <Zap size={20} />, trend: 'Stable' },
              { label: 'Strategic Growth', value: '$2.4B', icon: <TrendingUp size={20} />, trend: '+5.2%' }
            ].map((stat, i) => (
              <div key={i} className="p-10 border border-foreground/10 bg-foreground/5 glass-morphism flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 block mb-4">{stat.label}</span>
                  <div className="text-4xl font-black text-foreground tracking-tighter">{stat.value}</div>
                </div>
                <div className="text-right">
                   <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center text-foreground/40 mb-4 ml-auto">
                    {stat.icon}
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
