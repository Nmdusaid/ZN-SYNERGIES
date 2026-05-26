"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Zap, Activity, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatAssistant } from '@/ai/flows/chat-flow';
import { cn } from '@/lib/utils';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', content: string }[]>([
    { 
      role: 'model', 
      content: "SYSTEM ONLINE: ZN Intelligence Node Active. How can I assist your logistics strategy or provide information on our global hubs today?"
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
      setMessages(prev => [...prev, { role: 'model', content: 'PROTOCOL ERROR: Intelligence link unstable. Please re-initiate command.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-[420px] bg-background border border-foreground/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col h-[600px] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 overflow-hidden">
          {/* Advanced Terminal Header */}
          <div className="p-4 border-b border-foreground/10 flex justify-between items-center bg-foreground/[0.03] relative">
            <div className="flex items-center gap-3">
              <div className="relative w-2 h-2">
                <div className="absolute inset-0 bg-foreground rounded-full animate-ping opacity-20" />
                <div className="absolute inset-0 bg-foreground rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.3em] font-black">ZN Intelligence Node</span>
                <span className="text-[7px] uppercase tracking-widest text-foreground/40 font-bold">Secure Connection Established</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-foreground/40 hover:text-foreground p-2"
              aria-label="Close Terminal"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Scanning Animation Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/20 animate-scan pointer-events-none" />

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            {messages.map((m, i) => (
              <div key={i} className={cn(
                "flex flex-col gap-2 max-w-[90%] animate-in fade-in slide-in-from-bottom-2 duration-500",
                m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
              )}>
                <div className={cn(
                  "p-4 border text-[11px] leading-relaxed tracking-wide",
                  m.role === 'user' 
                    ? "bg-foreground text-background border-foreground" 
                    : "border-foreground/10 bg-background/90 backdrop-blur-md text-foreground/80"
                )}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto flex flex-col gap-2 max-w-[85%]">
                <div className="p-4 border border-foreground/10 bg-foreground/5 flex items-center gap-3">
                  <Activity size={12} className="animate-spin text-foreground/40" />
                  <span className="text-[8px] uppercase tracking-[0.4em] font-black text-foreground/40">Querying Corporate Grid...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Terminal */}
          <div className="p-4 border-t border-foreground/10 bg-background">
            <div className="flex gap-2">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="INPUT COMMAND..."
                className="bg-foreground/[0.03] border-foreground/10 h-12 rounded-none text-[9px] tracking-widest uppercase font-bold focus:ring-0"
              />
              <Button 
                onClick={handleSend} 
                disabled={isLoading} 
                className="bg-foreground text-background h-12 w-12 rounded-none"
              >
                <Send size={14} />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        /* Enhanced Advanced Trigger Button */
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-foreground text-background flex items-center justify-center transition-all duration-500 shadow-2xl overflow-visible"
          aria-label="Access AI Terminal"
        >
          {/* Orbital Rings - Decorative */}
          <div className="absolute inset-0 border border-foreground/20 rounded-full animate-ping opacity-10" />
          
          <div className="relative z-10">
            <Bot size={24} className="group-hover:scale-110 transition-transform duration-500" />
            <Zap size={8} className="absolute -top-1 -right-1 text-background animate-pulse" />
          </div>
          
          {/* Status Indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background shadow-lg" />
        </button>
      )}
    </div>
  );
}
