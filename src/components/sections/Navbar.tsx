"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#060912]/85 backdrop-blur-[20px] border-b border-white/10" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className={`container mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-[14px]' : 'py-5'}`}>
        <div className="flex items-center gap-2.5">
          {/* Logo Icon */}
          <div className="w-5 h-5 rounded-[5px] bg-gradient-to-br from-[#6366F1] to-[#818CF8] flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z" />
            </svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-bold text-2xl tracking-tight text-foreground">AI LAB</span>
            <span className="text-sm text-muted font-medium hidden sm:inline-block">by ScaleTech</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="relative text-base font-medium text-muted hover:text-white transition-colors duration-150 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-[2px] bg-[#E8B84B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>
          ))}
        </div>

        <div>
          <Button className="bg-[#E8B84B] hover:bg-[#F0C96A] text-[#0A0E1A] text-base font-semibold rounded-[8px] px-6 py-2.5 h-auto shadow-none hover:shadow-[0_0_16px_rgba(232,184,75,0.35)] transition-all duration-200">
            Get Access
          </Button>
        </div>
      </div>
    </nav>
  );
}
