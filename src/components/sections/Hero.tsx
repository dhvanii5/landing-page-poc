"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, Database, Cog, Lightbulb, Sparkles, ArrowRight, ArrowDown } from "lucide-react";
import { useRef, useState } from "react";

export function Hero() {
  const headline = "Unleash AI to Transform Business Potential into Impact".split(" ");
  
  // Parallax effect
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);

  // Cursor Follow effect for Button
  const btnRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const floatingCards = [
    { icon: <Database className="w-4 h-4 text-primary" />, title: "Input Data", delay: 0 },
    { icon: <Cog className="w-4 h-4 text-primary" />, title: "Processing", delay: 0.2 },
    { icon: <Sparkles className="w-4 h-4 text-primary" />, title: "AI Output", delay: 0.4 },
    { icon: <Lightbulb className="w-4 h-4 text-secondary" />, title: "Insights Generated", delay: 0.6 },
  ];

  return (
    <AnimatedSection className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 noise-bg bg-hero-gradient"
      />

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge variant="outline" className="rounded-full px-4 py-1.5 border-border bg-surface/50 backdrop-blur-sm text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-success mr-2 inline-block animate-pulse"></span>
            GDPR-First AI Engine
          </Badge>
        </motion.div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-balance leading-tight">
          {headline.map((word, idx) => {
            const isHighlight = word === "Transform" || word === "Impact";
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.5 }}
                className={`inline-block mr-[0.3em] ${
                  isHighlight 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary animate-text-shimmer" 
                    : "text-foreground"
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-lg md:text-xl text-muted max-w-2xl mb-10"
        >
          Build your own proprietary AI — trained on your data, secured by design.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button 
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
            size="lg" 
            className="relative overflow-hidden bg-primary text-primary-foreground font-semibold h-12 px-8 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:scale-[1.03] transition-all duration-300 group"
          >
            {/* Cursor Follow Glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.25) 0%, transparent 60%)`
              }}
            />
            <span className="relative z-10">Start Building</span>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 rounded-lg border-border hover:bg-white/5 transition-all text-foreground hover:scale-[1.03]">
            Watch Demo
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 opacity-80 mb-8"
        >
          {['GDPR', 'ISO27001', 'SOC2', 'DSGVO', 'Enterprise Ready'].map((badge) => (
            <div key={badge} className="flex items-center text-xs md:text-sm font-medium text-muted bg-surface/30 border border-border/50 rounded-full px-3 py-1.5 backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-success mr-1.5" />
              {badge}
            </div>
          ))}
        </motion.div>

        {/* Connected AI Pipeline Flow */}
        <div className="relative w-full max-w-5xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
          {floatingCards.map((card, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -4, 0],
                }}
                transition={{ 
                  opacity: { delay: 1.5 + card.delay, duration: 0.5 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }
                }}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border border-border/50 bg-surface/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:border-primary/50 transition-all pointer-events-auto group ${idx === 3 ? 'border-secondary/20' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 ${idx === 3 ? 'bg-secondary/10' : 'bg-primary/10'}`}>
                  {card.icon}
                </div>
                <span className="text-sm font-medium text-foreground/90 whitespace-nowrap">{card.title}</span>
              </motion.div>
              
              {idx < floatingCards.length - 1 && (
                <div className="relative flex items-center justify-center px-2 py-3 md:px-4 md:py-0 text-muted/30">
                  <ArrowRight className="hidden md:block w-5 h-5" />
                  <ArrowDown className="md:hidden w-5 h-5" />
                  
                  {/* Flow Animation Dot */}
                  <motion.div
                    animate={{ 
                      x: [-10, 10], 
                      opacity: [0, 1, 0] 
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: 1.5 + (idx * 0.5),
                      ease: "easeInOut"
                    }}
                    className="absolute hidden md:block w-1.5 h-1.5 rounded-full bg-primary/40 blur-[1px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </AnimatedSection>
  );
}
