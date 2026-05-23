"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, CheckCircle, ShieldAlert } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // Custom alert Toast state
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all core credentials.", "error");
      return;
    }

    // Simulate API boot log and submission
    console.log("Transmission sent:", formData);
    showToast("Transmission received! System will respond shortly.", "success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden px-6 sm:px-12 z-10 border-t border-white/[0.03]"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[40%] left-[-10%] w-[35vw] h-[35vw] bg-purple-950/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-cyan-950/10 rounded-full blur-[130px]" />
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
            <Send className="w-3.5 h-3.5" />
            <span>06 • Uplink Terminal</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase"
          >
            Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Secure Uplink</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-black tracking-tight text-white uppercase">
                  Let’s Build <span className="text-cyan-400">Something Epic</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                  Have an innovative product concept, a freelance request, or just want to discuss MERN development architectures? Feel free to establish a secure transmission!
                </p>
              </div>

              {/* Channels Grid */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Mail,
                    label: "Secure Mail",
                    val: "shahriar.bizwork@gmail.com",
                    link: "mailto:shahriar.bizwork@example.com",
                    border: "hover:border-cyan-500/30 text-cyan-400"
                  },
                  {
                    icon: Phone,
                    label: "Voice Channel",
                    val: "+880 1824704775",
                    link: "tel:+8801824704775",
                    border: "hover:border-purple-500/30 text-purple-400"
                  },
                  {
                    icon: MessageSquare,
                    label: "Instant WhatsApp",
                    val: "+880 1824704775",
                    link: "https://wa.me/8801824704775",
                    border: "hover:border-pink-500/30 text-pink-400"
                  }
                ].map((channel, idx) => {
                  const IconComp = channel.icon;
                  return (
                    <a
                      key={idx}
                      href={channel.link}
                      className={`glass-panel rounded-2xl p-4 sm:p-5 flex items-center gap-4 border border-white/[0.04] bg-white/[0.002] transition-all duration-300 cursor-pointer ${channel.border} group`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold block">
                          {channel.label}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors font-semibold">
                          {channel.val}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form Console (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Decorative cyber corner lines */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-cyan-400/30 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-cyan-400/30 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-cyan-400/30 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-cyan-400/30 pointer-events-none" />

              <h3 className="text-lg font-bold tracking-tight text-white mb-6 border-b border-white/5 pb-4 text-left uppercase flex items-center gap-2">
                <Send className="w-4.5 h-4.5 text-purple-400 animate-pulse" />
                <span>Console Transmission Form</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3.5 rounded-lg border bg-slate-950/60 font-medium text-xs sm:text-sm text-white placeholder-transparent focus:outline-none transition-all ${
                        focusedField === "name"
                          ? "border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                          : "border-white/10 hover:border-white/20"
                      }`}
                      placeholder="Name"
                    />
                    <label
                      className={`absolute left-4 pointer-events-none transition-all duration-300 font-bold uppercase tracking-wider text-[9px] ${
                        focusedField === "name" || formData.name
                          ? "-top-2.5 bg-[#030014] px-1.5 text-cyan-400 font-extrabold"
                          : "top-4 text-slate-500"
                      }`}
                    >
                      Name Key
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3.5 rounded-lg border bg-slate-950/60 font-medium text-xs sm:text-sm text-white placeholder-transparent focus:outline-none transition-all ${
                        focusedField === "email"
                          ? "border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                          : "border-white/10 hover:border-white/20"
                      }`}
                      placeholder="Email"
                    />
                    <label
                      className={`absolute left-4 pointer-events-none transition-all duration-300 font-bold uppercase tracking-wider text-[9px] ${
                        focusedField === "email" || formData.email
                          ? "-top-2.5 bg-[#030014] px-1.5 text-cyan-400 font-extrabold"
                          : "top-4 text-slate-500"
                      }`}
                    >
                      Email Target
                    </label>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 rounded-lg border bg-slate-950/60 font-medium text-xs sm:text-sm text-white placeholder-transparent focus:outline-none transition-all ${
                      focusedField === "subject"
                        ? "border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                        : "border-white/10 hover:border-white/20"
                    }`}
                    placeholder="Subject"
                  />
                  <label
                    className={`absolute left-4 pointer-events-none transition-all duration-300 font-bold uppercase tracking-wider text-[9px] ${
                      focusedField === "subject" || formData.subject
                        ? "-top-2.5 bg-[#030014] px-1.5 text-purple-400 font-extrabold"
                        : "top-4 text-slate-500"
                    }`}
                  >
                    Subject Tag
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 rounded-lg border bg-slate-950/60 font-medium text-xs sm:text-sm text-white placeholder-transparent focus:outline-none transition-all ${
                      focusedField === "message"
                        ? "border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                        : "border-white/10 hover:border-white/20"
                    }`}
                    placeholder="Message"
                  />
                  <label
                    className={`absolute left-4 pointer-events-none transition-all duration-300 font-bold uppercase tracking-wider text-[9px] ${
                      focusedField === "message" || formData.message
                        ? "-top-2.5 bg-[#030014] px-1.5 text-cyan-400 font-extrabold"
                        : "top-4 text-slate-500"
                    }`}
                  >
                    Message Payload
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4.5 rounded-lg font-bold text-xs uppercase tracking-widest bg-gradient-cyber hover:scale-102 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2 text-slate-950 btn-cyber"
                >
                  <Send className="w-4.5 h-4.5" />
                  <span>Transmit Payload</span>
                </button>
              </form>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Futuristic Floating Toast Alerts System */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 z-[999] px-6 py-4.5 rounded-xl border backdrop-blur-md shadow-2xl flex items-center gap-3 font-mono text-xs select-none max-w-sm ${
              toast.type === "success"
                ? "border-emerald-500/30 bg-emerald-950/75 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                : "border-rose-500/30 bg-rose-950/75 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-5 h-5 shrink-0 animate-bounce" />
            ) : (
              <ShieldAlert className="w-5 h-5 shrink-0 animate-pulse" />
            )}
            <div className="space-y-0.5">
              <div className="font-extrabold uppercase tracking-widest text-[9px] opacity-65">
                {toast.type === "success" ? "System Notification" : "Security Alert"}
              </div>
              <p className="font-medium text-slate-200 leading-normal">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
