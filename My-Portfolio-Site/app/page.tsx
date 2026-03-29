import { TopNav } from "@/components/top-nav"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { MethodologySection } from "@/components/sections/methodology-section"
import { ProofSection } from "@/components/sections/proof-section"
import { StatsSection } from "@/components/sections/stats-section"
import { ImpactSection } from "@/components/sections/impact-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <TopNav />
      <div className="flex min-h-screen pt-16">
        <Sidebar />
        <main className="flex-1 bg-[#0a0c10] min-h-screen relative overflow-x-hidden lg:ml-0">
          <div className="w-full">
            <HeroSection />
            <MethodologySection />
            <ProofSection />
            <StatsSection />
            <ImpactSection />
            <CTASection />
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}
