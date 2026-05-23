"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, ShieldCheck, ArrowRight } from "lucide-react";

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden px-6 sm:px-12 z-10 border-t border-white/[0.03]"
    >
      {/* Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[30%] left-[-15%] w-[35vw] h-[35vw] bg-cyan-950/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[30%] right-[-15%] w-[35vw] h-[35vw] bg-purple-950/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-mono tracking-widest text-cyan-400 font-extrabold uppercase"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 • Professional Log</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase"
          >
            Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Milestones</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </div>

        {/* Experience List Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              key={exp.company}
              className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group cursor-pointer border border-white/[0.04]"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Corner Glowing lights */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-750" />

              {/* Experience Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-5 mb-5 relative z-10">
                <div className="space-y-1">
                  <h3 className="text-xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <span>{exp.role}</span>
                  </h3>
                  <div className="text-xs uppercase font-extrabold tracking-widest text-slate-350 flex items-center gap-1.5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-mono font-black">{exp.company}</span>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="self-start md:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-mono tracking-wider font-extrabold text-purple-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3.5 relative z-10 text-left mb-6">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Tag Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/5 relative z-10">
                <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 font-extrabold flex items-center gap-1">
                  <span>SYSTEM_LOAD:</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 rounded-md border border-white/5 bg-slate-950/60 text-slate-300 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
