"use client";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 text-center md:text-left">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="font-heading font-bold text-2xl tracking-tight text-foreground">AI LAB</span>
            <p className="text-sm text-muted max-w-xs">
              GDPR-first enterprise AI platform. Build your own proprietary AI.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-heading font-semibold text-foreground">Navigation</h4>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">How It Works</a>
              <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">Features</a>
              <a href="#use-cases" className="text-sm text-muted hover:text-foreground transition-colors">Use Cases</a>
              <a href="#contact" className="text-sm text-muted hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center md:items-start md:items-end gap-4">
            <h4 className="font-heading font-semibold text-foreground">Powered by ScaleTech</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all text-xs font-semibold">
                X
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all text-xs font-semibold">
                IN
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all text-xs font-semibold">
                GH
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} AI Lab. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
