"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Cpu, Lock, Scaling } from "lucide-react";

export function ValueProp() {
  const features = [
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: "Your Own Proprietary Solution",
      description: "Not just another generic LLM wrapper. Build a custom asset that belongs entirely to your organization."
    },
    {
      icon: <Cpu className="w-5 h-5 text-primary" />,
      title: "AI Engine Driven",
      description: "Fine-tuned specifically on your business data to understand your unique domain, terminology, and processes."
    },
    {
      icon: <Lock className="w-5 h-5 text-primary" />,
      title: "Your Data, Your Security",
      description: "GDPR-first architecture ensures your data never leaks to third parties. Complete privacy by design."
    },
    {
      icon: <Scaling className="w-5 h-5 text-primary" />,
      title: "Extensible & Scalable",
      description: "Start solving specific problems with one team, then scale the platform securely across your entire enterprise."
    }
  ];

  return (
    <AnimatedSection id="features" className="py-24 bg-background relative border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-muted mb-4">Why AI Lab</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Your Data. Your Control.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-surface border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:scale-[1.02] rounded-xl overflow-hidden text-left">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted">
                <p className="leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
