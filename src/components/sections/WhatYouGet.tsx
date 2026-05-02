"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function WhatYouGet() {
  const platformAccess = [
    "Secure AI Infrastructure",
    "Pre-built Agent Library",
    "Drag & Drop Workflow Builder",
    "Role-based Access Control",
    "Enterprise Audit Logs"
  ];

  const useCases = [
    "Business Process Automation",
    "Digital Twin Creation",
    "Intelligent Quotation Builder",
    "Multi-Agent Orchestration",
    "Knowledge Base Search"
  ];

  const mentorshipSteps = [
    { title: "Learn", desc: "Understand the core mechanics of AI agents." },
    { title: "Apply", desc: "Build your first workflow with our guidance." },
    { title: "Support", desc: "Ongoing expert support to scale solutions." }
  ];

  return (
    <AnimatedSection id="use-cases" className="py-24 bg-surface/20 relative border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-muted mb-4">What&apos;s Included</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">One Platform. Three Superpowers.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-6xl mx-auto rounded-xl border border-border bg-background overflow-hidden">
          
          {/* Column 1 */}
          <div className="p-8 md:p-10">
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">Platform Access</h3>
            <ul className="space-y-4">
              {platformAccess.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-border"></div>

          {/* Column 2 */}
          <div className="p-8 md:p-10 md:border-l-0 border-t md:border-t-0 border-border">
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">Possible Use Cases</h3>
            <ul className="space-y-4">
              {useCases.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2"></div>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-border"></div>

          {/* Column 3 */}
          <div className="p-8 md:p-10 md:border-l-0 border-t md:border-t-0 border-border bg-surface/30">
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">Mentorship Model</h3>
            <div className="space-y-6">
              {mentorshipSteps.map((step, i) => (
                <div key={i} className="relative flex gap-4">
                  {i !== mentorshipSteps.length - 1 && (
                    <div className="absolute left-4 top-8 bottom-[-16px] w-[2px] bg-border/50"></div>
                  )}
                  <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0 z-10 font-heading text-sm font-semibold text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                    <p className="text-sm text-muted mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Explore Mentorship <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
        </div>
      </div>
    </AnimatedSection>
  );
}
