"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function SocialProof() {
  const testimonials = [
    {
      quote: "AI Lab enabled us to deploy a secure, custom AI engine in weeks, entirely on our own infrastructure.",
      name: "Sarah Jenkins",
      role: "CTO, TechCorp SaaS"
    },
    {
      quote: "The only platform that satisfied our strict GDPR requirements without compromising on AI capabilities.",
      name: "Michael Chen",
      role: "Head of Engineering, FinTrust"
    }
  ];

  return (
    <AnimatedSection className="py-20 border-t border-border/10 relative z-10 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-sm font-medium text-muted uppercase tracking-widest mb-8">
            Trusted by teams building AI-first companies
          </p>
          
          {/* Grayscale Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
            {/* Plain text placeholder logos for modern aesthetic */}
            <div className="text-xl font-bold font-heading text-muted/60 hover:text-foreground/90 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">ACME Corp</div>
            <div className="text-xl font-bold font-heading text-muted/60 hover:text-foreground/90 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">Globex</div>
            <div className="text-xl font-bold font-heading text-muted/60 hover:text-foreground/90 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">Soylent</div>
            <div className="text-xl font-bold font-heading text-muted/60 hover:text-foreground/90 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">Initech</div>
            <div className="text-xl font-bold font-heading text-muted/60 hover:text-foreground/90 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">Umbrella</div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] rounded-xl relative overflow-hidden group text-left">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />
                <p className="text-foreground/90 text-lg leading-relaxed mb-6 font-medium">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
