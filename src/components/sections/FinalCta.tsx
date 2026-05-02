"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export function FinalCta() {
  return (
    <AnimatedSection id="contact" className="py-24 relative border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="relative rounded-2xl bg-surface border border-border p-10 md:p-16 text-center overflow-hidden">
          {/* Edge glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Let&apos;s Make AI Accessible for Everyone
            </h2>
            <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto">
              Book a free consultation with our team.
            </p>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 md:px-12 rounded-xl text-lg shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] hover:scale-[1.03] transition-all duration-300 mb-12">
              Book Free Consultation
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50 text-muted text-sm font-medium">
              <a href="mailto:rakesh@scaletech.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                rakesh@scaletech.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
