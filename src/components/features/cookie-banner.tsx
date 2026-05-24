"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('zn-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('zn-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-6 animate-in slide-in-from-bottom-full duration-700">
      <div className="max-w-4xl mx-auto bg-foreground text-background p-6 md:p-8 border border-background/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-2 opacity-50">Privacy Protocol</h4>
          <p className="text-xs md:text-sm font-light leading-relaxed">
            We use digital identifiers (cookies) to enhance your strategic logistics experience and analyze global traffic patterns. By continuing to navigate ZN Synergies, you acknowledge our data management protocols.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          <Button 
            onClick={acceptCookies}
            className="bg-background text-foreground hover:bg-background/90 rounded-none h-12 px-8 text-[10px] uppercase tracking-[0.2em] font-black"
          >
            Accept Protocol
          </Button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-background/40 hover:text-background transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
