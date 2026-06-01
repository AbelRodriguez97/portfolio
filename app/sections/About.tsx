"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Terminal, Users } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Security & IAM",
    description:
      "2+ years operating critical IAM platforms (SAP CDC, Keycloak) with 24x7 on-call incident response.",
  },
  {
    icon: Brain,
    title: "AI Engineering",
    description:
      "Building LLM-powered agents with LangGraph, Gemini and RAG pipelines applied to security operations.",
  },
  {
    icon: Terminal,
    title: "42 Málaga",
    description:
      "Peer-to-peer intensive programming school. C, algorithms, Linux, cybersecurity bootcamp.",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "Former esports competitor and team leader. DreamHack Sevilla 2018 champion.",
  },
];

const skills = [
  { category: "Languages", items: ["Python", "Java", "TypeScript", "C", "Bash", "SQL"] },
  { category: "AI / LLMs", items: ["LangChain", "LangGraph", "Gemini API", "Pydantic AI", "RAG"] },
  { category: "Security & IAM", items: ["SAP CDC", "Keycloak", "OAuth 2.0", "OIDC", "SAML"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub Actions", "Datadog", "Vercel"] },
  { category: "Backend", items: ["FastAPI", "Next.js", "REST APIs", "Qdrant", "ChromaDB"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-sm text-[#10b981] mb-2">{">"} cat about.md</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#10b981]">
            me
          </span>
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {/* Left: bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-[#94a3b8] leading-relaxed"
        >
          <p>
            I'm a Software Engineer at{" "}
            <span className="text-white font-medium">Accenture España</span>,
            based in Málaga. My day-to-day involves operating critical Identity
            & Access Management platforms, managing production incidents during
            24x7 on-call rotations, and building internal automation tools.
          </p>
          <p>
            Outside of work, I'm building{" "}
            <span className="text-[#3b82f6]">AI-powered security tools</span> —
            from autonomous threat intelligence agents to real-time incident
            responders that notify teams on Slack automatically.
          </p>
          <p>
            I trained at{" "}
            <span className="text-white font-medium">42 Málaga</span>, a
            peer-to-peer programming school known for its project-based,
            no-teacher methodology. That's where I learned to learn.
          </p>
          <p>
            Currently pursuing the{" "}
            <span className="text-[#10b981]">SC-300</span> (Microsoft Identity
            and Access Administrator) certification.
          </p>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 bg-[#111111] border border-[#1e293b] rounded-lg hover:border-[#3b82f6] transition-colors group"
              >
                <item.icon
                  size={18}
                  className="text-[#3b82f6] mb-2 group-hover:text-[#10b981] transition-colors"
                />
                <h3 className="text-white text-sm font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-[#64748b] text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="font-mono text-xs text-[#475569]">
            $ ls -la skills/
          </p>
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="font-mono text-xs text-[#3b82f6] mb-2">
                {group.category}/
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1 bg-[#111111] border border-[#1e293b] text-[#94a3b8] rounded hover:border-[#3b82f6] hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}