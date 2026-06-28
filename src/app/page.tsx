
"use client";

import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { AboutUs } from '@/components/sections/about';
import { Methodology } from '@/components/sections/methodology';
import { EnterpriseTiers } from '@/components/sections/tiers';
import { FleetShowcase } from '@/components/sections/fleet';
import { Industries } from '@/components/sections/industries';
import { Sustainability } from '@/components/sections/sustainability';
import { Locations } from '@/components/sections/locations';
import { Clients } from '@/components/sections/clients';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { CallToAction } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';
import { CookieBanner } from '@/components/features/cookie-banner';
import { AnalyticsDashboard } from '@/components/sections/dashboard-preview';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const delay = target.dataset.revealDelay;
          if (delay) {
            target.style.transitionDelay = delay;
          }
          target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll<HTMLElement>('.parallax-page section, .reveal-on-scroll');
    elements.forEach((el, idx) => {
      if (!el.dataset.revealDelay) {
        el.dataset.revealDelay = `${Math.min(300, idx * 70)}ms`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="parallax-page relative bg-background min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Methodology />
      <EnterpriseTiers />
      <AnalyticsDashboard />
      <Clients />
      <Testimonials />
      <FleetShowcase />
      <Industries />
      <Sustainability />
      <FAQ />
      <Locations />
      <CallToAction />
      <Footer />
      <CookieBanner />
    </main>
  );
}
