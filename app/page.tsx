import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { JourneySection } from "@/components/journey-section"
import { DetailedFeaturesSection } from "@/components/detailed-features-section"
import { BusinessModelSection } from "@/components/business-model-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { DemoModal } from "@/components/demo-modal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <JourneySection />
      <DetailedFeaturesSection />
      <BusinessModelSection />
      <FAQSection />
      <Footer />
      <CookieConsent />

      <div className="hidden">
        <DemoModal />
      </div>
    </main>
  )
}
