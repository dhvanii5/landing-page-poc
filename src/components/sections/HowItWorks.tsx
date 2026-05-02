"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Map, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Value Discovery",
      description: "We analyze your business processes to identify high-impact areas where AI can drive measurable value and efficiency."
    },
    {
      icon: <Map className="w-6 h-6 text-primary" />,
      title: "Opportunity Mapping",
      description: "Together, we design a strategic roadmap and architecture tailored strictly to your proprietary data and security requirements."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Implementation",
      description: "Rapid deployment of your custom AI engine with built-in governance, scaling seamlessly from prototype to enterprise-wide adoption."
    }
  ];

  return (
    <AnimatedSection id="how-it-works" className="py-24 relative border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-muted mb-4">The Process</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">From Idea to AI Impact in 3 Steps</h2>
        </div>

        <div className="relative">
          {/* Dashed connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] border-t border-dashed border-border/60 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card key={index} className="bg-surface border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:scale-[1.02] rounded-xl overflow-hidden group">
                <CardHeader className="pt-8 pb-4 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                    {step.icon}
                  </div>
                  <CardTitle className="font-heading text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted px-6 pb-8">
                  <p className="leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl font-serif italic text-muted-foreground border-l-2 border-primary/50 pl-6 py-2 text-left md:text-center md:border-l-0 md:border-t-2 md:pt-6 md:px-0">
            &quot;It helped us align our business pain points into focused initiatives with measurable outcomes.&quot;
          </blockquote>
        </div>
      </div>
    </AnimatedSection>
  );
}
