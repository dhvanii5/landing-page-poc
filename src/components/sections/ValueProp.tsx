"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Lock, Scaling } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Your Own Proprietary Solution",
    description:
      "Not just another generic LLM wrapper. Build a custom asset that belongs entirely to your organization.",
  },
  {
    icon: Cpu,
    title: "AI Engine Driven",
    description:
      "Fine-tuned specifically on your business data to understand your unique domain, terminology, and processes.",
  },
  {
    icon: Lock,
    title: "Your Data, Your Security",
    description:
      "GDPR-first architecture ensures your data never leaks to third parties. Complete privacy by design.",
  },
  {
    icon: Scaling,
    title: "Extensible & Scalable",
    description:
      "Start solving specific problems with one team, then scale the platform securely across your entire enterprise.",
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

export function ValueProp() {
  return (
    <section
      id="features"
      className="py-24 relative"
      style={{ background: "#060912", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="eyebrow">Why AI Lab</span>
          <h2
            className="font-heading text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#E8EDF8" }}
          >
            Your Data. Your Control.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i} variants={cardVariant} className="premium-card p-8">
                <div className="card-icon-wrap">
                  <Icon className="w-5 h-5" style={{ color: "#E8B84B" }} />
                </div>
                <h3
                  className="font-heading text-xl font-semibold mb-3"
                  style={{ color: "#E8EDF8" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B9AB0" }}>
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
