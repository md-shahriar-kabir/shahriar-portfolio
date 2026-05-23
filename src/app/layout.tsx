import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import our custom global providers
import { ThemeProvider } from "@/providers/ThemeProvider";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

// Import core visual components
import CustomCursor from "@/components/UI/CustomCursor";
import Preloader from "@/components/UI/Preloader";
import ParticleBackground from "@/components/Canvas/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Premium SEO configuration
export const metadata: Metadata = {
  title: "MD Shahriar Kabir | Futuristic MERN Stack Developer Portfolio",
  description: "Explore MD Shahriar Kabir's cinematic, ultra-modern developer portfolio. Masters in Next.js 15, React, Node.js, Express, MongoDB, and high-performance UX animations.",
  keywords: [
    "MD Shahriar Kabir", "MERN Stack Developer", "Next.js Developer", "React Developer",
    "Web Developer Portfolio", "Full Stack Developer Portfolio", "GSAP Website",
    "Framer Motion", "Lenis Smooth Scroll", "Cyberpunk Web Design"
  ],
  authors: [{ name: "MD Shahriar Kabir", url: "https://github.com/shahriar-kabir" }],
  creator: "MD Shahriar Kabir",
  themeColor: "#030014",
  openGraph: {
    title: "MD Shahriar Kabir | MERN Stack Developer",
    description: "Futuristic, cinematic developer portfolio featuring Next.js 15, Tailwind, GSAP, and Framer Motion.",
    url: "https://github.com/shahriar-kabir",
    siteName: "MD Shahriar Kabir Portfolio",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden antialiased bg-[#030014] text-slate-100 selection:bg-purple-500/30 selection:text-cyan-300">
        <ThemeProvider>
          <SmoothScrollProvider>
            {/* Cinematic loading boot sequence */}
            <Preloader />

            {/* Custom interactive mouse tracking pointer cursor */}
            <CustomCursor />

            {/* High-performance canvas particle filament background */}
            <ParticleBackground />

            {/* Scroll progress bar - visual accent indicator at top */}
            <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-[45] origin-left scale-x-0 transition-transform duration-75" id="scrollProgress" />

            {/* Root layouts children content */}
            <div className="relative z-10 w-full flex flex-col flex-grow">
              {children}
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
