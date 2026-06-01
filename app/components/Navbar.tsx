"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1e293b]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-mono text-sm font-bold text-white hover:text-[#3b82f6] transition-colors"
        >
          <span className="text-[#10b981]">{">"}</span> abel.rodriguez
          <span className="animate-blink text-[#3b82f6]">_</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-[#94a3b8] hover:text-white transition-colors"
              >
                <span className="text-[#3b82f6]">./</span>
                {link.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="/Abel_Rodriguez_CV.pdf"
          target="_blank"
          className="hidden md:block font-mono text-xs px-4 py-2 border border-[#3b82f6] text-[#3b82f6] rounded hover:bg-[#3b82f6] hover:text-white transition-all duration-200"
        >
          resume.pdf
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#1e293b] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm text-[#94a3b8] hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-[#3b82f6]">./</span>
                  {link.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}