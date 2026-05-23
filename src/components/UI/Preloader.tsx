"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "INITIALIZING SHAHRIAR OS v15.2...",
  "ESTABLISHING SECURE SOCKET TUNNEL...",
  "CONNECTING MONGODB DATABASE SYSTEMS...",
  "ACTIVATING NODE EXPRESS REST ENGINE...",
  "LOADING REACT HYBRID ARCHITECTURES...",
  "CONFIGURING TAILWIND STYLING TOKENS...",
  "OPTIMIZING LENIS INERTIA SCROLL MODULES...",
  "MOUNTING GSAP HIGH-FIDELITY TRIGGERS...",
  "COMPILING PORTFOLIO ASSETS SECURELY...",
  "SYSTEM ONLINE. LAUNCHING WORKSPACE."
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable scrolling when preloader is mounting
    document.body.style.overflow = "hidden";

    let progressInterval: NodeJS.Timeout;
    let logIndex = 0;

    // Simulate steady progress compilation
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        const step = Math.floor(Math.random() * 8) + 2; // increments of 2 to 10
        const nextVal = Math.min(100, prev + step);

        // Update logs depending on progress ranges
        const currentSegment = Math.min(
          BOOT_LOGS.length - 1,
          Math.floor((nextVal / 100) * BOOT_LOGS.length)
        );
        setCurrentLog(BOOT_LOGS[currentSegment]);

        if (nextVal === 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsFinished(true);
            // Unlock scrolling once fully loaded
            document.body.style.overflow = "unset";
          }, 600);
        }
        return nextVal;
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100vh", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-[#030014] z-[9999] flex flex-col items-center justify-center px-4 font-mono select-none"
        >
          {/* Cyberpunk Ambient Lighting */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-purple-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-cyan-600/10 rounded-full blur-[120px]" />
          </div>

          <div className="w-full max-w-xl flex flex-col relative z-10">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between border border-white/10 bg-slate-950/80 px-4 py-2.5 rounded-t-lg backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase">
                mdsk-system-boot.log
              </span>
            </div>

            {/* Terminal Body */}
            <div className="border border-t-0 border-white/10 bg-black/60 px-6 py-8 rounded-b-lg backdrop-blur-xl min-h-[180px] flex flex-col justify-between shadow-2xl relative">
              <div className="space-y-3">
                <div className="flex items-center text-cyan-400 text-xs gap-2">
                  <span className="animate-pulse">❯</span>
                  <span>{currentLog}</span>
                </div>
                <div className="text-[10px] text-slate-500 flex flex-col gap-1 overflow-hidden h-[60px] justify-end border-l border-white/5 pl-3">
                  <div className="opacity-40">System Core Frequency: 4.80 GHz</div>
                  <div className="opacity-60">Protocols Loaded: HTTP/3, WebSockets, gRPC</div>
                  <div className="opacity-80">Render Architecture: Vercel Serverless Edge</div>
                </div>
              </div>

              {/* Progress and Indicator */}
              <div className="mt-8 space-y-2">
                <div className="flex justify-between items-end text-xs">
                  <span className="text-purple-400 font-semibold tracking-widest text-[10px]">
                    LOADING CORES
                  </span>
                  <span className="text-cyan-400 font-black tracking-tighter text-sm">
                    {progress}%
                  </span>
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
                    style={{ width: `${progress}%` }}
                    layoutId="loaderBar"
                  />
                  {/* Glowing Spotlight overlay */}
                  <div 
                    className="absolute top-0 bottom-0 bg-white/30 blur-[2px] animate-pulse"
                    style={{ left: `${Math.max(0, progress - 15)}%`, width: "15%" }}
                  />
                </div>
              </div>
            </div>

            {/* Technical Subtexts */}
            <div className="text-[10px] text-slate-600 flex justify-between mt-3 px-1 uppercase tracking-widest">
              <span>Baud: 115200</span>
              <span>Host: MD_SHAHRIAR_KABIR</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
