"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Instantiate Lenis smooth-scrolling engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    // Handle frame animation requests
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger for flawless scroll reveals
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([gsapModule, scrollTriggerModule]) => {
        const gsap = gsapModule.default;
        const ScrollTrigger = scrollTriggerModule.default;
        
        gsap.registerPlugin(ScrollTrigger);

        // Update ScrollTrigger and progress indicator on Lenis scroll
        lenis.on("scroll", (e: any) => {
          ScrollTrigger.update();
          const progressEl = document.getElementById("scrollProgress");
          if (progressEl) {
            // Fallback to calculation if progress field is missing
            const progress = typeof e.progress === "number" 
              ? e.progress 
              : window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            progressEl.style.transform = `scaleX(${progress})`;
          }
        });

        // Set ScrollTrigger proxy
        ScrollTrigger.scrollerProxy(document.body, {
          scrollTop(value) {
            if (arguments.length) {
              lenis.scrollTo(value as number);
              return;
            }
            return lenis.scroll;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
        });
      })
      .catch((err) => {
        console.error("GSAP ScrollTrigger binding error:", err);
      });

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
