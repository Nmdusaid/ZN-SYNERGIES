"use client";

import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { AboutUs } from '@/components/sections/about';
import { AnalyticsDashboard } from '@/components/sections/dashboard-preview';
import { Methodology } from '@/components/sections/methodology';
import { EnterpriseTiers } from '@/components/sections/tiers';
import { FleetShowcase } from '@/components/sections/fleet';
import { Industries } from '@/components/sections/industries';
import { Sustainability } from '@/components/sections/sustainability';
import { Locations } from '@/components/sections/locations';
import { Clients } from '@/components/sections/clients';
import { CallToAction } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';
import { ChatBot } from '@/components/features/chat-bot';
import { CookieBanner } from '@/components/features/cookie-banner';

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
    <main className="relative bg-background min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <AnalyticsDashboard />
      <Services />
      <Methodology />
      <EnterpriseTiers />
      <Clients />
      <FleetShowcase />
      <Industries />
      <Sustainability />
      <Locations />
      <CallToAction />
      <Footer />
      <ChatBot />
      <CookieBanner />
    </main>
  );
}