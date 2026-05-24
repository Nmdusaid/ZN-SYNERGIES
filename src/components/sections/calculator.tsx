"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Loader2, Calculator, ArrowRight, DollarSign, Calendar, Info } from 'lucide-react';
import { smartFreightQuoteGenerator, SmartFreightQuoteGeneratorOutput } from '@/ai/flows/smart-freight-quote-generator';

export function FreightCalculator() {
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
    try {
      const quote = await smartFreightQuoteGenerator({
        ...form,
        customsDeclarationRequired: true,
      });
      setResult(quote);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="py-24 px-6 bg-[#0B0C0E] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Enterprise Quoting</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">SMART FREIGHT CALCULATOR</h3>
              <p className="text-muted-foreground text-lg">
                Utilize our proprietary GenAI engine to generate instant, dynamic pricing estimates for your global movements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Origin</Label>
                <Input 
                  value={form.origin}
                  onChange={(e) => setForm({ ...form, origin: e.target.value })}
                  placeholder="e.g. Shanghai Port, CN" 
                  className="bg-white/5 border-white/10 h-12"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Destination</Label>
                <Input 
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                  placeholder="e.g. Los Angeles, USA" 
                  className="bg-white/5 border-white/10 h-12"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Weight (KG)</Label>
                <Input 
                  type="number"
                  value={form.weightKg}
                  onChange={(e) => setForm({ ...form, weightKg: Number(e.target.value) })}
                  className="bg-white/5 border-white/10 h-12"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Volume (CBM)</Label>
                <Input 
                  type="number"
                  value={form.volumeCbm}
                  onChange={(e) => setForm({ ...form, volumeCbm: Number(e.target.value) })}
                  className="bg-white/5 border-white/10 h-12"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Service Type</Label>
                <Select value={form.serviceType} onValueChange={(val) => setForm({ ...form, serviceType: val })}>
                  <SelectTrigger className="bg-white/5 border-white/10 h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Air Freight">Air Freight</SelectItem>
                    <SelectItem value="Sea Freight">Sea Freight</SelectItem>
                    <SelectItem value="Road Transport">Road Transport</SelectItem>
                    <SelectItem value="Multimodal">Multimodal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-muted-foreground">Urgency</Label>
                <Select value={form.urgency} onValueChange={(val) => setForm({ ...form, urgency: val })}>
                  <SelectTrigger className="bg-white/5 border-white/10 h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="Express">Express</SelectItem>
                    <SelectItem value="Critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
                <div className="flex flex-col">
                  <span className="text-sm font-bold">Hazardous Materials</span>
                  <span className="text-xs text-muted-foreground">Requires special handling documentation</span>
                </div>
                <Switch 
                  checked={form.hazardousMaterials}
                  onCheckedChange={(val) => setForm({ ...form, hazardousMaterials: val })}
                />
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
                <div className="flex flex-col">
                  <span className="text-sm font-bold">Cargo Insurance</span>
                  <span className="text-xs text-muted-foreground">Recommended for high-value enterprise assets</span>
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
              className="w-full h-16 text-lg font-bold bg-white text-background hover:bg-white/90 rounded-2xl"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Calculator className="mr-2" />}
              GENERATE DYNAMIC QUOTE
            </Button>
          </div>

          <div className="relative">
            {result ? (
              <div className="animate-in fade-in zoom-in-95 duration-500 glass-morphism p-10 rounded-3xl border-accent/20 sticky top-24">
                <div className="absolute -top-4 -right-4 bg-accent text-background text-xs font-black p-3 rounded-xl rotate-12 shadow-xl">
                  AI VERIFIED
                </div>
                
                <h4 className="text-accent font-bold tracking-widest uppercase text-xs mb-6">Quote Summary</h4>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black text-white">${result.estimatedCostUsd.toLocaleString()}</span>
                  <span className="text-muted-foreground font-bold">USD</span>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase font-bold">
                      <Calendar size={14} /> Transit Time
                    </div>
                    <div className="text-xl font-bold">{result.estimatedTransitTimeDays} Days</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase font-bold">
                      <DollarSign size={14} /> Currency
                    </div>
                    <div className="text-xl font-bold">{result.currency}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Cost Breakdown</span>
                    <p className="text-sm text-white/80 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                      {result.costBreakdown}
                    </p>
                  </div>
                  {result.optimizedRouteSuggestion && (
                    <div>
                      <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Routing Suggestion</span>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {result.optimizedRouteSuggestion}
                      </p>
                    </div>
                  )}
                  <div className="flex items-start gap-2 text-[10px] text-muted-foreground leading-tight italic">
                    <Info size={12} className="shrink-0 mt-0.5" />
                    {result.notes}
                  </div>
                </div>

                <Button className="w-full mt-10 h-14 bg-accent text-background hover:bg-accent/90 font-bold rounded-xl group">
                  PROCEED WITH BOOKING <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </div>
            ) : (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center glass-morphism rounded-3xl border-dashed border-white/10 p-12">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <Calculator className="text-muted-foreground/50" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Awaiting Parameters</h4>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Fill in the logistics details to the left to generate an AI-powered smart freight estimate.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}