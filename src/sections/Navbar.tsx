"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { Menu, X, Orbit, Sparkles, SparklesIcon, BookAIcon, StarHalfIcon, BookOpen, SpaceIcon, Space, Globe } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track window scroll coordinates for active links and sticky navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active link algorithm
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offset = 80; // Navbar offset height
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
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 sm:px-12 py-4 ${
          scrolled 
            ? "bg-slate-950/75 border-b border-white/[0.06] backdrop-blur-md shadow-2xl py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Branding */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400">
                <Orbit className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <span className="font-mono text-sm tracking-widest font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Shahriar<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-[12px] uppercase font-semibold tracking-widest transition-all duration-300 relative py-1 ${
                    isActive 
                      ? "text-cyan-400 font-extrabold" 
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Controls: Theme & Hamburger */}
          <div className="flex items-center gap-4">
            {/* Theme Customizer Switch */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 transition-all duration-300 shadow-xl overflow-hidden group cursor-pointer"
              title={`Switch to ${theme === "space" ? "Neon Cyberpunk" : "Cosmic Space"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center">
                {theme === "space" ? (
                  <Globe className="w-4.5 h-4.5 text-cyan-400 animate-pulse" />
                ) : (
                  <Orbit className="w-4.5 h-4.5 text-pink-400 animate-spin-slow" />
                )}
              </div>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/[0.02] border border-white/[0.08] text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-30 w-full max-w-sm bg-slate-950/95 border-l border-white/[0.06] backdrop-blur-2xl px-8 py-24 flex flex-col justify-between shadow-2xl"
          >
            {/* Ambient Background Blur inside Sidebar */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
              <div className="absolute top-[20%] left-[-20%] w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-[20%] right-[-20%] w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold border-b border-white/5 pb-4">
                Navigation Cores
              </span>
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-xl uppercase font-black tracking-widest transition-all duration-300 py-1 ${
                        isActive 
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pl-4 border-l-2 border-cyan-400" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer Area inside Drawer */}
            <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-white/[0.08] bg-white/[0.02] text-xs font-semibold uppercase tracking-wider text-slate-300 hover:border-cyan-500/30"
              >
                <span>Switch Theme Mode</span>
                <span className="text-cyan-400 font-black">{theme === "space" ? "SPACE" : "NEON"}</span>
              </button>
              <div className="text-[9px] font-mono text-slate-500 text-center uppercase tracking-widest">
                MD Shahriar Kabir © 2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
