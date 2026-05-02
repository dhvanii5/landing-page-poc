"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Library, Network, FileText } from "lucide-react";

export function PlatformDemo() {
  const pills = [
    { icon: <Library className="w-4 h-4 text-primary" />, label: "Agent Library" },
    { icon: <Network className="w-4 h-4 text-primary" />, label: "Workflow Designer" },
    { icon: <FileText className="w-4 h-4 text-primary" />, label: "Document Builder" }
  ];

  return (
    <AnimatedSection className="py-24 bg-background relative border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-muted mb-4">The Platform</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Everything You Need to Build AI Agents</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Dashboard Mockup Frame */}
          <div className="rounded-xl border border-border bg-surface shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Window header */}
            <div className="h-12 bg-background border-b border-border flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-border/50"></div>
                <div className="w-3 h-3 rounded-full bg-border/50"></div>
                <div className="w-3 h-3 rounded-full bg-border/50"></div>
              </div>
              <div className="mx-auto bg-surface border border-border/50 rounded-md px-32 py-1 text-xs text-muted/50 font-mono hidden sm:block">
                ailab.ai/dashboard
              </div>
            </div>
            {/* Dashboard Content Placeholder */}
            <div className="aspect-video bg-surface relative overflow-hidden flex flex-col">
              {/* Sidebar and Main content mockup */}
              <div className="flex flex-1">
                <div className="w-48 border-r border-border/50 p-4 hidden md:flex flex-col gap-3">
                  <div className="h-4 bg-border/40 rounded w-full"></div>
                  <div className="h-4 bg-border/20 rounded w-3/4"></div>
                  <div className="h-4 bg-border/20 rounded w-5/6"></div>
                  <div className="h-4 bg-border/20 rounded w-full mt-4"></div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="h-8 bg-border/30 rounded w-1/4 mb-4"></div>
                  <div className="flex gap-4">
                    {/* Box 1: Agent */}
                    <div className="h-32 bg-background border border-border/50 rounded-lg flex-1 p-4 flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-primary" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="h-1.5 bg-border/40 rounded-full w-full" />
                          <div className="h-1.5 bg-border/20 rounded-full w-2/3" />
                        </div>
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-0.5 rounded w-fit">Agent</div>
                    </div>
                    
                    {/* Box 2: Workflow */}
                    <div className="h-32 bg-background border border-border/50 rounded-lg flex-1 p-4 flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="w-6 h-6 rounded bg-secondary/20 flex items-center justify-center">
                          <div className="w-3 h-3 bg-secondary rounded-sm rotate-45" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="h-1.5 bg-border/40 rounded-full w-4/5" />
                          <div className="h-1.5 bg-border/20 rounded-full w-full" />
                        </div>
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-secondary/80 bg-secondary/10 px-2 py-0.5 rounded w-fit">Workflow</div>
                    </div>

                    {/* Box 3: Document */}
                    <div className="h-32 bg-background border border-border/50 rounded-lg flex-1 p-4 flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="w-6 h-6 rounded bg-success/20 flex items-center justify-center">
                          <div className="w-3.5 h-3.5 bg-success rounded-[2px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="h-1.5 bg-border/40 rounded-full w-3/4" />
                          <div className="h-1.5 bg-border/20 rounded-full w-1/2" />
                        </div>
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-success/80 bg-success/10 px-2 py-0.5 rounded w-fit">Document</div>
                    </div>
                  </div>
                  <div className="h-48 bg-background border border-border/50 rounded-lg w-full mt-4 flex items-center justify-center relative overflow-hidden">
                    {/* Abstract node-graph mockup */}
                    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 600 300">
                      <g className="stroke-border/30" strokeWidth="1">
                        <line x1="200" y1="150" x2="300" y2="100" />
                        <line x1="200" y1="150" x2="300" y2="200" />
                        <line x1="300" y1="100" x2="400" y2="150" />
                        <line x1="300" y1="200" x2="400" y2="150" />
                        <line x1="300" y1="100" x2="300" y2="200" />
                      </g>
                      <circle cx="200" cy="150" r="4" className="fill-primary" />
                      <circle cx="300" cy="100" r="4" className="fill-secondary" />
                      <circle cx="300" cy="200" r="4" className="fill-success" />
                      <circle cx="400" cy="150" r="4" className="fill-primary" />
                      <circle cx="300" cy="150" r="2" className="fill-white/20" />
                    </svg>

                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 to-transparent"></div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 relative z-10 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                      <Network className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {pills.map((pill, index) => (
              <div key={index} className="flex items-center gap-2 bg-surface border border-border rounded-full px-5 py-2 hover:border-primary/50 transition-colors shadow-sm">
                {pill.icon}
                <span className="text-sm font-medium text-foreground">{pill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
