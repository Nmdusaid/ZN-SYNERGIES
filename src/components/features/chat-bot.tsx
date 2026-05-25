
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Loader2, Bot, Zap, Globe, ShieldCheck, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatAssistant } from '@/ai/flows/chat-flow';
import { cn } from '@/lib/utils';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', content: string }[]>([
    { 
      role: 'model', 
      content: "SYSTEM ONLINE: ZN Intelligence Terminal Active.\n\nWelcome to ZN Synergies. I am your specialized logistics strategist. How may I assist your global operations today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatAssistant({ message: userMsg, history: messages });
      setMessages(prev => [...prev, { role: 'model', content: response.response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: 'PROTOCOL ERROR: Connection latency detected. Please re-verify link.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-[420px] bg-background border border-foreground/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col h-[650px] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 overflow-hidden">
          {/* Advanced Header */}
          <div className="p-4 border-b border-foreground/10 flex justify-between items-center bg-foreground/[0.03] relative">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-foreground rounded-full animate-ping opacity-20" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black">ZN Intelligence Terminal</span>
                <span className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold">Secure AI Node: SIN-449</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-10 h-10 flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all group"
              aria-label="Close Terminal"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            {/* Scanning Line Animation */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent animate-pulse" />
          </div>
          
          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-90">
            {messages.map((m, i) => (
              <div key={i} className={cn(
                "flex flex-col gap-2 max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-500",
                m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
              )}>
                <div className={cn(
                  "p-4 border text-[11px] leading-relaxed tracking-wide",
                  m.role === 'user' 
                    ? "bg-foreground text-background border-foreground shadow-lg" 
                    : "border-foreground/10 bg-background/80 backdrop-blur-md text-foreground/80"
                )}>
                  {m.content}
                </div>
                <span className="text-[8px] uppercase tracking-widest text-foreground/30 font-bold">
                  {m.role === 'user' ? 'Client' : 'ZN-AI'} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto flex flex-col gap-3 max-w-[85%] animate-pulse">
                <div className="p-4 border border-foreground/10 bg-foreground/5 flex items-center gap-3">
                  <Activity size={12} className="animate-spin text-foreground/40" />
                  <span className="text-[9px] uppercase tracking-[0.3em] font-black text-foreground/40">Decrypting Logistics Data...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions (The "Advanced" part) */}
          {!isLoading && messages.length < 3 && (
            <div className="px-6 py-4 flex flex-wrap gap-2 bg-foreground/[0.02] border-t border-foreground/5">
              {['Quote Inquiry', 'Shipment Status', 'Route Intel'].map((action) => (
                <button 
                  key={action}
                  onClick={() => {
                    setInput(action);
                    setTimeout(() => handleSend(), 100);
                  }}
                  className="text-[9px] uppercase tracking-widest px-3 py-1.5 border border-foreground/10 hover:border-foreground hover:bg-foreground hover:text-background transition-all font-bold"
                >
                  {action}
                </button>
              ))}
            </div>
          )}

          {/* Input Terminal */}
          <div className="p-4 border-t border-foreground/10 bg-background relative">
            <div className="flex gap-2">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="INPUT COMMAND..."
                className="bg-foreground/[0.03] border-foreground/10 h-12 rounded-none text-[10px] tracking-widest uppercase font-bold focus:ring-0 focus:border-foreground/40 transition-all"
              />
              <Button 
                onClick={handleSend} 
                disabled={isLoading} 
                className="bg-foreground text-background h-12 w-12 rounded-none hover:bg-foreground/90 transition-all active:scale-95"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        /* Advanced Trigger Button */
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-20 h-20 bg-foreground text-background flex items-center justify-center transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:scale-105"
          aria-label="Access AI Terminal"
        >
          {/* Orbital Rings */}
          <div className="absolute inset-0 border border-foreground/10 rounded-full animate-ping opacity-20" />
          <div className="absolute inset-[-8px] border border-foreground/5 rounded-full animate-spin-slow" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              <Bot size={28} className="group-hover:scale-110 transition-transform duration-500" />
              <Zap size={10} className="absolute -top-1 -right-1 text-background fill-background animate-pulse" />
            </div>
            <span className="text-[8px] font-black uppercase tracking-[0.2em] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Terminal</span>
          </div>

          {/* Status Glow */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse" />
        </button>
      )}
    </div>
  );
}
