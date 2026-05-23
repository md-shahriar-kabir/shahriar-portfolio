import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { ArrowLeft, ExternalLink, Terminal, CheckCircle, Cpu, AlertTriangle, ShieldCheck, Activity, Award } from "lucide-react";

interface ProjectDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsProps) {
  const { id } = await params;
  
  // Find project by matching url key params
  const project = portfolioData.projects.find((proj) => proj.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-24 relative select-none">
      {/* Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-950/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] left-0 w-[50vw] h-[50vw] bg-cyan-950/10 rounded-full blur-[140px]" />
      </div>

      {/* 1. Cinematic Banner Image Display */}
      <div className="h-[40vh] sm:h-[50vh] relative flex items-end overflow-hidden border-b border-white/5">
        <div className={`absolute inset-0 ${project.image}`} />
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent" />
        
        {/* Scanning laser visual */}
        <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)] z-10 bottom-0 animate-pulse" />

        {/* Back navigation button overlay */}
        <div className="absolute top-8 left-6 sm:left-12 z-20">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-slate-950/70 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-105 transition-all shadow-2xl"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>
        </div>

        {/* Banner Details */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 pb-10 relative z-10 text-left">
          <div className="space-y-3">
            {/* Tech badges row */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-950/80 border border-white/10 text-[9px] font-mono tracking-widest font-black text-cyan-400 uppercase shadow-2xl">
              <Terminal className="w-3.5 h-3.5" />
              <span>Specification::Module_{project.id}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* 2. Content Split Section Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Columns (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            
            {/* Project Overview */}
            <section className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-black tracking-tight text-white uppercase flex items-center gap-2 border-b border-white/5 pb-4">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span>Product Overview</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium">
                {project.description}
              </p>
            </section>

            {/* Core Features */}
            <section className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-black tracking-tight text-white uppercase flex items-center gap-2 border-b border-white/5 pb-4">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>Feature Operations</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-white/[0.03] bg-white/[0.002] flex gap-3 hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400 mt-0.5">
                      <span className="font-mono text-[9px] font-black">{index + 1}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Challenges */}
            <section className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-black tracking-tight text-white uppercase flex items-center gap-2 border-b border-white/5 pb-4">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <span>Engineering Bottlenecks</span>
              </h2>
              <div className="p-5 rounded-xl border border-rose-500/10 bg-rose-500/5 relative overflow-hidden flex gap-4">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500/50" />
                <div className="space-y-2">
                  <span className="text-[9px] font-mono tracking-widest font-extrabold text-rose-400 uppercase">
                    Alert Code: RUNTIME_LIMITATIONS
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {project.challenges}
                  </p>
                </div>
              </div>
            </section>

            {/* Future Roadmaps */}
            <section className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-black tracking-tight text-white uppercase flex items-center gap-2 border-b border-white/5 pb-4">
                <Cpu className="w-5 h-5 text-pink-400" />
                <span>Pipeline Roadmaps</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.improvements.map((imp, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-white/[0.03] bg-white/[0.002] flex items-center gap-3.5 hover:border-purple-500/20 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    <span className="text-xs text-slate-350 font-semibold leading-relaxed">
                      {imp}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Screen Visual Mock Showcase */}
            <section className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-black tracking-tight text-white uppercase flex items-center gap-2 border-b border-white/5 pb-4">
                <Award className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span>Telemetry Visual Screens</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.gallery.map((gradient, index) => (
                  <div
                    key={index}
                    className={`h-40 rounded-xl ${gradient} border border-white/5 relative overflow-hidden flex items-center justify-center group cursor-pointer shadow-lg`}
                  >
                    <div className="absolute inset-0 bg-slate-950/20 opacity-100 group-hover:opacity-0 transition-opacity" />
                    <span className="font-mono text-[9px] text-white/50 tracking-wider font-extrabold uppercase bg-slate-950/80 px-2 py-1 rounded border border-white/10 shadow-2xl">
                      Screen_0{index + 1}.log
                    </span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sticky spec details sidebar (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6 text-left">
            
            <div className="glass-panel rounded-2xl p-6 space-y-6 border border-white/[0.04]">
              <h3 className="text-sm font-black tracking-widest text-white uppercase border-b border-white/5 pb-3">
                Telemetry Metrics
              </h3>

              {/* Stats dashboard */}
              <div className="space-y-4">
                {[
                  { label: "Pipeline Status", val: "DEPLOYED", glow: "text-emerald-400 font-extrabold" },
                  { label: "Dev Duration", val: "4-6 Weeks", glow: "text-slate-300" },
                  { label: "Core Architect", val: "Shahriar Kabir", glow: "text-slate-300" },
                  { label: "System Host", val: "Vercel / Firebase", glow: "text-slate-350" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs border-b border-white/[0.03] pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-500 font-bold uppercase tracking-wider font-mono text-[9px]">{item.label}</span>
                    <span className={`font-mono font-semibold ${item.glow}`}>{item.val}</span>
                  </div>
                ))}
              </div>

              {/* Specs Stack Badges */}
              <div className="space-y-2 border-t border-white/5 pt-5">
                <span className="text-slate-500 font-bold uppercase tracking-wider font-mono text-[9px] block mb-2">Deployed Cores</span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 rounded bg-slate-950 border border-white/5 text-slate-300 hover:border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Action Row */}
              <div className="space-y-3 pt-5 border-t border-white/5">
                {/* Live Demonstration */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-lg bg-gradient-cyber hover:scale-103 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2 text-slate-950 font-black text-xs uppercase tracking-widest btn-cyber"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demonstration</span>
                </a>

                {/* Git Source */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-lg border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 hover:scale-103 transition-all cursor-pointer flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-widest"
                >
                  <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>Git Source Repository</span>
                </a>
              </div>

            </div>

            {/* Spec subtext */}
            <div className="glass-panel rounded-2xl p-4.5 flex items-center gap-3 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center border border-white/10 text-cyan-400 shrink-0">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[8px] font-mono font-bold tracking-widest text-slate-500 uppercase block">Verification Security</span>
                <span className="text-[10px] font-bold text-slate-350">Secure and Code-Compliant Specs Verified</span>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
