
"use client";

import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { AboutUs } from '@/components/sections/about';
import { Locations } from '@/components/sections/locations';
import { Tracker } from '@/components/sections/tracker';
import { FreightCalculator } from '@/components/sections/calculator';
import { FleetShowcase } from '@/components/sections/fleet';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Tracker />
      <FreightCalculator />
      <Locations />
      <FleetShowcase />
      <Footer />
    </main>
  );
}
