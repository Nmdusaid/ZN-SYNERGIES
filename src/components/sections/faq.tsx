
"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the primary transit times for your global air freight protocols?",
    answer: "Our priority aviation protocols typically ensure delivery within 24-72 hours across major global hubs. Critical movements utilize our next-flight-out strategy for maximum velocity."
  },
  {
    question: "How does ZN Synergies manage complex customs clearance in India?",
    answer: "As an AEO certified partner and a member of the Chennai Custom House Agents' Association (CCHAA), we utilize automated EDI filing to navigate regulatory frameworks with sub-2-hour latency."
  },
  {
    question: "What security measures are in place for high-value enterprise assets?",
    answer: "We deploy Level 05 Alpha security, including biometric verification, 24/7 AI-driven surveillance, and real-time GPS geofencing with remote ignition interlock for terrestrial movements."
  },
  {
    question: "Can you handle temperature-sensitive pharmaceutical logistics?",
    answer: "Yes. Our warehousing infrastructure is GDP Pharma Certified and TAPA FSR Level A audited, providing climate-controlled storage from -80°C to ambient levels."
  },
  {
    question: "What is your commitment to environmental sustainability?",
    answer: "We are committed to a Net Zero 2040 roadmap. This includes the deployment of hydrogen-hybrid vessels and autonomous electric fleets to minimize the carbon footprint of global supply chains."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-48 px-6 bg-background relative overflow-hidden border-t border-foreground/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
          <h2 className="text-foreground/30 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Intelligence Node</h2>
          <h3 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none">
            STRATEGIC<br />
            <span className="text-foreground/40 text-stroke">Q&A.</span>
          </h3>
        </div>

        <div className="reveal-on-scroll">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-foreground/10 px-6 md:px-10 bg-foreground/[0.01] hover:bg-foreground/[0.02] transition-colors">
                <AccordionTrigger className="text-left text-sm md:text-lg font-black uppercase tracking-tight py-8 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/50 text-xs md:text-base font-light leading-relaxed pb-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
