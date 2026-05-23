"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "space" | "neon";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("space");

  useEffect(() => {
    const savedTheme = localStorage.getItem("shahriar-theme") as Theme;
    if (savedTheme === "space" || savedTheme === "neon") {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "space" ? "neon" : "space";
    setTheme(newTheme);
    localStorage.setItem("shahriar-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme} min-h-screen text-slate-100 bg-[#030014] selection:bg-purple-500/30 selection:text-cyan-300 relative overflow-x-hidden transition-colors duration-1000`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
