import Header from "@/components/site-header"
import HeroSection from "@/components/features/landing/hero-section"
import PartnersSection from "@/components/features/landing/partners-section"
import Features from "@/components/features/landing/features-section"
import FooterSection from "@/components/site-footer";
import Testimonials from "@/components/features/landing/testimonials-section";
import CallToAction from "@/components/features/landing/call-to-action";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <FooterSection />
    </>
  )
}
