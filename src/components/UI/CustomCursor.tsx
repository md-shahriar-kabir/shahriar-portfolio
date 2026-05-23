"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const dotCursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [click, setClick] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if the system has pointing capabilities (no touch only)
    const mediaQuery = window.matchMedia("(any-hover: hover)");
    setIsMobile(!mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const mainCursor = mainCursorRef.current;
    const dotCursor = dotCursorRef.current;
    if (!mainCursor || !dotCursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let mainX = -100;
    let mainY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instantly position the center sharp dot
      dotCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const render = () => {
      // Interpolate coordinates for standard smooth outer ring lag
      const ease = 0.15;
      mainX += (mouseX - mainX) * ease;
      mainY += (mouseY - mainY) * ease;

      if (mainCursor) {
        mainCursor.style.transform = `translate3d(${mainX - 18}px, ${mainY - 18}px, 0)`;
      }
      
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    const animId = requestAnimationFrame(render);

    const onMouseDown = () => setClick(true);
    const onMouseUp = () => setClick(false);

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Event listeners to detect clickables
    const addHoverEvents = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, .project-card, .btn-cursor-grow"
      );

      interactives.forEach((el) => {
        // Remove existing listener to avoid duplicates
        const handleEnter = () => {
          setHovered(true);
          if (el.classList.contains("project-card")) {
            setCursorText("VIEW");
          }
        };
        const handleLeave = () => {
          setHovered(false);
          setCursorText("");
        };
        
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    // Monitor DOM for new dynamic links/buttons and bind hover reactions
    addHoverEvents();
    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={mainCursorRef}
        className={`fixed top-0 left-0 w-9 h-9 border border-cyan-400 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out flex items-center justify-center ${
          hovered 
            ? "w-16 h-16 bg-cyan-400/10 border-purple-500 scale-100 shadow-[0_0_20px_rgba(168,85,247,0.5)] bg-slate-950/20 backdrop-blur-[1px]" 
            : ""
        } ${click ? "scale-75 border-cyan-300" : ""}`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          willChange: "transform",
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-black tracking-widest text-cyan-300 animate-pulse select-none">
            {cursorText}
          </span>
        )}
      </div>
      
      {/* Inner Dot */}
      <div
        ref={dotCursorRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 transition-transform duration-75 ${
          hovered ? "scale-0" : ""
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          willChange: "transform",
          marginLeft: "-4px",
          marginTop: "-4px",
        }}
      />
    </>
  );
}
