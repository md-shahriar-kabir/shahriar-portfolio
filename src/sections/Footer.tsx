"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Orbit } from "lucide-react";

const FOOT_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  const { name, socials } = portfolioData.personalInfo;

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative bg-[#02000e] border-t border-white/[0.04] py-16 px-6 sm:px-12 overflow-hidden z-10 select-none">
      {/* Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute bottom-[-10%] left-[20%] w-[30vw] h-[30vw] bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[30vw] h-[30vw] bg-cyan-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-10">
        
        {/* Core row structure */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-10">
          
          {/* Logo Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href="#home"
              onClick={scrollToTop}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8.5 h-8.5 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:rotate-12 transition-transform duration-300">
                <Orbit className="w-4.5 h-4.5" />
              </div>
              <span className="font-mono text-sm tracking-widest font-black uppercase text-white">
                Shahriar<span className="text-cyan-400">.dev</span>
              </span>
            </a>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1.5 font-bold">
              Mastering the full MERN pipeline
            </p>
          </div>

          {/* Quick links list */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {FOOT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[11px] uppercase font-bold tracking-wider text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Core channels links */}
          <div className="flex items-center gap-2.5">
            {[
              { 
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                ),
                link: socials.github 
              },
              { 
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ), 
                link: socials.linkedin 
              },
              { 
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ), 
                link: socials.facebook 
              }
              // { 
              //   icon: (
              //     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              //       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              //     </svg>
              //   ), 
              //   link: socials.twitter 
              // }
            ].map((soc, idx) => {
              return (
                <a
                  key={idx}
                  href={soc.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8.5 h-8.5 rounded-lg border border-white/[0.06] bg-white/[0.005] hover:border-purple-400 hover:text-purple-400 flex items-center justify-center text-slate-400 transition-all shadow-md hover:scale-105"
                >
                  {soc.icon}
                </a>
              );
            })}
          </div>

        </div>

        {/* Footer Base Credits */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5 font-mono text-[9px] text-slate-500 uppercase tracking-widest">
          
          <div className="order-2 sm:order-1 text-center sm:text-left font-bold">
            MD Shahriar Kabir © 2026 • ALL RIGHTS RESERVED
          </div>

          {/* Scroll to Top Trigger */}
          <button
            onClick={scrollToTop}
            className="order-1 sm:order-2 w-9 h-9 rounded-lg border border-white/[0.06] bg-white/[0.002] hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center text-slate-500 transition-all hover:scale-110 shadow-lg cursor-pointer group"
            title="Scroll back to initialization core"
          >
            <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <div className="order-3 text-center sm:text-right font-bold">
            Built with <span className="text-cyan-400">Next.js 15</span> & <span className="text-purple-400">Tailwind CSS</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
