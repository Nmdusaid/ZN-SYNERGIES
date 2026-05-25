
"use client";

import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { AboutUs } from '@/components/sections/about';
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
      <Services />
      <CallToAction />
      <Footer />
      <ChatBot />
      <CookieBanner />
    </main>
  );
}
