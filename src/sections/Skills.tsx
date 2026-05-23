"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData, Skill } from "@/data/portfolioData";
import { ShieldCheck, Laptop, Cpu, Database, Key, Settings, Sparkles } from "lucide-react";

export default function Skills() {
  const categories = portfolioData.skillCategories;
  const [activeCategory, setActiveCategory] = useState("Frontend");

  // Collect all skills for the infinite scrolling marquee
  const allSkills = categories.flatMap((cat) => cat.skills);
  // Duplicate skills list to guarantee seamless loop scrolling in marquee
  const marqueeSkills = [...allSkills, ...allSkills, ...allSkills];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Laptop className="w-4 h-4" />;
      case "Backend":
        return <Cpu className="w-4 h-4" />;
      case "Database":
        return <Database className="w-4 h-4" />;
      case "Authentication":
        return <Key className="w-4 h-4" />;
      default:
        return <Settings className="w-4 h-4" />;
    }
  };

  // Core skills to display in circular SVG indicators
  const coreSkills = allSkills.filter(s => 
    ["React", "Next.js", "Node.js", "MongoDB"].includes(s.name)
  );

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden px-6 sm:px-12 z-10 border-t border-white/[0.03]"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-cyan-950/10 rounded-full blur-[130px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[-15%] w-[40vw] h-[40vw] bg-purple-950/10 rounded-full blur-[130px] animate-pulse-slow" />
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>02 • Core Technologies</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Weaponry</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </div>

        {/* 1. Infinite Horizontal Marquee Carousel */}
        <div className="relative w-full overflow-hidden py-4 border-y border-white/[0.04] bg-slate-950/40 backdrop-blur-sm -mx-6 sm:-mx-12 px-6 sm:px-12 select-none">
          {/* Glass masks to fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee gap-8 items-center py-2">
            {marqueeSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-white/[0.05] bg-slate-900/30 backdrop-blur-md shadow-lg"
              >
                <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br ${skill.color} shadow-lg`} />
                <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-slate-350">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Core Circular Indicators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {coreSkills.map((skill, index) => {
            // Circle calculations for SVG
            const r = 36;
            const circ = 2 * Math.PI * r;
            const strokeDashoffset = circ - (skill.level / 100) * circ;

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={skill.name}
                className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center relative group"
              >
                {/* SVG Circular Progress Bar */}
                <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r={r}
                      className="stroke-white/5 stroke-[4.5] fill-none"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r={r}
                      className="stroke-cyan-400 stroke-[4.5] fill-none"
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: circ }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      style={{ strokeDasharray: circ }}
                    />
                  </svg>
                  <span className="absolute font-mono text-sm font-black text-white">
                    {skill.level}%
                  </span>
                </div>
                
                <span className="font-mono text-xs uppercase font-black tracking-widest text-slate-300">
                  {skill.name}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold mt-0.5">
                  Core Engine
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* 3. Categorized Details Grid and Interactive Tab Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          
          {/* Left Category Selection Panel (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-left text-[9px] uppercase font-mono tracking-widest text-slate-500 font-bold border-b border-white/5 pb-2.5 pl-1 mb-2">
              Select Category Node
            </span>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.category;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer border text-left ${
                    isActive
                      ? "border-cyan-400/40 bg-gradient-to-r from-cyan-400/10 to-purple-500/5 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                      : "border-white/[0.04] bg-white/[0.005] text-slate-400 hover:border-white/10 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${isActive ? "bg-cyan-500/10 text-cyan-400" : "bg-white/5 text-slate-500"}`}>
                      {getCategoryIcon(cat.category)}
                    </div>
                    <span>{cat.category}</span>
                  </div>
                  <span className={`text-[9px] font-mono font-black border px-2 py-0.5 rounded-full ${isActive ? "border-cyan-400/20 bg-cyan-400/10" : "border-white/10 text-slate-500"}`}>
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Selected Category Skills List (8 cols) */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 min-h-[340px]"
            >
              <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-4">
                <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                <span>{activeCategory} Architecture Stack</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories
                  .find((cat) => cat.category === activeCategory)
                  ?.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-xl border border-white/[0.03] bg-white/[0.002] hover:border-cyan-500/20 transition-all hover:bg-slate-900/30 group"
                    >
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-slate-200 group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Horizontal progress bar */}
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
