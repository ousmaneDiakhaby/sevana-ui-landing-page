import Header from "@/components/site-header";
import Pricing from "@/components/features/pricing/content";
import PricingComparator from "@/components/features/pricing/comparator";
import FooterSection from "@/components/site-footer";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <Pricing />
        <PricingComparator />
      </main>
      <FooterSection />
    </>
    );
}