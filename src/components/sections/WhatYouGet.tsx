"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const platformAccess = [
  "Secure AI Infrastructure",
  "Pre-built Agent Library",
  "Drag & Drop Workflow Builder",
  "Role-based Access Control",
  "Enterprise Audit Logs",
];

const useCases = [
  "Business Process Automation",
  "Digital Twin Creation",
  "Intelligent Quotation Builder",
  "Multi-Agent Orchestration",
  "Knowledge Base Search",
];

const mentorshipSteps = [
  { title: "Learn", desc: "Understand the core mechanics of AI agents." },
  { title: "Apply", desc: "Build your first workflow with our guidance." },
  { title: "Support", desc: "Ongoing expert support to scale solutions." },
];

const col: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function WhatYouGet() {
  return (
    <section
      id="use-cases"
      className="py-24 relative"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="eyebrow">What&apos;s Included</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#E8EDF8" }}>
            One Platform. Three Superpowers.
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden max-w-6xl mx-auto"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            background: "#0A0F1E",
          }}
        >
          {/* Column 1 */}
          <motion.div
            variants={col}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="p-8 md:p-10"
            style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h3 className="font-heading text-lg font-semibold mb-6" style={{ color: "#E8EDF8" }}>
              Platform Access
            </h3>
            <ul className="space-y-4">
              {platformAccess.map((txt, i) => (
                <motion.li key={i} variants={item} className="flex items-start gap-3 text-sm" style={{ color: "#8B9AB0" }}>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#E8B84B" }} />
                  {txt}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            variants={col}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="p-8 md:p-10 border-t md:border-t-0"
            style={{ borderColor: "rgba(255,255,255,0.06)", borderRight: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h3 className="font-heading text-lg font-semibold mb-6" style={{ color: "#E8EDF8" }}>
              Possible Use Cases
            </h3>
            <ul className="space-y-4">
              {useCases.map((txt, i) => (
                <motion.li key={i} variants={item} className="flex items-start gap-3 text-sm" style={{ color: "#8B9AB0" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#E8B84B" }} />
                  {txt}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            variants={col}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="p-8 md:p-10 border-t md:border-t-0"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <h3 className="font-heading text-lg font-semibold mb-6" style={{ color: "#E8EDF8" }}>
              Mentorship Model
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-4 top-5 bottom-8 w-px" style={{ background: "rgba(255,255,255,0.07)" }} />
              {mentorshipSteps.map((s, i) => (
                <motion.div key={i} variants={item} className="flex gap-4 relative z-10">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-xs"
                    style={{
                      background: "#060912",
                      border: "1px solid rgba(232,184,75,0.35)",
                      color: "#E8B84B",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <div className="font-semibold text-sm mb-0.5" style={{ color: "#E8EDF8" }}>{s.title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: "#8B9AB0" }}>{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              className="mt-8 ml-12 flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#E8B84B" }}
            >
              Explore Mentorship
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
