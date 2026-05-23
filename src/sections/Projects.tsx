"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, ExternalLink, Info, ChevronRight } from "lucide-react";

export default function Projects() {
  const projects = portfolioData.projects;
  const router = useRouter();

  const handleDetailsClick = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden px-6 sm:px-12 z-10 border-t border-white/[0.03]"
    >
      {/* Background Lighting Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-15%] w-[40vw] h-[40vw] bg-purple-950/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-[20%] left-[-15%] w-[40vw] h-[40vw] bg-cyan-950/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-mono tracking-widest text-cyan-400 font-extrabold uppercase"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>05 • Compiled Modules</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase"
          >
            Premium Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Case Studies</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              key={proj.id}
              className="project-card glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer border border-white/[0.04] bg-white/[0.002] relative"
            >
              {/* Dynamic Project Display Image Banner */}
              <div className="h-48 relative overflow-hidden flex items-center justify-center select-none">
                {/* CSS gradient mock representation of project visual */}
                <div className={`absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 ${proj.image}`} />
                
                {/* Glowing neon mesh grid overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:12px_12px] opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Hologram icon in banner */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center text-cyan-400 shadow-2xl group-hover:rotate-6 transition-transform duration-300">
                  <Terminal className="w-6 h-6 animate-pulse" />
                </div>

                {/* Cyber badge overlay */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/80 border border-white/10 text-[8px] font-mono tracking-wider font-extrabold text-cyan-400 uppercase select-none shadow-2xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
                  <span>Module::{proj.id}</span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 flex flex-col flex-grow text-left relative z-10">
                
                {/* Title */}
                <h3 className="text-xl font-black tracking-tight text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h3>

                {/* Tech Badges Row */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[8px] uppercase font-mono tracking-widest font-black px-2 py-0.5 rounded border border-white/5 bg-slate-950/40 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.techStack.length > 4 && (
                    <span className="text-[8px] uppercase font-mono tracking-widest font-black px-2 py-0.5 rounded border border-white/5 bg-slate-950/40 text-purple-400">
                      +{proj.techStack.length - 4} More
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-medium line-clamp-3 mb-6">
                  {proj.shortDescription}
                </p>

              </div>

              {/* Action Buttons Row */}
              <div className="p-6 pt-0 border-t border-white/5 bg-slate-950/10 grid grid-cols-3 gap-2 relative z-10">
                {/* 1. Live link */}
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2.5 rounded-lg border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all text-[10px] font-bold tracking-widest uppercase text-slate-300 hover:text-cyan-400 text-center flex items-center justify-center gap-1 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live</span>
                </a>

                {/* 2. GitHub link */}
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2.5 rounded-lg border border-white/5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all text-[10px] font-bold tracking-widest uppercase text-slate-300 hover:text-purple-400 text-center flex items-center justify-center gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>Repo</span>
                </a>

                {/* 3. Details Button */}
                <button
                  onClick={() => handleDetailsClick(proj.id)}
                  className="px-2 py-2.5 rounded-lg bg-gradient-cyber text-slate-950 hover:scale-105 transition-all text-[10px] font-black tracking-widest uppercase text-center flex items-center justify-center gap-0.5 cursor-pointer"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
