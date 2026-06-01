"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Activity } from "lucide-react";

const projects = [
  {
    name: "threat-intel-agent",
    tagline: "AI-powered threat intelligence pipeline",
    description:
      "Autonomous LangGraph agent that ingests the CISA Known Exploited Vulnerabilities feed, analyzes CVEs with Google Gemini, and generates Markdown threat reports committed automatically every day via GitHub Actions.",
    stack: ["Python", "LangGraph", "Gemini API", "Pydantic", "GitHub Actions"],
    github: "https://github.com/AbelRodriguez97/threat-intel-agent",
    live: null,
    status: "In production",
    highlights: [
      "ReAct agent with 3 custom tools and per-run caching",
      "Client-side rate-limit throttling for the Gemini free tier",
      "15 unit tests + daily CI/CD pipeline",
    ],
  },
  {
    name: "on-call-ai-responder",
    tagline: "AI incident response agent",
    description:
      "FastAPI service that receives production alerts via webhook, retrieves relevant playbook context through semantic search (RAG over Qdrant), analyzes the incident with Gemini, and notifies the on-call team on Slack when escalation is required.",
    stack: ["Python", "FastAPI", "Qdrant", "Gemini", "Docker", "Slack API"],
    github: "https://github.com/AbelRodriguez97/on-call-ai-responder",
    live: null,
    status: "Complete",
    highlights: [
      "RAG pipeline with Qdrant vector store",
      "Automatic Slack notifications via Block Kit on escalation",
      "24 tests, Dockerized, GitHub Actions CI",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-sm text-[#10b981] mb-2">
          {">"} ls projects/
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#10b981]">
            projects
          </span>
        </h2>
      </motion.div>

      {/* Project cards */}
      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative bg-[#111111] border border-[#1e293b] rounded-xl p-6 md:p-8 hover:border-[#3b82f6] transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-white font-mono">
                    {project.name}
                  </h3>
                  {project.status === "In production" && (
                    <span className="flex items-center gap-1 text-xs font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded">
                      <Activity size={12} />
                      {project.status}
                    </span>
                  )}
                  {project.status === "Complete" && (
                    <span className="text-xs font-mono text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-1 rounded">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-[#94a3b8] text-sm">{project.tagline}</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono px-3 py-2 border border-[#1e293b] text-[#94a3b8] rounded hover:border-[#3b82f6] hover:text-white transition-all"
                >
                  <Code size={14} />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono px-3 py-2 bg-[#3b82f6] text-white rounded hover:bg-[#2563eb] transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
              </div>
            </div>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-[#94a3b8]"
                >
                  <span className="text-[#10b981] mt-1">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 bg-[#0a0a0a] border border-[#1e293b] text-[#94a3b8] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all on GitHub */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/AbelRodriguez97"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-[#94a3b8] hover:text-white transition-colors"
        >
          <Code size={16} />
          View all repositories on GitHub
          <ExternalLink size={14} />
        </a>
      </motion.div>
    </section>
  );
}