"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Loader2, Calculator, ArrowRight, DollarSign, Calendar, Info, AlertTriangle } from 'lucide-react';
import { smartFreightQuoteGenerator, SmartFreightQuoteGeneratorOutput } from '@/ai/flows/smart-freight-quote-generator';
import { useToast } from '@/hooks/use-toast';

export function FreightCalculator() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SmartFreightQuoteGeneratorOutput | null>(null);
  const [form, setForm] = useState({
    origin: '',
    destination: '',
    cargoDescription: '',
    weightKg: 500,
    volumeCbm: 2,
    serviceType: 'Air Freight' as any,
    urgency: 'Standard' as any,
    hazardousMaterials: false,
    insuranceRequired: true
  });

  const handleGenerate = async () => {
    setLoading(true);
    setResult(null);
    try {
      const quote = await smartFreightQuoteGenerator({
        ...form,
        customsDeclarationRequired: true,
      });
      setResult(quote);
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "AI Protocol Interrupted",
        description: "The intelligence node is experiencing high demand. Please re-initiate in a few moments.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="py-24 px-6 bg-[#0B0C0E] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="reveal-on-scroll">
              <h2 className="text-foreground/40 font-bold tracking-[0.5em] uppercase text-[10px] mb-4">Enterprise Quoting</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">SMART FREIGHT CALCULATOR</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Utilize our proprietary GenAI engine to generate instant, dynamic pricing estimates for your global movements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 reveal-on-scroll">
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Origin</Label>
                <Input 
                  value={form.origin}
                  onChange={(e) => setForm({ ...form, origin: e.target.value })}
                  placeholder="e.g. Shanghai Port, CN" 
                  className="bg-white/5 border-white/10 h-14 rounded-none uppercase text-[10px] tracking-widest focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Destination</Label>
                <Input 
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                  placeholder="e.g. Los Angeles, USA" 
                  className="bg-white/5 border-white/10 h-14 rounded-none uppercase text-[10px] tracking-widest focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Weight (KG)</Label>
                <Input 
                  type="number"
                  value={form.weightKg}
                  onChange={(e) => setForm({ ...form, weightKg: Number(e.target.value) })}
                  className="bg-white/5 border-white/10 h-14 rounded-none uppercase text-[10px] tracking-widest focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Volume (CBM)</Label>
                <Input 
                  type="number"
                  value={form.volumeCbm}
                  onChange={(e) => setForm({ ...form, volumeCbm: Number(e.target.value) })}
                  className="bg-white/5 border-white/10 h-14 rounded-none uppercase text-[10px] tracking-widest focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Service Type</Label>
                <Select value={form.serviceType} onValueChange={(val) => setForm({ ...form, serviceType: val })}>
                  <SelectTrigger className="bg-white/5 border-white/10 h-14 rounded-none uppercase text-[10px] tracking-widest focus:ring-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-foreground/10 text-foreground uppercase text-[10px] tracking-widest font-bold">
                    <SelectItem value="Air Freight">Air Freight</SelectItem>
                    <SelectItem value="Sea Freight">Sea Freight</SelectItem>
                    <SelectItem value="Road Transport">Road Transport</SelectItem>
                    <SelectItem value="Multimodal">Multimodal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Urgency</Label>
                <Select value={form.urgency} onValueChange={(val) => setForm({ ...form, urgency: val })}>
                  <SelectTrigger className="bg-white/5 border-white/10 h-14 rounded-none uppercase text-[10px] tracking-widest focus:ring-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-foreground/10 text-foreground uppercase text-[10px] tracking-widest font-bold">
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="Express">Express</SelectItem>
                    <SelectItem value="Critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4 reveal-on-scroll">
              <div className="flex items-center justify-between p-6 border border-white/5 bg-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Hazardous Materials</span>
                  <span className="text-[8px] text-muted-foreground uppercase tracking-wider mt-1">Special handling protocol required</span>
                </div>
                <Switch 
                  checked={form.hazardousMaterials}
                  onCheckedChange={(val) => setForm({ ...form, hazardousMaterials: val })}
                />
              </div>
              <div className="flex items-center justify-between p-6 border border-white/5 bg-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Cargo Insurance</span>
                  <span className="text-[8px] text-muted-foreground uppercase tracking-wider mt-1">Recommended for enterprise assets</span>
                </div>
                <Switch 
                  checked={form.insuranceRequired}
                  onCheckedChange={(val) => setForm({ ...form, insuranceRequired: val })}
                />
              </div>
            </div>

            <Button 
              onClick={handleGenerate}
              disabled={loading || !form.origin || !form.destination}
              className="w-full h-20 text-[10px] font-black tracking-[0.4em] uppercase bg-white text-black hover:bg-white/90 rounded-none transition-all duration-500 reveal-on-scroll"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Calculator className="mr-4" />}
              INITIATE AI CALCULATION
            </Button>
          </div>

          <div className="relative h-full">
            {result ? (
              <div className="animate-in fade-in zoom-in-95 duration-700 bg-white/5 backdrop-blur-3xl p-10 border border-white/10 rounded-none sticky top-24">
                <div className="absolute -top-4 -right-4 bg-white text-black text-[9px] font-black px-4 py-2 rotate-12 shadow-2xl tracking-widest uppercase">
                  AI VERIFIED
                </div>
                
                <h4 className="text-white/30 font-bold tracking-[0.5em] uppercase text-[10px] mb-8">Quote Summary</h4>
                
                <div className="flex items-baseline gap-4 mb-10">
                  <span className="text-6xl font-black text-white tracking-tighter">${result.estimatedCostUsd.toLocaleString()}</span>
                  <span className="text-white/40 font-bold tracking-widest text-xs">USD</span>
                </div>

                <div className="grid grid-cols-2 gap-12 mb-12">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/30 text-[9px] uppercase font-black tracking-widest">
                      <Calendar size={14} /> Transit Time
                    </div>
                    <div className="text-2xl font-black text-white uppercase tracking-tighter">{result.estimatedTransitTimeDays} Days</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/30 text-[9px] uppercase font-black tracking-widest">
                      <DollarSign size={14} /> Currency
                    </div>
                    <div className="text-2xl font-black text-white tracking-tighter">{result.currency}</div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] block mb-4">Cost Breakdown</span>
                    <div className="text-[11px] text-white/80 leading-relaxed bg-white/[0.03] p-6 border border-white/5 font-light">
                      {result.costBreakdown}
                    </div>
                  </div>
                  {result.optimizedRouteSuggestion && (
                    <div>
                      <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] block mb-4">Routing Suggestion</span>
                      <p className="text-[11px] text-white/80 leading-relaxed font-light italic">
                        {result.optimizedRouteSuggestion}
                      </p>
                    </div>
                  )}
                  <div className="flex items-start gap-3 text-[8px] text-white/20 leading-tight uppercase tracking-widest font-bold">
                    <Info size={14} className="shrink-0" />
                    {result.notes}
                  </div>
                </div>

                <Button className="w-full mt-12 h-16 bg-white text-black hover:bg-white/90 font-black rounded-none text-[10px] tracking-[0.3em] uppercase transition-all duration-500 group">
                  PROCEED WITH BOOKING <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={16} />
                </Button>
              </div>
            ) : (
              <div className="h-full min-h-[600px] flex flex-col items-center justify-center text-center bg-white/[0.02] border border-dashed border-white/5 p-12 reveal-on-scroll">
                <div className="w-24 h-24 border border-white/5 flex items-center justify-center mb-8 bg-white/[0.01]">
                  {loading ? <Loader2 className="text-white/20 animate-spin" size={32} /> : <Calculator className="text-white/10" size={32} />}
                </div>
                <h4 className="text-xl font-black text-white tracking-tighter uppercase mb-4">Awaiting Parameters</h4>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] max-w-xs leading-relaxed">
                  Fill in the logistics details to establish AI protocol and generate dynamic pricing.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
