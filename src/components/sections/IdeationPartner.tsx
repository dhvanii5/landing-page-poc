"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MessageSquare, Bot, ArrowRight } from "lucide-react";

export function IdeationPartner() {
  const steps = [
    {
      title: "Share what you want to build",
      desc: "Describe your business challenge or workflow idea in plain text."
    },
    {
      title: "Get a ready setup, created automatically by AI",
      desc: "AI Lab generates the architecture, agents, and data connectors for you."
    },
    {
      title: "Use and improve — refine to fit your needs",
      desc: "Test the generated solution, tweak the parameters, and deploy instantly."
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-background relative border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-secondary mb-4">Smart Add-On</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Your Ideation & Sparring Partner</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Side: Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl border border-border bg-surface shadow-2xl overflow-hidden relative">
              <div className="h-10 bg-background border-b border-border flex items-center px-4">
                <span className="text-xs font-semibold text-muted">AI Lab Copilot</span>
              </div>
              <div className="p-4 flex flex-col gap-4 h-[320px] bg-surface/50">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-background border border-border rounded-lg rounded-tl-none p-3 text-sm text-foreground shadow-sm">
                    I need an AI agent to extract data from vendor invoices and sync it to our ERP.
                  </div>
                </div>
                
                <div className="flex gap-3 self-end flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg rounded-tr-none p-3 text-sm text-foreground shadow-sm">
                    <p className="mb-2">I&apos;ve designed an automated workflow for this:</p>
                    <div className="bg-background rounded p-2 text-xs text-muted flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      Invoice Data Extractor (Ready to test)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Flow */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-8 relative">
              {/* Connecting line */}
              <div className="absolute left-5 top-5 bottom-5 w-[2px] bg-border/50 hidden sm:block"></div>
              
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-surface border border-secondary/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(245,197,24,0.15)] text-secondary font-heading font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-10 ml-0 sm:ml-16 flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-border hover:border-secondary/50 hover:bg-surface/80 transition-colors text-foreground font-medium text-sm group">
              Try the Copilot <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
