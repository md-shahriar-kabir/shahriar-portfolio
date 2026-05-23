"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId: number;
    
    // Track mouse coordinates for repulsion
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120, // repulsion radius
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Calibrate density depending on viewport scale
      const quantity = Math.floor((canvas.width * canvas.height) / 11000);
      const activeCount = Math.min(100, Math.max(35, quantity)); // clamp quantity for standard performance

      for (let i = 0; i < activeCount; i++) {
        const radius = Math.random() * 1.5 + 0.8;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4, // subtle floating speeds
          vy: (Math.random() - 0.5) * 0.4,
          radius: radius,
          baseRadius: radius,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Run setup initially
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render nodes
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundary limits
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse repulsion physics
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          // Repel particle away from mouse cursor
          p.x += Math.cos(angle) * force * 1.5;
          p.y += Math.sin(angle) * force * 1.5;
          p.radius = p.baseRadius * (1 + force * 1.2); // grow particle on approach
        } else {
          // Slowly contract to base scale
          if (p.radius > p.baseRadius) {
            p.radius -= 0.05;
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Dynamic node gradient based on distance to center mouse
        if (dist < mouse.radius) {
          ctx.fillStyle = `rgba(34, 211, 238, ${0.4 + (1 - dist / mouse.radius) * 0.4})`; // cyan glow
        } else {
          ctx.fillStyle = "rgba(168, 85, 247, 0.25)"; // soft violet
        }
        ctx.fill();
      });

      // Render web connection filaments
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Threshold for filaments
          const filamentMax = 110;
          if (dist < filamentMax) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Filament alpha proportional to proximity distance
            const alpha = (1 - dist / filamentMax) * 0.08;
            
            // Check if mouse is hovering close to filaments
            const mDist1 = Math.sqrt((p1.x - mouse.x) ** 2 + (p1.y - mouse.y) ** 2);
            if (mDist1 < mouse.radius) {
              ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 2})`; // cyan filament
            } else {
              ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`; // purple filament
            }
            
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-60"
    />
  );
}
