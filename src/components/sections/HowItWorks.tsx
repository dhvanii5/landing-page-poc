"use client";

import { motion } from "framer-motion";
import { Search, Map, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Value Discovery",
    description:
      "We analyze your business processes to identify high-impact areas where AI can drive measurable value and efficiency.",
  },
  {
    icon: Map,
    title: "Opportunity Mapping",
    description:
      "Together, we design a strategic roadmap and architecture tailored strictly to your proprietary data and security requirements.",
  },
  {
    icon: Zap,
    title: "Implementation",
    description:
      "Rapid deployment of your custom AI engine with built-in governance, scaling seamlessly from prototype to enterprise-wide adoption.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="eyebrow">The Process</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#E8EDF8" }}>
            From Idea to AI Impact in 3 Steps
          </h2>
        </motion.div>

        <div className="relative">
          {/* Dashed connecting line */}
          <div
            className="hidden md:block absolute top-[3.5rem] left-[18%] right-[18%] h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(232,184,75,0.25) 0, rgba(232,184,75,0.25) 6px, transparent 6px, transparent 14px)",
            }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} variants={cardVariant} className="premium-card p-8 text-center group">
                  {/* Icon */}
                  <div className="card-icon-wrap mx-auto mb-5">
                    <Icon className="w-5 h-5" style={{ color: "#E8B84B" }} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: "#E8EDF8" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8B9AB0" }}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Testimonial pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto text-center text-lg italic leading-relaxed"
          style={{
            color: "#8B9AB0",
            borderTop: "1px solid rgba(232,184,75,0.2)",
            paddingTop: "2rem",
          }}
        >
          &quot;It helped us align our business pain points into focused initiatives with measurable outcomes.&quot;
        </motion.blockquote>
      </div>
    </section>
  );
}
