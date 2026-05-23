"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export default function Education() {
  const education = portfolioData.education;

  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden px-6 sm:px-12 z-10 border-t border-white/[0.03]"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] bg-purple-950/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] bg-cyan-950/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-mono tracking-widest text-purple-400 font-extrabold uppercase"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>03 • Academic Ledger</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase"
          >
            Academic & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Training Credentials</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </div>

        {/* Vertical Pipeline Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center Connector Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.3)]" />

          {/* Timeline Entries */}
          <div className="space-y-12">
            {education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={edu.institution}
                  className="relative flex flex-col md:flex-row items-start md:justify-between group"
                >
                  {/* Timeline Glowing Node Dot */}
                  <div className="absolute left-[9px] md:left-1/2 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-cyan-400 -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_12px_rgba(6,182,212,0.8)] group-hover:border-purple-500 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>

                  {/* Alternating layout spacings */}
                  {/* Left Column Spacer / Node Container */}
                  <div className={`w-full md:w-[45%] ${isEven ? "md:order-1 md:text-right" : "md:order-2 md:text-left"} pl-12 md:pl-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                      className="glass-panel rounded-2xl p-6 sm:p-7 relative overflow-hidden"
                    >
                      {/* Ambient edge highlight */}
                      <div className={`absolute top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-purple-500 ${isEven ? "right-0" : "left-0"}`} />

                      <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"} gap-2`}>
                        {/* Calendar Badge */}
                        <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider font-extrabold text-cyan-400 bg-cyan-500/5 px-2.5 py-1 rounded-full border border-cyan-500/15">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{edu.year}</span>
                        </div>

                        {/* Institution Name */}
                        <h3 className="text-lg font-black tracking-tight text-white mt-1 group-hover:text-cyan-300 transition-colors">
                          {edu.institution}
                        </h3>

                        {/* Degree Title */}
                        <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-350 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-purple-400" />
                          <span>{edu.degree}</span>
                        </h4>

                        {/* Description */}
                        <p className={`text-xs text-slate-400 leading-relaxed mt-2.5 ${isEven ? "md:text-right" : "md:text-left"}`}>
                          {edu.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column on opposite side for desktop layout */}
                  <div className="hidden md:block w-[45%] md:order-2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
