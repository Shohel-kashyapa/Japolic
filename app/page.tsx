import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { TrustedTeams } from "@/components/TrustedTeams";
import { UseCases } from "@/components/UseCases";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Social Proof */}
        <SocialProof />

        {/* 4. System Architecture Diagram */}
        <ArchitectureDiagram />

        {/* 5. Trusted by Teams */}
        <TrustedTeams />

        {/* 6. Use Case / Value */}
        <UseCases />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
