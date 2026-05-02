"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">AI LAB</span>
          <span className="text-xs text-muted font-medium hidden sm:inline-block">by ScaleTech</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-sm font-medium text-muted hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Features</a>
          <a href="#use-cases" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Use Cases</a>
          <a href="#contact" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Contact</a>
        </div>

        <div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg shadow-[0_0_10px_rgba(99,102,241,0.2)] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-[1.03] transition-all duration-300">
            Get Access
          </Button>
        </div>
      </div>
    </nav>
  );
}
