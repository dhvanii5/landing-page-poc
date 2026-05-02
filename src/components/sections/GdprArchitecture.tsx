"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

export function GdprArchitecture() {
  const layers = [
    { name: "Application Layer", color: "bg-primary/20 border-primary/50 text-foreground" },
    { name: "Manipulation Layer", color: "bg-surface border-border text-muted" },
    { name: "AI Intelligence Layer", color: "bg-surface border-border text-muted" },
    { name: "Infrastructure Layer", color: "bg-background border-border text-muted" },
  ];

  const bullets = [
    {
      title: "Built-in Governance",
      desc: "Comprehensive audit trails and granular access control."
    },
    {
      title: "Decentralised Control",
      desc: "Deployed in your cloud, completely governed by your rules."
    },
    {
      title: "Enterprise Needs Compliance",
      desc: "Fully GDPR, DSGVO, and ISO compliant architecture."
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-surface/30 relative border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:text-center">
          <span className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-success mb-4 inline-block">Built for Compliance</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Privacy by Design. Control by Architecture.</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Side: Animated Diagram */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4 relative">
            {/* Connecting vertical line */}
            <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-border/50 z-0 hidden sm:block"></div>
            
            {layers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                className={`relative z-10 p-5 md:p-6 rounded-xl border ${layer.color} backdrop-blur-sm flex items-center justify-between group hover:border-primary/50 transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-primary' : 'bg-muted/50 group-hover:bg-primary/50'} transition-colors`}></div>
                  <span className="font-heading font-semibold text-lg md:text-xl tracking-tight">{layer.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Bullet points */}
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            {bullets.map((bullet, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-1">{bullet.title}</h4>
                  <p className="text-muted leading-relaxed">{bullet.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
