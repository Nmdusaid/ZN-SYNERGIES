
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

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

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-12 py-8",
        isScrolled ? "bg-black/90 backdrop-blur-2xl border-b border-white/10 py-6" : "bg-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-white">
            <Globe className="text-white" size={18} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            ZN <span className="text-white/40">SYNERGIES</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/50 hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-10">
          <Button 
            className="bg-white text-black hover:bg-white/90 text-[11px] uppercase tracking-[0.3em] font-black px-10 h-14 rounded-none"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 relative z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-black z-50 transition-transform duration-500 md:hidden flex flex-col items-center justify-center",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Secondary Exit for UX */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-10 right-12 text-white/40 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-4xl font-black uppercase tracking-tighter hover:text-white/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="mt-12 bg-white text-black text-lg py-10 px-16 uppercase tracking-[0.3em] font-black rounded-none"
            onClick={() => {
              setIsMobileMenuOpen(false);
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>
  );
}
