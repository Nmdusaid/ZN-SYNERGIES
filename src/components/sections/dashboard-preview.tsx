
"use client";

import React, { useEffect, useState } from 'react';
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

const chartConfig = {
  value: {
    label: "Growth Index",
    color: "hsl(var(--primary))",
  },
};

export function AnalyticsDashboard() {
  const [growthData, setGrowthData] = useState<{ year: string; value: number }[]>([]);

  useEffect(() => {
    // Generate dynamic data for the last 5 years up to the current year
    const currentYear = new Date().getFullYear();
    const years = [];
    
    for (let i = 4; i >= 0; i--) {
      const year = currentYear - i;
      // Exponential fake growth logic for demonstration
      const growthFactor = 1.35 + (Math.random() * 0.15);
      const baseValue = 400;
      const value = Math.floor(baseValue * Math.pow(growthFactor, 4 - i));
      
      years.push({
        year: year.toString(),
        value: value,
      });
    }
    
    setGrowthData(years);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-background relative overflow-hidden border-y border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-16 mb-16 md:mb-24 reveal-on-scroll">
          <div className="max-w-xl">
            <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-black mb-6 md:mb-8">Growth Metrics</h2>
            <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none mb-6 md:mb-10 uppercase">
              SCALING<br />
              <span className="text-foreground/40">ENTERPRISE.</span>
            </h3>
            <p className="text-foreground/50 text-lg md:text-xl font-light">
              Visualizing the consistent trajectory of ZN Synergies across global markets with real-time dynamic growth intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 w-full lg:w-auto">
            {[
              { label: 'Growth', value: 42, suffix: '%', icon: <TrendingUp size={14} /> },
              { label: 'Nodes', value: 240, suffix: '+', icon: <Globe size={14} /> },
              { label: 'Efficiency', value: 99, suffix: '.8%', icon: <Activity size={14} /> },
              { label: 'Retention', value: 96, suffix: '%', icon: <Users size={14} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-background p-6 md:p-8 flex flex-col gap-3 md:gap-4 min-w-[140px] md:min-w-[200px]">
                <div className="text-foreground/20">{stat.icon}</div>
                <div>
                  <div className="text-2xl md:text-4xl font-black tracking-tighter">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-foreground/30 font-bold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-on-scroll p-6 md:p-12 border border-foreground/10 bg-foreground/[0.02] rounded-none">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div className="flex flex-col gap-1">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
                Rolling 5-Year Corporate Growth Index ({growthData[0]?.year}–{growthData[growthData.length - 1]?.year})
              </span>
              <span className="text-[7px] uppercase tracking-widest text-foreground/20 font-bold italic">Automatic Year Refresh Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[8px] uppercase font-bold text-foreground/30 tracking-widest">Live Sync Terminal</span>
            </div>
          </div>
          
          <div className="h-[250px] md:h-[450px] w-full">
            {growthData.length > 0 ? (
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="currentColor" stopOpacity={0.2}/>
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
                    <YAxis hide />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="currentColor" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorGrowth)" 
                      animationDuration={2500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <Activity className="animate-spin text-foreground/10" size={48} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
