"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Loader2, MapPin, Clock, Shield, CheckCircle2, Navigation } from 'lucide-react';
import { predictiveLogisticsEta, PredictiveLogisticsEtaOutput } from '@/ai/flows/predictive-logistics-eta';
import { cn } from '@/lib/utils';

export function Tracker() {
  const [trackingId, setTrackingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictiveLogisticsEtaOutput | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;

    setLoading(true);
    try {
      // Mocking input for demo purposes based on trackingId
      const data = await predictiveLogisticsEta({
        currentLocation: "Port of Singapore (1.2644° N, 103.8392° E)",
        destination: "Port of Rotterdam, Netherlands",
        shipmentDetails: `Container ID: ${trackingId}, Category: Electronics, Urgency: Express`,
        liveEnvironmentalVariables: "Winds: 15kts SE, Sea State: Moderate, Clear Skies",
        portStatus: "Singapore: Minor Congestion (2h delay), Rotterdam: Nominal Operations"
      });
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tracking" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Live Monitoring</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">PREDICTIVE TRACKING</h3>
          <p className="text-muted-foreground text-lg">
            Enter your Waybill or Container ID to access real-time AI predictive ETAs.
          </p>
        </div>

        <form onSubmit={handleTrack} className="flex gap-2 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input 
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter Tracking ID (e.g. ZNS-992031-LX)"
              className="h-16 pl-12 bg-white/5 border-white/10 text-lg focus:ring-accent/50 rounded-2xl"
            />
          </div>
          <Button 
            disabled={loading}
            className="h-16 px-10 bg-accent text-background hover:bg-accent/90 font-bold rounded-2xl text-lg shadow-lg shadow-accent/20"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : <Navigation className="mr-2" />}
            TRACK
          </Button>
        </form>

        {result && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-700">
            <Card className="glass-morphism border-accent/20 overflow-hidden rounded-3xl">
              <CardContent className="p-0">
                <div className="p-8 border-b border-white/5 bg-accent/5">
                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">Status</span>
                      <h4 className="text-2xl font-bold flex items-center gap-2">
                        <Loader2 className="animate-spin text-accent" size={24} /> 
                        In Transit
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">Estimated Arrival</span>
                      <p className="text-2xl font-bold text-white">{result.estimatedArrivalTime}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                        <MapPin size={14} /> Optimized Route
                      </h5>
                      <p className="text-sm text-white/80 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                        {result.optimizedRoute}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Clock size={14} /> Intelligence Insight
                      </h5>
                      <p className="text-sm text-white/80 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                        {result.potentialDelays}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-sm font-bold">Reliability Index</span>
                      <span className="text-accent font-bold text-xl">{Math.round(result.confidenceScore * 100)}%</span>
                    </div>
                    
                    <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                      <div className="relative flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center z-10">
                          <CheckCircle2 size={14} className="text-background" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold">Origin Departed</p>
                          <p className="text-xs text-muted-foreground">Port of Singapore • Oct 24, 08:30 GMT</p>
                        </div>
                      </div>
                      <div className="relative flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-accent animate-pulse flex items-center justify-center z-10">
                          <Loader2 size={14} className="text-background animate-spin" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold">In Transit (Indian Ocean)</p>
                          <p className="text-xs text-muted-foreground">Current speed: 22.4 kts • Weather Optimal</p>
                        </div>
                      </div>
                      <div className="relative flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center z-10 border border-white/20">
                          <div className="w-2 h-2 rounded-full bg-white/20" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold opacity-40">Final Destination</p>
                          <p className="text-xs text-muted-foreground opacity-40">Port of Rotterdam • Estimated Arrival Dec 02</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}