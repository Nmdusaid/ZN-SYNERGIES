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
  ArrowRight
} from 'lucide-react';
import { predictiveLogisticsEta, PredictiveLogisticsEtaOutput } from '@/ai/flows/predictive-logistics-eta';
import { cn } from '@/lib/utils';

export function Tracker() {
  const [trackingId, setTrackingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictiveLogisticsEtaOutput | null>(null);
  const [progress, setProgress] = useState(0);

  // Simulate progress animation when result is loaded
  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => setProgress(68), 500);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [result]);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;

    setLoading(true);
    setResult(null);
    
    try {
      // Input data for GenAI ETA Prediction
      const data = await predictiveLogisticsEta({
        currentLocation: "Bay of Bengal (14.5994° N, 88.8392° E)",
        destination: "Port of Hamburg, Germany",
        shipmentDetails: `Container: ${trackingId}, Category: Critical Healthcare Assets, Urgency: Priority`,
        liveEnvironmentalVariables: "Winds: 12kts N, Sea State: Calm, Visibility: 10nm",
        portStatus: "Hamburg: Operational, Singapore: Congested (+4h)"
      });
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tracking" className="py-32 px-6 relative bg-black overflow-hidden border-b border-white/5">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal-on-scroll">
          <div className="max-w-2xl">
            <h2 className="text-white/30 font-bold tracking-[0.5em] uppercase text-[10px] mb-6">Intelligence HUD</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none uppercase">
              PREDICTIVE<br />
              <span className="text-white/40 text-stroke">MONITORING.</span>
            </h3>
            <p className="text-white/50 text-lg font-light max-w-lg">
              Synchronizing real-time environmental data with AI-driven ETA forecasting for absolute supply chain visibility.
            </p>
          </div>
          
          <form onSubmit={handleTrack} className="flex w-full md:w-auto gap-2">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <Input 
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="ZNS-TRACK-ID"
                className="h-16 pl-12 bg-white/5 border-white/10 text-white rounded-none border-b-2 border-b-white/20 focus:border-b-white transition-all tracking-widest uppercase font-bold text-xs"
              />
            </div>
            <Button 
              disabled={loading}
              className="h-16 px-10 bg-white text-black hover:bg-white/90 font-black rounded-none uppercase tracking-[0.2em] text-[10px]"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Initiate"}
            </Button>
          </form>
        </div>

        {loading && (
          <div className="py-32 flex flex-col items-center justify-center animate-in fade-in duration-700">
            <div className="w-24 h-24 border border-white/10 flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 border border-white animate-ping opacity-20" />
              <Loader2 className="text-white animate-spin" size={32} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">Accessing Global Satellites...</span>
          </div>
        )}

        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Tracking Details */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="bg-white/5 border-white/10 rounded-none overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-6">
                    <Badge variant="outline" className="border-white/20 text-white font-bold uppercase tracking-widest text-[9px] px-3 py-1 bg-white/10">
                      IN TRANSIT
                    </Badge>
                  </div>
                  
                  <CardContent className="p-10">
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                      <div>
                        <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold block mb-4">Origin / Destination</span>
                        <div className="flex items-center gap-4 text-white">
                          <div className="space-y-1">
                            <p className="font-black text-xl tracking-tight">SINGAPORE (SIN)</p>
                            <p className="text-[10px] text-white/40 uppercase">Departed: Oct 24, 08:30 GMT</p>
                          </div>
                          <ArrowRight className="text-white/20" size={20} />
                          <div className="space-y-1">
                            <p className="font-black text-xl tracking-tight">HAMBURG (HAM)</p>
                            <p className="text-[10px] text-white/40 uppercase">Estimated: {result.estimatedArrivalTime}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right md:text-left lg:text-right">
                        <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold block mb-4">Last Updated</span>
                        <p className="font-black text-xl text-white tracking-tight">02 MINUTES AGO</p>
                        <p className="text-[10px] text-white/40 uppercase font-bold flex items-center justify-end md:justify-start lg:justify-end gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Satellite Active
                        </p>
                      </div>
                    </div>

                    {/* Animated Progress Line */}
                    <div className="relative pt-12 pb-8">
                      <div className="h-[2px] w-full bg-white/10 relative">
                        <div 
                          className="absolute h-full bg-white transition-all duration-[2000ms] ease-out shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                          style={{ width: `${progress}%` }}
                        />
                        {/* Moving Truck/Ship Icon */}
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 transition-all duration-[2000ms] ease-out"
                          style={{ left: `${progress}%` }}
                        >
                          <div className="w-10 h-10 bg-white border border-black flex items-center justify-center -translate-x-1/2 -mt-1 shadow-2xl">
                            <Truck size={18} className="text-black" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between mt-8">
                        <div className="text-center">
                          <div className="w-3 h-3 border border-white bg-black rounded-full mb-3 mx-auto" />
                          <span className="text-[9px] font-black uppercase text-white/40">Hub A</span>
                        </div>
                        <div className="text-center">
                          <div className="w-3 h-3 border border-white bg-white rounded-full mb-3 mx-auto shadow-[0_0_10px_white]" />
                          <span className="text-[9px] font-black uppercase text-white">Current</span>
                        </div>
                        <div className="text-center">
                          <div className="w-3 h-3 border border-white/20 bg-black rounded-full mb-3 mx-auto" />
                          <span className="text-[9px] font-black uppercase text-white/20">Hub B</span>
                        </div>
                        <div className="text-center">
                          <div className="w-3 h-3 border border-white/20 bg-black rounded-full mb-3 mx-auto" />
                          <span className="text-[9px] font-black uppercase text-white/20">Dest</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
                      <div>
                        <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold block mb-2">Confidence Score</span>
                        <div className="flex items-center gap-4">
                          <div className="text-3xl font-black text-white">{Math.round(result.confidenceScore * 100)}%</div>
                          <div className="h-2 w-32 bg-white/10">
                            <div className="h-full bg-white" style={{ width: `${result.confidenceScore * 100}%` }} />
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold block mb-2">Shipment Progress</span>
                        <div className="text-3xl font-black text-white">{progress}%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 border border-white/10 bg-white/5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8 flex items-center gap-3">
                      <Clock size={14} /> Transit Log
                    </h4>
                    <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                      <div className="relative flex items-center gap-6">
                        <div className="w-6 h-6 border border-white/20 bg-black flex items-center justify-center z-10">
                          <CheckCircle2 size={12} className="text-white/40" />
                        </div>
                        <div>
                          <p className="text-[11px] font-black text-white/40 uppercase">Oct 24 • Departure</p>
                          <p className="text-[10px] text-white/20 font-bold uppercase tracking-wider">Singapore Port Terminal 4</p>
                        </div>
                      </div>
                      <div className="relative flex items-center gap-6">
                        <div className="w-6 h-6 border border-white bg-white flex items-center justify-center z-10">
                          <div className="w-1.5 h-1.5 bg-black animate-pulse" />
                        </div>
                        <div>
                          <p className="text-[11px] font-black text-white uppercase">Active • Deep Water</p>
                          <p className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Coordinates: 14.59° N, 88.83° E</p>
                        </div>
                      </div>
                      <div className="relative flex items-center gap-6">
                        <div className="w-6 h-6 border border-white/10 bg-black flex items-center justify-center z-10">
                          <div className="w-1 h-1 bg-white/10" />
                        </div>
                        <div>
                          <p className="text-[11px] font-black text-white/20 uppercase italic">Scheduled • Suez Canal</p>
                          <p className="text-[10px] text-white/10 font-bold uppercase tracking-wider">Estimated Passage: Nov 12</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 border border-white/10 bg-white/5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8 flex items-center gap-3">
                      <Navigation size={14} /> Path Optimization
                    </h4>
                    <div className="space-y-6">
                      <div className="p-4 bg-white/5 border border-white/5">
                        <span className="text-[9px] font-black text-white/40 uppercase block mb-2">Recommended Path</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">{result.optimizedRoute}</p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/5">
                        <span className="text-[9px] font-black text-white/40 uppercase block mb-2">Environmental Alerts</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">{result.potentialDelays}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8">
                {/* Driver / Vessel Details */}
                <div className="p-8 border border-white/10 bg-white/5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8 flex items-center gap-3">
                    <User size={14} /> Operational Lead
                  </h4>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 border border-white/10 relative overflow-hidden grayscale">
                      <img src="https://picsum.photos/seed/driver/200/200" alt="Captain" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-white tracking-tight">CAPT. R. VANCE</p>
                      <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Master Mariner • 12Y Exp</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest border-b border-white/5 pb-4">
                      <span className="text-white/20">Vessel ID</span>
                      <span className="text-white">ZN-EMERALD-X</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest border-b border-white/5 pb-4">
                      <span className="text-white/20">Protocol</span>
                      <span className="text-white">LEVEL 03 PRIORITY</span>
                    </div>
                    <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white hover:text-black text-[9px] font-black uppercase tracking-widest h-12 rounded-none">
                      <Phone size={12} className="mr-2" /> Direct Terminal Link
                    </Button>
                  </div>
                </div>

                {/* Live Map Representation (Stylized) */}
                <div className="aspect-square border border-white/10 bg-white/5 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/400/400')] grayscale contrast-150 opacity-20 transition-transform duration-[10000ms] group-hover:scale-125" />
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 border-t border-white/5 flex flex-col justify-between">
                    {[...Array(4)].map((_, i) => <div key={i} className="h-px w-full bg-white/5" />)}
                  </div>
                  <div className="absolute inset-0 border-l border-white/5 flex justify-between">
                    {[...Array(4)].map((_, i) => <div key={i} className="w-px h-full bg-white/5" />)}
                  </div>

                  {/* Tracking Marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-4 h-4 bg-white animate-ping absolute inset-0" />
                      <div className="w-4 h-4 bg-white relative z-10" />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap">
                        <span className="bg-black text-white text-[8px] font-black px-2 py-1 border border-white/20 uppercase tracking-widest">
                          LIVE POSITION
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <Badge className="bg-white text-black rounded-none text-[8px] font-black uppercase">ENCRYPTED</Badge>
                    <Badge className="bg-black border border-white/20 text-white rounded-none text-[8px] font-black uppercase">SAT-LINK 4</Badge>
                  </div>
                </div>

                {/* Compliance / Security */}
                <div className="p-8 border border-white/10 bg-white/5 flex items-start gap-4">
                  <Shield className="text-white/40 shrink-0" size={20} />
                  <div>
                    <h5 className="text-[10px] font-black text-white uppercase tracking-widest mb-2">Enterprise Protection</h5>
                    <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wider">
                      This movement is secured by ZN end-to-end encryption protocols and real-time vault monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!result && !loading && (
          <div className="py-24 border border-dashed border-white/10 flex flex-col items-center justify-center text-center reveal-on-scroll">
            <div className="w-16 h-16 border border-white/5 flex items-center justify-center mb-8 rotate-45">
              <AlertCircle className="text-white/10 -rotate-45" size={24} />
            </div>
            <h4 className="text-xl font-black text-white/20 uppercase tracking-[0.2em] mb-4">Protocol Idle</h4>
            <p className="text-white/20 text-xs font-bold uppercase tracking-widest max-w-xs">
              Enter a valid enterprise tracking identifier to re-establish satellite connectivity.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
