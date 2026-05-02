import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ValueProp } from "@/components/sections/ValueProp";
import { GdprArchitecture } from "@/components/sections/GdprArchitecture";
import { PlatformDemo } from "@/components/sections/PlatformDemo";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { IdeationPartner } from "@/components/sections/IdeationPartner";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <ValueProp />
      <GdprArchitecture />
      <PlatformDemo />
      <WhatYouGet />
      <IdeationPartner />
      <FinalCta />
      <Footer />
    </main>
  );
}
