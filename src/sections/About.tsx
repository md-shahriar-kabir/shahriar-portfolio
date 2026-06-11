"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Gamepad, BookOpen, GraduationCap, Sparkles, User, Award, ShieldAlert, SparkleIcon } from "lucide-react";

export default function About() {
  const { story, hobbies } = portfolioData.about;

  // Map icon strings to Lucide React icons
  const getIcon = (name: string) => {
    switch (name) {
      case "Gamepad":
        return <Gamepad className="w-5 h-5 text-cyan-400 animate-pulse" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      case "Github":
        return (
          <svg className="w-5 h-5 text-indigo-400 animate-spin-slow" style={{ animationDuration: "15s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        );
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-pink-400" />;
      default:
        return <SparkleIcon className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden px-6 sm:px-12 z-10 border-t border-white/[0.03]"
    >
      {/* Background Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] bg-purple-950/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[30%] left-[-10%] w-[35vw] h-[35vw] bg-cyan-950/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-mono tracking-widest text-purple-400 font-extrabold uppercase"
          >
            <User className="w-3.5 h-3.5" />
            <span>01 • Core Core File</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase"
          >
            Decoding <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">My Journey</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-purple-500" />
              
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>The Story of MD Shahriar Kabir</span>
              </h3>

              <div className="space-y-4 text-slate-350 text-sm leading-relaxed font-medium">
                {story.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Highlights & Hobbies Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Metrics Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { count: "2+", label: "Years Freelancing", glow: "text-cyan-400" },
                { count: "20+", label: "Projects Completed", glow: "text-purple-400" },
                { count: "99%", label: "Client Satisfaction", glow: "text-pink-400" },
                { count: "24/7", label: "System Dev Activity", glow: "text-emerald-400" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-panel rounded-xl p-5 flex flex-col items-center justify-center text-center group cursor-pointer border border-white/[0.04] bg-white/[0.005] hover:scale-105"
                >
                  <span className={`text-3xl font-black tracking-tight ${stat.glow} transition-transform duration-500 group-hover:scale-110 mb-1 font-mono`}>
                    {stat.count}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Hobbies Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 text-left"
            >
              <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-4">
                {/* <Sparkles className="w-5 h-5 text-purple-400" /> */}
                <span>Interests & Tech Hobbies</span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="relative flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.005] hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(hobby.icon)}
                    </div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-slate-350 group-hover:text-cyan-300 transition-colors">
                      {hobby.name}
                    </span>
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
