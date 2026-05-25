
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
  Area,
  Legend
} from 'recharts';
import { TrendingUp, Globe, Activity, Zap, Star, ShieldCheck } from 'lucide-react';

const growthData = [
  { year: '2019', revenue: 420, shipments: 2400 },
  { year: '2020', revenue: 580, shipments: 3100 },
  { year: '2021', revenue: 890, shipments: 4800 },
  { year: '2022', revenue: 1200, shipments: 6200 },
  { year: '2023', revenue: 1850, shipments: 8900 },
  { year: '2024', revenue: 2400, shipments: 12000 },
];

const reviewData = [
  { month: 'Jan', rating: 4.8 },
  { month: 'Feb', rating: 4.9 },
  { month: 'Mar', rating: 4.7 },
  { month: 'Apr', rating: 4.9 },
  { month: 'May', rating: 5.0 },
  { month: 'Jun', rating: 4.9 },
];

export function AnalyticsDashboard() {
  return (
    <section className="py-48 px-6 bg-background border-y border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-24 items-start mb-32 reveal-on-scroll">
          <div className="flex-1">
            <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Intelligence Terminal</h2>
            <h3 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter leading-none mb-10">
              STRATEGIC<br />
              <span className="text-foreground/40">ANALYTICS.</span>
            </h3>
          </div>
          <div className="flex-1 pt-12">
            <p className="text-foreground/50 text-xl font-light leading-relaxed max-w-lg">
              Our AI-driven analytics engine processes enterprise growth metrics and client sentiment in real-time, delivering high-precision strategic oversight.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 reveal-on-scroll">
          {/* Yearly Growth Chart */}
          <div className="bg-foreground/5 border border-foreground/10 p-12 glass-morphism">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-foreground">Yearly Enterprise Growth</h4>
                <p className="text-[10px] text-foreground/30 uppercase tracking-widest mt-2">Revenue vs Global Shipments</p>
              </div>
              <TrendingUp size={20} className="text-foreground/20" />
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="currentColor" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="currentColor" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" opacity={0.05} />
                  <XAxis 
                    dataKey="year" 
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
                    dataKey="revenue" 
                    stroke="currentColor" 
                    fillOpacity={1} 
                    fill="url(#growthGradient)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Client Satisfaction Chart */}
          <div className="bg-foreground/5 border border-foreground/10 p-12 glass-morphism">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-foreground">Client Review Index</h4>
                <p className="text-[10px] text-foreground/30 uppercase tracking-widest mt-2">Weighted Satisfaction Trend</p>
              </div>
              <Star size={20} className="text-foreground/20" />
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={reviewData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" opacity={0.05} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: 'currentColor', opacity: 0.3 }}
                    dy={20}
                  />
                  <YAxis domain={[4, 5]} hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'black', border: '1px solid #333', color: 'white' }}
                  />
                  <Line 
                    type="stepAfter" 
                    dataKey="rating" 
                    stroke="currentColor" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: 'white', strokeWidth: 2 }} 
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12 reveal-on-scroll">
          {[
            { label: 'Strategic Integrity', value: '99.9%', icon: <ShieldCheck size={20} />, trend: 'Verified' },
            { label: 'Global Footprint', value: '180+', icon: <Globe size={20} />, trend: '+4 Markets' },
            { label: 'AI Optimization', value: '32ms', icon: <Zap size={20} />, trend: 'Ultra-Low Latency' }
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
    </section>
  );
}
