"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "abelrodr42malaga@gmail.com",
    href: "mailto:abelrodr42malaga@gmail.com",
    isCustom: false,
  },
  {
    label: "LinkedIn",
    value: "abel-rodriguez-gomez",
    href: "https://www.linkedin.com/in/abel-rodriguez-gomez-20a446132/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "AbelRodriguez97",
    href: "https://github.com/AbelRodriguez97",
    icon: "github",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "github") return <GithubIcon />;
  if (type === "linkedin") return <LinkedinIcon />;
  return <Mail size={20} />;
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-sm text-[#10b981] mb-2">
          {">"} ./contact-me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#10b981]">
            touch
          </span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: message */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-[#94a3b8] text-lg leading-relaxed">
            I'm currently{" "}
            <span className="text-[#10b981]">open to new opportunities</span> in
            AI engineering, security and backend development.
          </p>
          <p className="text-[#94a3b8] leading-relaxed">
            Whether you have a question, a role you think I'd be a good fit for,
            or just want to talk about LLMs and security — feel free to reach
            out. I'll get back to you as soon as I can.
          </p>
          <div className="flex items-center gap-2 text-[#475569] font-mono text-sm pt-4">
            <MapPin size={16} />
            Málaga, España · Open to remote &amp; hybrid
          </div>
        </motion.div>

        {/* Right: contact links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#111111] border border-[#1e293b] rounded-lg hover:border-[#3b82f6] transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#0a0a0a] rounded-lg text-[#3b82f6] group-hover:text-[#10b981] transition-colors">
                <ContactIcon type={link.icon} />
              </div>
              <div>
                <p className="font-mono text-xs text-[#475569]">{link.label}</p>
                <p className="text-white text-sm">{link.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}