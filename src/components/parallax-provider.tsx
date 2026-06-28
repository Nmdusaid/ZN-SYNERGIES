"use client";

import { useEffect } from "react";

const DEFAULT_SPEEDS = [0.06, 0.1, 0.14, 0.18, 0.22];
const MAX_OFFSET = 40;

export function ParallaxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('.parallax-page [data-parallax-speed]')
    );

    if (!targets.length) {
      return;
    }

    let ticking = false;

    const updateParallax = () => {
      const viewHeight = window.innerHeight;

      targets.forEach((element, idx) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewHeight) {
          return;
        }

        const elementSpeed = Number(element.dataset.parallaxSpeed);
        const speed = Number.isFinite(elementSpeed) && elementSpeed > 0 ? elementSpeed : DEFAULT_SPEEDS[idx % DEFAULT_SPEEDS.length];
        const centerY = rect.top + rect.height * 0.5;
        const distance = centerY - viewHeight * 0.5;
        const offset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, distance * speed));

        element.style.transform = `translate3d(0, ${offset}px, 0)`;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return <>{children}</>;
}
