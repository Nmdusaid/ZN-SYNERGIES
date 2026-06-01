
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Globe, Plane, Truck, Ship, Warehouse } from 'lucide-react';
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#footer' },
  ];

  const quoteMailto = "mailto:usaid6765@gmail.com?subject=Enterprise Quote Inquiry&body=I would like to request a quote for the following logistics operations:";

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-12 py-6 md:py-8",
        isScrolled ? "bg-background/90 backdrop-blur-2xl border-b border-foreground/10 py-4 md:py-6" : "bg-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Cinematic Logo Identity with Orbital Galaxy */}
        <div 
          className="flex items-center gap-3 md:gap-6 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            {/* Central Spinning Globe */}
            <Globe 
              className="text-foreground animate-[spin_10s_linear_infinite] relative z-10 w-6 h-6 md:w-7 md:h-7" 
            />
            
            {/* Orbital Icon Galaxy */}
            <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
              {/* Flight Icon - Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
                <Plane className="text-foreground/80 rotate-45 w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
              
              {/* Ship Icon - Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1">
                <Ship className="text-foreground/80 w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
              
              {/* Truck Icon - Left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1">
                <Truck className="text-foreground/80 w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>

              {/* Warehouse Icon - Right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1">
                <Warehouse className="text-foreground/80 w-3 h-3 md:w-3.5 md:h-3.5" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-black tracking-tighter text-foreground uppercase leading-none">
              ZN <span className="text-foreground/40">SYNERGIES</span>
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-bold text-foreground/50 hover:text-foreground transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-6">
          <ThemeToggle />
          <a 
            href={quoteMailto}
            className="bg-foreground text-background hover:bg-foreground/90 text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-black px-6 lg:px-10 h-12 lg:h-14 rounded-none flex items-center justify-center transition-colors no-underline"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2 relative z-[60]">
          <ThemeToggle />
          <button 
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-background z-50 transition-transform duration-500 md:hidden flex flex-col items-center justify-center",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center gap-8 w-full px-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-black uppercase tracking-tighter hover:text-foreground/50 transition-colors no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={quoteMailto}
            className="mt-6 bg-foreground text-background text-base py-6 px-10 uppercase tracking-[0.2em] font-black rounded-none flex items-center justify-center transition-colors w-full no-underline text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
