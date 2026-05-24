
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Loader2, 
  MapPin, 
  Clock, 
  Shield, 
  CheckCircle2, 
  Navigation, 
  Truck, 
  User, 
  Phone,
  AlertCircle,
  ArrowRight,
  Plane
} from 'lucide-react';
import { predictiveLogisticsEta } from '@/ai/flows/predictive-logistics-eta';
import { cn } from '@/lib/utils';

// Mock Shipment Data generator for demo
const getMockShipment = (id: string) => ({
  awbNumber: id,
  status: "In Transit",
  origin: "SINGAPORE (SIN)",
  destination: "HAMBURG (HAM)",
  progress: 68,
  eta: "Oct 29, 14:00 GMT",
  flightDetails: "ZN-FLIGHT-772 / B747-8F",
  currentLocation: "Bay of Bengal (14.59° N, 88.83° E)",
  history: [
    { timestamp: "Oct 24, 08:30", activity: "Departure", location: "Singapore Port Terminal 4" },
    { timestamp: "Oct 25, 12:00", activity: "Customs Clearance", location: "Global Hub SIN" },
    { timestamp: "Oct 26, 02:00", activity: "En Route", location: "Transit Node A" }
  ]
});

export function Tracker() {
  const [awb, setAwb] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => setProgress(result.progress), 500);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [result]);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!awb) return;

    setLoading(true);
    setResult(null);
    
    // Simulate API fetch delay
    setTimeout(() => {
      setResult(getMockShipment(awb));
      setLoading(false);
    }, 2000);
  };

  return (
    <section id="tracking" className="py-48 px-6 relative bg-background overflow-hidden border-b border-foreground/5">
      {/* Background World Map Backdrop */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
         <svg viewBox="0 0 1000 500" className="w-[120%] h-auto text-foreground fill-current">
            <path d="M150,150 L160,140 L180,145 L200,130 L220,135 L240,120 L260,130 L280,125 L300,140 L320,150 L310,170 L290,180 L270,190 L250,200 L230,190 L210,185 L190,170 Z" />
            <path d="M450,120 L470,110 L500,105 L530,115 L550,130 L540,160 L520,180 L490,190 L460,180 L440,150 Z" />
            <path d="M500,80 L530,70 L570,75 L600,60 L640,65 L680,80 L700,100 L720,130 L700,160 L670,180 L630,190 L600,170 L570,160 L540,140 L520,120 Z" />
         </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 reveal-on-scroll">
          <div className="max-w-2xl">
            <h2 className="text-foreground/30 font-bold tracking-[0.5em] uppercase text-[10px] mb-8">Airway Bill Monitoring</h2>
            <h3 className="text-6xl md:text-8xl font-black text-foreground mb-10 tracking-tighter leading-none uppercase">
              GLOBAL<br />
              <span className="text-foreground/40 text-stroke">TRACKING.</span>
            </h3>
            <p className="text-foreground/50 text-xl font-light max-w-lg">
              Synchronizing real-time satellite data with enterprise logistics for absolute visibility.
            </p>
          </div>
          
          <form onSubmit={handleTrack} className="flex w-full md:w-auto gap-4">
            <div className="relative flex-1 md:w-96">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/20" size={20} />
              <Input 
                value={awb}
                onChange={(e) => setAwb(e.target.value)}
                placeholder="ENTER AWB NUMBER"
                className="h-20 pl-16 bg-foreground/5 border-foreground/10 text-foreground rounded-none border-b-2 border-b-foreground/20 focus:border-b-foreground transition-all tracking-widest uppercase font-bold text-sm"
              />
            </div>
            <Button 
              disabled={loading}
              className="h-20 px-12 bg-foreground text-background hover:bg-foreground/90 font-black rounded-none uppercase tracking-[0.3em] text-[12px]"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Initiate"}
            </Button>
          </form>
        </div>

        {loading && (
          <div className="py-48 flex flex-col items-center justify-center animate-in fade-in duration-700">
            <div className="w-32 h-32 border border-foreground/10 flex items-center justify-center mb-10 relative">
              <div className="absolute inset-0 border border-foreground animate-ping opacity-20" />
              <Loader2 className="text-foreground animate-spin" size={40} />
            </div>
            <span className="text-[12px] uppercase tracking-[0.5em] text-foreground/40 font-black">Satellite Synchronization...</span>
          </div>
        )}

        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="grid lg:grid-cols-3 gap-12">
              
              <div className="lg:col-span-2 space-y-12">
                <Card className="bg-foreground/5 border-foreground/10 rounded-none overflow-hidden relative glass-morphism">
                  <div className="absolute top-0 right-0 p-8">
                    <Badge variant="outline" className="border-foreground/20 text-foreground font-black uppercase tracking-widest text-[10px] px-4 py-2 bg-foreground/10">
                      {result.status}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-12">
                    <div className="grid md:grid-cols-2 gap-16 mb-16">
                      <div>
                        <span className="text-foreground/30 text-[10px] uppercase tracking-[0.4em] font-black block mb-6">Origin / Destination</span>
                        <div className="flex items-center gap-6 text-foreground">
                          <div className="space-y-2">
                            <p className="font-black text-2xl tracking-tighter">{result.origin}</p>
                            <p className="text-[10px] text-foreground/40 uppercase font-bold">AWB: {result.awbNumber}</p>
                          </div>
                          <ArrowRight className="text-foreground/20" size={24} />
                          <div className="space-y-2">
                            <p className="font-black text-2xl tracking-tighter">{result.destination}</p>
                            <p className="text-[10px] text-foreground/40 uppercase font-bold italic">ETA: {result.eta}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right md:text-left lg:text-right">
                        <span className="text-foreground/30 text-[10px] uppercase tracking-[0.4em] font-black block mb-6">Cargo Details</span>
                        <p className="font-black text-2xl text-foreground tracking-tighter">{result.flightDetails}</p>
                        <p className="text-[10px] text-foreground/40 uppercase font-black flex items-center justify-end md:justify-start lg:justify-end gap-3 mt-2">
                          <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" /> Live Tracker Active
                        </p>
                      </div>
                    </div>

                    <div className="relative pt-12 pb-8">
                      <div className="h-px w-full bg-foreground/10 relative">
                        <div 
                          className="absolute h-full bg-foreground transition-all duration-[2500ms] ease-out shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                          style={{ width: `${progress}%` }}
                        />
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 transition-all duration-[2500ms] ease-out"
                          style={{ left: `${progress}%` }}
                        >
                          <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center -translate-x-1/2 -mt-1 shadow-2xl">
                            <Plane size={24} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-16 flex items-center justify-between border-t border-foreground/10 pt-10">
                      <div>
                        <span className="text-foreground/30 text-[10px] uppercase tracking-[0.4em] font-black block mb-4">Transmission Strength</span>
                        <div className="flex items-center gap-6">
                          <div className="text-4xl font-black text-foreground">98%</div>
                          <div className="h-1 w-40 bg-foreground/10">
                            <div className="h-full bg-foreground" style={{ width: '98%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-foreground/30 text-[10px] uppercase tracking-[0.4em] font-black block mb-4">Total Completion</span>
                        <div className="text-4xl font-black text-foreground">{progress}%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="p-10 border border-foreground/10 bg-foreground/5 glass-morphism">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-foreground/40 mb-10 flex items-center gap-4">
                      <Clock size={16} /> Activity History
                    </h4>
                    <div className="space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-foreground/10">
                      {result.history.map((h: any, i: number) => (
                        <div key={i} className="relative flex items-center gap-8">
                          <div className={cn(
                            "w-6 h-6 border flex items-center justify-center z-10",
                            i === 0 ? "bg-foreground border-foreground" : "bg-background border-foreground/20"
                          )}>
                            {i === 0 ? <CheckCircle2 size={12} className="text-background" /> : <div className="w-1.5 h-1.5 bg-foreground/20" />}
                          </div>
                          <div>
                            <p className={cn("text-[12px] font-black uppercase", i === 0 ? "text-foreground" : "text-foreground/40")}>{h.timestamp} • {h.activity}</p>
                            <p className="text-[10px] text-foreground/30 font-bold uppercase tracking-widest">{h.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-10 border border-foreground/10 bg-foreground/5 glass-morphism">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-foreground/40 mb-10 flex items-center gap-4">
                      <Navigation size={16} /> Asset Intelligence
                    </h4>
                    <div className="space-y-8">
                      <div className="p-6 bg-foreground/5 border border-foreground/5">
                        <span className="text-[10px] font-black text-foreground/40 uppercase block mb-3">Current Location</span>
                        <p className="text-sm text-foreground font-light">{result.currentLocation}</p>
                      </div>
                      <div className="p-6 bg-foreground/5 border border-foreground/5">
                        <span className="text-[10px] font-black text-foreground/40 uppercase block mb-3">Weather/Environmental</span>
                        <p className="text-sm text-foreground/70 font-light leading-relaxed">Winds: 12kts N, Sea State: Calm, Visibility: 10nm. No delays predicted.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="p-10 border border-foreground/10 bg-foreground/5 glass-morphism">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-foreground/40 mb-10 flex items-center gap-4">
                    <User size={16} /> Operations Lead
                  </h4>
                  <div className="flex items-center gap-8 mb-10">
                    <div className="w-20 h-20 border border-foreground/10 relative overflow-hidden grayscale contrast-125">
                      <img src="https://picsum.photos/seed/lead/200/200" alt="Captain" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xl font-black text-foreground tracking-tight">CAPT. R. VANCE</p>
                      <p className="text-[10px] text-foreground/40 uppercase font-black tracking-[0.2em]">Master Logistics Officer</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between text-[11px] font-black uppercase tracking-widest border-b border-foreground/5 pb-6">
                      <span className="text-foreground/20">Protocol</span>
                      <span className="text-foreground">Level 05 Critical</span>
                    </div>
                    <Button variant="outline" className="w-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background text-[10px] font-black uppercase tracking-widest h-16 rounded-none">
                      <Phone size={14} className="mr-3" /> Secure Terminal Link
                    </Button>
                  </div>
                </div>

                <div className="p-10 border border-foreground/10 bg-foreground/5 glass-morphism flex items-start gap-6">
                  <Shield className="text-foreground/40 shrink-0" size={24} />
                  <div>
                    <h5 className="text-[11px] font-black text-foreground uppercase tracking-widest mb-3">Vault Security</h5>
                    <p className="text-[10px] text-foreground/40 leading-relaxed font-bold uppercase tracking-[0.15em]">
                      This movement is secured by ZN end-to-end encryption protocols and real-time biometric vault monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!result && !loading && (
          <div className="py-32 border border-dashed border-foreground/10 flex flex-col items-center justify-center text-center reveal-on-scroll">
            <div className="w-20 h-20 border border-foreground/5 flex items-center justify-center mb-10 rotate-45">
              <AlertCircle className="text-foreground/10 -rotate-45" size={32} />
            </div>
            <h4 className="text-2xl font-black text-foreground/20 uppercase tracking-[0.3em] mb-6">Monitoring Protocol Idle</h4>
            <p className="text-foreground/20 text-sm font-black uppercase tracking-widest max-w-xs">
              Enter an enterprise Airway Bill to re-establish satellite connectivity.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
