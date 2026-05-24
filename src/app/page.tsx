"use client";

import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Tracker } from '@/components/sections/tracker';
import { FreightCalculator } from '@/components/sections/calculator';
import { FleetShowcase } from '@/components/sections/fleet';
import { PerformanceHUD } from '@/components/sections/stats';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <PerformanceHUD />
      <Services />
      <Tracker />
      <FreightCalculator />
      <FleetShowcase />
      <Footer />
    </main>
  );
}