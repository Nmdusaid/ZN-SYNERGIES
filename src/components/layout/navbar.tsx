
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Globe, Plane, Ship, Truck } from 'lucide-react';
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
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const quoteMailto = "mailto:usaid6765@gmail.com?subject=Enterprise Quote Inquiry&body=I would like to request a quote for the following logistics operations:";

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-8",
        isScrolled ? "bg-background/90 backdrop-blur-2xl border-b border-foreground/10 py-6" : "bg-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Enhanced Multi-Symbol Logo */}
        <div className="flex items-center gap-5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-16 h-16 border border-foreground/20 flex flex-col items-center justify-center p-2 transition-all duration-500 group-hover:border-foreground bg-background/5">
            <Globe className="text-foreground mb-1 group-hover:scale-110 transition-transform duration-500" size={22} />
            <div className="flex items-center gap-1.5 text-foreground/40 group-hover:text-foreground transition-colors mb-1">
              <Plane size={10} />
              <Ship size={10} />
              <Truck size={10} />
            </div>
            <span className="text-[7px] font-black tracking-[0.3em] text-foreground/30 uppercase group-hover:text-foreground transition-colors">FIATA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-foreground uppercase leading-[0.8]">
              ZN <span className="text-foreground/40">SYNERGIES</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-foreground/20 uppercase mt-2">
              Global Logistics Excellence
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 lg:gap-16">
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
            className="bg-foreground text-background hover:bg-foreground/90 text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-black px-8 lg:px-10 h-14 rounded-none flex items-center justify-center transition-colors no-underline"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 relative z-[60]">
          <ThemeToggle />
          <button 
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-background z-50 transition-transform duration-500 md:hidden flex flex-col items-center justify-center",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-10 right-8 text-foreground/40 hover:text-foreground transition-colors"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center gap-10 w-full px-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-black uppercase tracking-tighter hover:text-foreground/50 transition-colors no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={quoteMailto}
            className="mt-8 bg-foreground text-background text-lg py-8 px-12 uppercase tracking-[0.3em] font-black rounded-none flex items-center justify-center transition-colors w-full no-underline text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
