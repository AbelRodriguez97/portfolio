"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Software Engineer",
  "AI Security Builder",
  "Threat Intel Automation",
  "On-Call AI Systems",
  "IAM Specialist (in progress)",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];

    if (typing) {
      if (displayed.length < role.length) {
        const timeout = setTimeout(() => {
          setDisplayed(role.slice(0, displayed.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, currentRole]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 w-full"
      >
        {/* Terminal prompt */}
        <p className="font-mono text-sm text-[#10b981]">
          {">"} whoami
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Abel{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#10b981]">
            Rodriguez
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="font-mono text-xl md:text-2xl text-[#94a3b8] min-h-[2rem]">
          <span className="text-[#3b82f6]">~ </span>
          {displayed}
          <span className="animate-blink text-[#3b82f6]">|</span>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl text-[#94a3b8] text-lg md:text-xl leading-relaxed"
        >
          Software Engineer @ Accenture building AI-powered tools for{" "}
          <span className="text-white">security operations</span> and{" "}
          <span className="text-white">incident response</span>. Focused on
          the intersection of{" "}
          <span className="text-[#3b82f6]">LLMs</span>,{" "}
          <span className="text-[#10b981]">threat intelligence</span> and{" "}
          <span className="text-white">IAM</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#3b82f6] text-white font-mono text-sm rounded hover:bg-[#2563eb] transition-colors"
          >
            ./view-projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1e293b] text-[#94a3b8] font-mono text-sm rounded hover:border-[#3b82f6] hover:text-white transition-all"
          >
            ./contact-me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-6 pt-2"
        >
          <a
            href="https://github.com/AbelRodriguez97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/abel-rodriguez-gomez-20a446132/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:abelrodr42malaga@gmail.com"
            className="text-[#94a3b8] hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>

          <div className="h-px flex-1 bg-[#1e293b]" />

          <span className="font-mono text-xs text-[#475569] whitespace-nowrap">
            Málaga, España 🇪🇸
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-[#475569] hover:text-[#3b82f6] transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}