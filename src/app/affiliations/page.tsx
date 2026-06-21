
"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/sections/footer';
import { ShieldCheck, Award, Globe, FileCheck, Anchor } from 'lucide-react';

const affiliations = [
  {
    name: "WCA Inter Global",
    id: "affil-wca",
    role: "World's Largest Network",
    description: "Exclusive member of the WCA Inter Global network, providing audited and secure global movement capabilities across 190 countries.",
    imageUrl: "/images/bcba.png"
  },
  {
    name: "CCHAA",
    id: "affil-cchaa",
    role: "Chennai Custom House Agents' Association",
    description: "A prestigious member of the Chennai Custom House Agents' Association, ensuring excellence in customs clearance and regulatory compliance within India's primary maritime hub.",
    imageUrl: "/images/bchaai.png"
  },
  {
    name: "FIATA",
    id: "affil-fiata",
    role: "Federation of Forwarders",
    description: "Adhering to the international standards of the International Federation of Freight Forwarders Associations for multimodal excellence.",
    imageUrl: "/images/fiata.png"
  },
  {
    name: "IATA",
    id: "affil-iata",
    role: "ocean carriers and shipping",
    description: "The Federal Maritime Commission is a U.S. agency that oversees and regulates international shipping by sea",
    imageUrl: "/images/eagle.png"
  },
  {
    name: "FFI",
    id: "affil-ffi",
    role: "FFI (Freight Forwarding Industry)",
    description:"FFI refers to companies that arrange and manage the transportation of goods from one place to another on behalf of customers.",
    imageUrl: "/images/ffi.png"
  }
  
];

// Added affiliations
const additionalAffiliations = [
  {
    name: "MTO",
    id: "affil-bifa",
    role: "Maintenance Technique Optimization (MTO)",
    description:"Maintenance Technique Optimization is the process of selecting the best maintenance methods to improve equipment reliability and reduce costs.",
    imageUrl: "/images/mto.png"
  },
  {
    name: "olo family",
    id: "affil-cscmp",
    role: "Supply Chain Leadership",
    description: "A group of related logistics and supply chain services working together to provide end-to-end transportation solutions..",
    imageUrl: "/images/olo.png"
  },
  {
    name: "CCHA",
    id: "affil-clecat",
    role: "European Forwarding",
    description: "CLECAT member representing European freight forwarders, promoting efficient and secure cross-border logistics.",
    imageUrl: "/images/cch.JPEG"
  },
    {
    name: "WCA World  ",
    id: "affil-clecat",
    role: "European Forwarding",
    description: "A global network that connects logistics and freight companies to collaborate and provide international shipping services.",
    imageUrl: "/images/wca world.png"
  },

];

// merge additional affiliations into main list
affiliations.push(...additionalAffiliations);

export default function AffiliationsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <section className="pt-40 md:pt-60 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="max-w-4xl mb-24 md:mb-40">
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter uppercase leading-[0.95] md:leading-[0.85] mb-12">
              STRATEGIC<br />
              <span className="text-foreground/40">AFFILIATIONS.</span>
            </h1>
            <p className="text-foreground/50 text-lg md:text-2xl font-light leading-relaxed max-w-2xl">
              ZN Synergies is proud to be part of the world's most elite logistics networks. Our affiliations ensure that your assets move within a secure, audited, and globally compliant infrastructure.
            </p>
          </div>

          {/* Affiliations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {affiliations.map((item, idx) => (
              <div key={idx} className="bg-background p-12 md:p-16 flex flex-col items-center md:items-start group border border-transparent dark:border-foreground/10 transition-colors duration-300 transition-transform duration-1000 ease-in-out will-change-transform hover:-translate-y-2 hover:shadow-xl hover:border-foreground/20">
                <div className="relative self-center w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-12 transition-all duration-700">
                      <Image 
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        quality={100}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                
                <div className="space-y-4 text-center md:text-left">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/30 font-black block">
                    {item.role}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tighter">
                    {item.name}
                  </h2>
                  <div className="w-12 h-px bg-foreground/10 group-hover:w-full transition-all duration-700 mt-6" />
                  <p className="text-foreground/50 text-xs md:text-sm font-light leading-relaxed pt-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-32 md:mt-48 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-foreground/5 pt-20">
            {[
              { icon: <ShieldCheck size={24} />, label: "Security Audited" },
              { icon: <Award size={24} />, label: "Globally Certified" },
              { icon: <Globe size={24} />, label: "190+ Countries" },
              { icon: <FileCheck size={24} />, label: "Customs Compliant" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 group">
                <div className="text-foreground/20 group-hover:text-foreground transition-colors">
                  {stat.icon}
                </div>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-foreground/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
