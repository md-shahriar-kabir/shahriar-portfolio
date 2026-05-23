"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Download, Code, ArrowRight, MessageSquare } from "lucide-react";

export default function Hero() {
  const { name, title, tagline, typingTexts, socials } = portfolioData.personalInfo;
  
  // Typing animation states
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Mouse coordinate tracking for local spotlight glow
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = typingTexts[textIndex];
      
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(90);

        if (charIndex + 1 === currentWord.length) {
          setIsDeleting(true);
          setTypingSpeed(1800); // Wait on complete word
        }
      } else {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(45);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % typingTexts.length);
          setTypingSpeed(400); // pause before starting new word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, typingSpeed, typingTexts]);

  // Spotlight mouse track
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = heroRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlight({ x, y, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setSpotlight(prev => ({ ...prev, opacity: 0 }));
  };

  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
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
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden px-6 sm:px-12 z-10"
    >
      {/* Cinematic Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Ambient background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
        
        {/* Blob 1 */}
        <div className="absolute top-[15%] left-[5%] w-[45vw] h-[45vw] bg-purple-900/10 rounded-full blur-[140px] animate-float-blob" />
        {/* Blob 2 */}
        <div className="absolute bottom-[10%] right-[5%] w-[45vw] h-[45vw] bg-cyan-900/10 rounded-full blur-[140px] animate-float-blob-reverse" />
      </div>

      {/* Mouse follow Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out hidden md:block"
        style={{
          background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, rgba(var(--cyber-secondary), ${spotlight.opacity}), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Left Content Column (7 cols on large screens) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          {/* Futuristic Cyber Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-extrabold uppercase">
              System Boot Successful • Online
            </span>
          </motion.div>

          {/* Intro Headings */}
          <div className="space-y-3">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 font-mono text-sm tracking-widest uppercase"
            >
              Hi, I’m
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none"
            >
              {name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 min-h-[44px] flex items-center"
            >
              <span className="typing-cursor select-none">{typedText}</span>
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg font-medium"
          >
            {tagline}
          </motion.p>

          {/* Action CTAs Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            {/* CTA 1: View Projects */}
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-gradient-cyber hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer flex items-center gap-2 text-slate-950 btn-cyber"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* CTA 2: Hire Me */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 hover:scale-105 transition-all cursor-pointer flex items-center gap-2 text-white"
            >
              <span>Hire Me</span>
              <MessageSquare className="w-4 h-4" />
            </button>

            {/* CTA 3: Resume */}
            <a
              href={portfolioData.personalInfo.resumeUrl}
              className="px-6 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:scale-105 transition-all cursor-pointer flex items-center gap-2 text-white"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4 mt-8 border-t border-white/5 pt-6"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
              Access Core Channels
            </span>
            <div className="flex gap-2">
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
                },
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
                    className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 flex items-center justify-center text-slate-400 transition-all shadow-lg"
                  >
                    {soc.icon}
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Hero Right Column (Interactive Tech Console Avatar) (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[380px] lg:min-h-[460px]">
          
          {/* Cyber Portrait Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden group"
          >
            {/* Futuristic Tech Grid overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

            {/* Glowing Corner Borders */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

            {/* Scanning Laser Line */}
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)] z-10 top-0 animate-bounce" style={{ animationDuration: "5s" }} />

            {/* Glass Inner Frame */}
            <div className="relative w-full h-full rounded-lg bg-gradient-to-tr from-cyan-900/10 via-slate-950 to-purple-900/10 border border-white/5 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
              {/* Spinning visual compass */}
              <div className="absolute w-[200px] h-[200px] border border-dashed border-white/5 rounded-full animate-spin-slow opacity-30" />
              <div className="absolute w-[140px] h-[140px] border border-cyan-500/10 rounded-full animate-pulse-slow opacity-40" />

              {/* Developer Hologram Shell */}
              <div className="relative z-10 w-24 h-24 rounded-full border border-cyan-400/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-slate-950/80 mb-4">
                <Code className="w-10 h-10 text-cyan-400 animate-pulse" />
              </div>

              {/* Info Boot Log Output inside portrait */}
              <div className="relative z-10 space-y-1 font-mono text-[9px] text-slate-500 w-full text-left uppercase">
                <div className="text-cyan-400/80 flex justify-between"><span>Status:</span> <span className="font-extrabold text-[8px] tracking-wider text-emerald-400 animate-pulse">SYSTEM_ONLINE</span></div>
                <div className="flex justify-between"><span>Core ID:</span> <span className="text-white">Shahriar Kabir</span></div>
                <div className="flex justify-between"><span>Stack:</span> <span className="text-white">MERN / NextJS 15</span></div>
                <div className="flex justify-between"><span>Auth Level:</span> <span className="text-white">Full-Stack Arch</span></div>
                <div className="flex justify-between"><span>Loc IP:</span> <span className="text-white">127.0.0.1:3000</span></div>
              </div>
            </div>
          </motion.div>

          {/* Floating Tech Badges around Portrait */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[8%] left-[2%] z-20 px-3 py-2 rounded-lg border border-white/[0.08] bg-slate-900/60 backdrop-blur-md shadow-2xl flex items-center gap-1.5 pointer-events-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
            <span className="font-mono text-[9px] text-slate-200 tracking-wider font-extrabold uppercase">React</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[8%] left-[4%] z-20 px-3 py-2 rounded-lg border border-white/[0.08] bg-slate-900/60 backdrop-blur-md shadow-2xl flex items-center gap-1.5 pointer-events-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
            <span className="font-mono text-[9px] text-slate-200 tracking-wider font-extrabold uppercase">Node.js</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[18%] right-[2%] z-20 px-3 py-2 rounded-lg border border-white/[0.08] bg-slate-900/60 backdrop-blur-md shadow-2xl flex items-center gap-1.5 pointer-events-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span className="font-mono text-[9px] text-slate-200 tracking-wider font-extrabold uppercase">MongoDB</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-[16%] right-[2%] z-20 px-3 py-2 rounded-lg border border-white/[0.08] bg-slate-900/60 backdrop-blur-md shadow-2xl flex items-center gap-1.5 pointer-events-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
            <span className="font-mono text-[9px] text-slate-200 tracking-wider font-extrabold uppercase">Tailwind</span>
          </motion.div>

        </div>
      </div>

      {/* Bouncing Scroll Down Mouse Prompt */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center pointer-events-none z-10">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => scrollToSection("about")}
          className="w-6 h-10 rounded-full border border-slate-500/50 flex justify-center p-1.5 cursor-pointer pointer-events-auto bg-slate-900/20 backdrop-blur-[1px] hover:border-cyan-400 transition-colors"
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </div>

    </section>
  );
}
